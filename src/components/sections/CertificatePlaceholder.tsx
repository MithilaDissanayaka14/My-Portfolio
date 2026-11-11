import { Award, ShieldCheck, Cpu, Code2, GraduationCap, Info } from 'lucide-react';

interface CertificatePlaceholderProps {
  title: string;
  issuer: string;
  year: string;
  iconType?: string;
  image?: string;
  className?: string;
  isEnlarged?: boolean;
  showNotice?: boolean;
}

export function CertificatePlaceholder({
  title,
  issuer,
  year,
  iconType,
  image,
  className = 'w-full h-28 sm:h-32',
  isEnlarged = false,
  showNotice = false,
}: CertificatePlaceholderProps) {
  // If a verified image exists, display it cleanly
  if (image) {
    return (
      <div className={`relative ${className} overflow-hidden bg-neutral-900 border-b border-neutral-800`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
    );
  }

  // Choose icon based on iconType
  const renderCenterIcon = () => {
    const iconClass = isEnlarged
      ? 'w-7 h-7 sm:w-8 sm:h-8 text-orange-400 stroke-[1.75]'
      : 'w-5 h-5 text-orange-400 stroke-[1.75]';

    switch (iconType) {
      case 'cisco':
      case 'security':
        return <ShieldCheck className={iconClass} />;
      case 'embedded':
        return <Cpu className={iconClass} />;
      case 'java':
      case 'python':
        return <Code2 className={iconClass} />;
      case 'university':
      case 'diploma':
        return <GraduationCap className={iconClass} />;
      case 'ai':
      default:
        return <Award className={iconClass} />;
    }
  };

  return (
    <div
      className={`relative ${className} bg-gradient-to-br from-[#121215] via-[#16161a] to-[#0d0d10] flex flex-col items-center justify-center ${
        isEnlarged ? 'p-5 sm:p-6' : 'p-3 sm:p-4'
      } overflow-hidden border-b border-neutral-800/80 select-none group-hover:border-orange-500/30 transition-colors`}
    >
      {/* Subtle ambient orange/gold glow background */}
      <div
        className={`absolute rounded-full blur-2xl pointer-events-none transition-all duration-300 ${
          isEnlarged
            ? 'w-48 h-48 bg-orange-500/15'
            : 'w-28 h-28 bg-orange-500/10 group-hover:bg-orange-500/18'
        }`}
        aria-hidden="true"
      />

      {/* Decorative Credential Watermark Frame */}
      <div
        className={`absolute border border-orange-500/15 rounded-xl pointer-events-none transition-colors group-hover:border-orange-500/30 ${
          isEnlarged ? 'inset-3 sm:inset-4' : 'inset-2 sm:inset-2.5'
        }`}
        aria-hidden="true"
      >
        {/* Corner Accents */}
        <span className={`absolute -top-1 -left-1 ${isEnlarged ? 'w-3 h-3' : 'w-2 h-2'} border-t-2 border-l-2 border-orange-400/60`} />
        <span className={`absolute -top-1 -right-1 ${isEnlarged ? 'w-3 h-3' : 'w-2 h-2'} border-t-2 border-r-2 border-orange-400/60`} />
        <span className={`absolute -bottom-1 -left-1 ${isEnlarged ? 'w-3 h-3' : 'w-2 h-2'} border-b-2 border-l-2 border-orange-400/60`} />
        <span className={`absolute -bottom-1 -right-1 ${isEnlarged ? 'w-3 h-3' : 'w-2 h-2'} border-b-2 border-r-2 border-orange-400/60`} />
      </div>

      {/* Center Seal Emblem */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <div
          className={`${
            isEnlarged
              ? 'w-14 h-14 sm:w-16 sm:h-16 rounded-2xl mb-2 sm:mb-2.5'
              : 'w-10 h-10 sm:w-11 sm:h-11 rounded-xl mb-1.5'
          } bg-neutral-900/90 border border-neutral-750 flex items-center justify-center shadow-lg shadow-black/60 group-hover:border-orange-500/50 group-hover:scale-105 transition-all duration-300`}
        >
          {renderCenterIcon()}
        </div>

        {isEnlarged && (
          <h4 className="text-sm sm:text-base font-bold text-white max-w-sm mx-auto truncate px-2 mb-0.5">
            {title}
          </h4>
        )}

        <span className="text-[10px] font-mono tracking-wider text-orange-400/80 uppercase">
          {issuer} • {year}
        </span>

        {showNotice && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900/90 border border-neutral-800 text-[11px] font-mono text-neutral-400 mt-2 sm:mt-2.5 shadow-md">
            <Info className="w-3.5 h-3.5 text-orange-400 shrink-0" />
            <span>Certificate image will be added soon.</span>
          </div>
        )}
      </div>

      {/* Subtle guilloche background lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="cert-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f97316" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cert-grid)" />
      </svg>
    </div>
  );
}
