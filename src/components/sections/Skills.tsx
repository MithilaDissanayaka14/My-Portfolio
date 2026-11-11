import { useState, useEffect, useRef } from 'react';
import { skillCategoryGroups, allSkills, myTechStacks } from '../../data/skills';
import { SectionHeading } from '../common/SectionHeading';
import { TechIcon } from '../common/TechIcon';
import { Sparkles, Users, Brain, Target, MessageSquare, Briefcase, Layers } from 'lucide-react';

export function Skills() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false
  );
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return true;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });
  const [hasEntered, setHasEntered] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  const gridRef = useRef<HTMLDivElement>(null);

  // Filter categories
  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'languages', label: 'Languages' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Databases & ORM' },
    { id: 'ai-ml', label: 'AI & ML' },
    { id: 'embedded', label: 'Embedded' },
    { id: 'tools', label: 'Tools' },
  ];

  // Soft skills group
  const softSkillsGroup = skillCategoryGroups.find((g) => g.id === 'soft-skills');

  // Determine which skills to display based on active tab
  const displayedSkills =
    activeTab === 'all'
      ? allSkills.filter((s) => s.category !== 'soft-skills')
      : allSkills.filter((s) => s.category === activeTab);

  // Listen for prefers-reduced-motion changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
      if (e.matches) {
        setIsVisible(true);
        setHasEntered(true);
      }
    };
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // IntersectionObserver for entrance scroll reveal
  useEffect(() => {
    if (prefersReducedMotion || isVisible) return;

    const currentRef = gridRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(currentRef);

    return () => observer.disconnect();
  }, [prefersReducedMotion, isVisible]);

  // Mark entrance animation complete after initial stagger finishes
  useEffect(() => {
    if (isVisible && !hasEntered) {
      const totalDuration = Math.min(displayedSkills.length * 70 + 500, 2000);
      const timer = setTimeout(() => {
        setHasEntered(true);
      }, totalDuration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, hasEntered, displayedSkills.length]);

  // Helper for soft skill icons
  const getSoftSkillIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'problem solving':
        return <Target className="w-4 h-4 text-orange-400" />;
      case 'teamwork':
        return <Users className="w-4 h-4 text-orange-400" />;
      case 'leadership':
        return <Sparkles className="w-4 h-4 text-orange-400" />;
      case 'analytical thinking':
        return <Brain className="w-4 h-4 text-orange-400" />;
      case 'communication':
        return <MessageSquare className="w-4 h-4 text-orange-400" />;
      case 'project management':
        return <Briefcase className="w-4 h-4 text-orange-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-orange-400" />;
    }
  };

  return (
    <section id="skills" className="pt-8 pb-20 sm:pt-10 sm:pb-24 lg:pt-12 lg:pb-28 relative scroll-mt-20">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
        {/* Section Heading */}
        <SectionHeading
          title="Skills & Technologies"
          subtitle="A comprehensive toolkit developed through academic training, hands-on full-stack development, and hardware-software integration."
        />

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-orange-500 text-white font-semibold shadow-md shadow-orange-500/20 border border-orange-400/40'
                  : 'bg-neutral-900/80 text-neutral-400 border border-neutral-800/80 hover:text-white hover:bg-neutral-850 hover:border-neutral-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Technical Skills Grid */}
        <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayedSkills.map((skill, index) => {
            const isAnimated = isVisible || prefersReducedMotion;
            const cardDelay = !hasEntered && !prefersReducedMotion ? `${index * 70}ms` : '0ms';

            return (
              <div
                key={skill.id}
                style={{ transitionDelay: cardDelay }}
                className={`group relative bg-[#141416]/90 border border-neutral-800/80 hover:border-orange-500/50 hover:bg-neutral-900/90 rounded-xl p-3.5 sm:p-4 flex items-center gap-3.5 ${
                  hasEntered
                    ? 'opacity-100 translate-y-0 transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.12)] hover:-translate-y-0.5'
                    : isAnimated
                    ? 'opacity-100 translate-y-0 transition-[opacity,transform] duration-500 ease-out'
                    : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
              >
                {/* Tech Icon Container */}
                <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 group-hover:border-orange-500/30 group-hover:scale-105 transition-all duration-200">
                  <TechIcon name={skill.name} className="w-5 h-5" />
                </div>

                {/* Skill Info */}
                <div className="min-w-0 flex-1">
                  <h3 className="text-xs sm:text-sm font-semibold text-neutral-200 group-hover:text-white truncate transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-[11px] text-neutral-500 font-mono capitalize">
                    {skill.category.replace('-', ' ')}
                  </span>
                </div>

                {/* Subtle hover accent light */}
                <div
                  className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl"
                  aria-hidden="true"
                />
              </div>
            );
          })}
        </div>

        {/* My Tech Stack Subsection */}
        <div className="mt-20 pt-14 border-t border-neutral-800/80">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-medium tracking-wider uppercase mb-3 shadow-[0_0_12px_rgba(249,115,22,0.1)]">
              <Layers className="w-3.5 h-3.5" />
              <span>Full-Stack Architecture</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              My Tech Stack
            </h3>
            <p className="mt-2.5 text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed">
              Technologies and frameworks I work with across my projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 lg:gap-6">
            {myTechStacks.map((stack, idx) => {
              const spanClass =
                idx < 3
                  ? 'lg:col-span-2'
                  : idx === 4
                  ? 'md:col-span-2 lg:col-span-3'
                  : 'lg:col-span-3';

              return (
                <div
                  key={stack.id}
                  className={`group relative bg-[#141416]/90 border border-neutral-800/80 hover:border-orange-500/50 hover:bg-neutral-900/90 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1 flex flex-col justify-between ${spanClass}`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                        {stack.name}
                      </h4>
                      {stack.badge && (
                        <span className="text-[10px] font-mono font-medium text-orange-400/90 bg-orange-500/10 border border-orange-500/20 px-2.5 py-0.5 rounded-full shrink-0">
                          {stack.badge}
                        </span>
                      )}
                    </div>

                    <div className="h-px w-full bg-gradient-to-r from-neutral-800 via-neutral-750 to-transparent mb-4" />

                    {/* Technology Pills with Icons */}
                    <div className="flex flex-wrap gap-2">
                      {stack.technologies.map((tech) => (
                        <div
                          key={tech}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-neutral-900/90 border border-neutral-800 group-hover:border-neutral-750 text-xs text-neutral-300 font-medium transition-colors"
                        >
                          <TechIcon name={tech} className="w-3.5 h-3.5 shrink-0" />
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Subtle bottom hover accent line */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl pointer-events-none"
                    aria-hidden="true"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Soft Skills & Professional Strengths Compact Strip */}
        {softSkillsGroup && softSkillsGroup.skills.length > 0 && (
          <div className="mt-16 pt-10 border-t border-neutral-800/70">
            <div className="text-center mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Professional & Collaborative Strengths
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {softSkillsGroup.skills.map((softSkill) => (
                <div
                  key={softSkill.id}
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-neutral-900/60 border border-neutral-800/90 hover:border-orange-500/40 text-neutral-300 hover:text-white transition-all duration-200 text-xs sm:text-sm font-medium shadow-sm hover:shadow-orange-500/5"
                >
                  {getSoftSkillIcon(softSkill.name)}
                  <span>{softSkill.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
