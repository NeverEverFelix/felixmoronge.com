resource "helm_release" "kube_prometheus_stack" {
  name             = "kube-prometheus-stack"
  namespace        = "monitoring"
  repository       = "https://prometheus-community.github.io/helm-charts"
  chart            = "kube-prometheus-stack"
  version          = "58.1.0"
  create_namespace = true

  timeout           = 600           # allows time for CRDs and Grafana dashboard provisioning
  atomic            = true          # roll back if anything fails
  dependency_update = true          # fetches subcharts like alertmanager/prometheus

  values = [
    file("${path.module}/monitoring-values.yaml")
  ]
depends_on = [
  helm_release.nginx_ingress
]
  
}
