resource "kubernetes_service_account" "ebs_csi_sa" {
  metadata {
    name      = "ebs-csi-controller-sa"
    namespace = "kube-system"
    annotations = {
      "eks.amazonaws.com/role-arn" = aws_iam_role.ebs_csi_role.arn
    }
  }

  depends_on = [
    data.aws_eks_cluster.cluster,
    aws_iam_role.ebs_csi_role,
    aws_iam_role_policy_attachment.ebs_csi_attach
  ]
}

resource "helm_release" "ebs_csi_driver" {
  name       = "aws-ebs-csi-driver"
  namespace  = "kube-system"
  repository = "https://kubernetes-sigs.github.io/aws-ebs-csi-driver"
  chart      = "aws-ebs-csi-driver"
  version    = "2.31.0"

  create_namespace = false

  set {
    name  = "controller.serviceAccount.create"
    value = "false"
  }

  set {
    name  = "controller.serviceAccount.name"
    value = "ebs-csi-controller-sa"
  }

  set {
    name  = "controller.replicaCount"
    value = "2"
  }

  set {
    name  = "enableVolumeScheduling"
    value = "true"
  }

  set {
    name  = "enableVolumeResizing"
    value = "true"
  }

  set {
    name  = "enableVolumeSnapshot"
    value = "true"
  }

  # 🛡️ Prevent controller from going into Pending state
  set {
    name  = "controller.nodeSelector.eks\\.amazonaws\\.com/nodegroup"
    value = "devops-node-group-20250529212344454300000014"
  }

  set {
    name  = "controller.tolerations[0].key"
    value = "CriticalAddonsOnly"
  }

  set {
    name  = "controller.tolerations[0].operator"
    value = "Exists"
  }
  set {
  name  = "controller.serviceAccount.name"
  value = "jenkins-irsa-sa"
}


  timeout         = 600
  wait            = true
  wait_for_jobs   = true

  depends_on = [
    data.aws_eks_cluster.cluster,
    aws_iam_role.ebs_csi_role,
    aws_iam_role_policy_attachment.ebs_csi_attach,
    kubernetes_service_account.ebs_csi_sa
  ]
}
