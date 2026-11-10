import { useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Certifications } from './components/sections/Certifications';
import { Achievements } from './components/sections/Achievements';

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

        {/* Section Anchors for Navigation Smooth-Scroll (Subsequent Phases: 6) */}
        <div id="about" className="scroll-mt-24" />
        <div id="education" className="scroll-mt-24" />
        <div id="contact" className="scroll-mt-24" />
      </main>

      {/* Clean minimal footer preview */}
      <footer className="border-t border-neutral-800/60 py-8 text-center text-xs text-neutral-500 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Mithila Dissanayaka. All rights reserved.</p>
          <p className="font-mono text-neutral-600">Built with React 19, TypeScript & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
