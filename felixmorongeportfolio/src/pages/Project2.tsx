import '../styles/Project2.css';
import { useEffect } from 'react';

export default function Project2() {
  useEffect(() => {
    document.title = "Building CI/CD with Jenkins and Terraform | Felix Moronge";

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "Scaling Fabrics Web with Production-Grade DevOps",
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
        "@id": "https://www.felixmoronge.com/Project2"
      },
      "url": "https://www.felixmoronge.com/Project2",
      "datePublished": "2025-06-01",
      "dateModified": "2025-06-18",
      "image": "https://www.felixmoronge.com/DevOpsPortfolioSite.png",
      "description": "How I scaled the Fabrics Web platform with a production-grade DevOps pipeline and CoreML infrastructure using Terraform, Jenkins, EKS, and Istio. This article outlines the architecture for real-time ML inference, microservices, and blue-green deployments."
    });

    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return (
    <div className="project2-main">
      <div className="section-header">
        <div className="development-pill">In Development</div>
        <h1 className="title">
          Scaling Fabrics Web with Production-Grade DevOps
        </h1>
        <p className="title-subtext">
          How I architected and deployed a secure, autoscaling, ML-powered platform for Fabrics Web
          using Terraform, EKS, Jenkins, Service Mesh, Istio, and Blue-Green CI/CD.
        </p>
      </div>

      <div className="image">
        <img src="/DevOpsPortfolioSite.png" alt="Fabrics Case Study Screenshot" />
      </div>

      <div className="divider-casestudy">
        <div className="divider-line-casestudy left"></div>
        <div className="divider-line-casestudy right"></div>
      </div>

      <div className="overview">
        <h2 className="overview-title-text">Overview</h2>
        <div className="overview-maintext">
          <p>
            Fabrics is expanding beyond mobile into a full-featured web platform, powered by CoreML-driven outfit and user recommendations. I led the design and deployment of a microservices-based, production-grade Kubernetes infrastructure — built to scale with real user traffic, enable machine learning inference, and support secure, observable service-to-service communication.
          </p>
          <p>
            At the heart of the system is a real-time interaction data pipeline: user behavior is logged, processed, and passed to a server-hosted CoreML model, which recommends styles, inspirations, and users to follow. To support this, I implemented a service mesh (Istio) for traffic control, telemetry, mTLS, and resilient communication across services.
          </p>
        </div>
        <div className="divider-casestudy full"></div>
      </div>



      <div className="metadata-section">
        <div className="metadata-block">
          <h2 className="section-title">Product</h2>
          <p className="section-subtext">Fabrics Web Platform</p>
        </div>
        <div className="divider-casestudy full"></div>

        <div className="metadata-block">
          <h2 className="section-title">My Role</h2>
          <p className="section-subtext">Founder + Product Designer + UI/UX + DevOps Engineer</p>
        </div>
        <div className="divider-casestudy full"></div>

        <div className="metadata-block">
          <h2 className="section-title">Tech Stack</h2>
          <p className="section-subtext">
            Infra: Terraform, AWS EKS, Jenkins (Helm), IRSA, Helm, Kaniko, NGINX Ingress,<br />
            CertManager, Route53
          </p>
          <p className="section-subtext">
            Compute: Kubernetes, Docker, AWS ECR, CoreML (server-hosted), Swift/REST
          </p>
          <p className="section-subtext">
            Data Pipeline: Istio, Prometheus, Grafana, Redis Streams
          </p>
        </div>
        <div className="divider-casestudy full"></div>
      </div>

      <div className="highlights-section">
        <h2 className="section-title">Key Architecture Highlights</h2>
        <div className="highlight-list">
          <div className="highlight-item">
            <p className="highlight-heading">Microservices</p>
            <p className="highlight-body">Containerized services for web, interaction logging, preprocessing, ML inference</p>
          </div>
          <div className="highlight-item">
            <p className="highlight-heading">Data Pipeline</p>
            <p className="highlight-body">User interactions → preprocessing → CoreML model → recommendation results</p>
          </div>
          <div className="highlight-item">
            <p className="highlight-heading">CoreML Inference</p>
            <p className="highlight-body">Hosted on a dedicated macOS-based instance in Kubernetes (via node affinity)</p>
          </div>
          <div className="highlight-item">
            <p className="highlight-heading">Istio Mesh</p>
            <p className="highlight-body">Secure traffic between services with mTLS, retries, and distributed tracing</p>
          </div>
          <div className="highlight-item">
            <p className="highlight-heading">CI/CD</p>
            <p className="highlight-body">Jenkins + Kaniko + Helm + rollout restart for blue-green deployments</p>
          </div>
          <div className="highlight-item">
            <p className="highlight-heading">Blue-Green Deploy</p>
            <p className="highlight-body">Ingress-controlled traffic shifting between active & preview versions</p>
          </div>
        </div>
        <div className="divider-casestudy full"></div>
      </div>

      <div className="coreml-hosting">
        <h2 className="section-title">CoreML Hosting Strategy</h2>
        <div className="pill-container">
          <ul className="pill-list">
            <li>Hosted on a macOS-based Kubernetes node (e.g., EC2 Mac or bare-metal)</li>
            <li>Uses node affinity and taints to isolate model workloads from general workloads</li>
            <li>Inference server is a Swift-based REST API, packaged in a container and deployed via Helm</li>
            <li>Each model version (e.g., coreml-v1.4) is tagged, monitored, and safely upgraded via Istio routing rules</li>
          </ul>
        </div>
        <div className="production-benefits">
  <h2 className="section-title">Production Benefits</h2>
  <div className="benefits-table">
    <div className="benefits-header">
      <span className="benefit-feature">Feature</span>
      <span className="benefit-value">Value Delivered</span>
    </div>

    <div className="benefit-row">
      <span className="benefit-feature">Modularity</span>
      <span className="benefit-value">
        Microservice model allows isolated iteration and scalable deployments
      </span>
    </div>

    <div className="benefit-row">
      <span className="benefit-feature">CI/CD</span>
      <span className="benefit-value">
        Model updates handled with same rigor as app code — full rollback and canaries
      </span>
    </div>

    <div className="benefit-row">
      <span className="benefit-feature">Real-Time UX</span>
      <span className="benefit-value">
        Personalized recommendations delivered within milliseconds of interaction
      </span>
    </div>

    <div className="benefit-row">
      <span className="benefit-feature">Telemetry</span>
      <span className="benefit-value">
        Every inference and model version is observable, testable, and auditable
      </span>
    </div>
  </div>
</div>

<div className="divider-casestudy full"></div>
      </div>
      <div className="reflection-section">
  <p className="reflection-header">
    This system directly mirrors real-world production ML pipelines and DevOps patterns used at companies like Meta and Airbnb:
  </p>

  <ul className="reflection-list">
    <li>Modular microservice design</li>
    <li>ML recommendations with CoreML and real user feedback</li>
    <li>Scalable, secure Kubernetes-native architecture</li>
    <li>GitOps-friendly, auditable CI/CD via Kaniko + Helm + Jenkins</li>
    <li>Controlled release management via blue-green deployments</li>
    <li>Service discovery, routing, and observability via Istio service mesh</li>
  </ul>

  <p className="reflection-note">
    All code, pipeline steps, and Terraform modules are documented and demonstrated step-by-step on my <a href="/tutorials" className="tutorial-link">Tutorials page.</a>
  </p>

  <a href="/Project3" className="next-project-link">Next Project</a>
</div>
    </div>
  );
}
