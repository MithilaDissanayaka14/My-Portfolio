import { useState } from 'react';
import { TechIcon } from '../common/TechIcon';

interface RadarNode {
  name: string;
  category: string;
  radius: number; // percentage from center (0 to 100)
  angle: number;  // degrees (0 to 360)
  badgeSize?: string;
  iconSize?: string;
}

const RADAR_NODES: RadarNode[] = [
  // Inner Orbit (~32% radius) - Core Languages & Frontend
  { name: 'TypeScript', category: 'Language', radius: 32, angle: 160 },
  { name: 'React', category: 'Frontend', radius: 32, angle: 30 },
  { name: 'JavaScript', category: 'Language', radius: 32, angle: 85 },
  { name: 'Python', category: 'Language', radius: 32, angle: 260 },

  // Middle Orbit (~62% radius) - Full-Stack & Platforms
  { name: 'Node.js', category: 'Backend', radius: 62, angle: 10 },
  { name: 'Tailwind CSS', category: 'Styling', radius: 62, angle: 115 },
  { name: 'Spring Boot', category: 'Backend', radius: 62, angle: 210 },
  { name: 'GitHub', category: 'VCS & CI/CD', radius: 62, angle: 295 },
  { name: 'PostgreSQL', category: 'Database', radius: 62, angle: 345 },

  // Outer Orbit (~88% radius) - Specialized & Systems
  { name: 'ASP.NET Core', category: 'Backend', radius: 88, angle: 35 },
  { name: 'Java', category: 'Language', radius: 88, angle: 130 },
  { name: 'C++', category: 'Systems', radius: 88, angle: 180 },
  { name: 'FastAPI', category: 'AI & Services', radius: 88, angle: 240 },
  { name: 'MongoDB', category: 'Database', radius: 88, angle: 315 },
];

export function TechRadarOrbit() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-[320px] sm:max-w-[440px] lg:max-w-[500px] aspect-square mx-auto flex items-center justify-center select-none overflow-hidden rounded-full">
      {/* Ambient background glow */}
      <div
        className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-orange-600/5 rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Outer boundary ring */}
      <div className="absolute inset-2 sm:inset-4 rounded-full border border-neutral-800/60 pointer-events-none" />

      {/* Middle orbital ring */}
      <div className="absolute w-[66%] h-[66%] rounded-full border border-dashed border-neutral-800/80 pointer-events-none" />

      {/* Inner orbital ring */}
      <div className="absolute w-[36%] h-[36%] rounded-full border border-neutral-800/70 pointer-events-none" />

      {/* Coordinate axes */}
      <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-neutral-800/60 to-transparent pointer-events-none" />
      <div className="absolute inset-y-4 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-neutral-800/60 to-transparent pointer-events-none" />
      <div className="absolute inset-8 rotate-45 border-t border-b border-transparent before:absolute before:inset-x-0 before:top-1/2 before:-translate-y-1/2 before:h-px before:bg-neutral-850/40 pointer-events-none" />
      <div className="absolute inset-8 -rotate-45 border-t border-b border-transparent before:absolute before:inset-x-0 before:top-1/2 before:-translate-y-1/2 before:h-px before:bg-neutral-850/40 pointer-events-none" />

      {/* Radar sweeping scan line */}
      <div
        className="absolute inset-2 sm:inset-4 rounded-full pointer-events-none overflow-hidden animate-[spin_24s_linear_infinite] motion-reduce:animate-none opacity-40"
        aria-hidden="true"
      >
        <div className="w-1/2 h-1/2 origin-bottom-right bg-gradient-to-br from-orange-500/20 via-orange-500/5 to-transparent [clip-path:polygon(0_0,100%_100%,0_100%)]" />
      </div>

      {/* Radar Center Hub */}
      <div className="relative z-10 w-12 h-12 rounded-full bg-[#141416] border border-orange-500/40 shadow-lg shadow-orange-500/20 flex items-center justify-center">
        <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 animate-pulse shadow-md shadow-orange-500/50" />
      </div>

      {/* Radar Tech Nodes */}
      {RADAR_NODES.map((node) => {
        // Convert polar coordinates (radius %, angle degrees) to Cartesian offset (%)
        const rad = (node.angle * Math.PI) / 180;
        // Node radius is measured from center (0,0) with 50% being the outer boundary
        const rPercent = (node.radius / 100) * 44; // keep inside bounds
        const leftPercent = 50 + rPercent * Math.cos(rad);
        const topPercent = 50 + rPercent * Math.sin(rad);

        const isHovered = activeNode === node.name;

        return (
          <div
            key={node.name}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group"
            style={{ left: `${leftPercent}%`, top: `${topPercent}%` }}
            onMouseEnter={() => setActiveNode(node.name)}
            onMouseLeave={() => setActiveNode(null)}
            onFocus={() => setActiveNode(node.name)}
            onBlur={() => setActiveNode(null)}
            tabIndex={0}
            role="button"
            aria-label={`${node.name} (${node.category})`}
          >
            {/* Tech Icon Badge */}
            <div
              className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#141416]/95 border backdrop-blur-md flex items-center justify-center cursor-pointer transition-all duration-300 shadow-md ${
                isHovered
                  ? 'border-orange-500 ring-2 ring-orange-500/30 scale-115 shadow-orange-500/20 bg-neutral-900 z-30'
                  : 'border-neutral-800/80 hover:border-neutral-700 hover:scale-105'
              }`}
            >
              <TechIcon name={node.name} className="w-5 h-5 sm:w-5.5 sm:h-5.5 transition-transform duration-200" />
            </div>

            {/* Hover Tooltip Pill */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 -bottom-7 px-2 py-0.5 rounded-md bg-neutral-900/95 border border-neutral-750 text-[10px] font-mono text-neutral-200 whitespace-nowrap shadow-xl pointer-events-none transition-all duration-200 z-40 ${
                isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
              }`}
              aria-hidden="true"
            >
              {node.name}
            </div>
          </div>
        );
      })}

      {/* Orbit Coordinate Metadata Tag */}
      <div className="absolute bottom-2 right-4 text-[10px] font-mono text-neutral-600 tracking-wider hidden sm:block pointer-events-none">
        TECH_RADAR // VERIFIED_STACK
      </div>
    </div>
  );
}

