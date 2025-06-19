import '../styles/Project3.css';
import { useEffect } from 'react';
import FadeInOnScroll from '../components/FadeInOnScroll';

export default function Project3() {
  useEffect(() => {
    document.title = "StoryBuilder – First Step in DevOps | Felix Moronge";

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "StoryBuilder – A Multi-Agent AI Engine and the First Step in My DevOps Journey",
      "author": {
        "@type": "Person",
        "name": "Felix Moronge",
        "url": "https://www.felixmoronge.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "FelixMoronge.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.felixmoronge.com/fabrics.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.felixmoronge.com/Project3"
      },
      "url": "https://www.felixmoronge.com/Project3",
      "datePublished": "2025-05-01",
      "image": "https://www.felixmoronge.com/DevOpsPortfolioSite.png",
      "description": "How I deployed a containerized, full-stack AI storytelling platform using basic CI/CD practices — and what I learned about real-world infrastructure in the process."
    });

    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="project3-main">
      <div className="fade-in-up" style={{ animationDelay: '0s' }}>
        <div className="section-header">
          <div className="development-pill">Live</div>
          <h1 className="title">
            StoryBuilder – A Multi-Agent AI Engine and the First Step in My DevOps Journey
          </h1>
          <p className="title-subtext">
            How I deployed a containerized, full-stack AI storytelling platform using basic CI/CD practices — and what I learned about real-world infrastructure in the process.
          </p>
        </div>
      </div>

      <div className="fade-in-up" style={{ animationDelay: '0.1s' }}>
        <div className="image">
          <img src="/DevOpsPortfolioSite.png" alt="StoryBuilder case study preview" />
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
        <FadeInOnScroll>
          <h2 className="overview-title-text">Overview</h2>
          <p className="overview-subtext">
            My first CI/CD project — functional but not scalable or reliable. It exposed the gaps that drove my shift to real-world DevOps.
          </p>
          <div className="overview-maintext">
            <p>
              StoryBuilder is a collaborative AI storytelling app where agents with distinct personas — like “Stephen King,” “Dr. Suess,” and “Shakespeare” — propose, vote, and build full-length stories chapter-by-chapter. From the first prompt to the final paragraph, everything is shaped through agent consensus, powered by OpenAI.
            </p>
            <p>
              While the product design pushed creative boundaries, the infrastructure was still early-stage. At the time, I implemented what I thought was DevOps: I Dockerized the full stack, set up a CI/CD pipeline using GitHub Actions, and hosted everything on a manually configured EC2 instance. It worked — but it wasn’t production-grade.
            </p>
            <p>
              This case study marks a critical stepping stone in my DevOps journey — one that revealed the limitations of basic infrastructure and ultimately motivated me to build real-world, fault-tolerant platforms like Fabrics and Wavform.
            </p>
          </div>
          <div className="divider-casestudy full"></div>
          </FadeInOnScroll>
        </div>
      </div>

      <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
        <div className="stack-section">
        <FadeInOnScroll>
          <h2 className="section-title">Stack Overview</h2>
          <div className="stack-table">
            <div className="stack-row header">
              <span className="stack-label">Frontend</span>
              <span className="stack-value">React + Vite</span>
            </div>
            <div className="stack-row">
              <span className="stack-label">Backend</span>
              <span className="stack-value">Node.js + Express<br />+ OpenAI API</span>
            </div>
            <div className="stack-row">
              <span className="stack-label">Agents</span>
              <span className="stack-value">AI Personas<br />(Creative,<br />Logical, Critical)</span>
            </div>
            <div className="stack-row">
              <span className="stack-label">Workflow</span>
              <span className="stack-value">
                Phase-based<br />generation: Setup<br />
                → Outline →<br />Chapters
              </span>
            </div>
            <div className="stack-row">
              <span className="stack-label">Deployment Stack</span>
              <span className="stack-value">Docker, GitHub Actions, AWS EC2, Certbot</span>
            </div>
            <div className="stack-row">
              <span className="stack-label">Live Site</span>
              <span className="stack-value">storybuilder.online</span>
            </div>
          </div>
          <div className="divider-casestudy full"></div>
          </FadeInOnScroll>
        </div>
      </div>

      <div className="fade-in-up" style={{ animationDelay: '0.5s' }}>
        <div className="devops-early-section">
        <FadeInOnScroll>
          <h2 className="section-title">DevOps Implementation (Early Version)</h2>
          <ul className="devops-list">
            <li>CI/CD via GitHub Actions on main branch</li>
            <li>Built Docker image</li>
            <li>SSH'd into EC2 instance</li>
            <li>Stopped the running container</li>
            <li>Ran the new container manually</li>
            <li>Hosting</li>
            <li>EC2 instance with Docker installed manually</li>
            <li>TLS added via Certbot on NGINX</li>
            <li>DNS managed with Route53, domain via Namecheap</li>
          </ul>
          <div className="divider-casestudy full"></div>
          </FadeInOnScroll>
        </div>
      </div>

      <div className="fade-in-up" style={{ animationDelay: '0.6s' }}>
        <div className="missing-section">
        <FadeInOnScroll>
          <h2 className="section-title">What Was Missing (And Why It Wasn’t Production-Grade)</h2>
          <div className="missing-table">
            <div className="table-row header">
              <span className="table-col">Limitation</span>
              <span className="table-col">Why It Matters</span>
            </div>
            <div className="table-row">
              <span className="table-col">Manual Server Setup</span>
              <span className="table-col">No reproducibility; required SSH access and fragile state</span>
            </div>
            <div className="table-row">
              <span className="table-col">Single EC2 Instance</span>
              <span className="table-col">No autoscaling, no failover, no service isolation</span>
            </div>
            <div className="table-row">
              <span className="table-col">Single Docker Image</span>
              <span className="table-col">No separation of frontend/backend containers</span>
            </div>
            <div className="table-row">
              <span className="table-col">No Rollback Mechanism</span>
              <span className="table-col">Deployment failure = manual fix; no rollback support</span>
            </div>
            <div className="table-row">
              <span className="table-col">No IRSA / IAM Scoping</span>
              <span className="table-col">AWS credentials were not securely isolated</span>
            </div>
            <div className="table-row">
              <span className="table-col">No Observability</span>
              <span className="table-col">No Prometheus, Grafana, or alerting for outages</span>
            </div>
            <div className="table-row">
              <span className="table-col">No Terraform or IaC</span>
              <span className="table-col">Infrastructure was not declarative or auditable</span>
            </div>
            <p className="bottom-line">
              Bottom line: It worked — but it couldn’t scale, recover, or secure itself the way real-world systems must.
            </p>
          </div>
          <div className="divider-casestudy full"></div>
          </FadeInOnScroll>
        </div>
      </div>

      <div className="fade-in-up" style={{ animationDelay: '0.7s' }}>
        <div className="crucial-section">
        <FadeInOnScroll>
          <h2 className="section-title">Why This Was Crucial Anyway</h2>
          <ul className="crucial-list">
            <li><span className="emoji">✅</span> It gave me my first exposure to CI/CD, containers, and automated deploys</li>
            <li><span className="emoji">✅</span> I shipped a live product under a custom domain with TLS</li>
            <li><span className="emoji">✅</span> I learned what doesn’t scale and how fragile manual deployments are</li>
            <li><span className="emoji">✅</span> It became the catalyst for me to build fully automated, fault-tolerant platforms later</li>
          </ul>
          <div className="divider-casestudy full"></div>
          </FadeInOnScroll>
        </div>
      </div>

      <div className="fade-in-up" style={{ animationDelay: '0.8s' }}>
        <div className="response-section">
        <FadeInOnScroll>
          <h2 className="section-title">What I Did Next (In Response)</h2>
          <div className="response-content">
            <p>After StoryBuilder, I realized:</p>
            <blockquote className="quote">
              “Shipping something live is one thing. Shipping something stable, secure, and scalable is another.”
            </blockquote>
            <p>So I immediately began learning:</p>
            <ul className="response-list">
              <li>Terraform for reproducible cloud provisioning</li>
              <li>Kubernetes and EKS for container orchestration and auto-healing</li>
              <li>IRSA for secure, production-grade IAM permissions</li>
              <li>Jenkins with PodTemplates and Kaniko for secure in-cluster CI/CD</li>
              <li>Full observability using Prometheus, Grafana, and Loki</li>
            </ul>

            <p className="live-site">
              Live Site: <a href="https://storybuilder.online" target="_blank" rel="noopener noreferrer">https://storybuilder.online</a>
            </p>
            <p className="tutorials-link">
              All code, pipeline steps, and demonstrations are documented and demonstrated step-by-step on my <a href="/Tutorial">Tutorials page</a>.
            </p>
          </div>
          <div className="divider-casestudy full"></div>
          </FadeInOnScroll>
        </div>
      </div>
    </div>
  );
}
