import { achievements } from '../../data/achievements';
import { SectionHeading } from '../common/SectionHeading';
import { Terminal } from 'lucide-react';

export function Achievements() {
  const item = achievements[0];

  if (!item) return null;

  return (
    <section id="achievements" className="py-16 sm:py-20 lg:py-24 relative scroll-mt-20">
      {/* Background ambient light with viewport containment */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none -z-10 [clip-path:inset(0)]"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
        {/* Section Heading: "Leadership & Co-Curricular" badge removed as requested */}
        <SectionHeading
          title="Achievements & Activities"
          subtitle="Academic software competitions and technical milestones throughout my development journey."
        />

        {/* Minimal Centered Horizontal Card */}
        <div className="max-w-xl mx-auto mt-8 sm:mt-10">
          <div className="group relative flex items-center justify-between gap-4 sm:gap-5 bg-[#141416]/80 hover:bg-[#161619]/90 border border-neutral-800/80 hover:border-orange-500/40 rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/5 hover:-translate-y-0.5">
            {/* Left: Code/Terminal Icon & Details */}
            <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 group-hover:border-orange-500/40 group-hover:scale-105 transition-all duration-200">
                <Terminal className="w-5 h-5 text-orange-400 stroke-[1.75]" />
              </div>

              <div className="min-w-0">
                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-orange-400 transition-colors leading-snug truncate">
                  {item.title}
                </h3>
                {item.organization && (
                  <p className="text-xs text-neutral-400 font-medium truncate mt-0.5">
                    {item.organization}
                  </p>
                )}
              </div>
            </div>

            {/* Right: Year Badge */}
            {item.period && (
              <span className="text-xs font-mono font-medium text-orange-400/90 bg-orange-500/10 border border-orange-500/20 px-2.5 sm:px-3 py-1 rounded-full shrink-0">
                {item.period}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
