import '../styles/RightScrollSection.css';
import ContentCard from './ContentCard';
import '../styles/ContentCard.css';
import { useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';

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
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);

  const closeModal = () => setSelectedCompany(null);

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
          <h2 className="section-header fade-in-up" style={{ animationDelay: `${1 + index * 0.1}s` }}>
            {title}
          </h2>
          <div className="card-stack">
            {id === 'resume' ? (
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
            ) : id === 'projects' ? (
              <>
                <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <a
                    href="https://github.com/NeverEverFelix/applicant"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', width: '100%' }}
                  >
                    <ContentCard variant="plain">
                      <img
                        src="/applican.jpg"
                        alt="Applican Project"
                        className="resume-card-image"
                      />
                    </ContentCard>
                  </a>
                </div>
                <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <a
                    href="http://3.138.102.244:5001"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', width: '100%' }}
                  >
                    <ContentCard variant="plain">
                      <img
                        src="/storybuilder.png"
                        alt="StoryBuilder Project"
                        className="resume-card-image"
                      />
                    </ContentCard>
                  </a>
                </div>
              </>
            ) : id === 'work' ? (
              <>
                <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <ContentCard
                    title="Wavform"
                    imageUrl="/wavform.png"
                    onClick={() => {setSelectedCompany('wavform')
                      console.log('Clicked wavform');
                    }}

                  />
                </div>
                <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <ContentCard
                    title="Temple"
                    imageUrl="/temple.png"
                    onClick={() => setSelectedCompany('temple')}
                  />
                </div>
                <div className="fade-in-up" style={{ animationDelay: '0.6s' }}>
                  <ContentCard
                    title="Temple Hospital"
                    imageUrl="/surgery.jpeg"
                    onClick={() => setSelectedCompany('temple-surgery')}
                  />
                </div>

                <Modal
                  isOpen={!!selectedCompany}
                  onRequestClose={closeModal}
                  contentLabel="Work Experience Modal"
                  className="custom-modal"
                  overlayClassName="modal-overlay"
                >
                  <button onClick={closeModal}>Close</button>
                  {selectedCompany === 'wavform' && (
                    <div>
                      <h2>Wavform</h2>
                      <p>
                        Worked as a DevOps Intern building CI/CD pipelines, automating deployments, and maintaining AWS infrastructure for a social music platform.
                      </p>
                    </div>
                  )}
                  {selectedCompany === 'temple' && (
                    <div>
                      <h2>Temple University</h2>
                      <p>
                        Assisted faculty and staff with technical support, resolved issues related to campus systems, and helped maintain internal documentation.
                      </p>
                    </div>
                  )}
                  {selectedCompany === 'temple-surgery' && (
                    <div>
                      <h2>Temple University Department of Surgery</h2>
                      <p>
                        Worked alongside surgical staff and administration to digitize records, manage system permissions, and ensure HIPAA-compliant practices.
                      </p>
                    </div>
                  )}
                </Modal>
              </>
            ) : id === 'skills' ? (
              <>
                <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <ContentCard title="Docker" imageUrl="/docker.png" />
                </div>
                <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <ContentCard title="GitHub Actions" imageUrl="/github-actions.png" />
                </div>
                <div className="fade-in-up" style={{ animationDelay: '0.6s' }}>
                  <ContentCard title="AWS" imageUrl="/aws.png" />
                </div>
              </>
            ) : null}
          </div>
        </section>
      ))}
    </div>
  );
}

