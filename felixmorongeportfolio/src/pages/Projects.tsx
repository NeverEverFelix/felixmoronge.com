import '../styles/Projects.css';
export default function Projects() {
    return (
      <div className="projects-main">
        <div className="section-header">
          <div className="development-pill">Live</div>
            <h1 className="title">Building Enterprise-Grade CI/CD for My Portfolio Site</h1>
            <p className="title-subtext">
            How I architected and deployed a production-grade DevOps pipeline from scratch<br />
            using AWS, Terraform, and Kubernetes
            </p>
          </div>
        
      

      <div className="image">
      <img src="/DevOpsPortfolioSite.png" alt="Case Study Screenshot" />
      </div>

      <div className="divider-casestudy">
      <div className="divider-line-casestudy left"></div>
      <div className="divider-line-casestudy right"></div>
      </div>

     <div className="overview">
  <h2 className="overview-title-text">Overview</h2>
  <p className="overview-subtext">
    Initial DevOps challenges, bottlenecks, security risks, and scalability goals; what wasn’t working before
  </p>
  <div className="overview-maintext">
    <p>
      Before this project, my personal portfolio was deployed via basic hosting with no CI/CD pipeline, no monitoring, and no scalable architecture. It couldn’t handle updates safely, lacked SSL, and was entirely manual — which meant longer iteration cycles and zero rollback protection.
    </p>
    <p>
      I decided to rebuild the entire infrastructure stack to reflect what I'd deploy at a mid-to-large tech company: a fully containerized frontend, built with Vite + Nginx, deployed to a Kubernetes cluster (EKS), with image builds handled by Kaniko and all provisioning done via Terraform.
    </p>
    <p>
      The goal was simple: treat my portfolio like a real production-grade web service — and use it to showcase DevOps principles at scale.
    </p>
  </div>
  <div className="divider-casestudy full"></div>
</div>
<div className="metadata-section">
  <div className="metadata-block">
    <h2 className="section-title">Product</h2>
    <p className="section-subtext">Felix Moronge DevOps Portfolio Site</p>
  </div>
  <div className="divider-casestudy full"></div>

  <div className="metadata-block">
    <h2 className="section-title">My Role</h2>
    <p className="section-subtext">Fullstack Developer + DevOps</p>
  </div>
  <div className="divider-casestudy full"></div>

  <div className="metadata-block">
    <h2 className="section-title">Skills</h2>
    <p className="section-subtext">
      UI/UX<br />
      DevOps<br />
      Fullstack Development<br />
      Cloud & AWS
    </p>
  </div>
  <div className="divider-casestudy full"></div>

  <div className="metadata-block">
    <h2 className="section-title">Tools</h2>
    <p className="section-subtext">
      AWS EKS + ECR, GitHub, Docker, kubectl, Helm, Jenkins, Terraform, Prometheus, Grafana
    </p>
  </div>
  <div className="divider-casestudy full"></div>

  <div className="metadata-block">
    <h2 className="section-title">Old Infrastack</h2>
    <p className="section-subtext">
      Single-server deployment, manual deploys, no rollback strategy
    </p>
    <div className="legacy-deployment">
    <p><strong>Legacy Deployment</strong></p>
    <p><strong>Before the rebuild:</strong></p>
    <p>
      Manually launched an EC2 instance via AWS GUI, installed Docker, containerized the project, and served it with Nginx and python3-certbot-nginx. Site was hosted at <a href="http://www.felixmoronge.com" target="_blank" rel="noopener noreferrer">http://www.felixmoronge.com</a>.
    </p>
    <p><strong>Limitations:</strong></p>
    <ul>
      <li>❌ No CI/CD — deployments required manual rebuilds and scp</li>
      <li>❌ No automated HTTPS, domain binding, or rollback</li>
      <li>❌ No true containerization — raw EC2 running npm run build</li>
      <li>❌ No Infrastructure as Code — zero reproducibility or version control</li>
    </ul>
  </div>
  <div className="quote-block">
  <p>
    <span className="quote-faded">The goal: automate the full path from code commit to production deployment,</span><br />
    <span className="quote-emphasized">without ever touching the server.</span>
  </p>
</div>
  </div>
  <div className="divider-casestudy full"></div>
      







</div>


      </div>
    );
  }
  