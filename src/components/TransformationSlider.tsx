import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { MoveHorizontal } from 'lucide-react';
import { TRANSFORMATION_CASES } from '../data/salonData';
import { EditorialImage } from './EditorialImage';
import { ScissorButton, SectionChip } from './ScissorPrimitives';

interface TransformationSliderProps {
  onSelectService?: (service: string) => void;
}

export function TransformationSlider({ onSelectService }: TransformationSliderProps) {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const currentCase = TRANSFORMATION_CASES[activeCaseIndex];

  const updatePosition = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const raw = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.round(Math.min(96, Math.max(4, raw))));
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  const handleBookLook = () => {
    if (onSelectService) {
      onSelectService(currentCase.proposedCategory.split(' + ')[0]);
    }
    const bookingEl = document.getElementById('booking');
    if (bookingEl) bookingEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      aria-label="Transformations"
      className="bg-[var(--color-primary-bg)] text-[var(--color-heading)] py-[80px] md:py-[100px] xl:py-[140px]"
    >
      <div className="max-w-[1320px] mx-auto px-5 md:px-8 xl:px-10 flex flex-col gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <SectionChip number="05" label="Transformations" theme="light" />
            <h2 className="type-h2 text-[var(--color-heading)] [text-wrap:balance]">
              Real results, side by side.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="type-body-lg text-[var(--color-body-text)] max-w-[460px]">
              Drag the handle to compare. Illustrative demo imagery is shown here until genuine Nick&apos;s Salon
              client transformation photos are provided.
            </p>
          </div>
        </div>

        <div
          role="tablist"
          aria-label="Transformation previews"
          className="flex flex-wrap items-center gap-6 md:gap-10 border-b border-[var(--color-border)]"
        >
          {TRANSFORMATION_CASES.map((item, idx) => {
            const active = idx === activeCaseIndex;
            return (
              <button
                key={item.id}
                role="tab"
                type="button"
                aria-selected={active}
                onClick={() => {
                  setActiveCaseIndex(idx);
                  setPosition(50);
                }}
                className={`pb-4 inline-flex items-baseline gap-2.5 text-[16px] font-medium transition-colors border-b-2 -mb-[1px] cursor-pointer whitespace-nowrap shrink-0 ${
                  active
                    ? 'border-[var(--color-accent)] text-[var(--color-heading)]'
                    : 'border-transparent text-[var(--color-body-text)] hover:text-[var(--color-heading)]'
                }`}
              >
                <span className="text-[13px] tabular-nums text-[var(--color-accent-dark)]">{item.tabNum}</span>
                <span>{item.tabLabel}</span>
              </button>
            );
          })}
        </div>

        <motion.div
          key={currentCase.id}
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
        >
          <div className="lg:col-span-6">
            <div
              ref={containerRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              className="relative aspect-[3/4] max-h-[600px] w-full rounded-[4px] overflow-hidden select-none touch-none cursor-ew-resize bg-[var(--color-secondary-bg)]"
            >
              <EditorialImage
                src={currentCase.afterImage}
                alt={`After preview — ${currentCase.tabLabel}`}
                className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
                fallbackLabel="After Preview"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
              >
                <EditorialImage
                  src={currentCase.beforeImage}
                  alt={`Before preview — ${currentCase.tabLabel}`}
                  className="w-full h-full object-cover object-top"
                  fallbackLabel="Before Preview"
                />
              </div>

              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none text-[13px] font-medium">
                <span className="px-2.5 py-1 rounded-[2px] bg-[var(--color-scrim-badge)] text-[var(--color-heading-inverse)]">
                  Before
                </span>
                <span className="px-2.5 py-1 rounded-[2px] bg-[var(--color-primary-bg)] text-[var(--color-heading)]">
                  After
                </span>
              </div>

              <div
                style={{ left: `${position}%` }}
                className="absolute inset-y-0 -translate-x-1/2 w-[1.5px] bg-[var(--color-primary-bg)] pointer-events-none"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-[4px] bg-[var(--color-dark-bg)] border border-[var(--color-primary-bg)] text-[var(--color-heading-inverse)] flex items-center justify-center shadow-lg">
                  <MoveHorizontal className="w-4 h-4" aria-hidden="true" />
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-4">
              <label htmlFor="scissor-compare-range" className="text-[13px] text-[var(--color-body-text)] whitespace-nowrap">
                Slide to compare
              </label>
              <input
                id="scissor-compare-range"
                type="range"
                min={4}
                max={96}
                value={position}
                onChange={(e) => setPosition(Number(e.target.value))}
                style={{ accentColor: 'var(--color-accent)' }}
                className="w-full cursor-pointer"
              />
              <span className="text-[13px] font-medium text-[var(--color-heading)] tabular-nums w-9 text-right">
                {position}%
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-9">
            <div className="flex flex-col gap-4">
              <h3 className="type-h3-lg text-[var(--color-heading)]">{currentCase.title}</h3>
              <p className="type-body-lg text-[var(--color-body-text)] max-w-[480px]">{currentCase.desc}</p>
            </div>

            <div className="pt-6 border-t border-[var(--color-border)] flex flex-col gap-5 text-[15px]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-4 border-b border-[var(--color-border)]">
                <span className="text-[var(--color-body-text)]">Proposed Category</span>
                <span className="font-medium text-[var(--color-heading)]">{currentCase.proposedCategory}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-4 border-b border-[var(--color-border)]">
                <span className="text-[var(--color-body-text)]">Imagery Status</span>
                <span className="font-medium text-[var(--color-accent-dark)]">{currentCase.status}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-4 border-b border-[var(--color-border)]">
                <span className="text-[var(--color-body-text)]">Lead Stylist</span>
                <span className="font-medium text-[var(--color-heading)]">{currentCase.stylist}</span>
              </div>
            </div>

            <div>
              <ScissorButton label="Book this look" variant="dark" onClick={handleBookLook} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
