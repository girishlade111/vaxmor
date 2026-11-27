import type { Metadata } from 'next';
import Link from 'next/link';
import { HOME_V2_DATA, HOME_V3_DATA } from '@/content/home';
import { PERSONAL_PLANS } from '@/content/pricing';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { SectionEyebrow } from '@/components/common/SectionEyebrow';
import { RelatedServicesCarousel } from '@/components/services/ServiceSections';
import { PlanComparisonMatrix } from '@/components/pricing/PricingSections';
import { TeamPortraitGrid } from '@/components/team/TeamSections';
import { FeaturedTestimonialPanel } from '@/components/common/TestimonialSections';
import { ArrowRightIcon } from '@/components/common/Icons';
import styles from '@/styles/Sections.module.css';

export const metadata: Metadata = {
  title: 'Home V3',
  description:
    'The third home layout in Vaxmor, opening with a card-led hero, live stats and an app preview for digital banks and card issuers.',
};

export default function HomeV3Page() {
  const { hero, whyList, timelineSteps } = HOME_V3_DATA;

  return (
    <SiteLayout showAdvisorStrip={true}>
      {/* 01. Card-Led Hero */}
      <section className={styles.sectionHeroDevice} style={{ paddingBottom: 'var(--section-space)' }}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.heroDeviceHead}>
              <SectionEyebrow number={hero.eyebrowNumber} label={hero.eyebrowLabel} />
              <h1 className="heading-style-h1">
                <span className={styles.heroCardLine}>
                  <span>Spend</span>
                  <img
                    src={hero.cardInlineImage}
                    alt="Sample Vaxmor card"
                    className={styles.heroCardInline}
                  />
                  <span>freely</span>
                </span>
                <span>anywhere you land</span>
              </h1>
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

            <div className={styles.heroCardStagePhoto}>
              <img
                src={hero.stageImage}
                alt={hero.stageImageAlt}
                className={styles.bannerImgCover}
              />
            </div>

            <div className={styles.heroCardStats}>
              {hero.stats.map((st) => (
                <div key={st.label}>
                  <div className="heading-style-h5 font-mono text-color-darkmain">
                    {st.value}
                  </div>
                  <div className="text-size-small text-color-grey" style={{ marginTop: '0.25rem' }}>
                    {st.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02. Sticky Why Choose Us List */}
      <section className={styles.sectionAboutIntro}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.serviceOverviewSplit}>
              <div className={styles.serviceOverviewContent}>
                <SectionEyebrow number="(02)" label="Why choose us" />
                <h2 className="heading-style-h2">
                  Why frequent spenders switch to Vaxmor
                </h2>
                <p className="text-size-regular text-color-grey">
                  Real exchange rates, instant controls and a card team that picks up, wherever your card ends up.
                </p>
              </div>
              <div style={{ width: '56%' }} className={styles.servicesRowsList}>
                {whyList.map((item) => (
                  <div
                    key={item.number}
                    className={styles.serviceRowItem}
                    style={{ gridTemplateColumns: '1fr 1.4fr' }}
                  >
                    <div className={styles.serviceRowLeft}>
                      <span className="font-mono text-size-small text-color-secondary">
                        {item.number}
                      </span>
                      <h3 className="heading-style-h5 text-color-darkmain">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-size-small text-color-grey">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. Services Slider */}
      <RelatedServicesCarousel
        eyebrowNumber="(03)"
        eyebrowLabel="Services"
        heading="The accounts and advice behind your card"
        ctaLabel="Talk to an advisor"
        ctaHref="/contact-v1"
      />

      {/* 04. Dark Results Banner */}
      <section className={styles.sectionFacts}>
        <div className="padding-global">
          <div className="container-large">
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <SectionEyebrow number="(04)" label="Our results" />
              <h2 className="heading-style-h2" style={{ marginTop: '1rem' }}>
                Growth our clients can measure
              </h2>
            </div>
            <div className={styles.resultsDarkBanner}>
              {HOME_V2_DATA.results.map((r) => (
                <div key={r.label} style={{ textAlign: 'center' }}>
                  <div className="heading-style-h2 font-mono text-color-white">
                    {r.value}
                  </div>
                  <div className="text-size-small text-color-darkgrey" style={{ marginTop: '0.4rem' }}>
                    {r.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05. 4-Step Timeline */}
      <section className={styles.sectionTimeline}>
        <div className="padding-global">
          <div className="container-large">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <SectionEyebrow number="(05)" label="How it works" />
              <h2 className="heading-style-h2" style={{ marginTop: '1rem' }}>
                From sign-up to first tap in four steps
              </h2>
            </div>

            <div className={styles.stepsGridFour}>
              {timelineSteps.map((st) => (
                <div key={st.number} className={styles.stepBoxCard}>
                  <span className={styles.timelineNumTile} style={{ borderRadius: '9999px' }}>
                    {st.number}
                  </span>
                  <h3 className="heading-style-h5 text-color-darkmain">{st.title}</h3>
                  <p className="text-size-small text-color-grey">{st.description}</p>
                </div>
              ))}
            </div>

            <p className="text-size-tiny text-color-grey" style={{ textAlign: 'center', marginTop: '2rem' }}>
              Card fees and exchange rates are shown in the app before every payment you make.
            </p>
          </div>
        </div>
      </section>

      {/* 06. Pricing Matrix */}
      <PlanComparisonMatrix
        eyebrowNumber="(06)"
        eyebrowLabel="Pricing"
        heading="Pick a plan, keep the same card"
        plans={PERSONAL_PLANS}
        sectionBackground="white"
      />

      {/* 07. Team Behind Every Card */}
      <TeamPortraitGrid
        eyebrowNumber="(07)"
        eyebrowLabel="Our team"
        heading="The team behind every card"
        columns={3}
      />

      {/* 08. Client Stories */}
      <FeaturedTestimonialPanel
        eyebrowNumber="(08)"
        eyebrowLabel="Client stories"
        heading="Cardholders and clients in their own words"
      />
    </SiteLayout>
  );
}
