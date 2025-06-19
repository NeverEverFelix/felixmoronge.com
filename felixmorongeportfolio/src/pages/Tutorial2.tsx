import '../styles/Tutorial2.css';
import CodeBlock from '../components/CodeBlock';
import { useEffect } from 'react';

export default function Tutorial2() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "Full Infrastructure with IaC, EKS, Jenkins, and Helm",
      "description": "An intermediate DevOps tutorial showing how to build a scalable production-grade infrastructure using Terraform, AWS EKS, IRSA, Helm, and Jenkins CI/CD — with RBAC, Ingress, and PVC support.",
      "author": {
        "@type": "Person",
        "name": "Felix Moronge",
        "url": "https://www.felixmoronge.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Felix Moronge Portfolio",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.felixmoronge.com/fabrics.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.felixmoronge.com/Tutorial2"
      },
      "image": "https://www.felixmoronge.com/social-preview.png",
      "datePublished": "2025-06-18",
      "dateModified": "2025-06-18"
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return (
    <div className="tutorial2-container">
      <div className="fade-in-up" style={{ animationDelay: '0s' }}>
      <span className="learn-level">Intermediate</span>

      <div className="divider-casestudy">
        <div className="divider-line-casestudy" />
        <h2 className="learn-subheading">What You'll Learn</h2>
        <div className="divider-line-casestudy" />
      </div>

      <div className="tutorial-learn-section">
        <p className="learn-description">
          This tutorial walks you through the exact infrastructure that powers my live portfolio site — deployed via a real Kubernetes cluster, Terraform-based IaC, and a Jenkins + Kaniko CI/CD pipeline. You’ll learn:
        </p>
        <ul className="learn-list">
          <li>How to design and provision cloud-native infrastructure using Terraform</li>
          <li>How to configure and trigger real CI/CD using Jenkins</li>
          <li>How to securely build and push Docker images using Kaniko with IRSA (no root creds)</li>
          <li>How to expose services with HTTPS using Ingress + CertManager</li>
        </ul>
        <p className="learn-note">
          This stack simulates modern infra patterns used at FAANG-scale companies — containerized CI/CD, dynamic cloud infra, RBAC-secured deploys, and TLS-backed endpoints.
        </p>
      </div>
      </div>
      <div className="divider-casestudy full" />

      <section className="techstack-section">
        <h2 className="techstack-title">Tech Stack</h2>
        <div className="techstack-table">
          <div className="techstack-row header">
            <span className="techstack-label">Component</span>
            <span className="techstack-value">Tech Used</span>
          </div>
          <div className="techstack-row">
            <span className="techstack-label">Frontend</span>
            <span className="techstack-value">React + Vite</span>
          </div>
          <div className="techstack-row">
            <span className="techstack-label">Backend</span>
            <span className="techstack-value">None (Static Site)</span>
          </div>
          <div className="techstack-row">
            <span className="techstack-label">Infrastructure</span>
            <span className="techstack-value">Terraform, AWS EKS + ECR, Route53, IAM, OIDC</span>
          </div>
          <div className="techstack-row">
            <span className="techstack-label">CI/CD</span>
            <span className="techstack-value">Jenkins (via Helm), Kaniko, ECR</span>
          </div>
          <div className="techstack-row">
            <span className="techstack-label">Live Site</span>
            <span className="techstack-value">https://www.felixmoronge.com</span>
          </div>
          <div className="techstack-row">
            <span className="techstack-label">Observability</span>
            <span className="techstack-value">Prometheus + Grafana</span>
          </div>
          <div className="techstack-row">
            <span className="techstack-label">Secrets Mgmt</span>
            <span className="techstack-value">IRSA, AWS IAM, Terraform</span>
          </div>
          <div className="techstack-row">
            <span className="techstack-label">Storage</span>
            <span className="techstack-value">PVC + EBS CSI</span>
          </div>
          <div className="techstack-row">
            <span className="techstack-label">Networking</span>
            <span className="techstack-value">VPC, Security Groups, Ingress + CertManager</span>
          </div>
        </div>
        <div className="techstack-divider" />
      </section>

      <section className="architecture-section">
        <h2 className="architecture-title">Architecture</h2>

        <div className="arch-flow">
          <div className="arch-row">
            <div className="arch-box">GITHUB</div>
            <span className="arch-arrow">→</span>
            <div className="arch-box">JENKINS (PodTemplate)</div>
          </div>

          <div className="arch-arrow vertical">↓</div>
          <div className="arch-box">KANIKO + ECR</div>

          <div className="arch-arrow vertical">↓</div>
          <div className="arch-box">kubectl rollout</div>

          <div className="arch-arrow vertical">↓</div>
          <div className="arch-box">EKS (K8s Cluster)</div>

          <div className="arch-arrow vertical">↓</div>
          <div className="arch-row">
            <div className="arch-box">Ingress → TLS via CertManager</div>
            <span className="arch-arrow">→</span>
            <div className="arch-box user-box">USER</div>
          </div>
        </div>

        <ul className="arch-notes">
          <li>Terraform provisions everything: IAM, VPC, EKS, DNS, OIDC, IRSA, Helm Releases</li>
          <li>Jenkins runs inside Kubernetes and is exposed via jenkins.felixmoronge.com</li>
          <li>Kaniko builds Docker images inside a Pod (no Docker daemon)</li>
          <li>Images are pushed to ECR</li>
          <li>Rollout happens via kubectl apply</li>
          <li>TLS managed by CertManager, DNS via Route53</li>
        </ul>
      </section>

      <div className="divider-casestudy full" />

      <section className="breakdown-section">
        <h2 className="breakdown-title">Breakdown</h2>
        <h3 className="breakdown-subheading">IaC (Terraform)</h3>
        <p className="breakdown-description">
          Terraform is the single source of truth. Every AWS resource, K8s deployment, and Helm release is declared and versioned.
        </p>

        <ul className="breakdown-points">
          <li>
            <strong>Staggered Resource Release:</strong> We created VPC and security groups first, then EKS, then Helm/Jenkins, then IRSA. <br />
            This prevented race conditions like missing OIDC or PVC failures.
          </li>
          <li>
            <strong>VPC + Security:</strong> VPC, subnets, routing tables, and NAT gateways were defined in <code>vpc.tf</code> and <code>security.tf</code>.
          </li>
        </ul>

        <div className="breakdown-code-embed">
          <div className="code-wrapper">
            <div className="code-label">vpc.tf</div>
            <CodeBlock
              language="yaml"
              code={`
module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "5.8.1"

  name = "felix-eks-vpc-v2"
  cidr = "10.0.0.0/16"

  azs             = ["us-east-1a", "us-east-1b"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24"]

  enable_nat_gateway = true
  single_nat_gateway = true

  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name                                    = "felix-eks-vpc-v2"
    "kubernetes.io/cluster/felix-eks-cluster-v2" = "shared"
  }

  public_subnet_tags = {
    "kubernetes.io/role/elb" = "1"
    "kubernetes.io/cluster/felix-eks-cluster-v2" = "shared"
  }

  private_subnet_tags = {
    "kubernetes.io/role/internal-elb" = "1"
    "kubernetes.io/cluster/felix-eks-cluster-v2" = "shared"
  }
}
              `}
            />
          </div>
          <div className="code-wrapper">
  <div className="code-label">iam.tf</div>
  <CodeBlock
    language="yaml"
    code={`
data "aws_iam_policy_document" "eks_assume_role_policy" {
  statement {
    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = ["ec2.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "eks_node_group_role" {
  name = "eks-node-group-role"

  assume_role_policy = data.aws_iam_policy_document.eks_assume_role_policy.json
}

resource "aws_iam_role_policy_attachment" "eks_node_worker" {
  role       = aws_iam_role.eks_node_group_role.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy"
}

resource "aws_iam_role_policy_attachment" "eks_node_cni" {
  role       = aws_iam_role.eks_node_group_role.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy"
}

resource "aws_iam_role_policy_attachment" "eks_node_ecr" {
  role       = aws_iam_role.eks_node_group_role.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly"
}

# ✅ FIXED: Proper IRSA trust policy for CSI controller
resource "aws_iam_role" "ebs_csi_role" {
  name = "ebs-csi-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [{
      Effect = "Allow",
      Principal = {
        Federated = "arn:aws:iam::<REDACTED_ACCOUNT_ID>:oidc-provider/<REDACTED_OIDC_ISSUER>"
      },
      Action = "sts:AssumeRoleWithWebIdentity",
      Condition = {
        StringEquals = {
          "<REDACTED_OIDC_ISSUER>:sub" = "system:serviceaccount:kube-system:ebs-csi-controller-sa"
        }
      }
    }]
  })
}

resource "aws_iam_policy" "ebs_csi_policy" {
  name   = "ebs-csi-policy"
  policy = file("\${path.module}/ebs_csi_policy.json")
}

resource "aws_iam_role_policy_attachment" "ebs_csi_attach" {
  role       = aws_iam_role.ebs_csi_role.name
  policy_arn = aws_iam_policy.ebs_csi_policy.arn
}
    `}
  />
</div>

          <div className="code-wrapper">
            <div className="code-label">providers.tf</div>
            <CodeBlock
              language="yaml"
              code={`
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 5.0.0, < 6.0.0"
    }
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = ">= 2.0.0"
    }
    helm = {
      source  = "hashicorp/helm"
      version = ">= 2.0.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

provider "helm" {
  kubernetes {
    host                   = data.aws_eks_cluster.cluster.endpoint
    cluster_ca_certificate = base64decode(data.aws_eks_cluster.cluster.certificate_authority[0].data)
    token                  = data.aws_eks_cluster_auth.cluster.token
  }
}

provider "kubernetes" {
  host                   = data.aws_eks_cluster.cluster.endpoint
  cluster_ca_certificate = base64decode(data.aws_eks_cluster.cluster.certificate_authority[0].data)
  token                  = data.aws_eks_cluster_auth.cluster.token
}
              `}
            />
          </div>
        </div>
        <ul className="breakdown-points">
  <li>
    <strong>Staggered Resource Release:</strong> We created VPC and security groups first, then EKS, then Helm/Jenkins, then IRSA. <br />
    This prevented race conditions like missing OIDC or PVC failures.
  </li>
  <li>
    <strong>VPC + Security:</strong> VPC, subnets, routing tables, and NAT gateways were defined in <code>vpc.tf</code> and <code>security.tf</code>.
  </li>
  <li>
    <strong>EKS + OIDC:</strong> <code>eks.tf</code> and <code>iam_oidc.tf</code> initialized the cluster <br />
    and added IAM trust policies for Kubernetes.
  </li>
  <li>
    <strong>IAM + IRSA:</strong> <code>iam_irsa.tf</code> created service accounts that <br />
    allow Jenkins + Kaniko to push to ECR without exposing root credentials.
  </li>
</ul>
      </section>
      <div className="code-wrapper">
  <div className="code-label">eks.tf</div>
  <CodeBlock
    language="yaml"
    code={`
module "eks" {
  source          = "terraform-aws-modules/eks/aws"
  version         = "19.21.0" # LTS version

  cluster_name    = "felix-eks-cluster-v2"
  cluster_version = "1.29"

  vpc_id     = module.vpc.vpc_id
  subnet_ids = module.vpc.private_subnets

  enable_irsa                    = true
  cluster_endpoint_public_access = true

  #  Disabled to prevent module from injecting aws-auth behind the scenes
  manage_aws_auth_configmap = false

  #  Removed aws_auth_users — we will manage this in aws_auth.tf directly
  # aws_auth_users = [ ... ] ← DELETE THIS BLOCK

  eks_managed_node_groups = {
    default_node_group = {
      name           = "devops-node-group"
      instance_types = ["t3.medium"]
      desired_size   = 1
      min_size       = 1
      max_size       = 2

      iam_role_arn = aws_iam_role.eks_node_group_role.arn
    }
  }

  tags = {
    Environment = "dev"
    Project     = "felix-devops"
  }
}
    `}
  />
</div>
<div className="code-wrapper">
  <div className="code-label">iam_irsa.tf</div>
  <CodeBlock
    language="yaml"
    code={`
data "aws_caller_identity" "current" {}

locals {
  # 🔒 Hardcoded OIDC issuer — proven stable
  oidc_issuer_clean = "oidc.eks.us-east-1.amazonaws.com/id/5AFC75AC2E3650E2FF68634E39E06AF0"
}

resource "aws_iam_role" "jenkins_irsa_role" {
  name = "jenkins-irsa-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [{
      Effect = "Allow",
      Principal = {
        Federated = "arn:aws:iam::\${data.aws_caller_identity.current.account_id}:oidc-provider/\${local.oidc_issuer_clean}"
      },
      Action = "sts:AssumeRoleWithWebIdentity",
      Condition = {
        StringEquals = {
          "\${local.oidc_issuer_clean}:sub" = "system:serviceaccount:jenkins:jenkins-irsa-sa"
        }
      }
    }]
  })
}

resource "aws_iam_role_policy" "jenkins_irsa_policy" {
  name = "jenkins-irsa-policy"
  role = aws_iam_role.jenkins_irsa_role.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect = "Allow",
        Action = [
          "ecr:GetAuthorizationToken",
          "ecr:BatchCheckLayerAvailability",
          "ecr:GetDownloadUrlForLayer",
          "ecr:BatchGetImage",
          "ecr:PutImage",
          "ecr:InitiateLayerUpload",
          "ecr:UploadLayerPart",
          "ecr:CompleteLayerUpload",
          "ecr:CreateRepository"
        ],
        Resource = "*"
      }
    ]
  })
}
    `}
  />
</div>
<div className="code-wrapper">
  <div className="code-label">helm_ebs_csi.tf</div>
  <CodeBlock
    language="yaml"
    code={`
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
    name  = "controller.nodeSelector.eks\\\\.amazonaws\\\\.com/nodegroup"
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
    `}
  />
</div>
<div className="code-wrapper">
  <div className="code-label">storageclass.tf</div>
  <CodeBlock
    language="yaml"
    code={`
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

  #  Waits for EKS cluster + EBS CSI Helm release to succeed
  depends_on = [
    data.aws_eks_cluster.cluster,
    helm_release.ebs_csi_driver
  ]
}
    `}
  />
</div>
<li>
  <strong>EKS + OIDC:</strong> <code>eks.tf</code> and <code>iam_oidc.tf</code> initialized the cluster and added IAM trust policies for Kubernetes.
</li>
<li>
  <strong>IAM + IRSA:</strong> <code>iam_irsa.tf</code> created service accounts that allow Jenkins + Kaniko to push to ECR without exposing root credentials.
</li>
<li>
  <strong>Storage:</strong> <code>helm_ebs_csi.tf</code> and <code>storageclass.tf</code> configured dynamic PVC provisioning with the EBS CSI driver.
</li>
<li>
  <strong>Ingress + TLS:</strong> <code>helm_ingress.tf</code> deployed NGINX; <code>ingress.yaml</code> routed traffic to the frontend and CertManager managed TLS using Let's Encrypt.
</li>
<div className="code-wrapper">
  <div className="code-label">helm_ingress.tf</div>
  <CodeBlock
    language="yaml"
    code={`
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
    name  = "controller.service.annotations.service\\\\.beta\\\\.kubernetes\\\\.io/aws-load-balancer-security-groups"
    value = "sg-0c21d97d13f8d6bab"
  }

  depends_on = [
    kubernetes_config_map.aws_auth
  ]
}
    `}
  />
</div>
<div className="code-wrapper">
  <div className="code-label">ingress.yaml</div>
  <CodeBlock
    language="yaml"
    code={`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: portfolio-ingress
  namespace: default
  annotations:
    nginx.ingress.kubernetes.io/ssl-redirect: "true"
    nginx.ingress.kubernetes.io/force-ssl-redirect: "true"
    cert-manager.io/cluster-issuer: letsencrypt-prod
spec:
  ingressClassName: nginx
  rules:
    - host: www.felixmoronge.com
      http:
        paths:
          - path: /.well-known/acme-challenge/
            pathType: Prefix
            backend:
              service:
                name: nginx-ingress-ingress-nginx-controller
                port:
                  number: 80
          - path: /
            pathType: Prefix
            backend:
              service:
                name: portfolio-service
                port:
                  number: 80
  tls:
    - hosts:
        - www.felixmoronge.com
      secretName: portfolio-tls
    `}
  />
</div>
<div className="code-wrapper">
  <div className="code-label">helm_jenkins.tf</div>
  <CodeBlock
    language="yaml"
    code={`
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
    `}
  />
</div>
<div className="divider-casestudy full" />

<section className="jenkins-section">
  <h2 className="jenkins-title">Jenkins Setup<br />via Helm</h2>

  <p className="jenkins-text">
    Jenkins was installed in-cluster via <code>helm_release.tf</code>
  </p>
  <p className="jenkins-text">
    It is exposed to the internet using Kubernetes Ingress at{" "}
    <a href="https://jenkins.felixmoronge.com" target="_blank" rel="noopener noreferrer">
      https://jenkins.felixmoronge.com
    </a>
  </p>
  <p className="jenkins-text">TLS enabled via CertManager + Route53</p>

  <h3 className="jenkins-subtitle">Why Helm?</h3>
  <ul className="jenkins-list">
    <li>Declarative, reproducible</li>
    <li>Seamless integration with IRSA and custom RBAC</li>
    <li>Simplifies future upgrades</li>
  </ul>

  <h3 className="jenkins-subtitle">Kaniko-Based<br />CI/CD Pipeline</h3>
  <p className="jenkins-text">
    The Jenkinsfile defines a CI/CD pipeline that builds, pushes, and deploys Docker images without root credentials using IRSA:
  </p>
</section>
<div className="divider-casestudy full" />
<section className="faang-section">
  <h2 className="faang-title">How to Take This Further (Toward Real FAANG-Grade)</h2>
  <ul className="faang-list">
    <li>Integrate Vault for dynamic secrets and short-lived tokens</li>
    <li>Add OPA/Gatekeeper policies for deploy control</li>
    <li>Enable Blue/Green deploys with ArgoCD or Flagger</li>
    <li>Refactor multi-service into microservices with Helmfile or Kustomize</li>
  </ul>
  <p className="faang-footer">Next tutorial: Advanced — Coming Soon</p>
</section>
    </div>
  );
}
