export default function HeroSection() {
    return (
      <section>
        {/* Top nav */}
        <nav className="flex gap-8 mb-12 text-sm font-light text-white">
          <a href="#">Work</a>
          <a href="#">Resume</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
        </nav>
  
        {/* Hero content */}
        <div className="mb-16">
          <h1 className="text-6xl font-bold leading-tight">
            Hello, I’m Felix<br />Moronge
          </h1>
          <h2 className="text-lg text-gray-500 mt-2">DevOps Engineer</h2>
  
          <p className="mt-6 text-sm max-w-md leading-relaxed text-white/80">
            I design and automate scalable infrastructure using AWS, Docker, Kubernetes, and Terraform. 
            From building CI/CD pipelines to deploying cloud-native apps, I’ve delivered production-grade 
            systems for startups and AI-driven platforms. Whether it’s zero-downtime deploys, real-time 
            observability, or seamless automation—I ship fast, reliable code that powers real users.
          </p>
        </div>
  
        {/* Footer contact */}
        <footer className="flex gap-8 text-sm text-white/60">
          <a href="#">contact</a>
          <a href="#">github</a>
          <a href="#">linkedin</a>
        </footer>
      </section>
    );
  }
  