import '../styles/RightScrollSection.css';
import ContentCard from './ContentCard';
import '../styles/ContentCard.css';
import { useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
import WorkModal from './WorkModal';
import { AnimatePresence } from 'framer-motion';

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
                  <a href="/Project3" style={{ textDecoration: 'none', width: '100%' }}>
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
                  <a href="/Project2" style={{ textDecoration: 'none', width: '100%' }}>
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
                    imageUrl="/wavform.png"
                    onClick={() => setSelectedCompany('wavform')}
                    variant="image-only"
                  />
                </div>
                <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <ContentCard
                    imageUrl="/temple.png"
                    onClick={() => setSelectedCompany('temple')}
                    variant="image-only"
                  />
                </div>
                <div className="fade-in-up" style={{ animationDelay: '0.6s' }}>
                  <ContentCard
                    imageUrl="/surgery.jpeg"
                    onClick={() => setSelectedCompany('temple-surgery')}
                    variant="image-only"
                  />
                </div>

                <AnimatePresence mode="wait">
                  {selectedCompany && (
                    <Modal
                      isOpen={!!selectedCompany}
                      onRequestClose={closeModal}
                      contentLabel="Work Experience Modal"
                      className="custom-modal"
                      overlayClassName="modal-overlay"
                      ariaHideApp={false}
                    >
                      {selectedCompany === 'wavform' && (
                        <WorkModal
                          logo="/wavformLogo.png"
                          company="Wavform, LLC"
                          role="DevOps Engineer Intern"
                          description="Sole DevOps Engineer responsible for the end-to-end design and implementation of Wavform’s cloud infrastructure. Built a hybrid CI/CD pipeline using GitHub Actions and Jenkins, cutting deployment time by 40%. Deployed services to Kubernetes clusters using blue-green deployment strategies, service mesh, and auto-scaling. Provisioned AWS EC2, ALB, and EKS via Terraform and Helm, establishing repeatable IaC patterns. Integrated PostHog-based telemetry into deployment gates for analytics-driven rollbacks and phased releases. Secured infrastructure with AWS Secrets Manager, and authored full onboarding docs—reducing infra ramp-up time by 60%."
                          onClose={closeModal}
                        />
                      )}

                      {selectedCompany === 'temple' && (
                        <WorkModal
                          logo="/templeLogo.png"
                          company="Temple University"
                          role="Technical Support Specialist"
                          description="Delivered technical support across a university-wide environment. Resolved system and software issues on over 100 endpoints, improved workflows by 20% through automated maintenance, and supported essential productivity tools such as Adobe Creative Suite, Office 365, and Zoom."
                          onClose={closeModal}
                        />
                      )}

                      {selectedCompany === 'temple-surgery' && (
                        <WorkModal
                          logo="/templeLogo.png"
                          company="Temple University Department of Surgery"
                          role="Administrative Assistant"
                          description="Maintained HIPAA-compliant systems, helped digitize medical records securely, and managed credential configurations for sensitive medical software systems."
                          onClose={closeModal}
                        />
                      )}
                    </Modal>
                  )}
                </AnimatePresence>
              </>
            ) : id === 'skills' ? (
              <>
                <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <ContentCard imageUrl="/docker.png" />
                </div>
                <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <ContentCard imageUrl="/github-actions.png" />
                </div>
                <div className="fade-in-up" style={{ animationDelay: '0.6s' }}>
                  <ContentCard imageUrl="/aws.png" />
                </div>
              </>
            ) : null}
          </div>
        </section>
      ))}
    </div>
  );
}
