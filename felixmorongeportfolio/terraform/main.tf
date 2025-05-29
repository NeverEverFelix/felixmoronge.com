# Fetch EKS cluster metadata (no region here, it's set in provider block)
data "aws_eks_cluster" "cluster" {
  name = "felix-eks-cluster"
}

# Get EKS cluster authentication token
data "aws_eks_cluster_auth" "cluster" {
  name = "felix-eks-cluster"
}

# ✅ FIXED: Correct nested list access for oidc.issuer
locals {
  oidc_url = data.aws_eks_cluster.cluster.identity[0].oidc[0].issuer
}

# Fetch IAM OIDC provider
data "aws_iam_openid_connect_provider" "oidc" {
  url = local.oidc_url
}

# IRSA role for EBS CSI driver
resource "aws_iam_role" "ebs_csi_role" {
  name = "ec2-ebs-csi-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [{
      Effect = "Allow",
      Principal = {
        Federated = data.aws_iam_openid_connect_provider.oidc.arn
      },
      Action = "sts:AssumeRoleWithWebIdentity",
      Condition = {
        StringEquals = {
          "${replace(local.oidc_url, "https://", "")}:sub" = "system:serviceaccount:kube-system:ebs-csi-controller-sa"
        }
      }
    }]
  })
}

# EBS CSI driver IAM policy
resource "aws_iam_policy" "ebs_csi_policy" {
  name        = "ebs-csi-policy"
  description = "Allows EBS CSI driver to interact with EBS volumes"
  policy      = file("${path.module}/ebs_csi_policy.json")
}

# Attach policy to EBS CSI role
resource "aws_iam_role_policy_attachment" "ebs_csi_attach" {
  role       = aws_iam_role.ebs_csi_role.name
  policy_arn = aws_iam_policy.ebs_csi_policy.arn
}

# EKS node group IAM role
resource "aws_iam_role" "eks_node_group_role" {
  name = "eks-node-group-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [{
      Effect = "Allow",
      Principal = {
        Service = "ec2.amazonaws.com"
      },
      Action = "sts:AssumeRole"
    }]
  })
}

# Attach necessary policies to node role with dependency fix
resource "aws_iam_role_policy_attachment" "eks_node_worker" {
  role       = aws_iam_role.eks_node_group_role.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy"

  depends_on = [aws_iam_role.eks_node_group_role]
}

resource "aws_iam_role_policy_attachment" "eks_node_cni" {
  role       = aws_iam_role.eks_node_group_role.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy"

  depends_on = [aws_iam_role.eks_node_group_role]
}

resource "aws_iam_role_policy_attachment" "eks_node_ecr" {
  role       = aws_iam_role.eks_node_group_role.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly"

  depends_on = [aws_iam_role.eks_node_group_role]
}
resource "aws_iam_user" "eks_admin" {
  name = "eks_admin"
}

resource "aws_iam_access_key" "eks_admin_key" {
  user = aws_iam_user.eks_admin.name
}

resource "aws_iam_user_policy_attachment" "eks_cluster_policy" {
  user       = aws_iam_user.eks_admin.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy"
}

output "eks_admin_access_key_id" {
  value     = aws_iam_access_key.eks_admin_key.id
  sensitive = true
}

output "eks_admin_secret_access_key" {
  value     = aws_iam_access_key.eks_admin_key.secret
  sensitive = true
}