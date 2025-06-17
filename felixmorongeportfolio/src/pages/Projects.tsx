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
      </div>
    );
  }
  