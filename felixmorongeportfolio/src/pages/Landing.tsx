import HeroSection from '../components/HeroSection';
import ProjectsScroll from '../components/ProjectsScroll';

import ScrollNav from '../components/ScrollNav';


export default function Landing() {
  console.log("Landing loaded ✅");
  return (

      <main className="flex h-screen overflow-hidden bg-black text-white font-sans">
        {/* Left side: Static hero + nav */}
        <div className="w-1/2 flex flex-col justify-between p-12 sticky top-0 h-screen">
          <div>
            <HeroSection />
          </div>
          <ScrollNav />
        </div>
  
        {/* Right side: Scrollable section */}
        <div className="w-1/2 overflow-y-scroll h-screen p-12 space-y-12">
          <ProjectsScroll />
        </div>
      </main>

    );
  }