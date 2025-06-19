import '../styles/HeroSection.css';
import ProjectsScroll from './ProjectsScroll';

type Props = {
  activeSection: string;
  onSectionClick: (id: string) => void;
};

export default function HeroSection({ activeSection, onSectionClick }: Props) {
  return (
    <section className="hero-text">
      <nav className="hero-nav fade-in-up" style={{ animationDelay: '0s' }}>
        <a href="/Projects">Projects</a>
        <a href="/Tutorial">Tutorials</a>
        <a href="/About">About</a>
      </nav>

      <div className="hero-content">
      <h1 className="hero-heading">
          <span style={{ animationDelay: '0.2s' }}>Hello,</span>{' '}
          <span style={{ animationDelay: '0.3s' }}>I’m</span>{' '}
          <span style={{ animationDelay: '0.4s' }}>Felix</span><br />
          <span style={{ animationDelay: '0.5s' }}>Moronge</span>
        </h1>
        
        <h2 className="fade-in-up" style={{ animationDelay: '0.6s' , opacity: 0,fontWeight: 400,'--final-opacity': '0.7' } as React.CSSProperties}>
          DevOps Engineer
        </h2>
        
        <p className="fade-in-up"  style={{ animationDelay: '0.8s' }}>
          I design and automate scalable infrastructure using AWS, Docker, Kubernetes, and Terraform. 
          From building CI/CD pipelines to deploying cloud-native apps, I’ve delivered production-grade 
          systems for startups and AI-driven platforms. Whether it’s zero-downtime deploys, real-time 
          observability, or seamless automation—I ship fast, reliable code that powers real users.
        </p>
      </div>

      <div className="fade-in-up" style={{ animationDelay: '0.9s' }}>
       <ProjectsScroll
        activeSection={activeSection}
        onSectionClick={onSectionClick}
       />
      </div>

      <footer className= "hero-footer fade-in-up" style={{ animationDelay: '1s' }} >
        <a href="mailto:felixmftc@icloud.com">contact</a>
        <a href="https://github.com/NeverEverFelix" target="_blank" rel="noopener noreferrer">github</a>
        <a href="https://www.linkedin.com/in/felixmoronge" target="_blank" rel="noopener noreferrer">linkedin</a>
      </footer>
    </section>
  );
}
