import '../styles/RightScrollSection.css';
import ContentCard from './ContentCard';
import '../styles/ContentCard.css';
import { useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
import WorkModal from './WorkModal';

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
                    onClick={() => setSelectedCompany('wavform')}
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
                  {selectedCompany === 'wavform' && (
                    <WorkModal
                      logo="/wavform.png"
                      company="Wavform, LLC"
                      role="DevOps Engineer Intern"
                      description="Sole DevOps Engineer responsible for the end-to-end design and implementation of Wavform’s cloud infrastructure. Built a hybrid CI/CD pipeline using GitHub Actions and Jenkins, cutting deployment time by 40%. Deployed services to Kubernetes clusters using blue-green deployment strategies, service mesh, and auto-scaling. Provisioned AWS EC2, ALB, and EKS via Terraform and Helm, establishing repeatable IaC patterns. Integrated PostHog-based telemetry into deployment gates for analytics-driven rollbacks and phased releases. Secured infrastructure with AWS Secrets Manager, and authored full onboarding docs—reducing infra ramp-up time by 60%."
                      onClose={closeModal}
                    />
                  )}

                  {selectedCompany === 'temple' && (
                    <WorkModal
                      logo="/temple.png"
                      company="Temple University"
                      role="Technical Support Specialist"
                      description="Delivered technical support across a university-wide environment. Resolved system and software issues on over 100 endpoints, improved workflows by 20% through automated maintenance, and supported essential productivity tools such as Adobe Creative Suite, Office 365, and Zoom."
                      onClose={closeModal}
                    />
                  )}

                  {selectedCompany === 'temple-surgery' && (
                    <WorkModal
                      logo="/surgery.jpeg"
                      company="Temple University Department of Surgery"
                      role="Technical Assistant"
                      description="Maintained HIPAA-compliant systems, helped digitize medical records securely, and managed credential configurations for sensitive medical software systems."
                      onClose={closeModal}
                    />
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
