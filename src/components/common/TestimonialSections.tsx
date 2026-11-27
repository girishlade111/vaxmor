'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { TESTIMONIALS } from '@/content/testimonials';
import { SectionEyebrow } from './SectionEyebrow';
import { ArrowLeftIcon, ArrowRightIcon } from './Icons';
import styles from '@/styles/Sections.module.css';

export interface FeaturedTestimonialPanelProps {
  eyebrowNumber?: string;
  eyebrowLabel?: string;
  heading?: string;
  initialSlug?: string;
  variant?: 'white' | 'grey';
}

export function FeaturedTestimonialPanel({
  eyebrowNumber = '(08)',
  eyebrowLabel = 'Client stories',
  heading = 'What our clients say',
  initialSlug,
  variant = 'white',
}: FeaturedTestimonialPanelProps) {
  const items = TESTIMONIALS.slice(0, 7);
  const initialIndex = initialSlug
    ? Math.max(
        0,
        items.findIndex((t) => t.slug === initialSlug)
      )
    : 0;
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const active = items[activeIndex] || items[0];
  const sideItems = items.filter((_, i) => i !== activeIndex).slice(0, 3);

  return (
    <section
      className={`${styles.sectionTestimonialFeatured} ${
        variant === 'grey' ? styles.sectionBgGrey : ''
      }`.trim()}
    >
      <div className="padding-global">
        <div className="container-large">
          <div className={styles.testimonialHead}>
            <SectionEyebrow number={eyebrowNumber} label={eyebrowLabel} />
            <h2 className="heading-style-h2">{heading}</h2>
          </div>

          <div className={styles.featuredTestimonialGrid}>
            <div className={styles.featuredTestimonialCard}>
              <div className={styles.quoteMark} aria-hidden="true">
                <svg width="28" height="22" viewBox="0 0 28 22" fill="none">
                  <path
                    d="M11.6 12.6c0 4.6-2.9 8-7.5 9.1L2.7 19c2.7-.9 4.2-2.7 4.4-5.2H3.4C1.5 13.8 0 12.3 0 10.4V3.6C0 1.6 1.6 0 3.6 0h4.4c2 0 3.6 1.6 3.6 3.6v9Zm16.4 0c0 4.6-2.9 8-7.5 9.1L19.1 19c2.7-.9 4.2-2.7 4.4-5.2h-3.7c-1.9 0-3.4-1.5-3.4-3.4V3.6c0-2 1.6-3.6 3.6-3.6h4.4c2 0 3.6 1.6 3.6 3.6v9Z"
                    fill="#1E4FD6"
                  />
                </svg>
              </div>
              <p className={`heading-style-h4 text-color-white ${styles.featuredQuoteText}`}>
                {active.quote}
              </p>
              <div className={styles.featuredAuthorRow}>
                <img
                  src={active.photo}
                  alt={active.photoAlt}
                  className={styles.featuredAvatar}
                  width={48}
                  height={48}
                />
                <div>
                  <Link
                    href={`/testimonial/${active.slug}`}
                    className="text-size-regular text-weight-medium text-color-white"
                    style={{ textDecoration: 'none' }}
                  >
                    {active.clientName}
                  </Link>
                  <div className="text-size-small text-color-darkgrey">
                    {active.position}
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.testimonialSideStack}>
              {sideItems.map((item) => {
                const idx = items.findIndex((x) => x.id === item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={styles.testimonialSideItem}
                    onClick={() => setActiveIndex(idx)}
                  >
                    <p className="text-size-small text-color-grey" style={{ textAlign: 'left' }}>
                      {item.quote}
                    </p>
                    <div className={styles.testimonialSideAuthor}>
                      <img
                        src={item.photo}
                        alt={item.photoAlt}
                        className={styles.sideAvatar}
                        width={40}
                        height={40}
                      />
                      <div style={{ textAlign: 'left' }}>
                        <div className="text-size-small text-weight-medium text-color-darkmain">
                          {item.clientName}
                        </div>
                        <div className="text-size-tiny text-color-grey">
                          {item.position}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CompactTestimonialCarousel({
  eyebrowNumber = '(07)',
  eyebrowLabel = 'Clients',
  heading = 'Why clients have stayed with us for years',
}: {
  eyebrowNumber?: string;
  eyebrowLabel?: string;
  heading?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollByCard(dir: -1 | 1) {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: dir * 420, behavior: 'smooth' });
  }

  return (
    <section className={styles.sectionTestimonialCompact}>
      <div className="padding-global">
        <div className="container-large">
          <div className={styles.carouselHeaderRow}>
            <div className={styles.testimonialHead} style={{ marginBottom: 0 }}>
              <SectionEyebrow number={eyebrowNumber} label={eyebrowLabel} />
              <h2 className="heading-style-h2">{heading}</h2>
            </div>
            <div className={styles.carouselControls}>
              <button
                type="button"
                aria-label="Previous client story"
                className={styles.circleArrowBtn}
                onClick={() => scrollByCard(-1)}
              >
                <ArrowLeftIcon />
              </button>
              <button
                type="button"
                aria-label="Next client story"
                className={styles.circleArrowBtn}
                onClick={() => scrollByCard(1)}
              >
                <ArrowRightIcon />
              </button>
            </div>
          </div>

          <div ref={trackRef} className={styles.compactTestimonialTrack}>
            {TESTIMONIALS.map((t) => (
              <Link
                key={t.id}
                href={`/testimonial/${t.slug}`}
                className={styles.compactTestimonialCard}
              >
                <p className="text-size-regular text-color-darkmain">{t.quote}</p>
                <div className={styles.testimonialSideAuthor}>
                  <img
                    src={t.photo}
                    alt={t.photoAlt}
                    className={styles.sideAvatar}
                    width={44}
                    height={44}
                  />
                  <div>
                    <div className="text-size-small text-weight-medium text-color-darkmain">
                      {t.clientName}
                    </div>
                    <div className="text-size-tiny text-color-grey">
                      {t.position}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
