import { SectionHeading } from '../common/SectionHeading';
import { ProjectCarousel } from './ProjectCarousel';

export function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28 relative scroll-mt-20">
      {/* Background glow accent with viewport containment */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none -z-10 [clip-path:inset(0)]"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
        {/* Section Heading: "Featured Engineering" label removed as requested */}
        <SectionHeading
          title="Software Projects"
          subtitle="Explore full-stack platforms, mobile apps, and intelligent systems engineered with clean architectures and modern frameworks."
        />

        {/* 3D Layered Project Carousel */}
        <ProjectCarousel />
      </div>
    </section>
  );
}

