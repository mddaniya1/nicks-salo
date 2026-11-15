import { useState } from 'react';
import { Scissors } from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  priority?: boolean;
}

export function EditorialImage({
  src,
  alt,
  className = '',
  fallbackLabel = "Nick's Salon",
  priority = false,
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-[var(--color-dark-bg)] text-[var(--color-body-inverse)] p-6 text-center ${className}`}
      >
        <Scissors className="w-6 h-6 text-[var(--color-accent-light)] mb-2" aria-hidden="true" />
        <span className="text-lg font-medium tracking-tight text-[var(--color-heading-inverse)]">
          {fallbackLabel}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
