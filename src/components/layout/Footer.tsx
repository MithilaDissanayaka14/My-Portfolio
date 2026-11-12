import { personalInfo } from '../../data/personalInfo';
import { Mail } from 'lucide-react';
import logoImg from '../../assets/Logo.png';

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-neutral-800/80 bg-[#09090b] text-neutral-400 py-10 relative w-full">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full space-y-6">
        {/* Main Tier: Brand Monogram & Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand Monogram & Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-[#141416] border border-orange-500/40 flex items-center justify-center shadow-sm shadow-orange-500/10 shrink-0">
              <img
                src={logoImg}
                alt="MD - Mithila Dissanayaka"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="text-left">
              <span className="text-base font-bold text-white tracking-tight block">
                {personalInfo.name}
              </span>
              <span className="text-xs font-mono text-neutral-400 block">
                {personalInfo.primaryTitle}
              </span>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-3">
            {personalInfo.socialLinks.map((social) => {
              if (social.platform === 'GitHub') {
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-orange-500/50 hover:text-white text-neutral-400 flex items-center justify-center transition-all hover:scale-105"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                  </a>
                );
              }

              if (social.platform === 'LinkedIn') {
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-orange-500/50 hover:text-white text-neutral-400 flex items-center justify-center transition-all hover:scale-105"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.86 0 1.54-.68 1.54-1.54 0-.85-.7-1.54-1.56-1.54-.86 0-1.54.69-1.54 1.54 0 .86.68 1.54 1.56 1.54m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                    </svg>
                  </a>
                );
              }

              return (
                <a
                  key={social.platform}
                  href={social.url}
                  aria-label={social.ariaLabel}
                  className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-orange-500/50 hover:text-white text-neutral-400 flex items-center justify-center transition-all hover:scale-105"
                >
                  <Mail className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Tier: Copyright & Tech Credits */}
        <div className="pt-6 border-t border-neutral-850 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500 text-center sm:text-left">
          <p>© {CURRENT_YEAR} {personalInfo.name}. All rights reserved.</p>
          <p className="font-mono text-[11px] text-neutral-500">
            Built with React 19, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
