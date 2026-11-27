'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from '@/styles/Sections.module.css';

export interface RollingStatisticProps {
  value: string;
  suffix?: string;
  description: string;
  className?: string;
}

export function RollingStatistic({
  value,
  suffix = '%',
  description,
  className = '',
}: RollingStatisticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setHasEntered(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setHasEntered(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const digits = value.split('');

  return (
    <div ref={ref} className={`${styles.factsRow} ${className}`.trim()}>
      <div
        className={styles.factsNumber}
        aria-label={`${value}${suffix} ${description}`}
      >
        <span className="sr-only">
          {value}
          {suffix}
        </span>
        {digits.map((ch, idx) => {
          const targetDigit = parseInt(ch, 10);
          if (Number.isNaN(targetDigit)) {
            return (
              <span key={idx} aria-hidden="true">
                {ch}
              </span>
            );
          }
          const trackDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
          return (
            <span key={idx} className={styles.factsDigit} aria-hidden="true">
              <span className={styles.factsDigitSizer}>{ch}</span>
              <span
                className={styles.factsDigitTrack}
                style={{
                  transform: hasEntered
                    ? `translateY(-${targetDigit * 10}%)`
                    : 'translateY(0%)',
                  transitionDelay: `${idx * 110}ms`,
                }}
              >
                {trackDigits.map((d) => (
                  <span key={d} className={styles.factsDigitCell}>
                    {d}
                  </span>
                ))}
              </span>
            </span>
          );
        })}
        <span className={styles.factsSymbol} aria-hidden="true">
          {suffix}
        </span>
      </div>
      <p className={`text-size-regular text-color-grey ${styles.factsCaption}`}>
        {description}
      </p>
    </div>
  );
}
