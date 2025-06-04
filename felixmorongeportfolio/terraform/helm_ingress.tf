resource "helm_release" "nginx_ingress" {
  name       = "nginx-ingress"
  namespace  = "ingress-nginx"
  repository = "https://kubernetes.github.io/ingress-nginx"
  chart      = "ingress-nginx"
  version    = "4.10.1"

  create_namespace = true
  wait             = true
  timeout          = 600

  force_update     = false
  reuse_values     = true

  set {
    name  = "controller.publishService.enabled"
    value = "true"
  }

  set {
    name  = "controller.service.type"
    value = "LoadBalancer"
  }

  set {
    name  = "controller.ingressClassResource.enabled"
    value = "true"
  }

  set {
    name  = "controller.ingressClassResource.name"
    value = "nginx"
  }

  set {
    name  = "controller.ingressClassByName"
    value = "true"
  }

  set {
    name  = "controller.extraArgs.v"
    value = "2"
  }

  set {
    name  = "controller.config.ssl-redirect"
    value = "true"
  }

  set {
    name  = "controller.service.annotations.service\\.beta\\.kubernetes\\.io/aws-load-balancer-security-groups"
    value = "sg-0c21d97d13f8d6bab"
  }

  depends_on = [
    kubernetes_config_map.aws_auth
  ]
}
