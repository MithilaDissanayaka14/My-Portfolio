import { Award, ShieldCheck, Cpu, Code2, GraduationCap } from 'lucide-react';

interface CertificatePlaceholderProps {
  title: string;
  issuer: string;
  year: string;
  iconType?: string;
  image?: string;
  className?: string;
}

export function CertificatePlaceholder({
  title,
  issuer,
  year,
  iconType,
  image,
  className = 'w-full h-44',
}: CertificatePlaceholderProps) {
  // If a verified image exists in the future, display it cleanly
  if (image) {
    return (
      <div className={`relative ${className} overflow-hidden bg-neutral-900 border-b border-neutral-800`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
    );
  }

  // Choose icon based on iconType
  const renderCenterIcon = () => {
    switch (iconType) {
      case 'cisco':
      case 'security':
        return <ShieldCheck className="w-8 h-8 text-orange-400 stroke-[1.75]" />;
      case 'embedded':
        return <Cpu className="w-8 h-8 text-orange-400 stroke-[1.75]" />;
      case 'java':
      case 'python':
        return <Code2 className="w-8 h-8 text-orange-400 stroke-[1.75]" />;
      case 'university':
      case 'diploma':
        return <GraduationCap className="w-8 h-8 text-orange-400 stroke-[1.75]" />;
      case 'ai':
      default:
        return <Award className="w-8 h-8 text-orange-400 stroke-[1.75]" />;
    }
  };

  return (
    <div
      className={`relative ${className} bg-gradient-to-br from-[#121215] via-[#16161a] to-[#0d0d10] flex flex-col items-center justify-center p-6 overflow-hidden border-b border-neutral-800/80 select-none group-hover:border-orange-500/30 transition-colors`}
    >
      {/* Subtle ambient orange/gold glow background */}
      <div
        className="absolute w-36 h-36 bg-orange-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-orange-500/18 transition-all duration-300"
        aria-hidden="true"
      />

      {/* Decorative Credential Watermark Frame */}
      <div
        className="absolute inset-3 border border-orange-500/15 rounded-xl pointer-events-none transition-colors group-hover:border-orange-500/30"
        aria-hidden="true"
      >
        {/* Corner Accents */}
        <span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-orange-400/60" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-orange-400/60" />
        <span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-orange-400/60" />
        <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-orange-400/60" />
      </div>

      {/* Center Seal Emblem */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-14 h-14 rounded-2xl bg-neutral-900/90 border border-neutral-750 flex items-center justify-center shadow-lg shadow-black/60 mb-2.5 group-hover:border-orange-500/50 group-hover:scale-105 transition-all duration-300">
          {renderCenterIcon()}
        </div>

        <span className="text-[10px] font-mono tracking-widest text-orange-400/80 uppercase">
          {issuer} • {year}
        </span>
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

