import React from 'react';
import Link from 'next/link';
import { SectionEyebrow } from './SectionEyebrow';
import { ArrowRightIcon } from './Icons';
import styles from '@/styles/Sections.module.css';

export interface GetStartedPanelProps {
  eyebrowNumber: string;
  eyebrowLabel?: string;
  heading: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

const DEFAULT_STATS = [
  { value: '10 min', label: 'Average setup time' },
  { value: '$0', label: 'Monthly fee in year one' },
  { value: '24/7', label: 'Card support' },
];

export function GetStartedPanel({
  eyebrowNumber,
  eyebrowLabel = 'Get started',
  heading,
  description,
  primaryCta,
  secondaryCta,
}: GetStartedPanelProps) {
  return (
    <section className={styles.sectionCtaAccount}>
      <div className="padding-global">
        <div className="container-large">
          <div className={styles.ctaAccountPanel}>
            <div className={styles.ctaAccountHead}>
              <SectionEyebrow number={eyebrowNumber} label={eyebrowLabel} />
              <h2 className="heading-style-h2">{heading}</h2>
              <p className="text-size-regular text-color-grey">{description}</p>
            </div>

            <div className={styles.ctaAccountButtons}>
              <Link href={primaryCta.href} className="button">
                <span>{primaryCta.label}</span>
                <ArrowRightIcon />
              </Link>
              <Link href={secondaryCta.href} className="button is-secondary">
                {secondaryCta.label}
              </Link>
            </div>

            <div className={styles.ctaAccountStats}>
              {DEFAULT_STATS.map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`${styles.ctaAccountStat} ${idx > 0 ? styles.ctaAccountStatDivided : ''}`.trim()}
                >
                  <div className={`heading-style-h3 font-mono ${styles.ctaStatVal}`}>
                    {stat.value}
                  </div>
                  <div className="text-size-small text-color-grey">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
