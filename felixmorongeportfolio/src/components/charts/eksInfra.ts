 const eksInfra = `graph TD

  %% === Public/Private Subnets ===
  subgraph "VPC: custom"
    direction TB
    PUB[Public Subnets]:::public
    PRIV[Private Subnets]:::private
  end

  PUB --> ALB[Application Load Balancer]
  ALB --> EKS
  PRIV --> EKS

  %% === EKS Cluster ===
  subgraph "EKS Cluster"
    direction TB
    EKS[Amazon EKS]
    NODEGROUP[Managed Node Group<br/>IAM: node_group_role]
    EKS --> NODEGROUP

    %% Workload Examples
    JP[Jenkins Pod<br/>namespace: jenkins]
    JP --> SA1[jenkins-irsa-sa<br/>serviceAccount]

    CSI[EBS CSI Pod]
    CSI --> SA2[ebs-csi-controller-sa<br/>serviceAccount]

    %% OIDC
    EKS --> OIDC[OIDC Provider<br/>eks-felix]
    OIDC --> SA1
    OIDC --> SA2
  end

  %% === IAM Mapping ===
  subgraph "AWS IAM"
    direction TB
    SA1 --> IRSA1((IAM Role: jenkins-irsa-role))
    SA2 --> IRSA2((IAM Role: ebs-csi-role))
    IRSA1 --> POL1[ecr-inline-policy.json]
    IRSA2 --> POL2[ebs_csi_policy.json]
  end

  %% === Styles ===
  classDef public fill:#C5F1FF,stroke:#0099cc,stroke-width:1px;
  classDef private fill:#E6FFEC,stroke:#33aa66,stroke-width:1px;
  classDef iam fill:#f0fff4,stroke:#38a169,stroke-width:1px;
  classDef eks fill:#eef2ff,stroke:#667eea,stroke-width:1px;

  class PUB,PRIV public,private;
  class JP,CSI,SA1,SA2,OIDC,NODEGROUP,EKS eks;
  class IRSA1,IRSA2,POL1,POL2 iam;
`

export default eksInfra;