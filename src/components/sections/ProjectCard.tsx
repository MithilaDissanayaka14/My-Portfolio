import type { ProjectItem } from '../../types/portfolio.types';
import { ProjectSchematic } from './ProjectSchematic';
import { ExternalLink, Sparkles, CheckCircle2, Clock } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  className?: string;
}

export function ProjectCard({ project, className = '' }: ProjectCardProps) {
  const isFeatured = project.isFeatured;
  const isInProgress = project.status?.toLowerCase() === 'in progress';
  const hasExternalLinks = Boolean(project.codeUrl || project.liveUrl);

  return (
    <article
      className={`group relative flex flex-col bg-[#141416]/95 border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
        isFeatured
          ? 'border-orange-500/40 shadow-xl shadow-orange-500/5 hover:border-orange-500/70 hover:shadow-orange-500/15'
          : 'border-neutral-800/80 hover:border-orange-500/40 hover:shadow-lg hover:shadow-black/40'
      } ${className}`}
    >
      {/* Top Visual Schematic Header */}
      <div className="relative overflow-hidden">
        <ProjectSchematic type={project.schematic} className="w-full h-40 sm:h-44" />

        {/* Status & Featured Floating Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
          {/* Left badge: Type */}
          <span className="px-2.5 py-1 rounded-md bg-neutral-900/90 border border-neutral-800 text-[11px] font-mono text-neutral-300 backdrop-blur-md">
            {project.type}
          </span>

          {/* Right badge: Featured or In Progress */}
          <div className="flex items-center gap-1.5">
            {isFeatured && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-orange-500/90 text-white font-semibold text-[11px] font-mono shadow-md shadow-orange-500/30">
                <Sparkles className="w-3 h-3" />
                Featured
              </span>
            )}
            {isInProgress && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-500/20 border border-amber-500/40 text-amber-300 font-semibold text-[11px] font-mono backdrop-blur-md">
                <Clock className="w-3 h-3 text-amber-400" />
                In Progress
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Role badge */}
          <div className="text-[11px] font-mono text-orange-400 font-medium mb-2 tracking-wide flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            <span>{project.role}</span>
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-orange-400 transition-colors leading-snug mb-3">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Key Features Highlights */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="mb-6">
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block mb-2">
                Key Features:
              </span>
              <ul className="grid grid-cols-1 gap-1.5">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                    <span className="leading-tight">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer Area: Technologies */}
        <div className="pt-4 border-t border-neutral-800/80 flex flex-col gap-3">
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-300 group-hover:border-neutral-700 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links: Only rendered if verified URLs are actually provided */}
          {hasExternalLinks && (
            <div className="flex items-center gap-3 pt-1">
              {project.codeUrl && (
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-500 rounded px-1"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>Code</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-200 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-500 rounded px-1"
                >
                  <ExternalLink className="w-4 h-4 text-orange-400" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
