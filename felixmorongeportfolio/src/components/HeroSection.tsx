import '../styles/HeroSection.css';
import ProjectsScroll from './ProjectsScroll';

type Props = {
  activeSection: string;
  onSectionClick: (id: string) => void;
};

export default function HeroSection({ activeSection, onSectionClick }: Props) {
  return (
    <section className="hero-text">
      <div className="hero-content">
      <h1 className="hero-heading">
          <span style={{ animationDelay: '0.2s' }}>Hello,</span>{' '}
          <span style={{ animationDelay: '0.3s' }}>I’m</span>{' '}
          <span style={{ animationDelay: '0.4s' }}>Felix</span><br />
          <span style={{ animationDelay: '0.5s' }}>Moronge</span>
        </h1>
        
        <h2 className="fade-in-up" style={{ animationDelay: '0.6s' , opacity: 0,fontWeight: 400,'--final-opacity': '0.7' } as React.CSSProperties}>
          Software Engineer
        </h2>
        
        <p className="fade-in-up"  style={{ animationDelay: '0.8s' }}>
        I build, test, and maintain software systems with a focus on reliability, clarity, and real-world use.
        I’ve worked across the full development lifecycle—implementing features, debugging issues, automating repeatable tasks, and deploying applications in cloud environments. My experience emphasizes writing clear, maintainable code, validating functionality through testing, and supporting production systems used by real users.
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
