import type { Metadata } from 'next';
import Link from 'next/link';
import { HOME_V2_DATA } from '@/content/home';
import { FAQS } from '@/content/faqs';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { SectionEyebrow } from '@/components/common/SectionEyebrow';
import { PartnerLogoStrip } from '@/components/common/PartnerLogoStrip';
import { ServiceNumberedRows } from '@/components/services/ServiceSections';
import { TeamPortraitGrid } from '@/components/team/TeamSections';
import { FeaturedTestimonialPanel } from '@/components/common/TestimonialSections';
import { FAQSection } from '@/components/common/FAQSection';
import { ArrowRightIcon, GenericIcon } from '@/components/common/Icons';
import styles from '@/styles/Sections.module.css';

export const metadata: Metadata = {
  title: 'Home V2',
  description:
    'The second home layout in Vaxmor, with a sticky service index, mobile app showcase and calmer opening built for private banks.',
};

export default function HomeV2Page() {
  const { hero, about, security, results, whyCards } = HOME_V2_DATA;

  return (
    <SiteLayout showAdvisorStrip={true}>
      {/* 01. Mobile Banking Device Hero */}
      <section className={styles.sectionHeroDevice}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.heroDeviceHead}>
              <SectionEyebrow number={hero.eyebrowNumber} label={hero.eyebrowLabel} />
              <h1 className="heading-style-h1">{hero.heading}</h1>
              <p className="text-size-regular text-color-grey" style={{ maxWidth: '36rem' }}>
                {hero.description}
              </p>
              <div className={styles.ctaAccountButtons}>
                <Link href={hero.primaryCta.href} className="button">
                  <span>{hero.primaryCta.label}</span>
                  <ArrowRightIcon />
                </Link>
                <Link href={hero.secondaryCta.href} className="button is-secondary">
                  {hero.secondaryCta.label}
                </Link>
              </div>
            </div>

            <div className={styles.heroDeviceStage}>
              <div className={styles.heroDeviceBand} aria-hidden="true" />
              <div className={styles.heroDevicePhones}>
                <div className={`${styles.heroDevicePhoneSide} ${styles.heroDeviceLeft}`}>
                  <img
                    src={hero.leftScreen}
                    alt="Vaxmor cards app screen"
                    className={styles.heroDeviceImg}
                  />
                </div>
                <div className={styles.heroDevicePhone}>
                  <img
                    src={hero.centerScreen}
                    alt="Vaxmor home app screen"
                    className={styles.heroDeviceImg}
                  />
                </div>
                <div className={`${styles.heroDevicePhoneSide} ${styles.heroDeviceRight}`}>
                  <img
                    src={hero.rightScreen}
                    alt="Vaxmor savings app screen"
                    className={styles.heroDeviceImg}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. Partner Strip */}
      <PartnerLogoStrip label="Trusted by 12,000+ clients and leading financial partners" />

      {/* 03. Editorial Introduction */}
      <section className={styles.sectionAboutEditorial}>
        <div className="padding-global">
          <div className="container-large">
            <div style={{ marginBottom: '2rem' }}>
              <SectionEyebrow number={about.eyebrowNumber} label={about.eyebrowLabel} />
            </div>
            <div className={styles.aboutEditorialGrid}>
              <div>
                <h2 className="heading-style-h3">{about.statement}</h2>
                <p className="text-size-regular text-color-grey" style={{ marginTop: '1.5rem' }}>
                  {about.subcopy}
                </p>
              </div>
              <div>
                <div className="text-size-eyebrow text-color-grey">EXPERTISE</div>
                <div className={styles.expertiseList}>
                  {about.expertise.map((item) => (
                    <div key={item} className={styles.expertiseItem}>
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-size-small text-color-grey" style={{ marginTop: '1.25rem' }}>
                  {about.footnote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. Numbered Services Rows */}
      <ServiceNumberedRows
        eyebrowNumber="(03)"
        eyebrowLabel="Services"
        heading="Every account you need, run from one app."
        description="Open what you need today and add investing or lending later, all under one login and one banker."
        variant="grey"
      />

      {/* 05. Security Panel */}
      <section className={styles.sectionSecurity}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.securityPanel}>
              <div className={styles.securityContent}>
                <SectionEyebrow
                  number={security.eyebrowNumber}
                  label={security.eyebrowLabel}
                  onDark
                />
                <h2 className="heading-style-h2 text-color-white">{security.heading}</h2>
                <p className="text-size-regular text-color-darkgrey">
                  {security.description}
                </p>
                <div className={styles.securityList}>
                  {security.items.map((item) => (
                    <div key={item.title} className={styles.securityItem}>
                      <span className={styles.securityIconDark}>
                        <GenericIcon iconKey="shield" />
                      </span>
                      <div>
                        <h3 className="heading-style-h6 text-color-white">{item.title}</h3>
                        <p className="text-size-small text-color-darkgrey" style={{ marginTop: '0.2rem' }}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.securityMedia}>
                <img
                  src={security.image}
                  alt={security.imageAlt}
                  className={styles.securityImg}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06. 4-Column Results */}
      <section className={styles.sectionFacts}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.resultsLightGrid}>
              {results.map((r) => (
                <div key={r.label} style={{ textAlign: 'center' }}>
                  <div className="heading-style-h2 font-mono text-color-darkmain">
                    {r.value}
                  </div>
                  <div className="text-size-small text-color-grey" style={{ marginTop: '0.5rem' }}>
                    {r.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 07. Why Choose Us 3 Cards */}
      <section className={styles.sectionAboutIntro}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.pricingHead}>
              <SectionEyebrow number="(06)" label="Why choose us" />
              <h2 className="heading-style-h2">
                Everyday banking without the usual friction
              </h2>
              <p className="text-size-regular text-color-grey">
                Simple accounts, a capable app and real people behind both, so routine banking takes minutes instead of afternoons.
              </p>
            </div>
            <div className={styles.whyCardsThree}>
              {whyCards.map((c) => (
                <div
                  key={c.number}
                  className={`${styles.whyStepCard} ${c.dark ? styles.whyStepCardDark : ''}`.trim()}
                >
                  <div>
                    <div
                      className="font-mono text-size-small"
                      style={{ color: c.dark ? 'var(--color-dark-grey)' : 'var(--color-brand)' }}
                    >
                      {c.number}
                    </div>
                    <h3
                      className={`heading-style-h5 ${c.dark ? 'text-color-white' : 'text-color-darkmain'}`}
                      style={{ marginTop: '0.5rem' }}
                    >
                      {c.title}
                    </h3>
                  </div>
                  <p className={`text-size-small ${c.dark ? 'text-color-darkgrey' : 'text-color-grey'}`}>
                    {c.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 08. 7 Team Cards + Join Our Team */}
      <TeamPortraitGrid
        eyebrowNumber="(07)"
        eyebrowLabel="Our team"
        heading="The people answering your messages"
        columns={4}
        includeJoinCard={true}
      />

      {/* 09. Testimonials */}
      <FeaturedTestimonialPanel
        eyebrowNumber="(08)"
        eyebrowLabel="Client stories"
        heading="Why clients moved their banking to us"
      />

      {/* 10. FAQ */}
      <FAQSection data={FAQS.homeV2} />
    </SiteLayout>
  );
}
