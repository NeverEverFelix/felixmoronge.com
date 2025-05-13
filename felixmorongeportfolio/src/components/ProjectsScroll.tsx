import '../styles/ProjectsScroll.css';
import { useState } from 'react';

const sections = [
  { id: 'projects', title: 'Projects' },
  { id: 'resume', title: 'Resume' },
  { id: 'work', title: 'Work History' },
  { id: 'skills', title: 'Skills & Tools' },
];

export default function ProjectsScroll() {
  const [activeSection, setActiveSection] = useState('projects');
  return (
    <div className="projects-scroll">
      {sections.map((section) => (
        <div
          key={section.id}
          className={`scroll-item ${activeSection === section.id ? 'active' : ''}`}
          onClick={() => setActiveSection(section.id)}
        >
          <div className="divider" />
          <span className="label">{section.title}</span>
        </div>
      ))}
    </div>
  );
}
