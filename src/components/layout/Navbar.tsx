import { useState, useEffect } from 'react';
import { navigationLinks } from '../../data/navigation';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { MobileMenu } from './MobileMenu';
import { Menu } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sectionIds = navigationLinks.map((item) => item.href.replace('#', ''));
  const activeSection = useScrollSpy(sectionIds, 120);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full ${
          isScrolled
            ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-neutral-800/80 shadow-lg shadow-black/40 py-3'
            : 'bg-[#09090b]/60 backdrop-blur-sm border-b border-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between w-full">
            {/* Brand Logo Monogram */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg p-1 shrink-0"
              aria-label="Mithila Dissanayaka - Home"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700/60 group-hover:border-orange-500/50 flex items-center justify-center shadow-md shadow-orange-500/5 transition-all duration-200">
                <span className="font-serif italic text-lg sm:text-xl font-bold bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                  MD
                </span>
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-sm font-semibold text-neutral-100 tracking-tight group-hover:text-white transition-colors">
                  Mithila Dissanayaka
                </span>
                <span className="text-[11px] text-neutral-400 font-mono tracking-wide">
                  Software Engineer
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-md shadow-inner shadow-black/20"
              aria-label="Main Navigation"
            >
              {navigationLinks.map((item) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${
                      isActive
                        ? 'text-orange-400 bg-orange-500/10 font-semibold shadow-[0_0_12px_rgba(249,115,22,0.15)]'
                        : 'text-neutral-300 hover:text-white hover:bg-neutral-800/50'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-orange-500 rounded-full shadow-[0_0_6px_#f97316]" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Action CTA & Mobile Trigger */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 active:scale-95 transition-all shadow-md shadow-orange-500/20 hover:shadow-orange-500/30 border border-orange-400/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
              >
                Hire Me
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                aria-label="Open navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeSection={activeSection}
        navItems={navigationLinks}
        onNavigate={handleNavClick}
      />
    </>
  );
}
