import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES_V3_DATA } from '@/content/pages';
import { SERVICES } from '@/content/services';
import { FAQS } from '@/content/faqs';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { SectionEyebrow } from '@/components/common/SectionEyebrow';
import { RelatedServicesCarousel } from '@/components/services/ServiceSections';
import { TeamHorizontalGrid } from '@/components/team/TeamSections';
import { RollingStatistic } from '@/components/common/RollingStatistic';
import { FAQSection } from '@/components/common/FAQSection';
import { GetStartedPanel } from '@/components/common/GetStartedPanel';
import { GenericIcon } from '@/components/common/Icons';
import styles from '@/styles/Sections.module.css';

export const metadata: Metadata = {
  title: 'Services V3',
  description:
    'The third services layout in Vaxmor, with a service slider, a five-step planning process, security panel and the advisors behind each plan.',
};

export default function ServicesV3Page() {
  const { hero, fiveSteps, whyImages, whyItems, securityImage, securityItems, facts } =
    SERVICES_V3_DATA;

  return (
    <SiteLayout showAdvisorStrip={true}>
      {/* 01. Asymmetric Two-Image Hero */}
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
            <div className={styles.bannerEditorialImageRow}>
              <div className={styles.bannerEditorialSmall}>
                <img src={hero.smallImage} alt={hero.smallImageAlt} className={styles.bannerImgCover} />
              </div>
              <div className={styles.bannerEditorialLarge}>
                <img src={hero.largeImage} alt={hero.largeImageAlt} className={styles.bannerImgCover} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. Numbered Service Grid + Slider (Note: 5-slide reference behavior preserved in RelatedServicesCarousel) */}
      <section className={styles.sectionServicesSplit}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.relatedServicesHead}>
              <div className={styles.relatedServicesTitleCol}>
                <SectionEyebrow number="(02)" label="Services" />
                <h2 className="heading-style-h2">Services your plan can draw on</h2>
              </div>
              <Link href="/contact-v1" className="button">
                Talk to an advisor
              </Link>
            </div>

            <div className={styles.servicesSplitCardsGrid}>
              {SERVICES.map((srv) => (
                <Link
                  key={srv.id}
                  href={`/services/${srv.slug}`}
                  className={styles.servicePreviewCard}
                >
                  <div className={styles.serviceRowLeft}>
                    <span className="font-mono text-size-small text-color-secondary">
                      {srv.numberLabel}
                    </span>
                    <h3 className="heading-style-h5 text-color-darkmain">{srv.name}</h3>
                  </div>
                  <p className="text-size-small text-color-grey">{srv.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Slider (5 slides in reference mode per Instructions) */}
      <RelatedServicesCarousel
        eyebrowNumber="(02b)"
        eyebrowLabel="Featured plans"
        heading="Explore our planning services"
        limitFiveInReference={true}
      />

      {/* 03. Five-Step Process */}
      <section className={styles.sectionAboutIntro}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.stepsHead}>
              <div className={styles.stepsHeadText}>
                <SectionEyebrow number="(03)" label="How it works" />
                <h2 className="heading-style-h2">Five steps to a clear plan</h2>
              </div>
              <p className="text-size-small text-color-grey" style={{ maxWidth: '22rem' }}>
                Most clients go from first call to a fully working plan in four to six weeks.
              </p>
            </div>

            <div className={styles.stepsGridFive}>
              {fiveSteps.map((st) => (
                <div key={st.number} className={styles.stepBoxCard} style={{ justifyContent: 'space-between' }}>
                  <div>
                    <div className="heading-style-h4 font-mono text-color-secondary">
                      {st.number}
                    </div>
                    <h3 className="heading-style-h6 text-color-darkmain" style={{ marginTop: '0.75rem' }}>
                      {st.title}
                    </h3>
                    <p className="text-size-small text-color-grey" style={{ marginTop: '0.5rem' }}>
                      {st.description}
                    </p>
                  </div>
                  <div className="text-size-tiny text-color-grey" style={{ letterSpacing: '0.1em' }}>
                    {st.timing}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 04. Why Clients Trust Us */}
      <section className={styles.sectionAboutEditorial}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.timelineGrid}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {whyImages.map((src, i) => (
                  <div key={src} style={{ height: '16rem', borderRadius: 'var(--radius-image)', overflow: 'hidden' }}>
                    <img
                      src={src}
                      alt={i === 0 ? 'Grandmother reading with grandchild' : 'Parent holding child'}
                      className={styles.bannerImgCover}
                    />
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <SectionEyebrow number="(04)" label="Why choose us" />
                <h2 className="heading-style-h2">
                  Why clients trust us with the long-term plan
                </h2>
                <p className="text-size-regular text-color-grey">
                  Independent advice, one advisor and reporting you can actually read, kept up for as long as you are a client.
                </p>

                <div className={styles.servicesSplitCardsGrid} style={{ marginTop: '1rem' }}>
                  {whyItems.map((w) => (
                    <div key={w.title} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <span className={styles.servicePreviewIcon}>
                        <GenericIcon iconKey="shield" />
                      </span>
                      <h3 className="heading-style-h6 text-color-darkmain">{w.title}</h3>
                      <p className="text-size-small text-color-grey">{w.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05. Dark Security Panel */}
      <section className={styles.sectionSecurity}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.securityPanel}>
              <div className={styles.securityContent}>
                <SectionEyebrow number="(05)" label="Security" onDark />
                <h2 className="heading-style-h2 text-color-white">
                  Your plan and your data, kept secure
                </h2>
                <p className="text-size-regular text-color-darkgrey">
                  The records behind your plan are handled with the same care as the money it manages.
                </p>
                <div className={styles.securityList}>
                  {securityItems.map((item) => (
                    <div key={item.title} className={styles.securityItem}>
                      <span className={styles.securityIconDark}>
                        <GenericIcon iconKey="lock" />
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
                  src={securityImage}
                  alt="Client checking encrypted portal on smartphone"
                  className={styles.securityImg}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06. Meet the Advisors (4 Horizontal Cards) */}
      <TeamHorizontalGrid
        eyebrowNumber="(06)"
        eyebrowLabel="Our team"
        heading="Meet the advisors who build your plan"
      />

      {/* 07. 94% Rolling Statistic */}
      <section className={styles.sectionFacts}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.factsWrap}>
              <SectionEyebrow number="(07)" label="Facts and numbers" />
              <RollingStatistic
                value={facts.value}
                suffix={facts.suffix}
                description={facts.description}
              />
              <div className={styles.factsStatsGrid}>
                {facts.stats.map((st) => (
                  <div key={st.label} className={styles.factsStatCol}>
                    <div className="heading-style-h4 font-mono text-color-darkmain">
                      {st.value}
                    </div>
                    <div className="text-size-small text-color-grey">{st.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-size-tiny text-color-grey">{facts.footnote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 08. FAQ */}
      <FAQSection data={FAQS.servicesV3} />

      {/* 09. Get Started */}
      <GetStartedPanel
        eyebrowNumber="(09)"
        heading="Book your discovery call"
        description="A free first conversation, with a written proposal to follow before you commit to anything."
        primaryCta={{ label: 'Open account', href: '/contact-v1' }}
        secondaryCta={{ label: 'Talk to an advisor', href: '/contact-v2' }}
      />
    </SiteLayout>
  );
}
