import { personalInfo } from '../../data/personalInfo';
import { SectionHeading } from '../common/SectionHeading';
import { AgileWorkflowOrbit } from './AgileWorkflowOrbit';
import { Download, GraduationCap, MapPin, CheckCircle2 } from 'lucide-react';

export function About() {
  const focusAreas = [
    'Software Engineering',
    'Full-Stack Web & Mobile',
    'AI-Driven Applications',
    'Practical Problem Solving',
    'Embedded & IoT Systems',
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative scroll-mt-20">
      {/* Background ambient glow with viewport containment */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none -z-10 [clip-path:inset(0)]"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-orange-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
        {/* Section Heading */}
        <SectionHeading
          badge="Profile & Background"
          title="About Me"
          subtitle="Engineering philosophy, academic foundation, and technical problem-solving focus."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Biography & Background */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Professional Identity with Profile Photo */}
            {personalInfo.profileImage && (
              <div className="flex items-center gap-4 mb-6">
                <div className="relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-orange-500/40 p-1 bg-[#141416] shadow-md shadow-orange-500/10">
                  <img
                    src={personalInfo.profileImage}
                    alt={`${personalInfo.name} - Professional Portrait`}
                    className="w-full h-full object-cover object-[50%_18%] rounded-xl"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-orange-400">
                    {personalInfo.primaryTitle}
                  </p>
                  <p className="text-xs text-neutral-400">
                    {personalInfo.university}
                  </p>
                </div>
              </div>
            )}

            {/* Verified Biography Paragraphs */}
            <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed mb-8">
              {personalInfo.aboutParagraphs.map((para, idx) => (
                <p key={idx} className="text-neutral-300/90">
                  {para}
                </p>
              ))}
            </div>

            {/* Core Competency Focus Areas */}
            <div className="mb-8">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-3">
                Key Engineering Focus Areas:
              </span>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-medium text-neutral-200"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
                    <span>{area}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Verified Institution & Location Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 pt-6 border-t border-neutral-800/80">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                <div className="w-9 h-9 rounded-lg bg-neutral-800 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4 text-orange-400" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase block">University</span>
                  <span className="text-xs font-semibold text-neutral-200 truncate block">
                    {personalInfo.university}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                <div className="w-9 h-9 rounded-lg bg-neutral-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-orange-400" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase block">Location</span>
                  <span className="text-xs font-semibold text-neutral-200 truncate block">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="flex items-center gap-4">
              <a
                href={personalInfo.resumePath || '/resume.pdf'}
                download="Mithila_Dissanayaka_CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-neutral-100 bg-neutral-900 border border-neutral-750 hover:border-orange-500/50 hover:bg-neutral-850 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 shadow-sm"
              >
                <Download className="w-4 h-4 text-orange-400" />
                <span>Download Curriculum Vitae</span>
              </a>
            </div>
          </div>

          {/* Right Column: Agile Workflow Orbit */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <AgileWorkflowOrbit />
          </div>
        </div>
      </div>
    </section>
  );
}
