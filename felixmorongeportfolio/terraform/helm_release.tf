resource "helm_release" "jenkins" {
  name       = "jenkins"
  namespace  = "jenkins"
  repository = "https://charts.jenkins.io"
  chart      = "jenkins"
  version    = "5.1.9"

  create_namespace = true

  values = [<<EOF
controller:
  image:
    repository: "jenkins/jenkins"
    tag: "2.452.1-jdk17"

  serviceAccount:
    name: jenkins-irsa-sa
    create: false
    
  admin:
    username: "nevereverfelix"
    password: "138824"

  installPlugins:
    - kubernetes:latest
    - workflow-aggregator:latest
    - git:latest
    - configuration-as-code:latest

  service:
    type: ClusterIP
    port: 8080
    targetPort: 8080

  ingress:
    enabled: true
    hosts:
      - jenkins.felixmoronge.com
    annotations:
      kubernetes.io/ingress.class: "nginx"
      kubernetes.io/tls-acme: "true"
      cert-manager.io/cluster-issuer: "letsencrypt-prod"
      nginx.ingress.kubernetes.io/proxy-body-size: "50m"
    tls:
      - hosts:
          - jenkins.felixmoronge.com
        secretName: jenkins-tls

  persistence:
    enabled: true
    existingClaim: jenkins         
    size: 8Gi
    storageClass: "ebs-sc"
    accessMode: ReadWriteOnce
    annotations: {}
    subPath: ""

  volumes:
    - name: kubeconfig
      secret:
        secretName: jenkins-kubeconfig

  volumeMounts:
    - name: kubeconfig
      mountPath: /var/jenkins_home/.kube/config
      subPath: config
EOF
  ]

  depends_on = [
    kubernetes_storage_class_v1.ebs_sc,
    helm_release.nginx_ingress
  ]
}
