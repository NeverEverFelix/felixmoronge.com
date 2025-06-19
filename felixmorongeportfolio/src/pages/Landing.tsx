import HeroSection from '../components/HeroSection';
import RightScrollSections from '../components/RightScrollSections';
import { useState, useRef, useEffect } from 'react';

import '../styles/Landingg.css';


export default function Landing() {
  console.log("Landing loaded ✅");
  const [activeSection, setActiveSection] = useState('projects');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  useEffect(() => {
    // Set <title>
    document.title = "Felix Moronge | DevOps Engineer Portfolio";

    // Canonical link
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = "https://www.felixmoronge.com";
    document.head.appendChild(canonical);

    // Structured Data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Felix Moronge",
      "url": "https://www.felixmoronge.com",
      "image": "https://www.felixmoronge.com/fabrics.png",
      "sameAs": [
        "https://www.linkedin.com/in/felixmoronge",
        "https://github.com/felixmoronge"
      ],
      "jobTitle": "DevOps Engineer",
      "worksFor": {
        "@type": "Organization",
        "name": "Independent Portfolio"
      },
      "description": "DevOps engineer portfolio for Felix Moronge, showcasing infrastructure design, CI/CD pipelines, Kubernetes deployments, and scalable project architectures."
    });

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(canonical);
    };
  }, []);

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