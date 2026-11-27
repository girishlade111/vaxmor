import type { Metadata } from 'next';
import { SERVICES_V2_DATA } from '@/content/pages';
import { FAQS } from '@/content/faqs';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { SectionEyebrow } from '@/components/common/SectionEyebrow';
import { ServicesAccordionList } from '@/components/services/ServiceSections';
import { BusinessAudienceShowcase } from '@/components/home/BusinessAudienceShowcase';
import { PersonalPlanGrid, ServiceFeeTable } from '@/components/pricing/PricingSections';
import { CompactTestimonialCarousel } from '@/components/common/TestimonialSections';
import { FAQSection } from '@/components/common/FAQSection';
import { GetStartedPanel } from '@/components/common/GetStartedPanel';
import { ClockIcon, GenericIcon } from '@/components/common/Icons';
import styles from '@/styles/Sections.module.css';

export const metadata: Metadata = {
  title: 'Services V2',
  description:
    'The second services layout in Vaxmor, built for growing businesses with expandable services, stage matching, comparison table and plans.',
};

export default function ServicesV2Page() {
  const { hero, businessStages, steps } = SERVICES_V2_DATA;

  return (
    <SiteLayout showAdvisorStrip={true}>
      {/* 01. Split Hero */}
      <section className={styles.sectionBannerBleed}>
        <div className="padding-global" style={{ width: '100%' }}>
          <div className="container-large">
            <div className={styles.bannerBleedText}>
              <SectionEyebrow number={hero.eyebrowNumber} label={hero.eyebrowLabel} />
              <h1 className="heading-style-h1">{hero.heading}</h1>
              <p className="text-size-regular text-color-grey">{hero.description}</p>
            </div>
          </div>
        </div>
        <div className={styles.bannerBleedPhotoWrap}>
          <img src={hero.image} alt={hero.imageAlt} className={styles.bannerImgCover} />
        </div>
      </section>

      {/* 02. Expandable Services Rows */}
      <ServicesAccordionList />

      {/* 03. Business Stages */}
      <BusinessAudienceShowcase
        eyebrowNumber="(03)"
        eyebrowLabel="For business"
        heading="Banking matched to your company's stage"
        description="Pick the stage closest to yours and we set up accounts, credit and payments to fit it."
        ctaLabel="Open an account"
        ctaHref="/contact-v1"
        audiences={businessStages}
      />

      {/* 04. Three-Step Business Account Opening */}
      <section className={styles.sectionSteps}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.stepsHead}>
              <div className={styles.stepsHeadText}>
                <SectionEyebrow number={steps.eyebrowNumber} label={steps.eyebrowLabel} />
                <h2 className="heading-style-h2">{steps.heading}</h2>
              </div>
              <div className={styles.stepsPill}>
                <ClockIcon />
                <span>{steps.durationLabel}</span>
              </div>
            </div>
            <div className={styles.stepsTrack}>
              <div className={styles.stepsLine} aria-hidden="true" />
              <div className={styles.stepsList}>
                {steps.items.map((st) => (
                  <div key={st.title} className={styles.stepsItem}>
                    <div className={styles.stepsIcon}>
                      <GenericIcon iconKey={st.icon} />
                    </div>
                    <div>
                      <h3 className="heading-style-h5 text-color-darkmain">{st.title}</h3>
                      <p className="text-size-regular text-color-grey" style={{ marginTop: '0.4rem' }}>
                        {st.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05. Service Fee Table */}
      <ServiceFeeTable
        eyebrowNumber="(05)"
        eyebrowLabel="Compare"
        heading="Compare our services side by side"
        description="Who each service suits, what it takes to start and what it costs, before you speak to an advisor."
        ctaLabel="See full pricing"
        ctaHref="/pricing"
      />

      {/* 06. Plans */}
      <PersonalPlanGrid
        eyebrowNumber="(06)"
        eyebrowLabel="Pricing"
        heading="Plans for owners at every stage"
      />

      {/* 07. Client Testimonials */}
      <CompactTestimonialCarousel
        eyebrowNumber="(07)"
        eyebrowLabel="Clients"
        heading="What owners say about banking with us"
      />

      {/* 08. FAQ */}
      <FAQSection data={FAQS.servicesV2} />

      {/* 09. Get Started */}
      <GetStartedPanel
        eyebrowNumber="(09)"
        heading="Open a business account today"
        description="Company details in, account live within a day, with a business banker from the start."
        primaryCta={{ label: 'Open account', href: '/contact-v1' }}
        secondaryCta={{ label: 'Talk to an advisor', href: '/contact-v2' }}
      />
    </SiteLayout>
  );
}
