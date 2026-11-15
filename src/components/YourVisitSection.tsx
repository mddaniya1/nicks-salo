import { motion } from 'motion/react';
import { VISIT_STEPS } from '../data/salonData';
import { EditorialImage } from './EditorialImage';
import { ScissorButton, SectionChip } from './ScissorPrimitives';

export function YourVisitSection() {
  return (
    <section
      id="your-visit"
      aria-label="Your visit"
      className="bg-[var(--color-dark-bg)] text-[var(--color-heading-inverse)] py-[80px] md:py-[100px] xl:py-[140px]"
    >
      <div className="max-w-[1320px] mx-auto px-5 md:px-8 xl:px-10 flex flex-col gap-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <SectionChip number="07" label="Your visit" theme="dark" />
            <h2 className="type-h2 text-[var(--color-heading-inverse)] [text-wrap:balance]">
              From consultation to{' '}
              <span className="text-[var(--color-accent-light)]">final look.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6 items-start">
            <p className="type-body-lg text-[var(--color-body-inverse)] max-w-[420px]">
              Four deliberate stages, no rush and no surprises. Here is how every grooming session at Nick&apos;s Salon
              unfolds.
            </p>
            <ScissorButton href="#booking" label="Book Appointment" variant="cream" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {VISIT_STEPS.map((item, idx) => (
            <motion.article
              key={item.step}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-5"
            >
              <div className="aspect-[3/4] rounded-[4px] overflow-hidden bg-[var(--color-dark-surface)]">
                <EditorialImage
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  fallbackLabel={item.title}
                />
              </div>

              <div className="flex items-center gap-3 pt-1">
                <span
                  className="w-2 h-2 rounded-full bg-[var(--color-accent-light)] shrink-0"
                  aria-hidden="true"
                />
                <div className="h-[1px] flex-1 bg-[var(--color-border-dark)]" aria-hidden="true" />
                <span className="text-[13px] font-medium text-[var(--color-accent-light)] tabular-nums">
                  {item.step}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="type-card-title text-[var(--color-heading-inverse)]">{item.title}</h3>
                <p className="text-[15px] text-[var(--color-body-inverse)] leading-[1.55]">{item.desc}</p>
                <span className="text-[13px] text-[var(--color-body-inverse)]/75 pt-1">{item.meta}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
