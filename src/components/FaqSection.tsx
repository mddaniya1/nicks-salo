import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { FAQ_ITEMS, buildWhatsAppUrl } from '../data/salonData';
import { ScissorButton, SectionChip } from './ScissorPrimitives';

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      aria-label="Frequently asked questions"
      className="bg-[var(--color-primary-bg)] text-[var(--color-heading)] py-[80px] md:py-[100px] xl:py-[140px]"
    >
      <div className="max-w-[1320px] mx-auto px-5 md:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-[80px] items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col gap-6 items-start max-w-[400px]">
            <SectionChip number="10" label="FAQ" theme="light" />
            <h2 className="type-h2 text-[var(--color-heading)] [text-wrap:balance]">
              Questions, answered.
            </h2>
            <p className="type-body-lg text-[var(--color-body-text)]">
              Cannot find what you are looking for? Message Nick&apos;s Salon on WhatsApp and we will happily assist.
            </p>
            <ScissorButton
              href={buildWhatsAppUrl("Hello Nick's Salon, I have a question about appointments.")}
              target="_blank"
              rel="noopener noreferrer"
              label="WhatsApp the salon"
              variant="dark"
            />
          </div>

          <div className="lg:col-span-7 border-t border-[var(--color-border)] divide-y divide-[var(--color-border)]">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${item.id}`}
                    onClick={() => toggle(item.id)}
                    className="w-full py-7 flex items-center justify-between gap-6 text-left cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-heading)]"
                  >
                    <span className="type-card-title text-[var(--color-heading)] group-hover:text-[var(--color-accent)] transition-colors">
                      {item.question}
                    </span>
                    <span className="w-9 h-9 rounded-[4px] border border-[var(--color-border)] flex items-center justify-center shrink-0 text-[var(--color-heading)]">
                      <Plus
                        className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
                        aria-hidden="true"
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-${item.id}`}
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="pb-8 pr-8 md:pr-[68px]"
                      >
                        <p className="text-[16px] text-[var(--color-body-text)] leading-[1.6] max-w-[600px]">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
