import '../styles/Projects.css';
import { useEffect } from 'react';
import FadeInOnScroll from '../components/FadeInOnScroll';
import MermaidChart from '../components/MermaidChart';
import cicdpipeline from '../components/charts/cicdpipeline';
import  eksInfra  from '../components/charts/eksInfra';
import  helmIngress  from '../components/charts/helmIngress';
import GitHubRepoCard from '../components/GitHubRepoCard';
import K6LoadTestChart from '../components/K6LoadTestChart';
import LegacyIssuesSwipeCards from '../components/LegacyIssuesSwipeCards';




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
  
  return (
   
    <div className="projects-main">
      
      <div className="fade-in-up" style={{ animationDelay: '0s' }}>
        <div className="section-header">
          <div className="development-pill">Live</div>
          <h1 className="title">Enterprise-Grade CI/CD Pipeline: Cutting Deploy Times and Delivering Reliable Updates</h1>
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
          <h2 className="overview-title-text">Overview</h2>
          <p className="overview-subtext">
          Identifying DevOps Bottlenecks and Architectural Gaps
          </p>
          <div className="overview-maintext">
            <p>
            When I launched my portfolio site, deploying updates was slow, manual, and error-prone. Hence, I engineered a Kaniko- and Helm-powered Jenkins CI/CD pipeline for Dockerized AWS EKS deployments, slashing release cycles by 98% and accelerating time-to-market for feature delivery.
            </p>
            <p>
            This pipeline ensures secure, reliable updates, showcasing my ability to build enterprise-grade DevOps systems that deliver real business value.   
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
          — my personal brand platform, engineered to showcase my skills and operate with enterprise-grade reliability, security, and scalability.
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
            <h2 className="section-title">Old Infrastack</h2>
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
          <h2 className="section-title">Architecture Whiteboard</h2>
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
    <h2 className="section-title">Infrastructure Diagrams</h2>
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
      <h2 className="section-title">Final Infrastructure Pipeline</h2>
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
          <h2 className="section-title">Results</h2>
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
          <div className="cta-next">
            <p className="overview-subtext">
            Through this personal portfolio project, I demonstrated my ability to transform real-world engineering lessons into a production-grade CI/CD pipeline. I built this as an independent initiative, drawing on skills and insights gained during my experience at Wavform under the mentorship of the founding developer. My goal was to prove I can independently architect and deliver enterprise-grade solutions from end to end. Through this project, I proved I can independently design and deploy enterprise-grade DevOps systems that reduce costs, accelerate delivery, and improve security. I’m excited to bring these skills to a team that values innovation and reliability
            </p>
            <div className="divider-casestudy full"></div>
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
