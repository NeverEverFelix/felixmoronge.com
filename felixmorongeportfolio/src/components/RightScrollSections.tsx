// src/components/RightScrollSections.tsx
import '../styles/RightScrollSection.css';
import ContentCard from './ContentCard';
import '../styles/ContentCard.css';
import { useEffect, useRef } from 'react';

type Props = {
  setActiveSection: (id: string) => void;
  sectionRefs: React.MutableRefObject<Record<string, HTMLElement | null>>;
};

const sections = [
  { id: 'projects', title: 'Projects' },
  { id: 'resume', title: 'Resume' },
  { id: 'work', title: 'Work History' },
  { id: 'skills', title: 'Skills & Tools' },
];

export default function RightScrollSections({ setActiveSection, sectionRefs }: Props) {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.current?.observe(el);
      sectionRefs.current[id] = el;
    });

    return () => observer.current?.disconnect();
  }, [setActiveSection, sectionRefs]);

  return (
    <div className="scroll-sections">
      {sections.map(({ id, title }, index) => (
        <section key={id} id={id} className="scroll-section">
          <h2 className="section-header fade-in-up" style={{ animationDelay: `${1 + index * 0.1}s` }}>{title}</h2>
          <div className="card-stack">
          { id === 'resume' ? (
                  <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <ContentCard variant="plain">
                      <a href="/resume.pdf" download className="resume-link" style={{ textDecoration: 'none' }}>
                        <img
                          src="/resume-thumbnail.png"
                          alt="Download Resume"
                          className="resume-card-image"
                        />
                      </a>
                    </ContentCard>
                  </div>
                ) : (
              <>
                <div className="fade-in-up" style={{ animationDelay: '0.2s' }}><ContentCard /></div>
                <div className="fade-in-up" style={{ animationDelay: '0.4s' }}><ContentCard /></div>
                <div className="fade-in-up" style={{ animationDelay: '0.6s' }}><ContentCard /></div>
              </>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
