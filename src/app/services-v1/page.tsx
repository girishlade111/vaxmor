import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES_V1_DATA } from '@/content/pages';
import { FAQS } from '@/content/faqs';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { SectionEyebrow } from '@/components/common/SectionEyebrow';
import { ServiceNumberedRows } from '@/components/services/ServiceSections';
import { CompactTestimonialCarousel } from '@/components/common/TestimonialSections';
import { FAQSection } from '@/components/common/FAQSection';
import { GetStartedPanel } from '@/components/common/GetStartedPanel';
import { GenericIcon } from '@/components/common/Icons';
import styles from '@/styles/Sections.module.css';

export const metadata: Metadata = {
  title: 'Services V1',
  description:
    'Wealth management, investment portfolios, private banking, retirement planning, business banking and lending, presented in Vaxmor first services layout.',
};

export default function ServicesV1Page() {
  const { hero, process, profileFinder, security } = SERVICES_V1_DATA;

  return (
    <SiteLayout showAdvisorStrip={true}>
      {/* 01. Hero */}
      <section className={styles.sectionBanner}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.bannerEditorialMeta}>
              <SectionEyebrow number={hero.eyebrowNumber} label={hero.eyebrowLabel} />
            </div>
            <div className={styles.bannerEditorialGrid}>
              <div className={styles.bannerEditorialHeading}>
                <h1 className="heading-style-h1">{hero.heading}</h1>
              </div>
              <div className={styles.bannerEditorialDesc}>
                <p className="text-size-regular text-color-grey">{hero.description}</p>
              </div>
            </div>
            <div className={styles.bannerStackImage}>
              <img src={hero.image} alt={hero.imageAlt} className={styles.bannerImgCover} />
            </div>
            <div className={styles.bannerMetaStrip}>
              <span className="text-size-eyebrow text-color-grey">EST. 2001</span>
              <span className="text-size-eyebrow text-color-grey">LONDON, UNITED KINGDOM</span>
              <span className="text-size-eyebrow text-color-grey">$4.2B UNDER MANAGEMENT</span>
            </div>
          </div>
        </div>
      </section>

      {/* 02. Numbered Service Rows */}
      <ServiceNumberedRows
        eyebrowNumber="(02)"
        eyebrowLabel="Services"
        heading="Banking and investing, handled by one team."
        description="Choose a single service or combine them into one plan, managed by an advisor who sees the full picture."
        ctaLabel=""
        variant="grey"
      />

      {/* 03. Four-Step Process */}
      <section className={styles.sectionAboutIntro}>
        <div className="padding-global">
          <div className="container-large">
            <div style={{ marginBottom: '2.5rem' }}>
              <SectionEyebrow number={process.eyebrowNumber} label={process.eyebrowLabel} />
              <h2 className="heading-style-h2" style={{ marginTop: '1rem' }}>
                {process.heading}
              </h2>
            </div>

            <img
              src={process.image}
              alt={process.imageAlt}
              className={styles.serviceProcessWideImg}
            />

            <div className={styles.stepsGridFour}>
              {process.steps.map((st) => (
                <div key={st.number} className={styles.stepBoxCard}>
                  <span className={styles.timelineNumTile}>{st.number}</span>
                  <h3 className="heading-style-h5 text-color-darkmain">{st.title}</h3>
                  <p className="text-size-small text-color-grey">{st.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 04. Client Profile Finder */}
      <section className={styles.sectionServicesSplit}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.profileFinderGrid}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1.25rem' }}>
                <SectionEyebrow
                  number={profileFinder.eyebrowNumber}
                  label={profileFinder.eyebrowLabel}
                />
                <h2 className="heading-style-h2">{profileFinder.heading}</h2>
                <p className="text-size-regular text-color-grey">
                  {profileFinder.description}
                </p>
                <Link href={profileFinder.ctaHref} className="button">
                  {profileFinder.ctaLabel}
                </Link>
              </div>

              <div className={styles.profileCardList}>
                {profileFinder.profiles.map((prof) => (
                  <div key={prof.id} className={styles.profileRow}>
                    <span className={styles.servicePreviewIcon}>
                      <GenericIcon iconKey="user" />
                    </span>
                    <div>
                      <h3 className="heading-style-h5 text-color-darkmain">
                        {prof.title}
                      </h3>
                      <p className="text-size-small text-color-grey" style={{ marginTop: '0.25rem' }}>
                        {prof.description}
                      </p>
                      <div className={styles.profilePills}>
                        {prof.services.map((srv) => (
                          <Link
                            key={srv.label}
                            href={srv.href}
                            className={styles.profilePill}
                          >
                            {srv.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05. Security Bento */}
      <section className={styles.sectionSecurity}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.relatedServicesHead}>
              <div className={styles.relatedServicesTitleCol}>
                <SectionEyebrow
                  number={security.eyebrowNumber}
                  label={security.eyebrowLabel}
                />
                <h2 className="heading-style-h2" style={{ maxWidth: '40rem' }}>
                  {security.heading}
                </h2>
                <p className="text-size-regular text-color-grey">
                  {security.description}
                </p>
              </div>
              <Link href={security.ctaHref} className="button">
                {security.ctaLabel}
              </Link>
            </div>

            <div className={styles.securityBentoGrid}>
              <div className={styles.securityBentoTop}>
                <div className={styles.securityBentoFeature}>
                  <span className={styles.securityIconDark}>
                    <GenericIcon iconKey="shield" />
                  </span>
                  <div>
                    <h3 className="heading-style-h4 text-color-white">
                      {security.featureCard.title}
                    </h3>
                    <p className="text-size-regular text-color-darkgrey" style={{ marginTop: '0.5rem' }}>
                      {security.featureCard.description}
                    </p>
                  </div>
                </div>

                <div className={styles.securityBentoSide}>
                  <div className={styles.securityBentoPhoto}>
                    <img
                      src={security.image}
                      alt={security.imageAlt}
                      className={styles.bannerImgCover}
                    />
                  </div>
                  <div className={styles.securityBentoCard}>
                    <span className={styles.servicePreviewIcon}>
                      <GenericIcon iconKey="lock" />
                    </span>
                    <div>
                      <h3 className="heading-style-h6 text-color-darkmain">
                        {security.sideCard.title}
                      </h3>
                      <p className="text-size-small text-color-grey" style={{ marginTop: '0.25rem' }}>
                        {security.sideCard.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.securityBentoBottom}>
                {security.bottomCards.map((c) => (
                  <div key={c.title} className={styles.securityBentoCard}>
                    <span className={styles.servicePreviewIcon}>
                      <GenericIcon iconKey="shield" />
                    </span>
                    <div>
                      <h3 className="heading-style-h6 text-color-darkmain">{c.title}</h3>
                      <p className="text-size-small text-color-grey" style={{ marginTop: '0.25rem' }}>
                        {c.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06. Client Testimonials */}
      <CompactTestimonialCarousel
        eyebrowNumber="(06)"
        eyebrowLabel="Clients"
        heading="What clients say about our services"
      />

      {/* 07. FAQ */}
      <FAQSection data={FAQS.servicesV1} />

      {/* 08. Get Started */}
      <GetStartedPanel
        eyebrowNumber="(08)"
        heading="Ready to pick your first service?"
        description="Start with one service today and add the rest as your plans grow."
        primaryCta={{ label: 'Open account', href: '/contact-v1' }}
        secondaryCta={{ label: 'Talk to an advisor', href: '/contact-v2' }}
      />
    </SiteLayout>
  );
}
