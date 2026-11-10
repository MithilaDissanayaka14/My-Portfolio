import type { ProjectSchematic as SchematicType } from '../../types/portfolio.types';

interface ProjectSchematicProps {
  type?: SchematicType;
  className?: string;
}

export function ProjectSchematic({ type = 'generic', className = 'w-full h-36' }: ProjectSchematicProps) {
  switch (type) {
    case 'transit':
      return (
        <div className={`relative ${className} bg-gradient-to-br from-neutral-900 via-[#151518] to-neutral-950 flex items-center justify-center overflow-hidden border-b border-neutral-800/80`}>
          {/* Subtle glowing orange ambient light */}
          <div className="absolute w-32 h-32 bg-orange-500/15 rounded-full blur-2xl pointer-events-none" />

          {/* Transit Route SVG Schematic */}
          <svg className="w-48 h-28 text-orange-400 stroke-current opacity-85" viewBox="0 0 200 100" fill="none" strokeWidth="1.75">
            {/* Bus outline */}
            <rect x="25" y="25" width="60" height="45" rx="8" />
            <line x1="25" y1="42" x2="85" y2="42" />
            <line x1="55" y1="25" x2="55" y2="42" />
            <circle cx="40" cy="70" r="5" fill="#f97316" />
            <circle cx="70" cy="70" r="5" fill="#f97316" />
            <circle cx="35" cy="54" r="2.5" fill="#fb923c" />
            <circle cx="75" cy="54" r="2.5" fill="#fb923c" />

            {/* Connecting Route Waypoints */}
            <path d="M85 45 C115 45, 120 20, 150 25 C170 28, 175 60, 160 75" strokeDasharray="3 3" />
            <circle cx="150" cy="25" r="4" fill="#f97316" />
            <circle cx="160" cy="75" r="4" fill="#f97316" />

            {/* GPS Pin */}
            <path d="M150 15 C146 15, 143 18, 143 22 C143 27, 150 34, 150 34 C150 34, 157 27, 157 22 C157 18, 154 15, 150 15 Z" fill="#ea580c" stroke="none" />
            <circle cx="150" cy="21" r="1.5" fill="#fff" stroke="none" />
          </svg>

          {/* Watermark label */}
          <span className="absolute bottom-2.5 right-3 text-[10px] font-mono text-orange-400/60 uppercase tracking-widest">
            TRANSIT // AI-POWERED
          </span>
        </div>
      );

    case 'accommodation':
      return (
        <div className={`relative ${className} bg-gradient-to-br from-neutral-900 via-[#151518] to-neutral-950 flex items-center justify-center overflow-hidden border-b border-neutral-800/80`}>
          <div className="absolute w-32 h-32 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />

          {/* Architectural Blueprint Schematic */}
          <svg className="w-48 h-28 text-orange-400 stroke-current opacity-85" viewBox="0 0 200 100" fill="none" strokeWidth="1.75">
            {/* Building Blueprint Wireframe */}
            <rect x="30" y="20" width="140" height="65" rx="3" strokeDasharray="4 2" />
            <line x1="30" y1="50" x2="170" y2="50" />
            <line x1="95" y1="20" x2="95" y2="85" />

            {/* Room 1 (Bed layout) */}
            <rect x="42" y="28" width="35" height="15" rx="2" fill="#f97316" fillOpacity="0.15" />
            <rect x="45" y="30" width="12" height="6" rx="1" />

            {/* Room 2 (Living space) */}
            <rect x="110" y="28" width="45" height="15" rx="2" fill="#f97316" fillOpacity="0.15" />

            {/* Key icon */}
            <circle cx="65" cy="68" r="6" />
            <path d="M71 68h15M80 68v4M84 68v4" />

            {/* Checkmark availability */}
            <circle cx="135" cy="68" r="8" fill="#22c55e" fillOpacity="0.2" />
            <path d="M131 68l3 3 6-6" stroke="#22c55e" />
          </svg>

          <span className="absolute bottom-2.5 right-3 text-[10px] font-mono text-orange-400/60 uppercase tracking-widest">
            PORTAL // HOUSING
          </span>
        </div>
      );

    case 'healthcare':
      return (
        <div className={`relative ${className} bg-gradient-to-br from-neutral-900 via-[#151518] to-neutral-950 flex items-center justify-center overflow-hidden border-b border-neutral-800/80`}>
          <div className="absolute w-32 h-32 bg-orange-500/15 rounded-full blur-2xl pointer-events-none" />

          {/* Medical & Adherence Schematic */}
          <svg className="w-48 h-28 text-orange-400 stroke-current opacity-85" viewBox="0 0 200 100" fill="none" strokeWidth="1.75">
            {/* Heartbeat pulse line */}
            <path d="M20 55 H55 L65 30 L75 75 L85 45 L95 62 L105 55 H180" />

            {/* Pill Capsule */}
            <rect x="130" y="25" width="40" height="18" rx="9" transform="rotate(-30 150 34)" fill="#f97316" fillOpacity="0.15" />
            <line x1="142" y1="20" x2="152" y2="38" />

            {/* Medical Cross */}
            <path d="M38 24v16M30 32h16" strokeWidth="2.5" stroke="#ea580c" />
          </svg>

          <span className="absolute bottom-2.5 right-3 text-[10px] font-mono text-orange-400/60 uppercase tracking-widest">
            HEALTHCARE // ANALYTICS
          </span>
        </div>
      );

    case 'fitness':
      return (
        <div className={`relative ${className} bg-gradient-to-br from-neutral-900 via-[#151518] to-neutral-950 flex items-center justify-center overflow-hidden border-b border-neutral-800/80`}>
          <div className="absolute w-32 h-32 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />

          {/* Fitness Tracker Schematic */}
          <svg className="w-48 h-28 text-orange-400 stroke-current opacity-85" viewBox="0 0 200 100" fill="none" strokeWidth="1.75">
            {/* Dumbbell */}
            <rect x="40" y="38" width="6" height="24" rx="2" fill="#f97316" fillOpacity="0.3" />
            <rect x="34" y="44" width="6" height="12" rx="1" />
            <line x1="46" y1="50" x2="84" y2="50" strokeWidth="3" />
            <rect x="84" y="38" width="6" height="24" rx="2" fill="#f97316" fillOpacity="0.3" />
            <rect x="90" y="44" width="6" height="12" rx="1" />

            {/* Circular Progress Gauge */}
            <circle cx="145" cy="50" r="24" strokeDasharray="110" strokeDashoffset="30" stroke="#f97316" strokeWidth="3" />
            <path d="M145 36v14l10 6" strokeWidth="2" />
            <circle cx="145" cy="50" r="3" fill="#ea580c" />
          </svg>

          <span className="absolute bottom-2.5 right-3 text-[10px] font-mono text-orange-400/60 uppercase tracking-widest">
            MOBILE // CROSS-PLATFORM
          </span>
        </div>
      );

    case 'pharmacy':
      return (
        <div className={`relative ${className} bg-gradient-to-br from-neutral-900 via-[#151518] to-neutral-950 flex items-center justify-center overflow-hidden border-b border-neutral-800/80`}>
          <div className="absolute w-32 h-32 bg-orange-500/15 rounded-full blur-2xl pointer-events-none" />

          {/* Pharmacy Schematic */}
          <svg className="w-48 h-28 text-orange-400 stroke-current opacity-85" viewBox="0 0 200 100" fill="none" strokeWidth="1.75">
            {/* Medicine Bottle */}
            <rect x="40" y="35" width="34" height="45" rx="4" fill="#f97316" fillOpacity="0.15" />
            <rect x="47" y="26" width="20" height="9" rx="2" />
            <line x1="44" y1="52" x2="70" y2="52" />
            <line x1="57" y1="45" x2="57" y2="59" />

            {/* Prescription / Clipboard */}
            <rect x="115" y="24" width="46" height="58" rx="4" />
            <line x1="125" y1="40" x2="151" y2="40" />
            <line x1="125" y1="48" x2="151" y2="48" />
            <line x1="125" y1="56" x2="143" y2="56" />
            <rect x="130" y="19" width="16" height="8" rx="2" fill="#f97316" />
          </svg>

          <span className="absolute bottom-2.5 right-3 text-[10px] font-mono text-orange-400/60 uppercase tracking-widest">
            ENTERPRISE // SPRING BOOT
          </span>
        </div>
      );

    default:
      return (
        <div className={`relative ${className} bg-gradient-to-br from-neutral-900 via-[#151518] to-neutral-950 flex items-center justify-center overflow-hidden border-b border-neutral-800/80`}>
          <div className="absolute w-32 h-32 bg-orange-500/15 rounded-full blur-2xl pointer-events-none" />
          <svg className="w-32 h-20 text-orange-400 stroke-current opacity-85" viewBox="0 0 100 60" fill="none" strokeWidth="2">
            <polyline points="30 40 10 30 30 20" />
            <polyline points="70 20 90 30 70 40" />
            <line x1="58" y1="15" x2="42" y2="45" />
          </svg>
        </div>
      );
  }
}

