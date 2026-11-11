import { useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Certifications } from './components/sections/Certifications';
import { Achievements } from './components/sections/Achievements';
import { About } from './components/sections/About';
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

export function App() {
  // Support initial hash navigation on page load
  useEffect(() => {
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash) as HTMLElement | null;
      if (target) {
        window.scrollTo(0, target.offsetTop - 80);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex flex-col selection:bg-orange-500/30 selection:text-orange-200 overflow-x-clip w-full">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full overflow-x-clip">
        {/* Phase 3: Hero Section */}
        <Hero />

        {/* Phase 4: Skills Section */}
        <Skills />

        {/* Phase 4: Projects Section */}
        <Projects />

        {/* Phase 5: Certifications Section */}
        <Certifications />

        {/* Phase 5: Achievements Section */}
        <Achievements />

        {/* Phase 6: About Me Section with Agile Workflow Orbit */}
        <About />

        {/* Phase 6: Education Section */}
        <Education />

        {/* Phase 6: Contact Section with Form & Tech Radar */}
        <Contact />
      </main>

      {/* Phase 6: Full Footer Component */}
      <Footer />
    </div>
  );
}

export default App;
