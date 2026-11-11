import { useState, useEffect, useRef, useCallback } from 'react';
import { projects } from '../../data/projects';
import { ProjectPreviewGraphic } from './ProjectPreviewGraphic';
import { TechIcon } from '../common/TechIcon';
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const count = projects.length;
  const activeProject = projects[currentIndex];

  // Listen for prefers-reduced-motion changes
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + count) % count);
  }, [count]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % count);
  }, [count]);

  const handleSelect = (idx: number) => {
    setCurrentIndex(idx);
  };

  // Keyboard navigation support
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    }
  };

  // Touch swipe support
  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      role="region"
      aria-roledescription="carousel"
      aria-label="Software Projects Carousel"
      className="focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 rounded-3xl"
    >
      {/* 3D Layered Carousel Stage */}
      <div className="relative w-full max-w-6xl mx-auto overflow-hidden py-4 sm:py-6">
        {/* Ambient Top Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none -z-10"
          aria-hidden="true"
        />

        {/* Carousel Viewport Container */}
        <div className="relative h-[280px] sm:h-[340px] md:h-[400px] lg:h-[440px] w-full">
          {projects.map((project, idx) => {
            // Calculate circular offset distance (-2, -1, 0, 1, 2)
            let diff = (idx - currentIndex) % count;
            if (diff > Math.floor(count / 2)) diff -= count;
            if (diff < -Math.floor(count / 2)) diff += count;

            const isActive = diff === 0;
            const isPrev = diff === -1;
            const isNext = diff === 1;

            // Responsive 3D layered positioning classes
            let positionClasses = '';
            let zIndexClass = '';
            let opacityClasses = '';
            let cursorClass = '';

            if (isActive) {
              positionClasses = 'left-1/2 -translate-x-1/2 scale-100';
              zIndexClass = 'z-30';
              opacityClasses = 'opacity-100 border-orange-500/50 shadow-2xl shadow-orange-500/10 pointer-events-auto';
              cursorClass = 'cursor-default';
            } else if (isPrev) {
              positionClasses = 'left-1/2 -translate-x-[150%] sm:-translate-x-[88%] md:-translate-x-[92%] lg:-translate-x-[96%] scale-[0.84]';
              zIndexClass = 'z-20';
              opacityClasses = 'opacity-0 sm:opacity-55 hover:opacity-80 border-neutral-800 shadow-xl pointer-events-none sm:pointer-events-auto';
              cursorClass = 'cursor-pointer';
            } else if (isNext) {
              positionClasses = 'left-1/2 translate-x-[50%] sm:-translate-x-[12%] md:-translate-x-[8%] lg:-translate-x-[4%] scale-[0.84]';
              zIndexClass = 'z-20';
              opacityClasses = 'opacity-0 sm:opacity-55 hover:opacity-80 border-neutral-800 shadow-xl pointer-events-none sm:pointer-events-auto';
              cursorClass = 'cursor-pointer';
            } else if (diff === -2) {
              positionClasses = 'left-1/2 -translate-x-[160%] scale-[0.72]';
              zIndexClass = 'z-10';
              opacityClasses = 'opacity-0 pointer-events-none border-neutral-900';
              cursorClass = '';
            } else {
              // diff === 2
              positionClasses = 'left-1/2 translate-x-[60%] scale-[0.72]';
              zIndexClass = 'z-10';
              opacityClasses = 'opacity-0 pointer-events-none border-neutral-900';
              cursorClass = '';
            }

            const transitionClass = prefersReducedMotion
              ? 'transition-none'
              : 'transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]';

            return (
              <div
                key={project.id}
                onClick={() => {
                  if (isPrev) handlePrev();
                  if (isNext) handleNext();
                }}
                className={`absolute top-0 w-[92vw] sm:w-[520px] md:w-[620px] lg:w-[720px] h-full rounded-2xl sm:rounded-3xl border bg-[#141416] overflow-hidden ${positionClasses} ${zIndexClass} ${opacityClasses} ${cursorClass} ${transitionClass}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${project.title} (${idx + 1} of ${count})`}
                aria-hidden={!isActive}
              >
                {/* Visual preview content */}
                <ProjectPreviewGraphic project={project} isActive={isActive} />

                {/* Inactive slide darkening overlay */}
                {!isActive && (
                  <div
                    className="absolute inset-0 bg-black/60 backdrop-blur-[0.5px] hover:bg-black/40 transition-colors duration-300 flex items-center justify-center pointer-events-auto"
                    aria-hidden="true"
                  >
                    <span className="text-[11px] font-mono tracking-wider uppercase text-neutral-300 bg-neutral-950/80 px-3 py-1.5 rounded-full border border-neutral-800/80 shadow-lg">
                      Click to view
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Floating Side Arrow Controls on Desktop */}
        <div className="hidden lg:flex items-center justify-between absolute top-1/2 -translate-y-1/2 inset-x-2 pointer-events-none z-40">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous project"
            className="pointer-events-auto p-3 rounded-full bg-neutral-900/90 border border-neutral-800 text-neutral-300 hover:text-white hover:border-orange-500/60 hover:bg-neutral-850 active:scale-95 transition-all shadow-xl shadow-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next project"
            className="pointer-events-auto p-3 rounded-full bg-neutral-900/90 border border-neutral-800 text-neutral-300 hover:text-white hover:border-orange-500/60 hover:bg-neutral-850 active:scale-95 transition-all shadow-xl shadow-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Carousel Navigation Bar (Indicators, Counter & Buttons) */}
      <div className="flex items-center justify-between sm:justify-center gap-4 sm:gap-6 mt-4 sm:mt-6 max-w-sm sm:max-w-md mx-auto px-4">
        {/* Previous button */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous project"
          className="p-2.5 sm:p-3 rounded-full bg-[#141416] border border-neutral-800 text-neutral-300 hover:text-white hover:border-orange-500/60 hover:bg-neutral-900 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 cursor-pointer shadow-md"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Slide indicators / pagination dots */}
        <div className="flex items-center gap-2" role="tablist" aria-label="Project slides">
          {projects.map((proj, idx) => (
            <button
              key={proj.id}
              type="button"
              role="tab"
              onClick={() => handleSelect(idx)}
              aria-label={`Go to slide ${idx + 1}: ${proj.title}`}
              aria-selected={idx === currentIndex}
              className={`transition-all duration-300 rounded-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${
                idx === currentIndex
                  ? 'w-7 sm:w-8 h-2 bg-orange-500 shadow-md shadow-orange-500/30'
                  : 'w-2 h-2 bg-neutral-700 hover:bg-neutral-500'
              }`}
            />
          ))}
        </div>

        {/* Counter */}
        <span className="text-xs font-mono text-orange-400 font-semibold tracking-wider tabular-nums px-2 py-1 rounded bg-orange-500/10 border border-orange-500/20">
          0{currentIndex + 1} / 0{count}
        </span>

        {/* Next button */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next project"
          className="p-2.5 sm:p-3 rounded-full bg-[#141416] border border-neutral-800 text-neutral-300 hover:text-white hover:border-orange-500/60 hover:bg-neutral-900 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 cursor-pointer shadow-md"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Selected Project Information Panel */}
      <div className="max-w-4xl mx-auto mt-8 sm:mt-10 px-4 sm:px-6">
        <div className="bg-[#141416]/95 border border-neutral-800/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl shadow-black/50 transition-all duration-300 hover:border-neutral-750">
          {/* Role & Project Type header */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-xs sm:text-sm font-mono text-orange-400 font-medium">
                {activeProject.role}
              </span>
            </div>
            <span className="text-xs font-mono text-neutral-400 px-3 py-1 rounded-full bg-neutral-900/90 border border-neutral-800">
              {activeProject.type}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight mb-3">
            {activeProject.title}
          </h3>

          {/* Project Description */}
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
            {activeProject.description}
          </p>

          {/* Key Features Highlights */}
          {activeProject.keyFeatures && activeProject.keyFeatures.length > 0 && (
            <div className="mb-6 pt-5 border-t border-neutral-800/80">
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-3">
                Key Features & Architecture
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeProject.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span className="leading-snug">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology Stack with Icons */}
          <div className="pt-5 border-t border-neutral-800/80">
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-3">
              Technologies & Frameworks
            </span>
            <div className="flex flex-wrap gap-2">
              {activeProject.technologies.map((tech) => (
                <div
                  key={tech}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-neutral-900/90 border border-neutral-800 text-xs text-neutral-300 font-medium hover:border-neutral-700 transition-colors"
                >
                  <TechIcon name={tech} className="w-3.5 h-3.5 shrink-0" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Conditional Action Buttons: GitHub & Live Demo (Only rendered when valid URLs exist) */}
          {(activeProject.codeUrl || activeProject.liveUrl) && (
            <div className="mt-6 pt-5 border-t border-neutral-800/80 flex flex-wrap items-center gap-3">
              {activeProject.codeUrl && (
                <a
                  href={activeProject.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-750 text-white font-medium text-xs sm:text-sm hover:border-orange-500/60 hover:text-orange-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                  <span>Source Code</span>
                </a>
              )}
              {activeProject.liveUrl && (
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-500 text-white font-medium text-xs sm:text-sm hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
