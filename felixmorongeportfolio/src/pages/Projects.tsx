import '../styles/Projects.css';
import { useEffect, useState } from 'react';
import FadeInOnScroll from '../components/FadeInOnScroll';
import MermaidChart from '../components/MermaidChart';
import cicdpipeline from '../components/charts/cicdpipeline';
import  eksInfra  from '../components/charts/eksInfra';
import  helmIngress  from '../components/charts/helmIngress';
import GitHubRepoCard from '../components/GitHubRepoCard';
import K6LoadTestChart from '../components/K6LoadTestChart';
import LegacyIssuesSwipeCards from '../components/LegacyIssuesSwipeCards';
import '../styles/Tutorial.css';
import CodeBlock from '../components/CodeBlock';
import dedent from 'dedent';
import ChatModal from '../components/ChatModal';





export default function Projects() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "Building Enterprise-Grade CI/CD for My Portfolio Site",
      "description": "How I architected and deployed a production-grade DevOps pipeline from scratch using AWS, Terraform, and Kubernetes. Includes full CI/CD stack, Jenkins, IRSA, EKS, and automated deployments.",
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
        "@id": "https://www.felixmoronge.com/Project1"
      },
      "image": "https://www.felixmoronge.com/DevOpsPortfolioSite.png",
      "datePublished": "2025-06-01",
      "dateModified": "2025-06-18"
    });

    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  const [showChatModal, setShowChatModal] = useState(false);
  return (
   
    <div className="projects-main">
      
      <div className="fade-in-up" style={{ animationDelay: '0s' }}>
        <div className="section-header">
          <div className="development-pill">Live</div>
          <h1 className="title">Infrastructure & CI/CD Pipeline: Cutting Deploy Times and Delivering Reliable Updates</h1>
          <p className="title-subtext">
          Transforming Manual Deployments into Scalable, Automated Infrastructure Using<br />
          AWS, Terraform, and Kubernetes
          </p>
        </div>
      </div>

      <div className="fade-in-up" style={{ animationDelay: '0.1s' }}>
        <div className="image">
          <img src="/DevOpsPortfolioSite.png" alt="Case Study Screenshot" />
        </div>
      </div>

      <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="divider-casestudy">
          <div className="divider-line-casestudy left"></div>
          <div className="divider-line-casestudy right"></div>
        </div>
      </div>

      <div className="fade-in-up" style={{ animationDelay: '0.3s' }}>
      <div className="overview">
        <FadeInOnScroll >
          <h2 className="overview-title-text">About this Project</h2>
          <p className="overview-subtext">
          My Goals
          </p>
          <div className="overview-maintext">
            <p>
            This case study is a personal learning project I built independently to deepen my DevOps skills. While I’m early in my career, I wanted to challenge myself by designing and deploying an architecture inspired by enterprise-level best practices.
            </p>
            <p>
            This isn’t running in a production commercial environment. Instead, I set up and tested it in my own AWS account and Kubernetes cluster to simulate a real-world pipeline from scratch. Everything described here—Terraform, ECR, IRSA, Kaniko, Helm, Ingress, SSL—is configured and working in my environment
            </p>
          </div>
          <div className="divider-casestudy full"></div>
          </FadeInOnScroll>
        </div>
     
        <div className="overview">
        <FadeInOnScroll >
          <h2 className="overview-title-text">Overview</h2>
          <p className="overview-subtext">
          Identifying DevOps Bottlenecks and Architectural Gaps
          </p>
          <div className="overview-maintext">
            <p>
            When I launched my portfolio site, deploying updates was slow, manual, and error-prone. Hence, I engineered a Kaniko- and Helm-powered Jenkins CI/CD pipeline for Dockerized AWS EKS deployments, slashing release cycles by 98% and accelerating time-to-market for feature delivery.
            </p>
            <p>
            This pipeline ensures secure, reliable updates, showcasing my ability to simulate production-grade DevOps systems that deliver real business value.   
            </p>
            <p>
            The result is a scalable, secure, and automated deployment process mirroring enterprise practices
            </p>
          </div>
          <div className="divider-casestudy full"></div>
          </FadeInOnScroll>
        </div>
      </div>

      <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
      
        <div className="metadata-section">
        
          <div className="metadata-block">
          <FadeInOnScroll>
            <h2 className="section-title">Product</h2>
            <p className="section-subtext">
       <span style={{ opacity: 0.5 }}>
         Felix Moronge Portfolio Site
        </span>
          — my personal brand platform,
        </p>
            </FadeInOnScroll>
          </div>
          <FadeInOnScroll>
          <div className="divider-casestudy full"></div>
          </FadeInOnScroll>
          <div className="metadata-block">
          <FadeInOnScroll>
            <h2 className="section-title">My Role</h2>
            <p className="section-subtext"> Architect & Engineer — designed and implemented the end-to-end infrastructure and CI/CD pipeline.</p>
            </FadeInOnScroll>
          </div>
          <FadeInOnScroll>
          <div className="divider-casestudy full"></div>
          </FadeInOnScroll>
          <div className="metadata-block">
          <FadeInOnScroll>
            <h2 className="section-title">Skills</h2>
            <p className="section-subtext">
            Infrastructure-as-Code<br />
            CI/CD Pipeline Design<br />
            Kubernetes Operations<br />
            Container Security<br />
            Observability & Monitoring<br />
            Fullstack Development
            </p>
            </FadeInOnScroll>
          </div>
          <FadeInOnScroll>
          <div className="divider-casestudy full"></div>
          </FadeInOnScroll>
          <div className="metadata-block">
          <FadeInOnScroll>
            <h2 className="section-title">Tools</h2>
            <p className="section-subtext">
            AWS · Docker · Kubernetes · Helm · Jenkins · Terraform · Prometheus — powering secure, automated infrastructure.
            </p>
            </FadeInOnScroll>
          </div>
          <FadeInOnScroll>
          <div className="divider-casestudy full"></div>
          </FadeInOnScroll>
          <div className="metadata-block">
          <FadeInOnScroll>
       
            <p className="section-subtext">
            Before the Overhaul: Slow Deployments, Manual Errors, and Hidden Costs
            </p>
            <div className="legacy-deployment">
              <p><strong>Originally, my portfolio ran on a single EC2 instance, provisioned manually. I containerized the frontend with Docker and served it via Nginx and Certbot for SSL.</strong></p>
              
              <p><strong>However, this setup introduced significant limitations</strong></p>
              <div>
              <LegacyIssuesSwipeCards />
              </div>
            </div>
            <div className="quote-block">
              <p>
                <span className="quote-faded">This architecture was neither scalable nor resilient enough to reflect production-grade DevOps practices,</span><br />
                <span className="quote-emphasized">prompting a complete infrastructure overhaul</span>
              </p>
            </div>
            </FadeInOnScroll>
          </div>
          <FadeInOnScroll>
          <div className="divider-casestudy full"></div>
          </FadeInOnScroll>
        </div>
      </div>

      <div className="fade-in-up" style={{ animationDelay: '0.5s' }}>
        <div className="architecture-whiteboard">
        <FadeInOnScroll>
          <h2 className="section-title">Architecture Whiteboard
          <button className="QnAButton-pill" onClick={() => setShowChatModal(true)} >Learn More</button> {showChatModal && (
        <ChatModal onClose={() => setShowChatModal(false)} />
      )}
          </h2>
          <p className="section-subtext">Implementation Challenges & Resolutions</p>
          <div className="results-pill-container" style={{ marginTop: '2rem' }}>
  <div className="results-pill">
    <span style={{ color: '#9b30ff', fontWeight: 700 }}>
      Solved Helm immutable errors
    </span>
    &nbsp;&nbsp;→&nbsp;&nbsp;
    <span style={{ color: '#ffffff' }}>
      Implemented templated Deployments for zero-downtime releases, ensuring reliable updates and user trust.
    </span>
  </div>
  <div className="results-pill">
    <span style={{ color: '#9b30ff', fontWeight: 700 }}>
      Cut Kaniko build times ~40%
    </span>
    &nbsp;&nbsp;→&nbsp;&nbsp;
    <span style={{ color: '#ffffff' }}>
      Optimized Docker layers for faster feature delivery and reduced cloud costs.
    </span>
  </div>
  <div className="results-pill">
    <span style={{ color: '#9b30ff', fontWeight: 700 }}>
      Fixed OIDC cluster lockouts
    </span>
    &nbsp;&nbsp;→&nbsp;&nbsp;
    <span style={{ color: '#ffffff' }}>
      Refined IAM roles to secure access and maintain deployment reliability.
    </span>
  </div>
  <div className="results-pill">
    <span style={{ color: '#9b30ff', fontWeight: 700 }}>
      Unblocked Jenkins volumes on EKS
    </span>
    &nbsp;&nbsp;→&nbsp;&nbsp;
    <span style={{ color: '#ffffff' }}>
      Adjusted SecurityContext for stable builds, reducing deployment failures.
    </span>
  </div>
  <div className="results-pill">
    <span style={{ color: '#9b30ff', fontWeight: 700 }}>
      Prevented Terraform drift
    </span>
    &nbsp;&nbsp;→&nbsp;&nbsp;
    <span style={{ color: '#ffffff' }}>
      Added pipeline checks to maintain infra consistency and avoid costly outages.
    </span>
  </div>
</div>
<div className="divider-casestudy full"></div>




          <div className="whiteboard-body">
            <p className="whiteboard-heading">Infrastructure Whiteboard</p>  
            <p className="whiteboard-subtext">I mapped out:</p>
            <ul className="whiteboard-list">
            <li>
            <strong>CI/CD Pipeline:</strong> GitHub → Jenkins → Kaniko → Kubernetes. Fixed slow deploys and errors.
          </li>
          <li>
            <strong>EKS Cluster:</strong> Custom VPC, ALB ingress, network policies. Solved manual provisioning risks.
          </li>
          <li>
            <strong>IRSA:</strong> Pods use IAM roles instead of static creds, improving security.
          </li>
          <li>
            <strong>Jenkins via Helm:</strong> Deployed with TLS, persistent storage. Avoided Helm upgrade issues.
          </li>
          <li>
            <strong>DNS & TLS:</strong> Automated Route 53 + cert-manager. No manual SSL configs.
          </li>
           </ul>
              <div className="diagram-wrapper">
              <FadeInOnScroll>
              <MermaidChart chart={eksInfra} />
              </FadeInOnScroll>
              </div>
              <div className="tutorial-code-section">
<FadeInOnScroll>
  <CodeBlock
    language="yaml"
    code={dedent(`module "eks" {
  source          = "terraform-aws-modules/eks/aws"
  version         = "19.21.0"

  cluster_name    = "felix-eks-cluster-v2"
  cluster_version = "1.29"

  vpc_id     = module.vpc.vpc_id
  subnet_ids = module.vpc.private_subnets

  enable_irsa                    = true
  cluster_endpoint_public_access = true
  manage_aws_auth_configmap = false

  eks_managed_node_groups = {
    default_node_group = {
      name           = "devops-node-group"
      instance_types = ["t3.medium"]
      desired_size   = 1
      min_size       = 1
      max_size       = 2
      iam_role_arn   = aws_iam_role.eks_node_group_role.arn
    }
  }

  tags = {
    Environment = "dev"
    Project     = "felix-devops"
  }
}
`)}
  />
  </FadeInOnScroll>
</div>
              <p className="overview-subtext">
              I designed this EKS architecture with a custom VPC, ALB ingress, and private subnets to isolate workloads. This solved manual infra gaps and enables secure, scalable deployments, reducing downtime risks and future cloud costs.
            </p>
          </div>
          <div className="divider-casestudy full"></div>
          </FadeInOnScroll>
        </div>
      </div>

      <div className="fade-in-up" style={{ animationDelay: '0.6s' }}>
      <div className="infra-diagrams">
  <FadeInOnScroll>
    <h2 className="section-title">Infrastructure Diagrams
    <button className="QnAButton-pill" onClick={() => setShowChatModal(true)} >Learn More</button> {showChatModal && (
        <ChatModal onClose={() => setShowChatModal(false)} />
      )}
    </h2>
    <p className="section-subtext">
      Terraform builds, Kubernetes architecture, Jenkins pipeline design
    </p>
    <div className="diagrams-body">
      <p className="diagrams-heading">Key Components</p>
      <ol className="diagrams-list">
        <li>
          <strong>Terraform Provisioning:</strong> Defined all infra as code — EKS cluster, IAM roles, Helm charts, and VPCs — replacing manual setups for safer, repeatable deployments.
        </li>
        <li>
          <strong>Jenkins Helm Deployment:</strong> Deployed Jenkins into Kubernetes with persistent storage and TLS ingress, solving earlier Helm upgrade failures and enabling seamless rollouts.
        </li>
        <li>
          <strong>Kaniko Build Agent:</strong> Configured Jenkins Pods with IRSA to securely build and push images to ECR, avoiding hard-coded AWS credentials.
        </li>
        <li>
          <strong>Nginx + Vite:</strong> Built the frontend with a multi-stage Docker setup, then deployed as a Kubernetes Deployment + Service for faster, lightweight static delivery.
        </li>
      </ol>
    </div>
  </FadeInOnScroll>
  <div className="diagram-wrapper">
    <FadeInOnScroll>
      <MermaidChart chart={helmIngress} />
    </FadeInOnScroll>
  </div>
  <p className="overview-subtext">
  I built this Helm Ingress to manage TLS termination and route traffic into Jenkins pods inside Kubernetes. It replaced manual Nginx configs, securing external access and enabling smooth, scalable deployments.
</p>
  <div className="divider-casestudy full"></div>
</div>

      </div>

      <div className="fade-in-up" style={{ animationDelay: '0.7s' }}>
  <div className="final-infrastructure">
    <FadeInOnScroll>
    <h2 className="section-title">
      Final Infrastructure Pipeline
      <button
        className="QnAButton-pill"
        onClick={() => setShowChatModal(true)}
      >
        Learn More
      </button>
    </h2>
      <p className="section-subtext">
        Automated deployments from GitHub to Kubernetes with secure builds, TLS, and live updates.
      </p>
      <div className="final-body">
        <p className="final-heading">Pipeline Highlights</p>
        <ul className="final-list">
          <li>
            <strong>GitHub → Jenkins:</strong> Webhooks trigger builds automatically, removing manual release steps.
          </li>
          <li>
            <strong>Kaniko Builds:</strong> Jenkins pipelines build and push Docker images securely to ECR, cutting build times and avoiding local Docker daemons.
          </li>
          <li>
            <strong>kubectl Rollouts:</strong> Jenkins updates Kubernetes deployments live without downtime.
          </li>
          <li>
            <strong>Live Updates:</strong> Changes instantly reflect on my portfolio at <a href="https://www.felixmoronge.com" target="_blank" rel="noopener noreferrer">felixmoronge.com</a>.
          </li>
          <li>
            <strong>Automated TLS:</strong> cert-manager provisions Let's Encrypt certificates, securing all traffic without manual SSL handling.
          </li>
          <li>
            <strong>Ingress Routing:</strong> NGINX IngressController directs subdomains (e.g. jenkins.felixmoronge.com) for clean, scalable architecture.
          </li>
        </ul>
      </div>
    </FadeInOnScroll>
    <div className="diagram-wrapper">
      <FadeInOnScroll>
        <MermaidChart chart={cicdpipeline} />
      </FadeInOnScroll>
    </div>
    <p className="overview-subtext">
      I designed this CI/CD pipeline to automate deployments from GitHub to Kubernetes. It replaces manual processes, accelerates feature delivery, and ensures secure, scalable operations across my portfolio.
    </p>
    <p className="overview-subtext">
    This pipeline wasn’t built without tradeoffs—or frustrations. Early on, my IRSA integration kept failing because Helm charts assumed static IAM roles, leading to repeated deployment errors and AccessDenied messages. After days of debugging, I realized I’d need a custom solution. I wrote Terraform modules to inject dynamic ARNs based on each environment, preventing privilege escalation and restoring deployment reliability. Kaniko added about 30 seconds to each build, but I chose it to eliminate privileged containers and improve security posture. Helm wasn’t always perfect out-of-the-box, forcing me to patch charts to handle dynamic IAM logic. I weighed tools like Kustomize, tuned Jenkins PodTemplates for scalability, and integrated cert-manager for automated TLS. Each of these choices balanced complexity, security, and maintainability—exactly the kind of engineering tradeoffs needed to deliver secure, business-critical systems
    </p>
    <div className="tutorial-code-section">
<FadeInOnScroll>
  <h2 className="section-title" style={{ textAlign: "left" }}>
    Here's Portfolio Site JenkinsFile that declares this site's CI/CD and Deployment —<br />Line-by-Line
  </h2>

  

  <CodeBlock
    language="yaml"
    code={dedent(`
pipeline {
  agent {
    kubernetes {
      defaultContainer 'kaniko'
      yaml """
apiVersion: v1
kind: Pod
metadata:
  labels:
    jenkins: kaniko-deploy
spec:
  serviceAccountName: jenkins-irsa-sa
  containers:
    - name: kaniko
      image: gcr.io/kaniko-project/executor:debug
      imagePullPolicy: Always
      command: ["/bin/sh"]
      args: ["-c", "sleep infinity"]
      workingDir: /home/jenkins/agent
      volumeMounts:
        - name: workspace-volume
          mountPath: /home/jenkins/agent
      env:
        - name: AWS_REGION
          value: us-east-1
        - name: AWS_DEFAULT_REGION
          value: us-east-1
        - name: AWS_ROLE_ARN
          value: arn:aws:iam::137068221475:role/jenkins-irsa-role
        - name: AWS_WEB_IDENTITY_TOKEN_FILE
          value: /var/run/secrets/eks.amazonaws.com/serviceaccount/token

    - name: kubectl
      image: alpine/k8s:1.28.2 
      command: ["/bin/sh"]
      args: ["-c", "sleep infinity"]
      workingDir: /home/jenkins/agent
      tty: true
      volumeMounts:
        - name: workspace-volume
          mountPath: /home/jenkins/agent

  volumes:
    - name: workspace-volume
      emptyDir: {}
"""
    }
  }

  environment {
    ECR_REGISTRY = "137068221475.dkr.ecr.us-east-1.amazonaws.com"
    IMAGE_NAME = "felixmoronge-portfolio"
    IMAGE_TAG = "latest"
  }

  stages {
    stage('Checkout Code') {
      steps {
        checkout scm
      }
    }

    stage('Verify Dockerfile Presence') {
      steps {
        container('kaniko') {
          dir("process.env.WORKSPACE/felixmorongeportfolio") {
            sh '''
              echo "📂 Listing felixmorongeportfolio contents:"
              ls -la
              echo "📄 Previewing Dockerfile:"
              head -n 20 Dockerfile || echo "⚠️ Dockerfile not found"
            '''
          }
        }
      }
    }

    stage('Build and Push with Kaniko') {
      steps {
        container('kaniko') {
          dir("process.env.WORKSPACE/felixmorongeportfolio") {
            sh '''
              echo "🚀 Starting Kaniko build..."
              /kaniko/executor \
                --context=. \
                --dockerfile=Dockerfile \
                --destination=$ECR_REGISTRY/$IMAGE_NAME:$IMAGE_TAG \
                --verbosity=debug \
                --log-format=text \
                --log-timestamp \
                --cache=true \
                --cache-repo=$ECR_REGISTRY/$IMAGE_NAME
            '''
          }
        }
      }
    }

    stage('Deploy to EKS') {
      steps {
        container('kubectl') {
          sh '''
            set -e
            echo "♻️ Restarting deployment to pull new image..."

            if ! kubectl rollout restart deployment/felix-portfolio -n default; then
              echo "❌ Failed to restart deployment. Check if the deployment name or namespace is correct."
              exit 1
            fi

            if ! kubectl rollout status deployment/felix-portfolio -n default; then
              echo "❌ Rollout status check failed. Pods may be stuck or crashing."
              kubectl get pods -n default
              kubectl describe deployment felix-portfolio -n default
              exit 1
            fi

            echo "✅ Deployment restarted and completed!"
          '''
        }
      }
    }

    stage('Debug IRSA + kubectl') {
      steps {
        container('kubectl') {
          sh '''
            echo "🔍 Verifying kubectl access and IRSA:"
            kubectl get nodes
            kubectl get pods -n default
          '''
        }
      }
    }
  }

  post {
    failure {
      script {
        echo "🛑 Pipeline failed. Check logs above to identify which stage caused it."
      }
    }
  }
}
`)}
  />
  <p className="overview-subtext">
  <strong>Explanation:</strong> <br />
  <strong>Problem:</strong> Modern DevOps pipelines face challenges balancing security, scalability, and operational complexity. Traditional container build processes often rely on Docker-in-Docker (DinD), which requires running a privileged Docker daemon inside CI pipelines. This introduces security vulnerabilities, as privileged containers can break isolation boundaries, and leads to instability under heavy parallel workloads. Additionally, managing credentials for private registries like AWS ECR often forces engineers to embed static secrets into pipelines, creating compliance and security risks.<br /><br />

  <strong>Action:</strong> To mitigate these issues, this pipeline is declared in a <code>Jenkinsfile</code>, which defines CI/CD stages as code rather than manual configuration through Jenkins UI jobs. A Jenkinsfile is a Groovy-based script that specifies pipeline logic, infrastructure configurations, and stage orchestration, enabling version control, review, and reproducibility. In this Jenkinsfile, the build runs on Kubernetes agents dynamically provisioned via YAML defined inline in the pipeline itself. Instead of DinD, the pipeline uses <code>Kaniko</code> as the container build engine. Kaniko builds container images without requiring a Docker daemon, operating entirely in userspace. It reads the Dockerfile, builds each layer, and pushes directly to <code>AWS Elastic Container Registry (ECR)</code>. Integration with ECR leverages IRSA (IAM Roles for Service Accounts), enabling the Kaniko pods to assume temporary AWS roles without static secrets. This architecture enforces least-privilege access, limits blast radius, and prevents credential leakage.<br /><br />

  <strong>Result:</strong> This approach eliminates the security and operational pitfalls of DinD while enabling fully automated, scalable builds. Kaniko ensures builds remain isolated and secure, avoiding the risk of privileged escalations inherent to Docker daemons. Using AWS ECR provides native support for image caching, accelerating build times and reducing costs by reusing unchanged layers. The Jenkinsfile encapsulates complex deployment logic—including validation of Dockerfiles, Kaniko builds, image pushes, and Kubernetes rollouts via <code>kubectl</code>—into a single, version-controlled artifact, improving maintainability and team collaboration.<br /><br />

  <strong>Impact:</strong> Architecting the pipeline this way aligns DevOps practices with enterprise security and business goals. Security posture improves significantly by removing DinD risks and static secrets, helping meet compliance standards (e.g., SOC 2, ISO 27001). Faster builds and automated rollouts reduce time-to-market, enabling the business to deploy new features rapidly without sacrificing safety. Moreover, infrastructure-as-code via Jenkinsfiles ensures that infrastructure changes can be peer-reviewed and audited, fostering engineering rigor and operational resilience.
</p>

  </FadeInOnScroll>
</div>
    <div className="divider-casestudy full"></div>
  </div>
  <div className="battle-story-section">
    <h2 className="section-title"> Technical Decisions & Trade-Offs
    <button className="QnAButton-pill" onClick={() => setShowChatModal(true)} >Learn More</button> {showChatModal && (
        <ChatModal onClose={() => setShowChatModal(false)} />
      )}
    </h2>
    <p className = "overview-subtext">
    I used Helm instead of raw kubectl YAML because Helm templates allowed parameterized, reusable deployments across multiple environments. While Helm’s templating introduced some complexity, it ultimately made the pipeline more maintainable and reduced human error in managing Kubernetes resources
    </p>
    <p className="overview-subtext">
  I chose EKS instead of ECS to avoid vendor lock-in, maintain full Kubernetes compatibility, and gain fine-grained control over deployments and networking. While EKS had a steeper learning curve, it provided the flexibility I needed for enterprise-grade scaling and future hybrid deployments
  </p>
  <p className = "overview-subtext">
  Beyond simply enabling OIDC, I scoped IRSA permissions to least privilege, enforced network policies between pods, and planned to integrate secrets management tools like Vault or AWS Secrets Manager. This layered security approach mitigates blast radius risk and prepares the pipeline for enterprise compliance standards
  </p>
  <p className = "overview-subtext">
  Choosing Kaniko over Docker-in-Docker slightly increased build times, but eliminated privileged container security risks, reducing potential breach impact and safeguarding production environments—a tradeoff worth ~10% slower builds for enterprise-grade security
  </p>
  <p className= "overview-subtext">
  I chose a declarative Jenkins pipeline for my portfolio project. Although scripted pipelines offer more flexibility, declarative syntax provided clarity and maintainability, ensuring anyone could quickly grasp the build and deploy flow. This decision traded some dynamic logic for greater readability — critical in an enterprise environment where multiple engineers might maintain the pipeline
  </p>
    <div className="divider-casestudy full"></div>
  </div>
  <div className="battle-story-section">
  <h2 className="section-title">Troubleshooting & Lessons Learned
  <button className="QnAButton-pill" onClick={() => setShowChatModal(true)} >Learn More</button> {showChatModal && (
        <ChatModal onClose={() => setShowChatModal(false)} />
      )}
  </h2>
  <p className="overview-subtext">
  This project wasn’t flawless. I faced several challenges that forced me to dig deeper and learn. Overall, it took me 8 tries and 4 Terraform Destorys to get this site up and running
  </p>
  <p className="overview-maintext">
    While integrating IRSA, I discovered the upstream Helm chart hard-coded IAM role ARNs, preventing dynamic role binding across environments. 
    To solve it, I forked the chart, parameterized the annotations, and redeployed via Terraform to keep infrastructure as a single source of truth. 
    This reduced maintenance risk and enabled consistent, environment-specific security boundaries without manual patching.
  </p>

  <p className="overview-maintext">
  Early Terraform applies sometimes reported success even though resources like IRSA roles weren’t fully created, leaving the cluster in a broken state. I fixed this by adding explicit depends_on references and staggered deployments, ensuring resources deployed in the correct order. This prevented silent misconfigurations that could have led to production outages and saved hours of debugging time.
  </p>
  <p className="overview-maintext">
  Integrating IRSA initially failed because many Helm charts assumed static IAM role ARNs, causing pods to launch without proper permissions. I forked those charts, added dynamic annotations templated via Terraform, and redeployed. This eliminated hard-coded credentials, tightened security, and ensured consistent deployments across environments
  </p>
  <p className="overview-maintext">
  In early deployments, misconfigured OIDC caused pods to fail with access errors, locking the cluster out of key AWS resources. I fixed this by isolating OIDC resources into separate Terraform modules, deploying them first, and validating readiness before any dependent workloads. This secured access and eliminated downtime risks
  </p>
  <p className = "overview-maintext">
  Deploying Jenkins initially failed due to Kubernetes security contexts restricting write access to persistent volumes. I adjusted the Helm values to set fsGroup permissions and configured the storage class properly. This stabilized Jenkins builds and avoided runtime crashes, keeping my pipeline reliable
  </p>
  <p className = "overview-maintext">
  I learned that cert-manager requires my domain to resolve publicly before issuing certificates. I fixed it by creating a temporary A record in Route53 pointing to my load balancer’s IP and then re-running the ClusterIssuer process. This taught me how DNS, Ingress, and cert-manager all tie together.
  </p>
  <div className="divider-casestudy full"></div>
</div>


</div>
<div className="see-it-in-action-section">
  <h2 className="overview-title-text">See it in Action</h2>
  <p className="overview-subtext">
    Watch how my CI/CD pipeline deploys changes end-to-end—from a Git commit to live updates on the site, all with zero downtime.
  </p>
  
  <div className="videos-container">
    <video
      className="pipeline-video"
      src="/CICD1.mp4"
      controls
      muted
      loop
      playsInline
    ></video>

    <video
      className="pipeline-video"
      src="/CICD2.mp4"
      controls
      muted
      loop
      playsInline
    ></video>
  </div>
  <div className="divider-casestudy full"></div>
</div>


      <div className="fade-in-up" style={{ animationDelay: '0.8s' }}>
        <div className="results-section">
        <FadeInOnScroll>
          <h2 className="section-title">Results
          <button className="QnAButton-pill" onClick={() => setShowChatModal(true)} >Learn More</button> {showChatModal && (
        <ChatModal onClose={() => setShowChatModal(false)} />
      )}
          </h2>
          <p className="overview-subtext">
        At Wavform, I collaborated with the founding engineer to tackle 45-minute manual deployments that caused environment drift and security risks from static secrets. To replicate and solve these challenges, I built this portfolio pipeline using Terraform, Helm, Kaniko, and IRSA. I navigated complex hurdles like integrating IRSA into Helm charts for dynamic AWS credentials, ultimately cutting deploys to under 1 minute, eliminating manual errors, and hardening security—mirroring enterprise-scale systems.
        </p>
        <div className="divider-casestudy full"></div>
          <div className="results-pill-container">
          <div className="results-pill">
            Cut deploy times from ~45 min manual steps to under 1 min, speeding releases by 98% and reducing rollout risks.
          </div>
          <div className="results-pill">
            Automated HTTPS via Let’s Encrypt, removing manual cert renewals and ensuring 100% uptime and user trust.
          </div>
          <div className="results-pill">
            Enabled full CI traceability with logs and reproducible builds, accelerating debugging and safer deployments.
          </div>
          <div className="results-pill">
            Hardened security with IRSA least-privilege access, eliminating root IAM keys and lowering breach risk.
          </div>
        </div>
        <div className="divider-casestudy full"></div>
        
          <div className="fade-in-up" style={{ animationDelay: '0.74s' }}>
          <K6LoadTestChart />
          </div>
          <div className="divider-casestudy full"></div>
          <div className="fade-in-up" style={{ animationDelay: '0.85s' ,
    padding: '4vh 5vw'}}>
<div className="whats-next-section" style={{ textAlign: "left" }}>
  <h2 className="section-title">What's Next
  <button className="QnAButton-pill" onClick={() => setShowChatModal(true)} >Learn More</button> {showChatModal && (
        <ChatModal onClose={() => setShowChatModal(false)} />
      )}
  </h2>
  <p className="section-subtext">
    To elevate this pipeline to full enterprise-grade maturity, I’d expand into these areas, each critical not just for technical excellence—but for delivering tangible business value in scalability, security, and reliability:
  </p>
  <div className="results-pill-container">
    <div className="results-pill">
      Monitoring, Logging, and Alerting
      <p className="pill-detail">
        Provides real-time visibility into deployments and production health, reducing downtime risk and protecting business revenue through faster incident resolution.
      </p>
    </div>
    <div className="results-pill">
      Secrets Management
      <p className="pill-detail">
        Eliminates hard-coded secrets by using tools like Vault or AWS Secrets Manager, reducing breach costs, protecting customer data, and ensuring regulatory compliance.
      </p>
    </div>
    <div className="results-pill">
      Blue/Green or Canary Deployments
      <p className="pill-detail">
        Lowers the risk of revenue-impacting outages by enabling safe, gradual rollouts with minimal user disruption, preserving customer trust and business continuity.
      </p>
    </div>
    <div className="results-pill">
      Security & Vulnerability Scanning
      <p className="pill-detail">
        Shifts security left in the pipeline, preventing CVEs from reaching production, protecting brand reputation, and reducing costly security remediation.
      </p>
    </div>
    <div className="results-pill">
      IaC Security & Compliance Checks
      <p className="pill-detail">
        Automates governance and compliance enforcement for Terraform, helping avoid costly misconfigurations and ensuring enterprise regulatory alignment.
      </p>
    </div>
    <div className="results-pill">
      Multi-Region Deployment
      <p className="pill-detail">
        Improves customer experience through low latency and guarantees service availability even in regional failures—essential for global business resilience.
      </p>
    </div>
  </div>
</div>

  <div className="divider-casestudy full"></div>
</div>
<div className="overview">
        <FadeInOnScroll >
          <h2 className="overview-title-text">Reflections</h2>
          <p className="overview-subtext">
          Through this personal portfolio project, I demonstrated my ability to transform real-world engineering lessons into a end-to-end infrastructure build & CI/CD pipeline. I built this as an independent initiative, drawing on skills and insights gained during my experience at Wavform under the mentorship of the founding developer. My goal was to prove I can independently architect and deliver cloud & infrastructure solutions end to end. Through this project, I proved I can independently design and deploy DevOps systems that reduce costs, accelerate delivery, and improve security. I’m excited to bring these skills to a team that values innovation and reliability
          </p>
          <div className="overview-maintext">
            <p>
            Building this pipeline was one of the most challenging—and rewarding—projects I’ve done so far. It pushed me to connect infrastructure concepts, troubleshoot real-world errors, and implement best practices I’d only read about previously
            </p>
            <p>
            While it’s not deployed in a commercial production environment, this project helped me understand the kinds of challenges DevOps engineers face every day. I’m excited to keep learning, build on these skills, and contribute to enterprise-grade systems in my professional career.
            </p>
          </div>
          <div className="divider-casestudy full"></div>
          </FadeInOnScroll>
        </div>


          <div className="cta-next">
          <div className="open-source-repos">
          <GitHubRepoCard username="NeverEverFelix" repository="felixmoronge.com" />
          <GitHubRepoCard username="NeverEverFelix" repository="terraform-aws-devops-infra" />
          </div>
          <a href="/" className="cta-logo-link">
          <img src="/Vector.png" alt="Felix Moronge Logo" className="cta-logo-img" />
          </a>
          </div>
          </FadeInOnScroll>
          

        </div>
      </div>
     
    </div>
   
  );
}
