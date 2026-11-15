import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, Scissors } from 'lucide-react';
import { SALON_IMAGES, SALON_INFO, TICKER_ITEMS } from '../data/salonData';
import { EditorialImage } from './EditorialImage';
import { ScissorButton, SectionChip } from './ScissorPrimitives';

const HERO_SLIDES = [
  {
    src: SALON_IMAGES.hero,
    alt: "Nick's Salon modern dark charcoal and oak grooming studio interior",
  },
  {
    src: SALON_IMAGES.heroAlt,
    alt: "Stylist consultation at Nick's Salon before an arched brass mirror",
  },
];

export function Hero() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="bg-[var(--color-primary-bg)]">
      {/* Scissor 16px cream outer frame around rounded-[4px] dark hero canvas */}
      <div className="p-2 sm:p-4">
        <div className="relative min-h-[calc(100vh-32px)] bg-[var(--color-dark-bg)] rounded-[4px] overflow-hidden flex flex-col justify-end pt-[112px] md:pt-[150px] xl:pt-[168px] pb-5 sm:pb-8 xl:pb-[44px] px-5 md:px-8 xl:px-[48px]">
          {/* Crossfading Background Slideshow */}
          <div className="absolute inset-0">
            <AnimatePresence mode="sync">
              <motion.div
                key={HERO_SLIDES[slideIndex].src}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <EditorialImage
                  src={HERO_SLIDES[slideIndex].src}
                  alt={HERO_SLIDES[slideIndex].alt}
                  className="w-full h-full object-cover object-center"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Exact Scissor Dual Mask Scrims */}
            <div
              aria-hidden="true"
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{
                background: 'var(--color-scrim-dark)',
                opacity: 0.92,
                WebkitMaskImage: 'linear-gradient(90deg, #000 0%, transparent 70%)',
                maskImage: 'linear-gradient(90deg, #000 0%, transparent 70%)',
              }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{
                background: 'var(--color-scrim-dark)',
                opacity: 0.55,
                WebkitMaskImage: 'linear-gradient(0deg, #000 0%, transparent 45%)',
                maskImage: 'linear-gradient(0deg, #000 0%, transparent 45%)',
              }}
            />
          </div>

          {/* Main Hero Content Container */}
          <div className="relative z-10 w-full max-w-[1320px] mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[780px] flex flex-col gap-7"
            >
              <SectionChip
                number="01"
                label={`Men's grooming · ${SALON_INFO.ownerName}, Karachi`}
                theme="dark"
              />

              <div className="space-y-5">
                <h1 className="type-h1 text-[var(--color-heading-inverse)] [text-wrap:balance]">
                  The Art of Great Grooming.
                </h1>
                <p className="type-body-lg text-[var(--color-body-inverse)] max-w-[520px]">
                  {SALON_INFO.tagline}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <ScissorButton href="#booking" label="Book Appointment" variant="cream" />
                <ScissorButton href="#services" label="Explore Services" variant="glass" />
              </div>
            </motion.div>

            {/* Right Bottom Glass Feature Card matching Scissor exact colors */}
            <motion.a
              href="#services"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group w-full sm:w-[360px] shrink-0 bg-[var(--color-glass-bg)] backdrop-blur-[16px] border border-[var(--color-border-glass)] rounded-[4px] p-3 flex items-center gap-4 hover:border-[var(--color-heading-inverse)]/50 transition-colors"
            >
              <div className="w-20 h-24 shrink-0 rounded-[2px] overflow-hidden bg-[var(--color-heading)]">
                <EditorialImage
                  src={SALON_IMAGES.studioScissorAction}
                  alt="Precision haircut and beard grooming session"
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[12px] font-medium text-[var(--color-secondary-bg)] block mb-1">
                  Proposed menu
                </span>
                <p className="text-[16px] font-medium text-[var(--color-heading-inverse)] leading-tight truncate">
                  Haircut &amp; Beard Care
                </p>
                <p className="text-[13px] text-[var(--color-body-inverse)] mt-1 truncate">
                  Book via WhatsApp · Block A
                </p>
              </div>
              <ArrowRight
                className="w-4 h-4 text-[var(--color-heading-inverse)] shrink-0 mr-1 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Exact Scissor Service Ticker bar in #92745b */}
      <div className="bg-[var(--color-accent)] text-[var(--color-heading-inverse)] py-[22px] overflow-hidden select-none">
        <div className="animate-marquee items-center">
          {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
            <div key={`${item}-${idx}`} className="inline-flex items-center shrink-0">
              <span className="text-[16px] font-medium tracking-[-0.01em] px-6 whitespace-nowrap">
                {item}
              </span>
              <Scissors className="w-4 h-4 text-[var(--color-heading-inverse)] shrink-0" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
