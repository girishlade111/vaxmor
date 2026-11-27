'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { APP_MODE } from '@/config/site';
import { SERVICES } from '@/content/services';
import { SectionEyebrow } from '@/components/common/SectionEyebrow';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  ChevronDownIcon,
  ServiceIcon,
} from '@/components/common/Icons';
import styles from '@/styles/Sections.module.css';

export function ServiceSplitCardsSection({
  eyebrowNumber = '(03)',
  eyebrowLabel = 'Services',
  heading,
  description,
  ctaLabel,
  ctaHref,
  photo,
  photoAlt,
}: {
  eyebrowNumber?: string;
  eyebrowLabel?: string;
  heading: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  photo: string;
  photoAlt: string;
}) {
  return (
    <section className={styles.sectionServicesSplit}>
      <div className="padding-global">
        <div className="container-large">
          <div className={styles.servicesSplitGrid}>
            <div className={styles.servicesSplitLeft}>
              <SectionEyebrow number={eyebrowNumber} label={eyebrowLabel} />
              <h2 className="heading-style-h2">{heading}</h2>
              <p className="text-size-regular text-color-grey">{description}</p>
              <Link href={ctaHref} className="button">
                {ctaLabel}
              </Link>
              <div className={styles.servicesSplitPhotoWrap}>
                <img
                  src={photo}
                  alt={photoAlt}
                  className={styles.servicesSplitPhoto}
                />
              </div>
            </div>

            <div className={styles.servicesSplitCardsGrid}>
              {SERVICES.map((srv) => (
                <Link
                  key={srv.id}
                  href={`/services/${srv.slug}`}
                  className={styles.servicePreviewCard}
                >
                  <div className={styles.servicePreviewCardTop}>
                    <span className={styles.servicePreviewIcon}>
                      <ServiceIcon name={srv.iconName} />
                    </span>
                    <span className={styles.servicePreviewArrow}>
                      <ArrowUpRightIcon />
                    </span>
                  </div>
                  <div className={styles.servicePreviewBody}>
                    <h3 className="heading-style-h5 text-color-darkmain">
                      {srv.name}
                    </h3>
                    <p className="text-size-small text-color-grey">{srv.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceNumberedRows({
  eyebrowNumber = '(02)',
  eyebrowLabel = 'Services',
  heading,
  description,
  ctaLabel = 'All services',
  ctaHref = '/services-v1',
  variant = 'light',
}: {
  eyebrowNumber?: string;
  eyebrowLabel?: string;
  heading: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: 'light' | 'grey';
}) {
  return (
    <section
      className={`${styles.sectionServicesRows} ${
        variant === 'grey' ? styles.sectionBgGrey : ''
      }`.trim()}
    >
      <div className="padding-global">
        <div className="container-large">
          <div className={styles.servicesRowsHead}>
            <SectionEyebrow number={eyebrowNumber} label={eyebrowLabel} />
            <h2 className="heading-style-h2" style={{ maxWidth: '42rem' }}>
              {heading}
            </h2>
            {description && (
              <p className="text-size-regular text-color-grey" style={{ maxWidth: '38rem' }}>
                {description}
              </p>
            )}
            {ctaLabel && (
              <Link href={ctaHref} className="button">
                <span>{ctaLabel}</span>
                <ArrowRightIcon />
              </Link>
            )}
          </div>

          <div className={styles.servicesRowsList}>
            {SERVICES.map((srv) => (
              <Link
                key={srv.id}
                href={`/services/${srv.slug}`}
                className={styles.serviceRowItem}
              >
                <div className={styles.serviceRowLeft}>
                  <span className="font-mono text-size-small text-color-secondary">
                    {srv.numberLabel}
                  </span>
                  <h3 className="heading-style-h5 text-color-darkmain">
                    {srv.name}
                  </h3>
                </div>
                <p className={`text-size-regular text-color-grey ${styles.serviceRowDesc}`}>
                  {srv.summary}
                </p>
                <span className={styles.serviceRowArrow}>
                  <ArrowUpRightIcon />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function RelatedServicesCarousel({
  eyebrowNumber = '(05)',
  eyebrowLabel = 'Services',
  heading = 'Explore our other services',
  ctaLabel = 'Talk to an advisor',
  ctaHref = '/contact-v1',
  limitFiveInReference = false,
}: {
  eyebrowNumber?: string;
  eyebrowLabel?: string;
  heading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  limitFiveInReference?: boolean;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const items =
    limitFiveInReference && APP_MODE === 'reference'
      ? SERVICES.slice(0, 5)
      : SERVICES;

  function scrollBySlide(dir: -1 | 1) {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: dir * 560, behavior: 'smooth' });
  }

  return (
    <section className={styles.sectionRelatedServices}>
      <div className="padding-global">
        <div className="container-large">
          <div className={styles.relatedServicesHead}>
            <div className={styles.relatedServicesTitleCol}>
              <SectionEyebrow number={eyebrowNumber} label={eyebrowLabel} />
              <h2 className="heading-style-h2">{heading}</h2>
            </div>
            <Link href={ctaHref} className="button">
              {ctaLabel}
            </Link>
          </div>

          <div ref={trackRef} className={styles.relatedSliderTrack}>
            {items.map((srv) => (
              <Link
                key={srv.id}
                href={`/services/${srv.slug}`}
                className={`${styles.relatedServiceCard} shadow-card`}
              >
                <div className={styles.relatedServiceText}>
                  <h3 className="heading-style-h4 text-color-darkmain">
                    {srv.name}
                  </h3>
                  <p className="text-size-small text-color-grey">{srv.summary}</p>
                </div>
                <div className={styles.relatedServiceMedia}>
                  <img
                    src={srv.mainImage}
                    alt={srv.mainImageAlt}
                    className={styles.relatedServiceImg}
                  />
                </div>
              </Link>
            ))}
          </div>

          <div className={styles.relatedSliderControls}>
            <button
              type="button"
              aria-label="Previous service"
              className={styles.circleArrowBtn}
              onClick={() => scrollBySlide(-1)}
            >
              <ArrowLeftIcon />
            </button>
            <button
              type="button"
              aria-label="Next service"
              className={styles.circleArrowBtn}
              onClick={() => scrollBySlide(1)}
            >
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesAccordionList({
  eyebrowNumber = '(02)',
  eyebrowLabel = 'Services',
  heading = 'Services for owners and their companies',
  ctaLabel = 'Talk to an advisor',
  ctaHref = '/contact-v1',
}: {
  eyebrowNumber?: string;
  eyebrowLabel?: string;
  heading?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  const [openId, setOpenId] = useState<string | null>(null);
  // Services V2 displays 5 expandable service rows in reference mode
  const rows = APP_MODE === 'reference' ? SERVICES.slice(0, 5) : SERVICES;

  return (
    <section className={styles.sectionServicesAccordion}>
      <div className="padding-global">
        <div className="container-large">
          <div className={styles.relatedServicesHead} style={{ marginBottom: '3rem' }}>
            <div className={styles.relatedServicesTitleCol}>
              <SectionEyebrow number={eyebrowNumber} label={eyebrowLabel} />
              <h2 className="heading-style-h2">{heading}</h2>
            </div>
            <Link href={ctaHref} className="button">
              {ctaLabel}
            </Link>
          </div>

          <div className={styles.servicesAccordionWrap}>
            {rows.map((srv) => {
              const isOpen = openId === srv.id;
              return (
                <div key={srv.id} className={styles.servicesAccordionItem}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    className={styles.servicesAccordionTrigger}
                    onClick={() => setOpenId(isOpen ? null : srv.id)}
                  >
                    <span className="heading-style-h4 text-color-darkmain">
                      {srv.name}
                    </span>
                    <span
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : undefined,
                        transition: 'transform 0.25s ease',
                      }}
                    >
                      <ChevronDownIcon />
                    </span>
                  </button>
                  {isOpen && (
                    <div className={styles.servicesAccordionBody}>
                      <div className={styles.servicesAccordionContent}>
                        <p className="text-size-regular text-color-grey">
                          {srv.description[0]}
                        </p>
                        <Link
                          href={`/services/${srv.slug}`}
                          className="button is-small"
                        >
                          See service detail
                        </Link>
                      </div>
                      <div className={styles.servicesAccordionImgWrap}>
                        <img
                          src={srv.mainImage}
                          alt={srv.mainImageAlt}
                          className={styles.servicesAccordionImg}
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
