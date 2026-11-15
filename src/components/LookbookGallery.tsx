import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { LOOKBOOK_CARDS } from '../data/salonData';
import { EditorialImage } from './EditorialImage';
import { ScissorButton, SectionChip } from './ScissorPrimitives';

export function LookbookGallery() {
  const [selected, setSelected] = useState<(typeof LOOKBOOK_CARDS)[number] | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const scrollByAmount = (direction: 'left' | 'right') => {
    const el = trackRef.current;
    if (!el) return;
    const step = Math.min(440, el.clientWidth * 0.78);
    el.scrollBy({ left: direction === 'left' ? -step : step, behavior: 'smooth' });
  };

  return (
    <section
      id="our-work"
      aria-label="Lookbook"
      className="bg-[var(--color-secondary-bg)] text-[var(--color-heading)] pt-[80px] md:pt-[100px] xl:pt-[140px] pb-[64px] md:pb-[88px]"
    >
      <div className="max-w-[1320px] mx-auto px-5 md:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <SectionChip number="09" label="Lookbook" theme="sand" />
            <h2 className="type-h2 text-[var(--color-heading)] [text-wrap:balance]">
              Fresh from the chair.
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6 items-start">
            <p className="type-body-lg text-[var(--color-body-text)] max-w-[520px]">
              A rolling look at men&apos;s hairstyles, haircuts, and grooming direction. Scroll to browse or tap any
              frame to inspect full details.
            </p>
            <div className="w-full flex items-center justify-between gap-4">
              <ScissorButton href="#booking" label="Book your look" variant="dark" />
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => scrollByAmount('left')}
                  aria-label="Scroll lookbook left"
                  className="w-11 h-11 rounded-[4px] bg-[var(--color-primary-bg)] border border-[var(--color-border)] text-[var(--color-heading)] hover:bg-[var(--color-button-bg)] hover:text-[var(--color-button-text)] transition-colors flex items-center justify-center cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollByAmount('right')}
                  aria-label="Scroll lookbook right"
                  className="w-11 h-11 rounded-[4px] bg-[var(--color-primary-bg)] border border-[var(--color-border)] text-[var(--color-heading)] hover:bg-[var(--color-button-bg)] hover:text-[var(--color-button-text)] transition-colors flex items-center justify-center cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="lookbook-scroll flex gap-5 overflow-x-auto px-5 md:px-8 xl:px-10 pb-5 snap-x snap-mandatory"
      >
        {LOOKBOOK_CARDS.map((card, idx) => (
          <motion.article
            key={card.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
            className="snap-start shrink-0 w-[80vw] sm:w-[320px] lg:w-[370px] group"
          >
            <button
              type="button"
              onClick={() => setSelected(card)}
              className="w-full text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-heading)]"
            >
              <div className="relative aspect-[3/4] rounded-[4px] overflow-hidden bg-[var(--color-dark-bg)]">
                <EditorialImage
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  fallbackLabel={card.title}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(0,0,0,0) 45%, var(--color-scrim-card) 100%)',
                  }}
                />
                <div className="absolute bottom-3 right-3 w-9 h-9 rounded-[4px] bg-[var(--color-dark-bg)]/85 text-[var(--color-heading-inverse)] flex items-center justify-center">
                  <Expand className="w-4 h-4" aria-hidden="true" />
                </div>
              </div>
              <div className="pt-3.5">
                <p className="text-[13px] font-medium text-[var(--color-accent-dark)]">{card.category}</p>
                <h3 className="type-lead text-[var(--color-heading)] mt-1 group-hover:text-[var(--color-accent-dark)] transition-colors">
                  {card.title}
                </h3>
                <p className="text-[13px] text-[var(--color-body-text)] mt-1 leading-[1.45]">{card.caption}</p>
              </div>
            </button>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-[var(--color-dark-bg)]/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[var(--color-primary-bg)] text-[var(--color-heading)] rounded-[4px] grid grid-cols-1 md:grid-cols-12 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close lookbook image"
                className="absolute top-3 right-3 z-10 w-10 h-10 rounded-[4px] bg-[var(--color-dark-bg)] text-[var(--color-heading-inverse)] flex items-center justify-center cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="md:col-span-7 aspect-[3/4] md:aspect-auto md:max-h-[78vh] bg-[var(--color-dark-bg)]">
                <EditorialImage
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-cover object-top"
                  fallbackLabel={selected.title}
                />
              </div>

              <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between gap-6">
                <div>
                  <span className="text-[13px] font-medium text-[var(--color-accent-dark)]">{selected.category}</span>
                  <h3 className="type-h3-lg text-[var(--color-heading)] mt-2">{selected.title}</h3>
                  <p className="text-[15px] text-[var(--color-body-text)] mt-3 leading-relaxed">{selected.caption}</p>
                </div>

                <ScissorButton
                  href="#booking"
                  label="Book this look"
                  variant="dark"
                  onClick={() => setSelected(null)}
                  className="w-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
