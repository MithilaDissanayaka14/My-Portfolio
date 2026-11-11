import { useState, useEffect } from 'react';
import { personalInfo } from '../../data/personalInfo';
import {
  Mail,
  Download,
  ArrowRight,
  Code2,
  Sparkles,
  Heart,
} from 'lucide-react';

export function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false
  );
  const [displayText, setDisplayText] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? personalInfo.animatedTitles[0] || personalInfo.primaryTitle
      : ''
  );
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = personalInfo.animatedTitles;
  // Specific hero adjustment: Remove "SLIIT" mention from hero introduction per design spec
  const heroDescription = personalInfo.aboutParagraphs[0].replace(' at SLIIT', '');

  // Listen for prefers-reduced-motion changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const currentFullTitle = titles[currentTitleIndex] || '';
    const typingSpeed = isDeleting ? 45 : 90;
    const pauseDelay = 2200;

    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentFullTitle) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDelay);
    } else if (isDeleting && displayText === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }, 400);
    } else {
      timeout = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? currentFullTitle.substring(0, prev.length - 1)
            : currentFullTitle.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitleIndex, titles, prefersReducedMotion]);

  const handleHireMeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const navOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  // Render social icon with official SVGs for GitHub & LinkedIn
  const renderSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'github':
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
        );
      case 'linkedin':
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.67 1.67 0 1 0 0-3.34 1.67 1.67 0 0 0 0 3.34m1.39 9.74v-8.37H5.07v8.37h2.78z" />
          </svg>
        );
      case 'email':
      case 'mail':
        return <Mail className="w-4 h-4" />;
      default:
        return <ArrowRight className="w-4 h-4" />;
    }
  };

  return (
    <section
      id="home"
      className="relative flex flex-col justify-between pt-20 pb-6 sm:pt-22 sm:pb-8 lg:pt-20 lg:pb-5 xl:pt-20 xl:pb-6 lg:h-[100svh] lg:min-h-[700px] overflow-hidden w-full"
      aria-label="Hero Introduction"
    >
      {/* Contained ambient background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 [clip-path:inset(0)]" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute top-1/3 right-1/4 translate-x-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full flex-1 flex flex-col justify-start">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center lg:mt-[4.25rem] xl:mt-[4.75rem] w-full">
          {/* Left Column: Text & Content */}
          <div className="lg:col-span-7 xl:col-span-7 min-w-0 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
            {/* Greeting */}
            <p className="text-neutral-400 font-medium text-base sm:text-lg mb-2.5 tracking-wide">
              {personalInfo.greeting}
            </p>

            {/* Name */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-2.5 sm:mb-3 max-w-full break-words">
              {personalInfo.name}
            </h1>

            {/* Animated Title */}
            <div className="min-h-10 sm:h-12 flex items-center justify-center lg:justify-start mb-5 sm:mb-6">
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 bg-clip-text text-transparent font-mono">
                {displayText}
              </span>
              <span
                className="inline-block w-1 sm:w-1.5 h-6 sm:h-8 lg:h-9 bg-orange-500 ml-1.5 rounded-full animate-blink"
                aria-hidden="true"
              />
            </div>

            {/* Professional Summary Description */}
            <p className="text-neutral-300 text-sm sm:text-base lg:text-base xl:text-lg leading-relaxed max-w-xl lg:max-w-2xl mb-7 sm:mb-8">
              {heroDescription}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-7 sm:mb-8">
              <a
                href="#contact"
                onClick={handleHireMeClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-neutral-950 bg-orange-500 hover:bg-orange-400 active:scale-[0.98] transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/35 border border-orange-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              >
                <span>{personalInfo.primaryCTA}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumePath || '/resume.pdf'}
                download="Mithila_Dissanayaka_CV.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-neutral-200 bg-neutral-900/90 hover:bg-neutral-800/90 border border-neutral-750 hover:border-neutral-600 active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              >
                <Download className="w-4 h-4 text-orange-400" />
                <span>{personalInfo.secondaryCTA}</span>
              </a>
            </div>

            {/* Social Links Row (Clean pills matching reference) */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              {personalInfo.socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-neutral-900/90 border border-neutral-800 hover:border-orange-500/50 hover:bg-neutral-850 hover:text-orange-400 text-neutral-400 flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                >
                  {renderSocialIcon(link.platform)}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Profile Image / Portrait Container */}
          <div className="lg:col-span-5 xl:col-span-5 min-w-0 flex justify-center lg:justify-end items-center w-full">
            {/* Understated circular frame matching reference */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px] xl:w-[425px] xl:h-[425px] 2xl:w-[470px] 2xl:h-[470px] rounded-full overflow-hidden border-2 border-[#292929] shadow-xl shadow-black/60 bg-[#121215] group">
              {personalInfo.profileImage ? (
                <img
                  src={personalInfo.profileImage}
                  alt={`${personalInfo.name} - Professional Portrait`}
                  width={480}
                  height={480}
                  className="w-full h-full object-cover object-[50%_18%] transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                  fetchPriority="high"
                />
              ) : (
                /* Fallback placeholder */
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-neutral-900 to-[#0e0e11] p-6 text-center select-none relative">
                  <div
                    className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-orange-500/10 animate-radar pointer-events-none"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-neutral-800 pointer-events-none"
                    aria-hidden="true"
                  />
                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-neutral-800 border border-neutral-750 flex items-center justify-center shadow-lg shadow-black/50 group-hover:border-orange-500/40 transition-colors">
                      <Code2 className="w-10 h-10 sm:w-12 sm:h-12 text-orange-400 stroke-[1.5]" />
                    </div>
                    <span className="font-serif italic text-2xl font-bold bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent mt-1">
                      MD
                    </span>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900/90 border border-neutral-800 text-[11px] font-mono text-neutral-400">
                      <Sparkles className="w-3 h-3 text-orange-400" />
                      <span>Software Engineer</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Horizontal Information Strip matching reference */}
        <div className="mt-8 sm:mt-10 lg:mt-[5.5rem] xl:mt-[6.5rem] w-full p-4 sm:p-5 lg:px-8 lg:py-3.5 xl:py-4 rounded-2xl bg-[#141416]/90 border border-neutral-800/80 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl shadow-black/40">
          <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-1.5 sm:gap-3.5 text-center sm:text-left">
            <span className="text-2xl sm:text-3xl font-extrabold text-orange-500 font-mono tracking-tight">
              3 Years
            </span>
            <div className="h-4 w-px bg-neutral-800 hidden sm:block self-center" aria-hidden="true" />
            <span className="text-xs sm:text-sm text-neutral-400 font-medium">
              Learning &amp; Growing in Technology
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsLiked((prev) => !prev)}
            aria-label={isLiked ? "Unlike portfolio" : "Like portfolio"}
            aria-pressed={isLiked}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 cursor-pointer ${isLiked
              ? 'bg-orange-500/15 border border-orange-500/40 text-orange-400 shadow-sm shadow-orange-500/20'
              : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700'
              }`}
          >
            <Heart
              className={`w-4 h-4 transition-transform duration-200 ${isLiked ? 'fill-orange-500 text-orange-500 scale-110' : 'text-neutral-400'
                }`}
            />
            <span>{isLiked ? 'Liked' : 'Like'}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
