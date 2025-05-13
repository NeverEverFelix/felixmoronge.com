// src/components/RightScrollSections.tsx
import '../styles/RightScrollSection.css';
import ContentCard from './ContentCard';
import '../styles/ContentCard.css';


export default function RightScrollSections() {
  return (
    <div className="scroll-sections">
      <section id="projects" className="scroll-section">
      <h2 className="section-header fade-in-up" style={{ animationDelay: '1s' }}>Projects</h2>
      <div className="card-stack">
    <ContentCard />
    <ContentCard/>
    <ContentCard/>
       </div>
      </section>

      <section id="resume" className="scroll-section">
      <h2 className="section-header fade-in-up" style={{ animationDelay: '1.1s' }}>Resume</h2>
      <div className="card-stack">
      <div className="fade-in-up" style={{ animationDelay: '0.2s' }}><ContentCard /></div>
      <div className="fade-in-up" style={{ animationDelay: '0.4s' }}><ContentCard /></div>
      <div className="fade-in-up" style={{ animationDelay: '0.6s' }}><ContentCard /></div>
      </div>
      </section>

      <section id="work" className="scroll-section">
      <h2 className="section-header fade-in-up" style={{ animationDelay: '1.2s' }}>Work</h2>
      <div className="card-stack">
      <ContentCard />
      <ContentCard/>
      <ContentCard/>
      </div>
      </section>

      <section id="skills" className="scroll-section">
      <h2 className="section-header fade-in-up" style={{ animationDelay: '1.3s' }}>Skills & Tools</h2>
      <div className="card-stack">
      <ContentCard />
      <ContentCard/>
      <ContentCard/>
      </div>
      </section>
    </div>
  );
}
