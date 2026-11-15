import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, Scissors, X } from 'lucide-react';
import { ScissorButton } from './ScissorPrimitives';
import { SALON_INFO } from '../data/salonData';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#our-work' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--color-dark-bg)]/95 backdrop-blur-md border-b border-[var(--color-border-dark)]'
          : 'bg-[var(--color-dark-transparent)] pt-4 px-2 sm:px-4'
      }`}
    >
      <div
        className={`max-w-[1320px] mx-auto px-5 md:px-8 xl:px-12 flex items-center justify-between gap-8 transition-all duration-300 ${
          scrolled ? 'h-[76px]' : 'h-[88px] xl:h-[100px]'
        }`}
      >
        {/* Left: Brand Wordmark */}
        <a
          href="#home"
          className="inline-flex items-center gap-2.5 text-[20px] font-medium tracking-[-0.02em] text-[var(--color-heading-inverse)] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-light)]"
        >
          <Scissors className="w-4 h-4 text-[var(--color-accent-light)]" aria-hidden="true" />
          <span>{SALON_INFO.brandName}</span>
        </a>

        {/* Center/Right Nav Links */}
        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-[36px]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[16px] font-medium leading-none text-[var(--color-heading-inverse)]/85 hover:text-[var(--color-heading-inverse)] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-[var(--color-heading-inverse)] hover:after:w-full after:transition-all after:duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-light)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA + Mobile Menu Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden lg:block">
            <ScissorButton href="#booking" label="Book Appointment" variant="cream" />
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-[4px] bg-[var(--color-glass-bg)] border border-[var(--color-border-glass)] text-[var(--color-heading-inverse)] hover:bg-[var(--color-border-glass)] transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile & Tablet Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-[var(--color-dark-bg)] border-t border-[var(--color-border-dark)] px-5 md:px-8 pb-8 pt-4"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col divide-y divide-[var(--color-border-dark)]">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-4 text-[18px] font-medium text-[var(--color-heading-inverse)] hover:text-[var(--color-accent-light)] transition-colors min-h-[44px] flex items-center"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-5">
                <ScissorButton
                  href="#booking"
                  label="Book Appointment"
                  variant="cream"
                  onClick={() => setMobileOpen(false)}
                  className="w-full"
                />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
