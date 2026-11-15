import { motion } from 'motion/react';
import { Scissors, User } from 'lucide-react';
import { TEAM_COLUMN_A, TEAM_COLUMN_B, type TeamMember } from '../data/salonData';
import { EditorialImage } from './EditorialImage';
import { ScissorButton, SectionChip } from './ScissorPrimitives';

function StylistCard({ member }: { member: TeamMember }) {
  return (
    <article className="flex flex-col gap-4">
      <div className="aspect-[3/4] rounded-[4px] overflow-hidden bg-[var(--color-primary-bg)] border border-[var(--color-border)] relative flex flex-col justify-between p-4">
        {member.verified && member.image ? (
          <>
            <EditorialImage
              src={member.image}
              alt={`${member.name} — ${member.role}`}
              className="absolute inset-0 w-full h-full object-cover"
              fallbackLabel={member.name}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(180deg, rgba(0,0,0,0) 35%, var(--color-scrim-card) 100%)',
              }}
            />
            <div className="relative z-10 mt-auto text-[var(--color-heading-inverse)]">
              <p className="text-[12px] font-medium text-[var(--color-accent-light)]">{member.note}</p>
            </div>
          </>
        ) : (
          <div className="m-auto text-center px-4 flex flex-col items-center">
            <div className="w-12 h-12 rounded-[4px] bg-[var(--color-secondary-bg)] flex items-center justify-center mb-3">
              {member.verified ? (
                <Scissors className="w-5 h-5 text-[var(--color-accent-dark)]" aria-hidden="true" />
              ) : (
                <User className="w-5 h-5 text-[var(--color-body-text)]" aria-hidden="true" />
              )}
            </div>
            <p className="text-[15px] font-medium text-[var(--color-heading)]">Portrait Pending</p>
            <p className="text-[13px] text-[var(--color-body-text)] mt-1 max-w-[220px]">{member.note}</p>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <span className="text-[13px] font-medium text-[var(--color-accent-dark)]">{member.role}</span>
        <h3 className="type-card-title text-[var(--color-heading)]">{member.name}</h3>
        <p className="text-[15px] text-[var(--color-body-text)] leading-[1.5]">{member.specialty}</p>
      </div>
    </article>
  );
}

export function TeamSection() {
  return (
    <section
      aria-label="Meet the team"
      className="bg-[var(--color-secondary-bg)] text-[var(--color-heading)] py-[80px] md:py-[100px] xl:py-[140px]"
    >
      <div className="max-w-[1320px] mx-auto px-5 md:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col gap-8 items-start"
          >
            <SectionChip number="06" label="Meet the team" theme="sand" />
            <h2 className="type-h2 text-[var(--color-heading)] [text-wrap:balance]">
              The hands behind every chair.
            </h2>
            <p className="type-body-lg text-[var(--color-body-text)] max-w-[420px]">
              Featuring Qamar Bashir alongside dedicated profile slots ready for verified salon stylists once confirmed
              by management.
            </p>
            <ScissorButton href="#booking" label="Book with Qamar Bashir" variant="dark" />
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-12 sm:gap-14">
              {TEAM_COLUMN_A.map((member) => (
                <StylistCard key={member.id} member={member} />
              ))}
            </div>
            <div className="flex flex-col gap-12 sm:gap-14 sm:pt-[140px]">
              {TEAM_COLUMN_B.map((member) => (
                <StylistCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
