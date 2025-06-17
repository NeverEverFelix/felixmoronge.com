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

      <div className="divider">
      <div className="divider-line left"></div>
      <div className="divider-line right"></div>
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
  <div className="divider full"></div>
</div>

      </div>
    );
  }
  