import '../styles/Projects.css';
import { useEffect } from 'react';
import FadeInOnScroll from '../components/FadeInOnScroll';
import MermaidChart from '../components/MermaidChart';
import cicdpipeline from '../components/charts/cicdpipeline';
import  eksInfra  from '../components/charts/eksInfra';
import  helmIngress  from '../components/charts/helmIngress';
import GitHubRepoCard from '../components/GitHubRepoCard';
import K6LoadTestChart from '../components/K6LoadTestChart';



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
          <h1 className="title">Case Study: Engineering Enterprise-Grade CI/CD and Kubernetes Infrastructure for Production-Ready Deployments</h1>
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
            Many personal sites rely on managed platforms like Vercel, limiting control over scalability, security, and enterprise-grade reliability. To showcase my ability to build robust production infrastructure, I engineered a full CI/CD pipeline and Kubernetes-based deployment for my portfolio. 
            </p>
            <p>
            This architecture uses Terraform for infrastructure as code, Kaniko for container builds, Nginx for high-performance serving, and integrated observability with Prometheus and Grafana.   
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
            <p className="section-subtext">Felix Moronge Portfolio Site</p>
            </FadeInOnScroll>
          </div>
          <FadeInOnScroll>
          <div className="divider-casestudy full"></div>
          </FadeInOnScroll>
          <div className="metadata-block">
          <FadeInOnScroll>
            <h2 className="section-title">My Role</h2>
            <p className="section-subtext">Fullstack Developer + Cloud Infrastructure Engineer</p>
            </FadeInOnScroll>
          </div>
          <FadeInOnScroll>
          <div className="divider-casestudy full"></div>
          </FadeInOnScroll>
          <div className="metadata-block">
          <FadeInOnScroll>
            <h2 className="section-title">Skills</h2>
            <p className="section-subtext">
              UI/UX<br />
              DevOps<br />
              Fullstack Development<br />
              Cloud & AWS
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
              AWS EKS + ECR, GitHub, Docker, kubectl, Helm, Jenkins, Terraform, Prometheus, Grafana
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
            Legacy Deployment: Manual Processes and Technical Gaps
            </p>
            <div className="legacy-deployment">
              <p><strong>Before rebuilding my portfolio infrastructure, the site was hosted via a single EC2 instance provisioned manually through the AWS console. I installed Docker, containerized the frontend, and served it with Nginx alongside python3-certbot-nginx for SSL configuration.</strong></p>
              
              <p><strong>However, this setup introduced significant limitations</strong></p>
              <ul>
                <li>❌ No CI/CD pipeline: All deployments required manual rebuilds and file transfers via scp, increasing human error risk and slowing iteration cycles.</li>
                <li>❌ Lack of automated security: SSL certificates and domain bindings were managed manually, leaving room for misconfigurations and downtime.</li>
                <li>❌ Limited containerization: Despite using Docker, deployments often involved running npm run build directly on the EC2 instance rather than following a consistent container lifecycle.</li>
                <li>❌ No Infrastructure as Code: The environment lacked reproducibility, version control, or the ability to provision identical infrastructure reliably.</li>
              </ul>
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
          <p className="section-subtext">Infra goals, CI/CD stages, bottlenecks solved</p>
          <div className="whiteboard-body">
            <p className="whiteboard-heading">Infrastructure Whiteboard</p>
            <p className="whiteboard-subtext">I mapped out:</p>
            <ul className="whiteboard-list">
              <li>CI/CD flow from git push to kubectl rollout</li>
              <li>IAM delegation via IRSA</li>
              <li>Jenkins-in-K8s integration with Helm, ECR, and Kaniko</li>
              <li>DNS + TLS via Let’s Encrypt and Route 53</li>
           </ul>
              <div className="diagram-wrapper">
              <FadeInOnScroll>
              <MermaidChart chart={eksInfra} />
              </FadeInOnScroll>
              </div>
          </div>
          </FadeInOnScroll>
        </div>
      </div>

      <div className="fade-in-up" style={{ animationDelay: '0.6s' }}>
        <div className="infra-diagrams">
        <FadeInOnScroll>
          <h2 className="section-title">Infra Diagrams</h2>
          <p className="section-subtext">Terraform provisioning, EKS cluster structure, Jenkins pipeline layout</p>
          <div className="diagrams-body">
            <p className="diagrams-heading">Infra Diagrams</p>
            <ol className="diagrams-list">
              <li>Terraform layout – Provisioned all infra from scratch, including EKS cluster, IAM roles, Helm charts, VPCs</li>
              <li>Jenkins Helm chart – Deployed Jenkins inside Kubernetes with persistent volume, external Ingress + HTTPS</li>
              <li>Kaniko build agent – Custom Jenkins PodTemplate with IRSA permissions to push to AWS ECR</li>
              <li>Nginx + Vite – Multi-stage Docker build optimized for static delivery, deployed as Kubernetes Deployment + Service</li>
            </ol>
          </div>
          </FadeInOnScroll>
          <div className="diagram-wrapper">
              <FadeInOnScroll>
              <MermaidChart chart={helmIngress} />
              </FadeInOnScroll>
          </div>
        </div>
      </div>

      <div className="fade-in-up" style={{ animationDelay: '0.7s' }}>
        <div className="final-infrastructure">
        <FadeInOnScroll>
          <h2 className="section-title">Final Infrastructure</h2>
          <p className="section-subtext">
            Live deployment pipeline, Jenkins + Kaniko + ECR, Ingress TLS
          </p>
          <div className="final-body">
            <p className="final-heading">Final Infrastructure</p>
            <ul className="final-list">
              <li>✅ GitHub → Jenkins webhook triggers pipeline</li>
              <li>✅ Kaniko container builds image → pushes to ECR</li>
              <li>✅ Jenkins applies updated manifest via kubectl rollout restart</li>
              <li>✅ Portfolio auto-updates live at https://www.felixmoronge.com</li>
              <li>✅ TLS certificate provisioned via cert-manager with Let’s Encrypt</li>
              <li>✅ IngressController routes all subdomains (e.g., jenkins.felixmoronge.com)</li>
            </ul>
          </div>
          </FadeInOnScroll>
          <div className="diagram-wrapper">
              <FadeInOnScroll>
              <MermaidChart chart={cicdpipeline } />
              </FadeInOnScroll>
         </div>
        </div>
      </div>

      <div className="fade-in-up" style={{ animationDelay: '0.8s' }}>
        <div className="results-section">
        <FadeInOnScroll>
          <h2 className="section-title">Results</h2>
          <p className="section-subtext">
            Deployment time reduction, zero-downtime rollouts, CVEs mitigated, infrastructure as code compliance
          </p>
          <div className="results-pill-container">
            <div className="results-pill">Reduced from ~20 min manual process to &lt;1 min from git push</div>
            <div className="results-pill">Fully automated HTTPS via Let’s Encrypt, 100% uptime</div>
            <div className="results-pill">CI job history with success/failure logs, reproducible builds</div>
            <div className="results-pill">Least privilege via IRSA, no root IAM credentials stored</div>
          </div>
          <div className="fade-in-up" style={{ animationDelay: '0.74s' }}>
          <K6LoadTestChart />
          </div>
          <div className="cta-next">
            <p className="cta-text">
              See the full step-by-step breakdown in my Tutorials section —<br />
              including detailed approaches, code examples, and live demos of the entire process.
            </p>
            
          <div className="open-source-repos">
          <GitHubRepoCard username="NeverEverFelix" repository="felixmoronge.com" />
          <GitHubRepoCard username="NeverEverFelix" repository="terraform-aws-devops-infra" />
          </div>
            <a href="/StoryBuilder My entry point to DevOps Case Study" className="cta-link">Next Project</a>
          </div>
          </FadeInOnScroll>
          

        </div>
      </div>
     
    </div>
   
  );
}
