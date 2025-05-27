resource "helm_release" "jenkins" {
  name       = "jenkins"
  namespace  = "jenkins"
  repository = "https://charts.jenkins.io"
  chart      = "jenkins"
  version    = "5.1.9"

  create_namespace = true

  values = [<<EOF
controller:
  admin:
    username: "nevereverfelix"
    password: "138824"  # ⚠️ Consider using a stronger password or a secret

  installPlugins:
    - kubernetes:latest
    - workflow-aggregator:latest
    - git:latest
    - configuration-as-code:latest

  serviceType: NodePort

  volumes:
    - name: kubeconfig
      secret:
        secretName: jenkins-kubeconfig

  volumeMounts:
    - name: kubeconfig
      mountPath: /var/jenkins_home/.kube/config
      subPath: config

persistence:
  enabled: true
  size: 8Gi
  storageClass: ebs-sc
EOF
  ]
}
