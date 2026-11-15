import { useEffect, useState } from 'react';
import { Check, Copy, ExternalLink, MessageCircle } from 'lucide-react';
import { PROPOSED_SERVICE_GROUPS, SALON_INFO, buildWhatsAppUrl } from '../data/salonData';
import { ScissorButton, SectionChip } from './ScissorPrimitives';

interface BookingAndContactProps {
  preselectedService: string;
}

export function BookingAndContact({ preselectedService }: BookingAndContactProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(preselectedService || PROPOSED_SERVICE_GROUPS[0].title);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  const [prepared, setPrepared] = useState<{ waUrl: string; summary: string } | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
      setPrepared(null);
    }
  }, [preselectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 7) {
      setError('Please enter a valid phone or WhatsApp number.');
      return;
    }
    if (!date) {
      setError('Please select a preferred date.');
      return;
    }
    if (!time) {
      setError('Please select a preferred time.');
      return;
    }

    const lines = [
      `Hello Nick's Salon (${SALON_INFO.ownerName}), I would like to request an appointment:`,
      '',
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      `Preferred Service: ${service}`,
      `Preferred Date: ${date}`,
      `Preferred Time: ${time}`,
      notes.trim() ? `Message: ${notes.trim()}` : null,
      '',
      'Please let me know if this slot is available.',
    ].filter((line): line is string => line !== null);

    const summary = lines.join('\n');
    setPrepared({ waUrl: buildWhatsAppUrl(summary), summary });
  };

  const handleCopy = async () => {
    if (!prepared) return;
    try {
      await navigator.clipboard.writeText(prepared.summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard may be unavailable inside embedded frames
    }
  };

  return (
    <section
      id="booking"
      aria-label="Book an appointment"
      className="bg-[var(--color-secondary-bg)] text-[var(--color-heading)] py-[80px] md:py-[100px] xl:py-[140px]"
    >
      <div className="max-w-[1320px] mx-auto px-5 md:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Exact Scissor Dark Info Panel (#1f1c19) */}
          <div
            id="contact"
            className="lg:col-span-5 bg-[var(--color-dark-bg)] text-[var(--color-heading-inverse)] rounded-[4px] p-6 sm:p-8 flex flex-col justify-between gap-10"
          >
            <div className="flex flex-col gap-6">
              <SectionChip number="11" label="Booking" theme="dark" />
              <h2 className="type-h2 text-[var(--color-heading-inverse)] [text-wrap:balance]">
                Book your{' '}
                <span className="text-[var(--color-accent-light)]">chair.</span>
              </h2>
              <p className="type-body-lg text-[var(--color-body-inverse)] max-w-[400px]">
                Send an appointment request for WhatsApp confirmation or reach out directly to Nick&apos;s Salon.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-7 pt-6 border-t border-[var(--color-border-dark)]">
              <div>
                <p className="text-[13px] font-medium text-[var(--color-body-inverse)] mb-1">Visit us</p>
                <p className="text-[15px] font-medium text-[var(--color-heading-inverse)] leading-[1.45]">
                  {SALON_INFO.address}
                </p>
              </div>

              <div>
                <p className="text-[13px] font-medium text-[var(--color-body-inverse)] mb-1">Opening hours</p>
                <p className="text-[15px] font-medium text-[var(--color-accent-light)] leading-[1.45]">
                  {SALON_INFO.openingHoursNote}
                </p>
              </div>

              <div>
                <p className="text-[13px] font-medium text-[var(--color-body-inverse)] mb-1">Phone &amp; WhatsApp</p>
                <a
                  href={`tel:${SALON_INFO.phoneDisplay.replace(/\s+/g, '')}`}
                  className="text-[15px] font-medium text-[var(--color-heading-inverse)] hover:text-[var(--color-accent-light)] transition-colors tabular-nums"
                >
                  {SALON_INFO.phoneDisplay}
                </a>
              </div>

              <div>
                <p className="text-[13px] font-medium text-[var(--color-body-inverse)] mb-1">Directions</p>
                <a
                  href={SALON_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[15px] font-medium text-[var(--color-heading-inverse)] hover:text-[var(--color-accent-light)] transition-colors underline underline-offset-4"
                >
                  <span>Open Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="pt-2">
              <ScissorButton
                href={buildWhatsAppUrl("Hello Nick's Salon, I'd like to book an appointment.")}
                target="_blank"
                rel="noopener noreferrer"
                label="Message on WhatsApp"
                variant="cream"
              />
            </div>
          </div>

          {/* Exact Scissor Cream Form Panel (#f7f5f0) with #e5d9ca Inputs */}
          <div className="lg:col-span-7 bg-[var(--color-primary-bg)] rounded-[4px] p-6 sm:p-8 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="type-card-title text-[var(--color-heading)]">Request an appointment</h3>
              <p className="text-[14px] text-[var(--color-body-text)]">
                Fields marked with a star are required. Requests open in WhatsApp ({SALON_INFO.phoneDisplay}) for direct
                confirmation.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="scissor-name" className="block text-[13px] font-medium text-[var(--color-heading)] mb-2">
                    Name <span className="text-[var(--color-accent-dark)]">*</span>
                  </label>
                  <input
                    id="scissor-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="w-full px-3.5 py-3 rounded-[2px] bg-[var(--color-secondary-bg)] border border-[var(--color-secondary-bg)] text-[14px] text-[var(--color-heading)] placeholder:text-[var(--color-body-text)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="scissor-phone" className="block text-[13px] font-medium text-[var(--color-heading)] mb-2">
                    Phone <span className="text-[var(--color-accent-dark)]">*</span>
                  </label>
                  <input
                    id="scissor-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+92 3XX XXXXXXX"
                    className="w-full px-3.5 py-3 rounded-[2px] bg-[var(--color-secondary-bg)] border border-[var(--color-secondary-bg)] text-[14px] text-[var(--color-heading)] placeholder:text-[var(--color-body-text)] focus:outline-none focus:border-[var(--color-accent)] transition-colors tabular-nums"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="scissor-service" className="block text-[13px] font-medium text-[var(--color-heading)] mb-2">
                    Preferred service <span className="text-[var(--color-accent-dark)]">*</span>
                  </label>
                  <select
                    id="scissor-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-[2px] bg-[var(--color-secondary-bg)] border border-[var(--color-secondary-bg)] text-[14px] text-[var(--color-heading)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                  >
                    {PROPOSED_SERVICE_GROUPS.map((g) => (
                      <option key={g.id} value={g.title}>
                        {g.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="scissor-date" className="block text-[13px] font-medium text-[var(--color-heading)] mb-2">
                    Preferred date <span className="text-[var(--color-accent-dark)]">*</span>
                  </label>
                  <input
                    id="scissor-date"
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-[2px] bg-[var(--color-secondary-bg)] border border-[var(--color-secondary-bg)] text-[14px] text-[var(--color-heading)] focus:outline-none focus:border-[var(--color-accent)] transition-colors tabular-nums"
                  />
                </div>

                <div>
                  <label htmlFor="scissor-time" className="block text-[13px] font-medium text-[var(--color-heading)] mb-2">
                    Preferred time <span className="text-[var(--color-accent-dark)]">*</span>
                  </label>
                  <input
                    id="scissor-time"
                    type="time"
                    required
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-[2px] bg-[var(--color-secondary-bg)] border border-[var(--color-secondary-bg)] text-[14px] text-[var(--color-heading)] focus:outline-none focus:border-[var(--color-accent)] transition-colors tabular-nums"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="scissor-notes" className="block text-[13px] font-medium text-[var(--color-heading)] mb-2">
                  Anything we should know?
                </label>
                <textarea
                  id="scissor-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share hairstyle notes or note a preference for Qamar Bashir..."
                  className="w-full px-3.5 py-3 rounded-[2px] bg-[var(--color-secondary-bg)] border border-[var(--color-secondary-bg)] text-[14px] text-[var(--color-heading)] placeholder:text-[var(--color-body-text)] focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
                />
              </div>

              {error && (
                <div
                  role="alert"
                  className="p-3.5 rounded-[2px] bg-[var(--color-secondary-bg)] border border-[var(--color-accent-dark)] text-[var(--color-heading)] text-[14px]"
                >
                  {error}
                </div>
              )}

              <div className="pt-1 flex flex-wrap items-center gap-4">
                <ScissorButton type="submit" label="Send WhatsApp Request" variant="dark" />
                <span className="text-[13px] text-[var(--color-body-text)]">
                  Demo booking — confirmed directly via WhatsApp reply.
                </span>
              </div>
            </form>

            {prepared && (
              <div
                aria-live="polite"
                className="p-5 rounded-[4px] bg-[var(--color-secondary-bg)] border border-[var(--color-accent)] flex flex-col gap-4"
              >
                <div>
                  <p className="text-[13px] font-medium text-[var(--color-accent-dark)]">
                    Request Prepared · Appointment Not Yet Confirmed
                  </p>
                  <p className="text-[15px] text-[var(--color-heading)] mt-1">
                    Tap below to send your pre-filled details to Nick&apos;s Salon on WhatsApp.
                  </p>
                </div>

                <pre className="p-4 rounded-[2px] bg-[var(--color-primary-bg)] border border-[var(--color-border)] text-[13px] text-[var(--color-heading)] whitespace-pre-wrap font-sans leading-relaxed">
                  {prepared.summary}
                </pre>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={prepared.waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-[4px] bg-[var(--color-button-bg)] text-[var(--color-button-text)] hover:bg-[var(--color-button-hover)] text-[15px] font-medium transition-colors min-h-[44px]"
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    <span>Open WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-[4px] bg-[var(--color-primary-bg)] border border-[var(--color-border)] text-[var(--color-heading)] hover:border-[var(--color-heading)] text-[14px] font-medium transition-colors min-h-[44px] cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-[var(--color-accent-dark)]" aria-hidden="true" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" aria-hidden="true" />
                        <span>Copy Message</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
