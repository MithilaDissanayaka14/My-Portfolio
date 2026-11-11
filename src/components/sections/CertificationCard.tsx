import type { CertificationItem } from '../../types/portfolio.types';
import { CertificatePlaceholder } from './CertificatePlaceholder';
import { CheckCircle, Maximize2, ExternalLink } from 'lucide-react';

interface CertificationCardProps {
  certification: CertificationItem;
  onSelect: (cert: CertificationItem) => void;
  className?: string;
}

export function CertificationCard({
  certification,
  onSelect,
  className = '',
}: CertificationCardProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(certification);
    }
  };

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onSelect(certification)}
      onKeyDown={handleKeyDown}
      aria-haspopup="dialog"
      aria-label={`View certificate details for ${certification.title} from ${certification.issuer}`}
      className={`group relative flex flex-col bg-[#141416]/95 border border-neutral-800/80 hover:border-orange-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 select-none h-full ${className}`}
    >
      {/* Top Visual Certificate Banner (Compact Placeholder or Real Image) */}
      <CertificatePlaceholder
        title={certification.title}
        issuer={certification.issuer}
        year={certification.year}
        iconType={certification.iconType}
        image={certification.certificateImage}
        className="w-full h-28 sm:h-30"
      />

      {/* Card Body - Moderately Compact & Highly Readable */}
      <div className="p-3.5 sm:p-4.5 flex-1 flex flex-col justify-between">
        <div>
          {/* Header Row: Category Tag & Year */}
          <div className="flex items-center justify-between gap-2 mb-2">
            {certification.tag && (
              <span className="px-2 py-0.5 rounded-md bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] sm:text-[11px] font-mono font-medium">
                {certification.tag}
              </span>
            )}
            <span className="text-[11px] sm:text-xs font-mono text-neutral-400">
              {certification.year}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-orange-400 transition-colors leading-snug mb-1">
            {certification.title}
          </h3>

          {/* Issuer */}
          <p className="text-xs font-medium text-neutral-300 mb-1.5">
            {certification.issuer}
          </p>

          {/* Subject Detail */}
          {certification.subject && (
            <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
              {certification.subject}
            </p>
          )}
        </div>

        {/* Footer Area: Completed Indicator & Preview Trigger */}
        <div className="mt-3 pt-2.5 border-t border-neutral-800/70 flex items-center justify-between text-[11px] font-mono">
          <div className="inline-flex items-center gap-1.5 text-neutral-400">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Completed</span>
          </div>

          <div className="flex items-center gap-2">
            {/* If credentialUrl exists */}
            {certification.credentialUrl && (
              <a
                href={certification.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 transition-colors mr-1"
                title="Open external credential"
              >
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            <span className="text-neutral-400 group-hover:text-orange-400 font-medium inline-flex items-center gap-1 transition-colors">
              <span>Preview</span>
              <Maximize2 className="w-3 h-3 text-orange-500/80 group-hover:text-orange-400" />
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
