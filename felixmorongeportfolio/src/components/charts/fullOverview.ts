 const fullOverview = `graph TD
  direction TB

  %% === VPC + EKS ===
  A[VPC - vpc.tf] --> A1[Private Subnets]
  A --> A2[Public Subnets]
  A1 --> B[EKS Cluster - eks.tf]
  B --> C[Managed Node Group - node_group.tf]

  %% === CI/CD Pipeline ===
  subgraph CI_CD_Pipeline
    direction TB
    D1[GitHub Repo] --> D2[Jenkins Pipeline - Jenkinsfile]
    D2 --> D3[Docker Build - Dockerfile]
    D3 --> D4[AWS ECR Push]
    D4 --> D5[ECR Repo - fabrics/devops-portfolio]
    D2 --> D6[Kubectl Deploy YAML]
    D6 --> D7[Active K8s Pod]
  end

  %% === Jenkins Deployment ===
  D2 --> E[Jenkins on EKS - helm]
  E --> F[jenkins-irsa-sa - serviceAccount]
  F --> G((IAM Role: jenkins-irsa-role))
  G --> H[Policy: ecr-inline-policy.json]
  G -.->|IRSA Trust Binding| B

  %% === App Deployment ===
  B --> I[Portfolio Deployment]
  I --> J[portfolio-service.yaml]
  J --> K[portfolio-ingress.yaml]
  K --> L[Cert: portfolio-tls]
  L --> M[ClusterIssuer: letsencrypt-prod]
  M --> N[Let's Encrypt ACME DNS]

  %% === Jenkins TLS ===
  E --> O[Jenkins Ingress]
  O --> P[Cert: jenkins-tls]
  P --> M

  %% === Add-ons via Helm ===
  B --> Q[cert-manager Controller - helm]
  B --> R[EBS CSI Driver - helm]

  %% === Styling ===
  classDef eks fill:#eef2ff,stroke:#667eea,stroke-width:1px;
  classDef jenkins fill:#f0fff4,stroke:#38a169,stroke-width:1px;
  classDef tls fill:#fff5f5,stroke:#e53e3e,stroke-width:1px;
  classDef storage fill:#fefcbf,stroke:#d69e2e,stroke-width:1px;

  class A,A1,A2,B,C,Q,R eks;
  class D1,D2,D3,D4,D5,D6,D7,E jenkins;
  class J,K,L,M,N,O,P tls;

`
export default fullOverview;