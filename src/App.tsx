import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';

export function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex flex-col selection:bg-orange-500/30 selection:text-orange-200 overflow-x-clip w-full">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full overflow-x-clip">
        {/* Phase 3: Hero Section */}
        <Hero />

        {/* Section Anchors for Navigation Smooth-Scroll */}
        <div id="skills" className="scroll-mt-24" />
        <div id="projects" className="scroll-mt-24" />
        <div id="certifications" className="scroll-mt-24" />
        <div id="achievements" className="scroll-mt-24" />
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
