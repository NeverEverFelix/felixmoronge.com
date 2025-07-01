module "eks" {
  source          = "terraform-aws-modules/eks/aws"
  version         = "19.21.0"

  cluster_name    = "felix-eks-cluster-v2"
  cluster_version = "1.29"

  vpc_id     = module.vpc.vpc_id
  subnet_ids = module.vpc.private_subnets

  enable_irsa                    = true
  cluster_endpoint_public_access = true
  manage_aws_auth_configmap = false

  eks_managed_node_groups = {
    default_node_group = {
      name           = "devops-node-group"
      instance_types = ["t3.medium"]
      desired_size   = 1
      min_size       = 1
      max_size       = 2
      iam_role_arn   = aws_iam_role.eks_node_group_role.arn
    }
  }

  tags = {
    Environment = "dev"
    Project     = "felix-devops"
  }
}
