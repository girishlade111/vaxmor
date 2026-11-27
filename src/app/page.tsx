import type { Metadata } from 'next';
import Link from 'next/link';
import { HOME_V1_DATA } from '@/content/home';
import { ARTICLES } from '@/content/articles';
import { FAQS } from '@/content/faqs';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { SectionEyebrow } from '@/components/common/SectionEyebrow';
import { PartnerLogoStrip } from '@/components/common/PartnerLogoStrip';
import { ServiceSplitCardsSection } from '@/components/services/ServiceSections';
import { BusinessAudienceShowcase } from '@/components/home/BusinessAudienceShowcase';
import { FeaturedTestimonialPanel } from '@/components/common/TestimonialSections';
import { RollingStatistic } from '@/components/common/RollingStatistic';
import { NewsletterForm } from '@/components/common/NewsletterForm';
import { FAQSection } from '@/components/common/FAQSection';
import { GetStartedPanel } from '@/components/common/GetStartedPanel';
import { ArrowRightIcon, ArrowUpRightIcon, ClockIcon, GenericIcon } from '@/components/common/Icons';
import styles from '@/styles/Sections.module.css';

export const metadata: Metadata = {
  title: 'Vaxmor - Private Banking & Financial Advisory',
  description:
    'One advisor for your accounts, investments and retirement plan, with every fee shown before you commit.',
};

