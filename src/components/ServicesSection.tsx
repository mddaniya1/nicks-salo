import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { PROPOSED_SERVICE_GROUPS } from '../data/salonData';
import { ScissorButton, SectionChip } from './ScissorPrimitives';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [openId, setOpenId] = useState<string | null>(PROPOSED_SERVICE_GROUPS[0].id);

  const toggleCategory = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleBookService = (serviceTitle: string) => {
    onSelectService(serviceTitle);
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="services"
      aria-label="Service menu"
      className="bg-[var(--color-secondary-bg)] text-[var(--color-heading)] py-[80px] md:py-[100px] xl:py-[140px]"
    >
      <div className="max-w-[1320px] mx-auto px-5 md:px-8 xl:px-10 flex flex-col gap-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <SectionChip number="03" label="Service menu" theme="sand" />
            <h2 className="type-h2 text-[var(--color-heading)] [text-wrap:balance]">
              One menu for tailored grooming.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="type-body-lg text-[var(--color-body-text)] max-w-[460px]">
              These categories are proposed for client presentation and remain editable. Final service offerings and
              pricing are pending owner confirmation.
            </p>
          </div>
        </div>

        <div className="border-t border-[var(--color-border)] divide-y divide-[var(--color-border)]">
          {PROPOSED_SERVICE_GROUPS.map((group) => {
            const isOpen = openId === group.id;
            return (
              <div key={group.id}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`service-panel-${group.id}`}
                  onClick={() => toggleCategory(group.id)}
                  className="w-full py-7 md:py-8 flex items-center justify-between gap-6 text-left cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-heading)]"
                >
                  <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-10">
                    <span
                      className={`text-[14px] font-medium tabular-nums w-12 shrink-0 transition-colors ${
                        isOpen ? 'text-[var(--color-accent-dark)]' : 'text-[var(--color-heading)]'
                      }`}
                    >
                      {group.index}
                    </span>
                    <div className="flex flex-col gap-2">
                      <h3
                        className={`type-h3-lg transition-colors ${
                          isOpen
                            ? 'text-[var(--color-accent-dark)]'
                            : 'text-[var(--color-heading)] group-hover:text-[var(--color-accent-dark)]'
                        }`}
                      >
                        {group.title}
                      </h3>
                      <p className="text-[13px] font-medium text-[var(--color-body-text)]">
                        {group.tags.join(' · ')}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`w-10 h-10 rounded-[2px] border flex items-center justify-center shrink-0 transition-colors duration-200 ${
                      isOpen
                        ? 'bg-[var(--color-button-bg)] text-[var(--color-button-text)] border-[var(--color-button-bg)]'
                        : 'bg-[var(--color-primary-bg)] border-[var(--color-border)] text-[var(--color-heading)]'
                    }`}
                  >
                    <Plus
                      className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
                      aria-hidden="true"
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`service-panel-${group.id}`}
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className="pb-10 md:pb-12 pl-0 md:pl-[88px] flex flex-col gap-10"
                    >
                      <p className="type-body-lg text-[var(--color-body-text)] max-w-[520px]">{group.summary}</p>

                      <div className="border-t border-[var(--color-border)] divide-y divide-[var(--color-border)]">
                        {group.items.map((item) => (
                          <div
                            key={item.name}
                            className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                          >
                            <div className="max-w-[520px]">
                              <h4 className="text-[18px] font-medium text-[var(--color-heading)]">{item.name}</h4>
                              <p className="text-[14px] text-[var(--color-body-text)] mt-1 leading-[1.5]">
                                {item.desc}
                              </p>
                            </div>
                            <div className="sm:text-right shrink-0">
                              <span className="text-[13px] font-medium text-[var(--color-accent-dark)]">
                                {item.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div>
                        <ScissorButton
                          label="Inquire about this service"
                          variant="dark"
                          onClick={() => handleBookService(group.title)}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
