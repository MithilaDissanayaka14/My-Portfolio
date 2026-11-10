interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div
      className={`mb-12 sm:mb-16 ${
        isCenter ? 'text-center flex flex-col items-center' : 'text-left'
      } ${className}`}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-medium tracking-wider uppercase mb-3 shadow-[0_0_12px_rgba(249,115,22,0.1)]">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
          <span>{badge}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

