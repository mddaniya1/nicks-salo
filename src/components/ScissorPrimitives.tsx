import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface SectionChipProps {
  number: string;
  label: string;
  theme?: 'light' | 'dark' | 'sand';
}

export function SectionChip({ number, label, theme = 'light' }: SectionChipProps) {
  const outerClass =
    theme === 'dark'
      ? 'bg-[var(--color-glass-bg)] backdrop-blur-[12px]'
      : theme === 'sand'
        ? 'bg-[var(--color-primary-bg)]'
        : 'bg-[var(--color-secondary-bg)]';

  const boxClass =
    theme === 'dark'
      ? 'bg-[var(--color-primary-bg)] text-[var(--color-heading)]'
      : 'bg-[var(--color-heading)] text-[var(--color-heading-inverse)]';

  const labelClass =
    theme === 'dark'
      ? 'text-[var(--color-heading-inverse)]'
      : 'text-[var(--color-heading)]';

  return (
    <div className={`inline-flex items-center gap-2.5 p-1 pr-3 rounded-[2px] w-fit ${outerClass}`}>
      <span
        className={`px-2 py-1 text-[13px] font-medium leading-[1.2] tracking-[0.02em] rounded-[2px] tabular-nums ${boxClass}`}
      >
        {number}
      </span>
      <span className={`type-kicker ${labelClass}`}>{label}</span>
    </div>
  );
}

interface ScissorButtonProps {
  href?: string;
  onClick?: () => void;
  label: string;
  variant?: 'cream' | 'dark' | 'glass';
  target?: string;
  rel?: string;
  className?: string;
  type?: 'button' | 'submit';
}

export function ScissorButton({
  href,
  onClick,
  label,
  variant = 'cream',
  target,
  rel,
  className = '',
  type = 'button',
}: ScissorButtonProps) {
  const variantClasses =
    variant === 'cream'
      ? 'bg-[var(--color-button-cream-bg)] text-[var(--color-button-cream-text)] hover:bg-[var(--color-button-cream-hover)]'
      : variant === 'dark'
        ? 'bg-[var(--color-button-bg)] text-[var(--color-button-text)] hover:bg-[var(--color-button-hover)]'
        : 'bg-[var(--color-glass-bg)] text-[var(--color-heading-inverse)] border border-[var(--color-border-glass)] backdrop-blur-[12px] hover:bg-[var(--color-border-glass)]';

  const baseClasses = `group inline-flex items-center justify-center gap-3 px-6 py-4 rounded-[4px] text-[16px] font-medium leading-none transition-colors duration-200 whitespace-nowrap shrink-0 min-h-[48px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] ${variantClasses} ${className}`;

  const content = (
    <>
      <span>{label}</span>
      <ArrowRight
        className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
        aria-hidden="true"
      />
    </>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} onClick={onClick} className={baseClasses}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
}

function RevealWord({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.26em]">
      {word}
    </motion.span>
  );
}

export function ScrollRevealStatement({
  text,
  className = '',
}: {
  text: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.88', 'end 0.55'],
  });

  const words = text.split(' ');

  return (
    <p ref={containerRef} className={`type-statement text-[var(--color-heading)] ${className}`}>
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;
        return (
          <RevealWord
            key={`${word}-${index}`}
            word={word}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
}
