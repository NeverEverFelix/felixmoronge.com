import HeroSection from '../components/HeroSection';
import RightScrollSections from '../components/RightScrollSections';

import '../styles/Landingg.css';


export default function Landing() {
  console.log("Landing loaded ✅");
  return (
    <main className="landing-main">
    {/* Left side: Static hero + nav */}
    <div className="left-column">
      <HeroSection />
    </div>

    {/* Right side: Scrollable content */}
    <div className="right-column">
      <RightScrollSections />
    </div>
  </main>
    );
  }