import { ExternalLink, MessageCircle, Star } from 'lucide-react';
import { SALON_INFO, buildWhatsAppUrl } from '../data/salonData';
import { ScissorButton, SectionChip } from './ScissorPrimitives';

const LISTING_HIGHLIGHTS = [
  {
    title: 'Google Business Profile',
    detail: 'Official Google Maps listing for Nick’s Salon in North Nazimabad',
  },
  {
    title: 'Verified Rating Sync',
    detail: 'Live rating & review count will display upon owner confirmation',
  },
  {
    title: 'Direct Client Feedback',
    detail: 'Authentic Google reviews linked directly without fabricated quotes',
  },
  {
    title: 'Kashana View Apartment',
    detail: 'Block A, North Nazimabad, Karachi · Easy Google Maps directions',
  },
  {
    title: 'WhatsApp Consultation',
    detail: 'Direct contact with the salon at +92 300 3691915',
  },
];

export function ReviewsSection() {
  return (
    <section
      id="reviews"
      aria-label="Client reviews"
      className="bg-[var(--color-primary-bg)] text-[var(--color-heading)] py-[80px] md:py-[100px] xl:py-[140px] overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto px-5 md:px-8 xl:px-10 flex flex-col gap-16 xl:gap-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="flex flex-wrap items-center gap-4">
              <SectionChip number="08" label="Client reviews" theme="light" />
              <div className="inline-flex items-center gap-0.5 text-[var(--color-accent)]" aria-hidden="true">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="text-[14px] font-medium text-[var(--color-body-text)]">
                Google listing · Live rating pending owner verification
              </span>
            </div>

            <blockquote className="type-statement text-[var(--color-heading)] [text-wrap:balance]">
              “Verified client reviews and live Google ratings will appear here directly from Nick&apos;s Salon&apos;s
              Google Business Profile once confirmed by the owner.”
            </blockquote>

            <div className="flex flex-col gap-1">
              <p className="text-[16px] font-medium text-[var(--color-heading)]">
                Authentic Review Policy — No Fabricated Testimonials
              </p>
              <p className="text-[14px] text-[var(--color-body-text)]">
                Tap below to inspect Nick&apos;s Salon directly on Google Maps
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4 lg:items-end">
            <ScissorButton
              href={SALON_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              label="Open Google Listing"
              variant="dark"
            />
            <a
              href={buildWhatsAppUrl("Hello Nick's Salon, I'd like to ask about booking a grooming session.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-[var(--color-body-text)] hover:text-[var(--color-heading)] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[var(--color-accent-dark)]" aria-hidden="true" />
              <span>Or message directly on WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* Exact Scissor #e5d9ca Review Ticker cards */}
      <div className="mt-14 xl:mt-20 overflow-hidden">
        <div className="animate-marquee-slow gap-3 px-4">
          {[...LISTING_HIGHLIGHTS, ...LISTING_HIGHLIGHTS].map((item, idx) => (
            <a
              key={`${item.title}-${idx}`}
              href={SALON_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[300px] sm:w-[340px] shrink-0 bg-[var(--color-secondary-bg)] hover:bg-[var(--color-border)] border border-[var(--color-border)] rounded-[2px] p-5 flex flex-col justify-between gap-4 transition-colors"
            >
              <div className="flex items-center justify-between text-[var(--color-accent-dark)]">
                <span className="text-[12px] font-medium">Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[17px] font-medium text-[var(--color-heading)] leading-snug">{item.title}</p>
                <p className="text-[14px] text-[var(--color-body-text)] mt-1 leading-[1.45]">{item.detail}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
