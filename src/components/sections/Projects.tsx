import { projects } from '../../data/projects';
import { SectionHeading } from '../common/SectionHeading';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  const featuredProject = projects.find((p) => p.isFeatured);
  const otherProjects = projects.filter((p) => !p.isFeatured);

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
        {/* Section Heading */}
        <SectionHeading
          badge="Featured Engineering"
          title="Software Projects"
          subtitle="Explore full-stack platforms, mobile apps, and intelligent systems engineered with clean architectures and modern frameworks."
        />

        {/* Projects Grid: 3-column desktop layout with Featured project taking 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Row 1: Featured Project (spans 2 columns on lg) + Next Project */}
          {featuredProject && (
            <ProjectCard
              project={featuredProject}
              className="lg:col-span-2 shadow-xl shadow-orange-500/5"
            />
          )}

          {/* Other 4 Projects */}
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

