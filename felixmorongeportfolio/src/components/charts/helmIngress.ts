 const helmIngress = `
graph TD
  %% === Kubernetes Cluster Scope ===
  subgraph "EKS Cluster (Provisioned via Terraform)"
    direction TB

    %% === Helm Releases ===
    subgraph "Helm Deployed Charts"
      HELM1[Jenkins Chart 📦] --> JENKINS_DEPLOY[Jenkins Deployment<br/>namespace: jenkins]
      HELM2[NGINX Ingress Controller Chart 🌐] --> NGINX_DEPLOY[Ingress Controller<br/>namespace: ingress-nginx]
      HELM3[EBS CSI Driver Chart 💽] --> EBS_DEPLOY[EBS CSI Controller<br/>namespace: kube-system]
      HELM4[cert-manager Chart 🔐] --> CERT_MGR[cert-manager Controller<br/>namespace: cert-manager]
    end

    %% === Jenkins Ingress TLS Chain ===
    JENKINS_DEPLOY --> JENKINS_SVC[Jenkins Service<br/>jenkins.cluster.local]
    JENKINS_SVC --> JENKINS_INGRESS[Ingress 🌐<br/>jenkins.felixmoronge.com]
    JENKINS_INGRESS --> JENKINS_CERT[Certificate: jenkins-tls.crt 🔐<br/>namespace: jenkins]
    JENKINS_CERT --> ISSUER[ClusterIssuer: letsencrypt-prod]

    %% === Portfolio Ingress TLS Chain ===
    subgraph "Portfolio App (namespace: default)"
      PORT_DEPLOY[Portfolio Deployment 📦] --> PORT_SVC[Service<br/>portfolio-service]
      PORT_SVC --> PORT_INGRESS[Ingress 🌐<br/>www.felixmoronge.com]
      PORT_INGRESS --> PORT_CERT[Certificate: portfolio-tls.crt 🔐]
      PORT_CERT --> ISSUER
    end

    %% === Cert Manager + ACME Flow ===
    ISSUER -->|Issues CSR requests| CERT_MGR
    CERT_MGR -->|ACME Challenge 🔄| ACME[Let's Encrypt<br/>acme-v02.api.letsencrypt.org]

    %% === Ingress Routing Links ===
    JENKINS_INGRESS -->|Handled by| NGINX_DEPLOY
    PORT_INGRESS -->|Handled by| NGINX_DEPLOY

  end

  %% === Styling ===
  classDef ingress fill:#e6f7ff,stroke:#3399ff,stroke-width:1px;
  classDef svc fill:#fff2cc,stroke:#ffbb33,stroke-width:1px;
  classDef helm fill:#e6ffe6,stroke:#33cc33,stroke-width:1px;
  classDef cert fill:#ffe6f0,stroke:#ff66a3,stroke-width:1px;
  classDef core fill:#f0f0f0,stroke:#888,stroke-width:1px;
  classDef app fill:#f2eaff,stroke:#b266ff,stroke-width:1px;

  class HELM1,HELM2,HELM3,HELM4 helm;
  class JENKINS_INGRESS,PORT_INGRESS ingress;
  class JENKINS_SVC,PORT_SVC svc;
  class JENKINS_CERT,PORT_CERT cert;
  class CERT_MGR,ISSUER,ACME core;
  class PORT_DEPLOY app;
`
export default helmIngress;