import { achievements } from '../../data/achievements';
import { SectionHeading } from '../common/SectionHeading';
import { Award, Terminal, Trophy, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export function Achievements() {
  const getAchievementIcon = (type?: string) => {
    switch (type) {
      case 'prefect':
        return <Award className="w-6 h-6 text-orange-400 stroke-[1.75]" />;
      case 'competition':
        return <Terminal className="w-6 h-6 text-orange-400 stroke-[1.75]" />;
      case 'sports':
        return <Trophy className="w-6 h-6 text-orange-400 stroke-[1.75]" />;
      default:
        return <Award className="w-6 h-6 text-orange-400 stroke-[1.75]" />;
    }
  };

  return (
    <section id="achievements" className="py-20 lg:py-28 relative scroll-mt-20">
      {/* Background ambient light */}
      <div
        className="absolute top-1/2 left-1/3 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Heading */}
        <SectionHeading
          badge="Leadership & Co-Curricular"
          title="Achievements & Activities"
          subtitle="Leadership appointments, software competitions, and sports disciplines throughout academic tenure."
        />

        {/* Achievements Grid: 3 Responsive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between bg-[#141416]/90 border border-neutral-800/80 hover:border-orange-500/50 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/5"
            >
              <div>
                {/* Icon & Year Header */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-orange-500/40 group-hover:scale-105 transition-all duration-200">
                    {getAchievementIcon(item.iconType)}
                  </div>

                  {item.period && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-400">
                      <Calendar className="w-3 h-3 text-orange-400" />
                      <span>{item.period}</span>
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-orange-400 transition-colors mb-2">
                  {item.title}
                </h3>

                {/* Organization */}
                {item.organization && (
                  <p className="flex items-center gap-1.5 text-xs sm:text-sm text-neutral-400 font-medium mb-4">
                    <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                    <span>{item.organization}</span>
                  </p>
                )}

                {/* Specific Activities list (for sports meet, etc.) */}
                {item.activities && item.activities.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-neutral-800/80">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block mb-2">
                      Disciplines:
                    </span>
                    <ul className="flex flex-wrap gap-2">
                      {item.activities.map((act, idx) => (
                        <li
                          key={idx}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-900/90 border border-neutral-800 text-xs text-neutral-300"
                        >
                          <CheckCircle2 className="w-3 h-3 text-orange-400" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Card Footer indicator */}
              <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                <span>Verified Academic Record</span>
                <span className="w-2 h-2 rounded-full bg-orange-500/60 group-hover:bg-orange-500 group-hover:scale-125 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
