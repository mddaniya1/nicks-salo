import { SALON_INFO, buildWhatsAppUrl } from '../data/salonData';
import { ScissorButton } from './ScissorPrimitives';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-dark-bg)] text-[var(--color-heading-inverse)] py-[72px] md:py-[100px]">
      <div className="max-w-[1320px] mx-auto px-5 md:px-8 xl:px-10 flex flex-col gap-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <h2 className="type-h2 text-[var(--color-heading-inverse)] max-w-[540px] [text-wrap:balance]">
            Ready for your{' '}
            <span className="text-[var(--color-accent-light)]">next cut?</span>
          </h2>
          <ScissorButton href="#booking" label="Book Appointment" variant="cream" />
        </div>

        <div className="pt-12 border-t border-[var(--color-border-dark)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <a href="#home" className="text-[22px] font-medium tracking-[-0.02em] text-[var(--color-heading-inverse)]">
              {SALON_INFO.brandName}
            </a>
            <p className="text-[16px] text-[var(--color-body-inverse)] max-w-[300px] leading-[1.6]">
              Men&apos;s grooming by {SALON_INFO.ownerName} in North Nazimabad, Karachi. Precision, style and personal
              care.
            </p>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-3">
            <p className="text-[14px] font-medium text-[var(--color-accent-light)]">Explore</p>
            <ul className="flex flex-col gap-2.5 text-[15px] text-[var(--color-body-inverse)]">
              <li>
                <a href="#home" className="hover:text-[var(--color-heading-inverse)] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[var(--color-heading-inverse)] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[var(--color-heading-inverse)] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#our-work" className="hover:text-[var(--color-heading-inverse)] transition-colors">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[var(--color-heading-inverse)] transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[var(--color-heading-inverse)] transition-colors">
                  Booking
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-3">
            <p className="text-[14px] font-medium text-[var(--color-accent-light)]">Visit</p>
            <div className="flex flex-col gap-2.5 text-[15px] text-[var(--color-body-inverse)] leading-[1.5]">
              <p>{SALON_INFO.address}</p>
              <p className="text-[14px] text-[var(--color-body-inverse)]/75">{SALON_INFO.openingHoursNote}</p>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-3">
            <p className="text-[14px] font-medium text-[var(--color-accent-light)]">Contact</p>
            <div className="flex flex-col gap-2.5 text-[15px] text-[var(--color-body-inverse)]">
              <a
                href={`tel:${SALON_INFO.phoneDisplay.replace(/\s+/g, '')}`}
                className="hover:text-[var(--color-heading-inverse)] transition-colors tabular-nums"
              >
                {SALON_INFO.phoneDisplay}
              </a>
              <a
                href={buildWhatsAppUrl("Hello Nick's Salon, I'd like to inquire about an appointment.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-heading-inverse)] transition-colors"
              >
                WhatsApp
              </a>
              <a
                href={SALON_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-heading-inverse)] transition-colors"
              >
                Google Maps
              </a>
              <span className="text-[13px] text-[var(--color-body-inverse)]/60">
                Social links pending owner verification
              </span>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-[var(--color-border-dark)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[14px] text-[var(--color-body-inverse)]/75">
          <p>
            &copy; {year} {SALON_INFO.brandName} by {SALON_INFO.ownerName}. All rights reserved.
          </p>
          <p>Men&apos;s grooming in North Nazimabad, Karachi · Client Presentation Demo</p>
        </div>
      </div>
    </footer>
  );
}
