import React from 'react';

export interface SectionEyebrowProps {
  number: string;
  label: string;
  onDark?: boolean;
  className?: string;
}

export function SectionEyebrow({
  number,
  label,
  onDark = false,
  className = '',
}: SectionEyebrowProps) {
  return (
    <div className={`eyebrow ${className}`.trim()}>
      <span className={`eyebrow-index ${onDark ? 'is-on-dark' : ''}`.trim()}>
        {number}
      </span>
      <span
        className={`eyebrow-divider ${onDark ? 'is-on-dark' : ''}`.trim()}
        aria-hidden="true"
      />
      <span className={`eyebrow-text ${onDark ? 'is-on-dark' : ''}`.trim()}>
        {label}
      </span>
    </div>
  );
}
