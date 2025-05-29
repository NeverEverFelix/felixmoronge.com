resource "kubernetes_storage_class_v1" "ebs_sc" {
  metadata {
    name = "ebs-sc"
    annotations = {
      "storageclass.kubernetes.io/is-default-class" = "true"
    }
  }

  storage_provisioner = "ebs.csi.aws.com"
  reclaim_policy      = "Delete"
  volume_binding_mode = "WaitForFirstConsumer"

  parameters = {
    type      = "gp3"
    fsType    = "ext4"
    encrypted = "true" # Recommended for production
  }

  # ✅ Waits for EKS cluster + EBS CSI Helm release to succeed
  depends_on = [
    data.aws_eks_cluster.cluster,
    helm_release.ebs_csi_driver
  ]
}

