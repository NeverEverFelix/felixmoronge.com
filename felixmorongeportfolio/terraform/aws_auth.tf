data "aws_eks_cluster" "cluster" {
  name = module.eks.cluster_name
}

data "aws_eks_cluster_auth" "cluster" {
  name = module.eks.cluster_name
}

resource "kubernetes_config_map" "aws_auth" {
  metadata {
    name      = "aws-auth"
    namespace = "kube-system"
  }

  data = {
    mapRoles = yamlencode([
      {
        rolearn  = module.eks.eks_managed_node_groups["default_node_group"].iam_role_arn
        username = "system:node:{{EC2PrivateDNSName}}"
        groups   = [
          "system:bootstrappers",
          "system:nodes"
        ]
      }
    ])

    mapUsers = yamlencode([
      {
        userarn  = "arn:aws:iam::${data.aws_caller_identity.current.account_id}:user/terraform-admin"
        username = "terraform-admin"
        groups   = ["system:masters"]
      }
    ])
  }

  depends_on = [
    module.eks
  ]
}
