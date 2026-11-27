import type { Metadata } from 'next';
import { PRICING_HERO_DATA } from '@/content/pages';
import { FAQS } from '@/content/faqs';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { SectionEyebrow } from '@/components/common/SectionEyebrow';
import {
  PersonalPlanGrid,
  PlanComparisonMatrix,
  ServiceFeeTable,
} from '@/components/pricing/PricingSections';
import { FeaturedTestimonialPanel } from '@/components/common/TestimonialSections';
import { FAQSection } from '@/components/common/FAQSection';
import { GetStartedPanel } from '@/components/common/GetStartedPanel';
import styles from '@/styles/Sections.module.css';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Three account and advisory plans compared side by side in Vaxmor, from everyday banking through to full wealth management services.',
};

export default function PricingPage() {
  return (
    <SiteLayout showAdvisorStrip={true}>
      {/* 01. Split Pricing Hero */}
      <section className={styles.sectionBannerBleed}>
        <div className="padding-global" style={{ width: '100%' }}>
          <div className="container-large">
            <div className={styles.bannerBleedText}>
              <SectionEyebrow
                number={PRICING_HERO_DATA.eyebrowNumber}
                label={PRICING_HERO_DATA.eyebrowLabel}
              />
              <h1 className="heading-style-h1">{PRICING_HERO_DATA.heading}</h1>
              <p className="text-size-regular text-color-grey">
                {PRICING_HERO_DATA.description}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.bannerBleedPhotoWrap}>
          <img
            src={PRICING_HERO_DATA.image}
            alt={PRICING_HERO_DATA.imageAlt}
            className={styles.bannerImgCover}
          />
        </div>
      </section>

      {/* 02. Personal Plan Cards */}
      <PersonalPlanGrid />

      {/* 03. Business Plan Comparison Matrix */}
      <PlanComparisonMatrix />

      {/* 04. Service Fee Table */}
      <ServiceFeeTable />

      {/* 05. Client Stories */}
      <FeaturedTestimonialPanel
        eyebrowNumber="(05)"
        eyebrowLabel="Client stories"
        heading="Clients on what they pay and what they get"
        variant="grey"
      />

      {/* 06. Fees & Billing FAQ */}
      <FAQSection data={FAQS.pricing} />

      {/* 07. Get Started */}
      <GetStartedPanel
        eyebrowNumber="(07)"
        heading="Pick a plan and open your account"
        description="Start on the free Everyday plan and upgrade only when your plans call for it."
        primaryCta={{ label: 'Open account', href: '/contact-v1' }}
        secondaryCta={{ label: 'Talk to an advisor', href: '/contact-v2' }}
      />
    </SiteLayout>
  );
}