export default function HomePage() {
  const { hero, aboutIntro, servicesSection, cardsSection, businessSection, stepsSection, appSection, factsSection, insightsSection, getStarted } =
    HOME_V1_DATA;
  const previewArticles = ARTICLES.slice(0, 3);

  return (
    <SiteLayout showAdvisorStrip={false}>
      {/* 01. Split Private Banking Hero */}
      <section className={styles.sectionHeroSplit}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.heroSplitLayout}>
              <div className={styles.heroSplitContent}>
                <SectionEyebrow
                  number={hero.eyebrowNumber}
                  label={hero.eyebrowLabel}
                />
                <h1 className="heading-style-h1">{hero.heading}</h1>
                <p className="text-size-regular text-color-grey">
                  {hero.description}
                </p>
                <div className={styles.heroSplitButtons}>
                  <Link href={hero.primaryCta.href} className="button">
                    <span>{hero.primaryCta.label}</span>
                    <ArrowRightIcon />
                  </Link>
                  <Link href={hero.secondaryCta.href} className="button is-secondary">
                    {hero.secondaryCta.label}
                  </Link>
                </div>

                <div className={styles.heroSplitProof}>
                  <div className={styles.avatarWrap}>
                    {hero.avatars.map((av, idx) => (
                      <img
                        key={idx}
                        src={av.src}
                        alt={av.alt}
                        className={styles.avatarItem}
                        width={48}
                        height={48}
                      />
                    ))}
                  </div>
                  <div>
                    <div className={styles.heroSplitNumber}>{hero.clientCount}</div>
                    <div className="text-size-small text-color-grey">
                      {hero.clientLabel}
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.heroSplitMediaWrap}>
                <div className={styles.heroSplitMedia}>
                  <img
                    src={hero.heroPhoto}
                    alt={hero.heroPhotoAlt}
                    className={styles.heroSplitImg}
                  />
                </div>

                {/* Floating Portfolio Balance Card */}
                <div
                  className={`${styles.heroSplitCard} ${styles.heroSplitPortfolio}`}
                  aria-label="Sample portfolio balance preview"
                >
                  <div className={styles.heroPortfolioTop}>
                    <span className="text-size-tiny text-color-grey">
                      {hero.portfolio.label}
                    </span>
                  </div>
                  <div className="heading-style-h5 font-mono text-color-darkmain">
                    {hero.portfolio.amount}
                  </div>
                  <span className={styles.heroPositiveBadge}>
                    {hero.portfolio.change}
                  </span>
                  <div className={styles.heroPortfolioChart} aria-hidden="true">
                    {[38, 52, 46, 68, 100].map((h, i) => (
                      <span
                        key={i}
                        className={`${styles.heroChartBar} ${
                          i === 4 ? styles.heroChartBarActive : ''
                        }`.trim()}
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Floating Salary Received Notification */}
                <div
                  className={`${styles.heroSplitCard} ${styles.heroSplitTransaction}`}
                  aria-label="Sample salary received notification"
                >
                  <span className={styles.heroSplitIcon}>
                    <ArrowUpRightIcon />
                  </span>
                  <div>
                    <div className="text-size-tiny text-color-grey">
                      {hero.salary.label}
                    </div>
                    <div className={styles.heroSplitAmount}>
                      {hero.salary.amount}
                    </div>
                  </div>
                </div>

                {/* Dark 3-Statistics Strip */}
                <div className={styles.heroSplitStats}>
                  {hero.stats.map((st) => (
                    <div key={st.label} className={styles.heroSplitStat}>
                      <div className={styles.heroSplitStatNumber}>{st.value}</div>
                      <div className={styles.heroSplitStatLabel}>{st.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. Partner Logo Strip */}
      <PartnerLogoStrip />

      {/* 03. About Vaxmor Introduction */}
      <section className={styles.sectionAboutIntro}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.aboutIntroWrap}>
              <div className={styles.aboutIntroLayout}>
                <div className={styles.aboutIntroHeading}>
                  <SectionEyebrow
                    number={aboutIntro.eyebrowNumber}
                    label={aboutIntro.eyebrowLabel}
                  />
                  <h2 className="heading-style-h2">{aboutIntro.heading}</h2>
                </div>
                <div className={styles.aboutIntroContent}>
                  <p className="text-size-regular text-color-grey">
                    {aboutIntro.description}
                  </p>
                  <Link href={aboutIntro.ctaHref} className="button">
                    {aboutIntro.ctaLabel}
                  </Link>
                </div>
              </div>

              <div className={styles.aboutIntroStats}>
                {aboutIntro.stats.map((stat) => (
                  <div key={stat.label} className={styles.aboutIntroStat}>
                    <div className="heading-style-h3 font-mono text-color-darkmain">
                      {stat.value}
                    </div>
                    <div className="text-size-small text-color-grey">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. Services Split Section (6 Cards) */}
      <ServiceSplitCardsSection
        eyebrowNumber={servicesSection.eyebrowNumber}
        eyebrowLabel={servicesSection.eyebrowLabel}
        heading={servicesSection.heading}
        description={servicesSection.description}
        ctaLabel={servicesSection.ctaLabel}
        ctaHref={servicesSection.ctaHref}
        photo={servicesSection.photo}
        photoAlt={servicesSection.photoAlt}
      />

      {/* 05. Debit Cards Showcase */}
      <section className={styles.sectionCardFeature}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.cardFeatureWrap}>
              <div className={styles.cardFeatureHeader}>
                <SectionEyebrow
                  number={cardsSection.eyebrowNumber}
                  label={cardsSection.eyebrowLabel}
                />
                <h2 className="heading-style-h2">{cardsSection.heading}</h2>
                <p className="text-size-regular text-color-grey">
                  {cardsSection.description}
                </p>
                <Link href={cardsSection.ctaHref} className="button">
                  {cardsSection.ctaLabel}
                </Link>
              </div>

              <div className={styles.cardFeatureVisual}>
                <img
                  src={cardsSection.navyCardImage}
                  alt="Sample Vaxmor debit card in navy metal finish"
                  className={`${styles.cardFeatureImg} ${styles.cardFeatureImgBack}`}
                />
                <img
                  src={cardsSection.blueCardImage}
                  alt="Sample Vaxmor everyday debit card in bright blue"
                  className={styles.cardFeatureImg}
                />
              </div>

              <div className={styles.cardFeatureList}>
                {cardsSection.benefits.map((benefit) => (
                  <div key={benefit.title} className={styles.cardFeatureItem}>
                    <span className={styles.servicePreviewIcon}>
                      <GenericIcon iconKey={benefit.icon} />
                    </span>
                    <h3 className="heading-style-h5 text-color-darkmain">
                      {benefit.title}
                    </h3>
                    <p className="text-size-regular text-color-grey">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06. Business Audience Showcase */}
      <BusinessAudienceShowcase
        eyebrowNumber={businessSection.eyebrowNumber}
        eyebrowLabel={businessSection.eyebrowLabel}
        heading={businessSection.heading}
        description={businessSection.description}
        ctaLabel={businessSection.ctaLabel}
        ctaHref={businessSection.ctaHref}
        audiences={businessSection.audiences}
      />

      {/* 07. Three-Step Account Opening */}
      <section className={styles.sectionSteps}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.stepsHead}>
              <div className={styles.stepsHeadText}>
                <SectionEyebrow
                  number={stepsSection.eyebrowNumber}
                  label={stepsSection.eyebrowLabel}
                />
                <h2 className="heading-style-h2">{stepsSection.heading}</h2>
              </div>
              <div className={styles.stepsPill}>
                <ClockIcon />
                <span>{stepsSection.durationLabel}</span>
              </div>
            </div>

            <div className={styles.stepsTrack}>
              <div className={styles.stepsLine} aria-hidden="true" />
              <div className={styles.stepsList}>
                {stepsSection.steps.map((step) => (
                  <div key={step.title} className={styles.stepsItem}>
                    <div className={styles.stepsIcon}>
                      <GenericIcon iconKey={step.icon} />
                    </div>
                    <div>
                      <h3 className="heading-style-h5 text-color-darkmain">
                        {step.title}
                      </h3>
                      <p className="text-size-regular text-color-grey" style={{ marginTop: '0.4rem' }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 08. Mobile Banking App Presentation */}
      <section className={styles.sectionApp}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.appHead}>
              <SectionEyebrow
                number={appSection.eyebrowNumber}
                label={appSection.eyebrowLabel}
              />
              <h2 className="heading-style-h2">{appSection.heading}</h2>
              <p className="text-size-regular text-color-grey">
                {appSection.description}
              </p>
            </div>

            <div className={styles.appLayout}>
              <div className={styles.appFeatures}>
                {appSection.leftFeatures.map((feat) => (
                  <div
                    key={feat.title}
                    className={`${styles.appFeature} ${styles.appFeatureReverse}`}
                  >
                    <span className={styles.appFeatureIcon}>
                      <GenericIcon iconKey={feat.icon} />
                    </span>
                    <div>
                      <h3 className="heading-style-h5 text-color-darkmain">
                        {feat.title}
                      </h3>
                      <p className="text-size-small text-color-grey" style={{ marginTop: '0.25rem' }}>
                        {feat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.appPhoneStage}>
                <div className={styles.appPhone}>
                  <img
                    src={appSection.phoneScreenImage}
                    alt={appSection.phoneScreenAlt}
                    className={styles.appScreen}
                  />
                </div>
              </div>

              <div className={styles.appFeatures}>
                {appSection.rightFeatures.map((feat) => (
                  <div key={feat.title} className={styles.appFeature}>
                    <span className={styles.appFeatureIcon}>
                      <GenericIcon iconKey={feat.icon} />
                    </span>
                    <div>
                      <h3 className="heading-style-h5 text-color-darkmain">
                        {feat.title}
                      </h3>
                      <p className="text-size-small text-color-grey" style={{ marginTop: '0.25rem' }}>
                        {feat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 09. Client Stories */}
      <FeaturedTestimonialPanel />

      {/* 10. Large 98% Rolling Statistic */}
      <section className={styles.sectionFacts}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.factsWrap}>
              <SectionEyebrow
                number={factsSection.eyebrowNumber}
                label={factsSection.eyebrowLabel}
              />
              <RollingStatistic
                value={factsSection.value}
                suffix={factsSection.suffix}
                description={factsSection.description}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 11. Insights Preview + Newsletter */}
      <section className={styles.sectionNews}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.newsHeader}>
              <div className={styles.newsHeadText}>
                <SectionEyebrow
                  number={insightsSection.eyebrowNumber}
                  label={insightsSection.eyebrowLabel}
                />
                <h2 className="heading-style-h2">{insightsSection.heading}</h2>
              </div>
              <Link href={insightsSection.ctaHref} className="button">
                {insightsSection.ctaLabel}
              </Link>
            </div>

            <div className={styles.newsList}>
              {previewArticles.map((art) => (
                <Link
                  key={art.id}
                  href={`/blog/${art.slug}`}
                  className={styles.newsRow}
                >
                  <div className={styles.newsMeta}>{art.category}</div>
                  <div className={styles.newsText}>
                    <h3 className="heading-style-h4 text-color-darkmain">
                      {art.title}
                    </h3>
                    <p className="text-size-small text-color-grey">
                      {art.summary}
                    </p>
                  </div>
                  <div className={styles.newsThumb}>
                    <img
                      src={art.coverImage}
                      alt={art.title}
                      className={styles.newsThumbImg}
                    />
                  </div>
                </Link>
              ))}
            </div>

            <NewsletterForm />
          </div>
        </div>
      </section>

      {/* 12. FAQ */}
      <FAQSection data={FAQS.home} />

      {/* 13. Get Started CTA Panel */}
      <GetStartedPanel
        eyebrowNumber={getStarted.eyebrowNumber}
        eyebrowLabel={getStarted.eyebrowLabel}
        heading={getStarted.heading}
        description={getStarted.description}
        primaryCta={getStarted.primaryCta}
        secondaryCta={getStarted.secondaryCta}
      />
    </SiteLayout>
  );
}
