const cicdpipeline = `flowchart TD
  %% === Developer Trigger ===
  DEV[Developer Push to GitHub] --> GH[GitHub Repository<br/>main branch]
  GH -->|Webhook Trigger| JP[Jenkins Pipeline<br/>Jenkinsfile]

  %% === Jenkins on EKS ===
  subgraph EKS Cluster
    direction TB
    JP --> POD[Jenkins Pod<br/>namespace: jenkins]
    POD --> SA[jenkins-irsa-sa<br/>serviceAccount]
  end

  %% === Pipeline Stages ===
  subgraph Jenkins Stages
    direction TB
    ST1[Test & Lint Stage]
    ST2[Docker Build Stage<br/>with Kaniko]
    ST3[Push to ECR Stage]
    ST4[K8s Deploy Stage]
    POD --> ST1 --> ST2 --> ST3 --> ST4
  end

  %% === Image Build + Push ===
  ST2 --> DOCKER[Build Docker Image<br/>Dockerfile]
  ST3 --> PUSH[Push Image to AWS ECR]
  PUSH --> ECR[ECR Repository<br/>fabrics/devops-portfolio]

  %% === Kubernetes Deployment ===
  ST4 --> APPLY[kubectl apply -f deployment.yaml]
  APPLY --> KDEPLOY[K8s Deployment<br/>namespace: default]
  KDEPLOY --> PODS[Running Pods<br/>app: portfolio]

  %% === IRSA Integration for ECR ===
  subgraph AWS IAM
    direction TB
    SA --> ROLE((IAM Role<br/>jenkins-irsa-role))
    ROLE --> POLICY[ecr-inline-policy.json]
  end

  PUSH -->|IRSA Auth| ROLE

  %% === Outcome ===
  PODS --> LIVE[App Updated on<br/>felixmoronge.com]

  %% === Styling ===
  classDef stage fill:#f0f7ff,stroke:#2b6cb0,stroke-width:1px;
  classDef ecr fill:#fef7e0,stroke:#d69e2e,stroke-width:1px;
  classDef aws fill:#e6fffa,stroke:#319795,stroke-width:1px;
  classDef cluster fill:#eef2ff,stroke:#667eea,stroke-width:1px;
  classDef out fill:#e0ffe0,stroke:#38a169,stroke-width:1px;

  class ST1,ST2,ST3,ST4 stage;
  class ECR,POLICY ecr;
  class ROLE,SA aws;
  class EKS,POD cluster;
  class LIVE out;
`
export default cicdpipeline;