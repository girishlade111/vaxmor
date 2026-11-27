'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SectionEyebrow } from '@/components/common/SectionEyebrow';
import styles from '@/styles/Sections.module.css';

export interface AudienceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface BusinessAudienceShowcaseProps {
  eyebrowNumber: string;
  eyebrowLabel: string;
  heading: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  audiences: AudienceItem[];
}

export function BusinessAudienceShowcase({
  eyebrowNumber,
  eyebrowLabel,
  heading,
  description,
  ctaLabel,
  ctaHref,
  audiences,
}: BusinessAudienceShowcaseProps) {
  const [activeId, setActiveId] = useState(audiences[0]?.id || '');
  const active = audiences.find((a) => a.id === activeId) || audiences[0];

  return (
    <section className={styles.sectionSegments}>
      <div className="padding-global">
        <div className="container-large">
          <div className={styles.segmentsLayout}>
            <div className={styles.segmentsContent}>
              <SectionEyebrow number={eyebrowNumber} label={eyebrowLabel} />
              <h2 className="heading-style-h2">{heading}</h2>
              <p className="text-size-regular text-color-grey">{description}</p>

              <div className={styles.segmentsList} role="tablist" aria-label={eyebrowLabel}>
                {audiences.map((item) => {
                  const isActive = item.id === active.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      className={`${styles.segmentsItem} ${!isActive ? styles.segmentsItemDim : ''}`.trim()}
                      onClick={() => setActiveId(item.id)}
                    >
                      <span className={`font-mono text-size-small ${styles.segmentsNumber}`}>
                        {item.number}
                      </span>
                      <span className={styles.segmentsText}>
                        <span className="heading-style-h5 text-color-darkmain">
                          {item.title}
                        </span>
                        <span
                          className={`${styles.segmentsDesc} ${isActive ? styles.segmentsDescExpanded : ''}`.trim()}
                        >
                          <span className={styles.segmentsDescInner}>
                            <span className="text-size-regular text-color-grey">
                              {item.description}
                            </span>
                          </span>
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>

              <Link href={ctaHref} className="button" style={{ marginTop: '0.5rem' }}>
                {ctaLabel}
              </Link>
            </div>

            <div className={styles.segmentsMedia}>
              {audiences.map((item) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt={item.imageAlt}
                  className={`${styles.segmentsImg} ${
                    item.id === active.id ? styles.segmentsImgActive : ''
                  }`.trim()}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
