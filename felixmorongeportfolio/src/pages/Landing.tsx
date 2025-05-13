import HeroSection from '../components/HeroSection';
import RightScrollSections from '../components/RightScrollSections';
import { useState, useRef } from 'react';

import '../styles/Landingg.css';


export default function Landing() {
  console.log("Landing loaded ✅");
  const [activeSection, setActiveSection] = useState('projects');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  return (
    <main className="landing-main">
    {/* Left side: Static hero + nav */}
    <div className="left-column">
      <HeroSection 
      activeSection={activeSection}
      onSectionClick={(id) => {
        const section = sectionRefs.current[id];
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }}
      />
    </div>

    {/* Right side: Scrollable content */}
    <div className="right-column">
      <RightScrollSections 
      setActiveSection={setActiveSection}
      sectionRefs={sectionRefs} />
    </div>
  </main>
    );
  }