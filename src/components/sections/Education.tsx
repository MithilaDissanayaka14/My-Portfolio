import { educationList } from '../../data/education';
import { SectionHeading } from '../common/SectionHeading';
import { GraduationCap, School, BookOpen, Calendar } from 'lucide-react';

export function Education() {
  const getInstitutionIcon = (type?: string) => {
    switch (type) {
      case 'university':
        return <GraduationCap className="w-6 h-6 text-orange-400 stroke-[1.75]" />;
      case 'college':
        return <School className="w-6 h-6 text-orange-400 stroke-[1.75]" />;
      case 'school':
      default:
        return <BookOpen className="w-6 h-6 text-orange-400 stroke-[1.75]" />;
    }
  };

  return (
    <section id="education" className="py-20 lg:py-28 relative scroll-mt-20">
      {/* Background ambient glow with viewport containment */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none -z-10 [clip-path:inset(0)]"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
        {/* Section Heading */}
        <SectionHeading
          badge="Academic Foundation"
          title="Education"
          subtitle="Formal academic degrees, secondary education, and qualifications."
        />

        {/* Stacked Education Timeline Cards */}
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {educationList.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-[#141416]/90 border border-neutral-800/80 hover:border-orange-500/50 hover:bg-neutral-900/90 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300"
            >
              <div className="flex items-start sm:items-center gap-4">
                {/* Crest / Institution Icon */}
                <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-750 flex items-center justify-center shrink-0 group-hover:border-orange-500/40 group-hover:scale-105 transition-all duration-200">
                  {getInstitutionIcon(item.logoType)}
                </div>

                {/* Details */}
                <div className="min-w-0">
                  <div className="flex items-center flex-wrap gap-2.5 mb-1">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                      {item.degree}
                    </h3>

                    {item.statusBadge && (
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono font-medium">
                        {item.statusBadge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-400 font-medium">
                    {item.institution}
                  </p>
                </div>
              </div>

              {/* Timeline Period Badge */}
              <div className="sm:self-center shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-neutral-800/60">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300">
                  <Calendar className="w-3.5 h-3.5 text-orange-400" />
                  <span>{item.period}</span>
                </span>
              </div>

              {/* Subtle hover accent light */}
              <div
                className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-orange-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-2xl"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

