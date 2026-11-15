import { motion } from 'motion/react';
import { WHY_CHOOSE_CARDS } from '../data/salonData';
import { EditorialImage } from './EditorialImage';
import { ScissorButton, SectionChip } from './ScissorPrimitives';

export function WhyChooseSection() {
  return (
    <section
      aria-label="Why choose Nick's Salon"
      className="bg-[var(--color-dark-bg)] text-[var(--color-heading-inverse)] py-[80px] md:py-[100px] xl:py-[140px]"
    >
      <div className="max-w-[1320px] mx-auto px-5 md:px-8 xl:px-10 flex flex-col gap-[56px] xl:gap-[72px]">
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <SectionChip number="04" label="Why Nick's Salon" theme="dark" />
            <h2 className="type-h2 text-[var(--color-heading-inverse)] [text-wrap:balance]">
              Five standards behind{' '}
              <span className="text-[var(--color-accent-light)]">every chair.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6 items-start">
            <p className="type-body-lg text-[var(--color-body-inverse)] max-w-[420px]">
              Clients return for consistent craftsmanship and personal attention. Here is what shapes every grooming
              visit.
            </p>
            <ScissorButton href="#booking" label="Book Appointment" variant="cream" />
          </div>
        </div>

        {/* Exact Scissor Cream Cards (#f7f5f0) on Dark Background (#1f1c19) */}
        <div className="flex flex-col gap-8">
          {WHY_CHOOSE_CARDS.map((card, idx) => (
            <motion.article
              key={card.index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[var(--color-primary-bg)] text-[var(--color-heading)] rounded-[4px] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch p-2 sm:p-3 gap-2 sm:gap-4"
            >
              <div className="lg:col-span-5 aspect-[4/3] lg:aspect-auto lg:min-h-[340px] bg-[var(--color-secondary-bg)] rounded-[4px] overflow-hidden">
                <EditorialImage
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                  fallbackLabel={card.title}
                />
              </div>

              <div className="lg:col-span-7 p-4 sm:p-6 lg:py-6 lg:pl-6 lg:pr-4 flex flex-col justify-between gap-10">
                <div className="flex flex-col gap-4">
                  <span className="text-[13px] font-medium text-[var(--color-accent-dark)] tabular-nums">
                    {card.index}
                  </span>
                  <h3 className="type-card-title text-[var(--color-heading)]">{card.title}</h3>
                  <p className="type-body-lg text-[var(--color-body-text)] max-w-[420px]">{card.desc}</p>
                </div>

                <p className="text-[13px] font-medium text-[var(--color-body-text)] pt-5 border-t border-[var(--color-border)]">
                  {card.tags.join(' · ')}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
