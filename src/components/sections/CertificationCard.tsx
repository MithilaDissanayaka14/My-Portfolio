import type { CertificationItem } from '../../types/portfolio.types';
import { CertificatePlaceholder } from './CertificatePlaceholder';
import { ExternalLink, CheckCircle } from 'lucide-react';

interface CertificationCardProps {
  certification: CertificationItem;
  className?: string;
}

export function CertificationCard({
  certification,
  className = '',
}: CertificationCardProps) {
  return (
    <article
      className={`group relative flex flex-col bg-[#141416]/95 border border-neutral-800/80 hover:border-orange-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/5 h-full ${className}`}
    >
      {/* Top Visual Certificate Banner (Image or Premium Placeholder) */}
      <CertificatePlaceholder
        title={certification.title}
        issuer={certification.issuer}
        year={certification.year}
        iconType={certification.iconType}
        image={certification.certificateImage}
        className="w-full h-40 sm:h-44"
      />

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Header Row: Category Tag & Year */}
          <div className="flex items-center justify-between gap-2 mb-3">
            {certification.tag && (
              <span className="px-2.5 py-1 rounded-md bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[11px] font-mono font-medium">
                {certification.tag}
              </span>
            )}
            <span className="text-xs font-mono text-neutral-400">
              {certification.year}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-orange-400 transition-colors leading-snug mb-1.5">
            {certification.title}
          </h3>

          {/* Issuer */}
          <p className="text-xs sm:text-sm font-medium text-neutral-300 mb-2">
            {certification.issuer}
          </p>

          {/* Subject Detail */}
          {certification.subject && (
            <p className="text-xs text-neutral-500 leading-relaxed">
              {certification.subject}
            </p>
          )}
        </div>

        {/* Footer Area: Only renders if verified credential URL exists */}
        <div className="mt-5 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-[11px] font-mono">
          <div className="inline-flex items-center gap-1.5 text-neutral-400">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Completed</span>
          </div>

          {/* Optional External Link: Only rendered when verified URL is supplied */}
          {certification.credentialUrl && (
            <a
              href={certification.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 font-semibold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-500 rounded px-1"
            >
              <span>View Credential</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
