import { useEffect, useRef } from 'react';
import type { CertificationItem } from '../../types/portfolio.types';
import { CertificatePlaceholder } from './CertificatePlaceholder';
import { X, CheckCircle, ExternalLink, Calendar, Building, BookOpen } from 'lucide-react';

interface CertificateModalProps {
  certification: CertificationItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CertificateModal({ certification, isOpen, onClose }: CertificateModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus close button on open
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    // Escape key handler
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !certification) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
      aria-describedby="cert-modal-desc"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-200 ease-out animate-fadeIn"
        aria-hidden="true"
      />

      {/* Modal Dialog Content Container */}
      <div
        ref={modalRef}
        className="relative w-full max-w-xl md:max-w-2xl bg-[#141416] border border-neutral-800/90 hover:border-neutral-750 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/90 overflow-hidden z-10 transition-all duration-200 ease-out transform animate-modalScale my-auto"
      >
        {/* Top Header Bar: Tag Badge & Close Button */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-neutral-800/80 bg-neutral-900/40">
          <div className="flex items-center gap-2">
            {certification.tag && (
              <span className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-medium">
                {certification.tag}
              </span>
            )}
            <span className="text-xs font-mono text-neutral-400 hidden sm:inline-flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-neutral-500" />
              {certification.year}
            </span>
          </div>

          {/* Accessible Close Button */}
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close certificate preview"
            className="p-2 rounded-full text-neutral-400 hover:text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 cursor-pointer shadow-md"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Certificate Preview Banner (Enlarged) */}
        <div className="relative overflow-hidden bg-neutral-950">
          {certification.certificateImage ? (
            <div className="relative w-full max-h-[360px] flex items-center justify-center p-4 bg-neutral-950 border-b border-neutral-800">
              <img
                src={certification.certificateImage}
                alt={certification.title}
                className="max-h-[320px] w-auto max-w-full object-contain rounded-lg shadow-xl"
              />
            </div>
          ) : (
            <CertificatePlaceholder
              title={certification.title}
              issuer={certification.issuer}
              year={certification.year}
              iconType={certification.iconType}
              isEnlarged={true}
              showNotice={true}
              className="w-full h-48 sm:h-56"
            />
          )}
        </div>

        {/* Certificate Details Body */}
        <div className="p-5 sm:p-7 space-y-4">
          <div>
            <h3
              id="cert-modal-title"
              className="text-lg sm:text-2xl font-bold text-white tracking-tight leading-snug mb-2"
            >
              {certification.title}
            </h3>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-neutral-300">
              <span className="flex items-center gap-1.5 text-orange-400 font-medium">
                <Building className="w-4 h-4 shrink-0 text-orange-500" />
                <span>{certification.issuer}</span>
              </span>
              <span className="text-neutral-500">•</span>
              <span className="flex items-center gap-1.5 font-mono text-neutral-400">
                <Calendar className="w-3.5 h-3.5 shrink-0" />
                <span>Issued {certification.year}</span>
              </span>
              <span className="text-neutral-500">•</span>
              <span className="inline-flex items-center gap-1 text-emerald-400 font-mono text-xs">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Completed</span>
              </span>
            </div>
          </div>

          {/* Subject / Program Description */}
          {certification.subject && (
            <div className="pt-3 border-t border-neutral-800/80">
              <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                <BookOpen className="w-3.5 h-3.5 text-orange-400" />
                <span>Program Scope & Specialization</span>
              </div>
              <p
                id="cert-modal-desc"
                className="text-xs sm:text-sm text-neutral-300 bg-neutral-900/70 border border-neutral-800/80 rounded-xl p-3 sm:p-4 leading-relaxed"
              >
                {certification.subject}
              </p>
            </div>
          )}

          {/* Action Row */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
            <span className="text-[11px] font-mono text-neutral-500">
              Credential ID: Formal Accreditation Record
            </span>

            {/* View Credential Link if provided */}
            {certification.credentialUrl ? (
              <a
                href={certification.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-500 text-white font-medium text-xs sm:text-sm hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              >
                <span>Verify Credential</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 text-neutral-300 hover:text-white text-xs sm:text-sm font-medium transition-colors cursor-pointer"
              >
                Close Preview
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
