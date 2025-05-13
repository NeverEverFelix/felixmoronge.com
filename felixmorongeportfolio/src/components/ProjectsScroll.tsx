import '../styles/ProjectsScroll.css';



type Props = {
  activeSection: string;
  onSectionClick: (id: string) => void;
};

const sections = [
  { id: 'projects', title: 'Projects' },
  { id: 'resume', title: 'Resume' },
  { id: 'work', title: 'Work History' },
  { id: 'skills', title: 'Skills & Tools' },
];

export default function ProjectsScroll({ activeSection, onSectionClick }: Props) {
  return (
    <div className="projects-scroll">
      {sections.map((section) => (
        <div
          key={section.id}
          className={`scroll-item ${activeSection === section.id ? 'active' : ''}`}
          onClick={() => onSectionClick(section.id)}
        >
          <div className="divider" />
          <span className="label">{section.title}</span>
        </div>
      ))}
    </div>
  );
}
