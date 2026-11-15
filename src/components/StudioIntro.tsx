import { motion } from 'motion/react';
import { ExternalLink, Star } from 'lucide-react';
import { SALON_INFO, STUDIO_STRIP_CARDS } from '../data/salonData';
import { EditorialImage } from './EditorialImage';
import { ScissorButton, ScrollRevealStatement, SectionChip } from './ScissorPrimitives';

export function StudioIntro() {
  return (
    <section
      id="about"
      aria-label="About the salon"
      className="bg-[var(--color-primary-bg)] text-[var(--color-heading)] py-[80px] md:py-[100px] xl:py-[140px]"
    >
      <div className="max-w-[1320px] mx-auto px-5 md:px-8 xl:px-10 flex flex-col gap-16 xl:gap-20">
        {/* Top Statement Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7 flex flex-col gap-8">
            <SectionChip number="02" label="About the salon" theme="light" />
            <ScrollRevealStatement text="More than just a haircut. Precision, style and personal care tailored around every client." />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:pt-12 flex flex-col gap-6"
          >
            <a
              href={SALON_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[14px] font-medium text-[var(--color-heading)] hover:text-[var(--color-accent-dark)] transition-colors w-fit"
            >
              <span className="inline-flex items-center gap-0.5 text-[var(--color-accent)]" aria-hidden="true">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </span>
              <span>Google listing · Kashana View, North Nazimabad</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>

            <p className="type-body-lg text-[var(--color-body-text)]">
              Led by {SALON_INFO.ownerName} in Block A, North Nazimabad, Nick&apos;s Salon begins every session with
              an attentive consultation so your haircut and beard grooming match your hair texture and personal comfort.
            </p>

            <div className="pt-1">
              <ScissorButton href="#booking" label="Book a consultation" variant="dark" />
            </div>
          </motion.div>
        </div>

        {/* 5-Card Numbered Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {STUDIO_STRIP_CARDS.map((card, idx) => (
            <motion.a
              key={card.num}
              href="#services"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col gap-3.5"
            >
              <div className="relative aspect-[3/4] rounded-[4px] overflow-hidden bg-[var(--color-secondary-bg)]">
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
                      'linear-gradient(180deg, rgba(0,0,0,0) 35%, var(--color-scrim-card) 100%)',
                  }}
                />
                <span className="absolute top-3 left-3 px-2 py-1 rounded-[2px] bg-[var(--color-dark-bg)]/85 text-[var(--color-heading-inverse)] text-[12px] font-medium tabular-nums">
                  {card.num}
                </span>
              </div>
              <div>
                <h3 className="type-lead text-[var(--color-heading)] group-hover:text-[var(--color-accent-dark)] transition-colors">
                  {card.title}
                </h3>
                <p className="mt-1 text-[14px] text-[var(--color-body-text)] leading-[1.5]">{card.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
