import { useEffect, useRef } from 'react';
import type { NavItem } from '../../types/portfolio.types';
import { X, ArrowRight } from 'lucide-react';
import logoImg from '../../assets/Logo.png';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  navItems: NavItem[];
  onNavigate: (href: string) => void;
}

export function MobileMenu({
  isOpen,
  onClose,
  activeSection,
  navItems,
  onNavigate,
}: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
      className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#09090b]/98 backdrop-blur-2xl transition-all duration-300 animate-in fade-in"
    >
      {/* Mobile Menu Header */}
      <div className="flex items-center justify-between px-6 h-20 border-b border-neutral-800/80">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('#home');
          }}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden bg-neutral-900 border border-neutral-700/60 flex items-center justify-center shadow-md">
            <img
              src={logoImg}
              alt="MD - Mithila Dissanayaka"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <span className="text-sm font-semibold text-neutral-200 tracking-wide">
            Mithila<span className="text-orange-500">.</span>
          </span>
        </a>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="w-11 h-11 flex items-center justify-center rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 active:scale-95 transition-all"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Nav Links Container */}
      <nav
        ref={menuRef}
        className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between gap-8"
      >
        <ul className="flex flex-col gap-2">
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.href);
                  }}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20 font-semibold'
                      : 'text-neutral-300 hover:text-white hover:bg-neutral-900/60'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-all ${
                        isActive ? 'bg-orange-500 scale-125' : 'bg-neutral-700'
                      }`}
                    />
                    {item.label}
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? 'text-orange-400 translate-x-1' : 'text-neutral-600'
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA in Mobile Menu */}
        <div className="pt-4 border-t border-neutral-800/80 flex flex-col gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('#contact');
            }}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-lg shadow-orange-500/20 active:scale-[0.98] transition-all"
          >
            Hire Me
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-center text-xs text-neutral-500">
            Available for Summer 2025 Internship Opportunities
          </p>
        </div>
      </nav>
    </div>
  );
}

