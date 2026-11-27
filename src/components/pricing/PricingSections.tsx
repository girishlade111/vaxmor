import React from 'react';
import Link from 'next/link';
import { APP_MODE } from '@/config/site';
import {
  BUSINESS_PLANS,
  COMPARISON_KEYS_PRODUCTION,
  COMPARISON_KEYS_REFERENCE,
  PERSONAL_PLANS,
  SERVICE_FEE_ROWS,
  type PricingTier,
} from '@/content/pricing';
import { SectionEyebrow } from '@/components/common/SectionEyebrow';
import { ArrowRightIcon, CheckIcon, CrossIcon } from '@/components/common/Icons';
import styles from '@/styles/Sections.module.css';

export function PersonalPlanGrid({
  eyebrowNumber = '(02)',
  eyebrowLabel = 'Personal plans',
  heading = 'Personal plans, priced in plain numbers',
}: {
  eyebrowNumber?: string;
  eyebrowLabel?: string;
  heading?: string;
}) {
  return (
    <section className={styles.sectionPricingCards}>
      <div className="padding-global">
        <div className="container-large">
          <div className={styles.pricingHead}>
            <SectionEyebrow number={eyebrowNumber} label={eyebrowLabel} />
            <h2 className="heading-style-h2">{heading}</h2>
          </div>

          <div className={styles.pricingCardsGrid}>
            {PERSONAL_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`${styles.pricingCard} shadow-card ${
                  plan.highlighted ? styles.pricingCardCenter : ''
                }`.trim()}
              >
                <div>
                  <span
                    className={`${styles.pricingBadge} ${
                      plan.highlighted ? styles.pricingBadgeAccent : ''
                    }`.trim()}
                  >
                    {plan.name}
                  </span>

                  <div className={styles.pricingPriceRow}>
                    <span className="heading-style-h2 font-mono">{plan.price}</span>
                    <span
                      className={`text-size-small ${
                        plan.highlighted ? 'text-color-darkgrey' : 'text-color-grey'
                      }`}
                    >
                      {plan.period}
                    </span>
                  </div>

                  <p
                    className={`text-size-small ${
                      plan.highlighted ? 'text-color-darkgrey' : 'text-color-grey'
                    }`}
                  >
                    {plan.description}
                  </p>

                  <div className={styles.pricingBenefitsBlock}>
                    <div
                      className={`text-size-small text-weight-medium ${
                        plan.highlighted ? 'text-color-white' : 'text-color-darkmain'
                      }`}
                    >
                      What you get:
                    </div>
                    <ul className={styles.pricingFeatureList}>
                      {plan.features.map((feat) => {
                        const excluded = feat.toLowerCase().includes('not included');
                        return (
                          <li key={feat} className={styles.pricingFeatureItem}>
                            <span
                              className={
                                excluded
                                  ? styles.pricingFeatIconMuted
                                  : plan.highlighted
                                  ? styles.pricingFeatIconLight
                                  : styles.pricingFeatIcon
                              }
                            >
                              {excluded ? <CrossIcon /> : <CheckIcon />}
                            </span>
                            <span
                              className={`text-size-small ${
                                plan.highlighted ? 'text-color-darkgrey' : 'text-color-grey'
                              }`}
                            >
                              {feat}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                <Link
                  href={plan.ctaHref}
                  className={`button ${plan.highlighted ? 'is-accent' : ''} ${styles.pricingCardCta}`.trim()}
                >
                  {plan.ctaLabel}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PlanComparisonMatrix({
  eyebrowNumber = '(03)',
  eyebrowLabel = 'Business plans',
  heading = 'Business plans for every size of company',
  plans = BUSINESS_PLANS,
  sectionBackground = 'white',
}: {
  eyebrowNumber?: string;
  eyebrowLabel?: string;
  heading?: string;
  plans?: PricingTier[];
  sectionBackground?: 'white' | 'grey';
}) {
  const keys =
    APP_MODE === 'production'
      ? COMPARISON_KEYS_PRODUCTION
      : COMPARISON_KEYS_REFERENCE;

  return (
    <section
      className={`${styles.sectionPricingMatrix} ${
        sectionBackground === 'grey' ? styles.sectionBgGrey : ''
      }`.trim()}
    >
      <div className="padding-global">
        <div className="container-large">
          <div className={styles.pricingCmpTop}>
            <div className={styles.pricingCmpHead}>
              <SectionEyebrow number={eyebrowNumber} label={eyebrowLabel} />
              <h2 className="heading-style-h3">{heading}</h2>
            </div>

            {plans.map((tier) => (
              <div
                key={tier.id}
                className={
                  tier.highlighted ? styles.pricingCmpTierMark : styles.pricingCmpTier
                }
              >
                <div>
                  <h3 className="heading-style-h5 text-color-darkmain">
                    {tier.name}
                  </h3>
                  <p className="text-size-small text-color-grey" style={{ marginTop: '0.35rem' }}>
                    {tier.description}
                  </p>
                  <div className={styles.pricingCmpPrice}>
                    <span className="heading-style-h3 font-mono">{tier.price}</span>
                    <span className="text-size-small text-color-grey">
                      {tier.period}
                    </span>
                  </div>
                </div>
                <Link
                  href={tier.ctaHref}
                  className={`button is-small ${tier.highlighted ? 'is-accent' : ''}`.trim()}
                >
                  {tier.ctaLabel}
                </Link>
              </div>
            ))}
          </div>

          <div className={styles.pricingCmpMatrix} role="table" aria-label={heading}>
            <div className={styles.pricingCmpMatrixLabel}>
              <span className="text-size-tiny text-weight-medium" style={{ letterSpacing: '0.12em' }}>
                WHAT&apos;S INCLUDED
              </span>
            </div>
            {keys.map((keyLabel, rowIdx) => (
              <div key={keyLabel} className={styles.pricingCmpRow} role="row">
                <div className={styles.pricingCmpKey} role="rowheader">
                  <span className="text-size-small text-weight-medium text-color-darkmain">
                    {keyLabel}
                  </span>
                </div>
                {plans.map((tier) => (
                  <div
                    key={`${tier.id}-${rowIdx}`}
                    role="cell"
                    className={
                      tier.highlighted ? styles.pricingCmpValMark : styles.pricingCmpVal
                    }
                  >
                    <span className="text-size-small text-color-grey">
                      {tier.features[rowIdx] || ''}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceFeeTable({
  eyebrowNumber = '(04)',
  eyebrowLabel = 'Compare',
  heading = 'How each service is priced',
  description = 'Minimums and fees for every service on one table, so you can budget before your first call.',
  ctaLabel = 'Talk to an advisor',
  ctaHref = '/contact-v1',
}: {
  eyebrowNumber?: string;
  eyebrowLabel?: string;
  heading?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className={styles.sectionCompare}>
      <div className="padding-global">
        <div className="container-large">
          <div className={styles.compareHead}>
            <SectionEyebrow number={eyebrowNumber} label={eyebrowLabel} />
            <h2 className="heading-style-h2">{heading}</h2>
            <p className="text-size-regular text-color-grey">{description}</p>
          </div>

          <div className={styles.compareTable} role="table" aria-label={heading}>
            <div className={`${styles.compareRow} ${styles.compareRowHead}`} role="row">
              <div className={styles.compareName} role="columnheader">
                <span className="text-size-small text-color-grey">Service</span>
              </div>
              <div className={`${styles.compareCell} ${styles.compareCellWide}`} role="columnheader">
                <span className="text-size-small text-color-grey">Best for</span>
              </div>
              <div className={styles.compareCell} role="columnheader">
                <span className="text-size-small text-color-grey">Minimum</span>
              </div>
              <div className={styles.compareCell} role="columnheader">
                <span className="text-size-small text-color-grey">Fee</span>
              </div>
              <div className={styles.compareAction} role="columnheader">
                <span className="sr-only">Action</span>
              </div>
            </div>

            {SERVICE_FEE_ROWS.map((row) => (
              <div key={row.service} className={styles.compareRow} role="row">
                <div className={styles.compareName} role="cell">
                  <span className="text-size-medium text-weight-medium text-color-darkmain">
                    {row.service}
                  </span>
                </div>
                <div className={`${styles.compareCell} ${styles.compareCellWide}`} role="cell">
                  <span className="text-size-small text-color-grey">{row.bestFor}</span>
                </div>
                <div className={styles.compareCell} role="cell">
                  <span className="text-size-small text-color-darkmain">{row.minimum}</span>
                </div>
                <div className={styles.compareCell} role="cell">
                  <span className="text-size-small text-color-darkmain">{row.fee}</span>
                </div>
                <div className={styles.compareAction} role="cell">
                  <Link href={row.href} className={styles.compareRowLink}>
                    <span className="text-size-small text-weight-medium">View</span>
                    <ArrowRightIcon />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.compareFoot}>
            <p className="text-size-small text-color-grey">
              Sample figures for illustration. Replace with your own rates and terms.
            </p>
            <Link href={ctaHref} className="button is-secondary is-small">
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
