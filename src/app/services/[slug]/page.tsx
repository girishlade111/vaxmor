import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  SERVICES,
  SERVICE_DETAIL_PROCESS,
  SERVICE_INCLUDED_FEATURES,
  SHARED_BUILDING_IMAGE,
} from '@/content/services';
import { FAQS } from '@/content/faqs';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { SectionEyebrow } from '@/components/common/SectionEyebrow';
import { RelatedServicesCarousel } from '@/components/services/ServiceSections';
import { FAQSection } from '@/components/common/FAQSection';
import { GetStartedPanel } from '@/components/common/GetStartedPanel';
import { GenericIcon, ServiceIcon } from '@/components/common/Icons';
import styles from '@/styles/Sections.module.css';

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: 'Service Not Found' };
  return {
    title: service.name,
    description: service.metaDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <SiteLayout showAdvisorStrip={false}>
      {/* 01. Service Detail Hero */}
      <section className={styles.sectionBanner} style={{ paddingBottom: 'var(--space-10xl)' }}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.bannerEditorialMeta}>
              <SectionEyebrow number="(01)" label="Service detail" />
            </div>
            <h1 className="heading-style-hero" style={{ maxWidth: '48rem' }}>
              {service.name}
            </h1>
            <p
              className="text-size-large text-color-grey"
              style={{ maxWidth: '40rem', marginTop: 'var(--space-2xl)' }}
            >
              {service.summary}
            </p>
          </div>
        </div>
      </section>

      {/* 02. About This Service & Asymmetric Photo Pair */}
      <section className={styles.sectionServiceOverview}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.serviceOverviewSplit}>
              <div className={styles.serviceOverviewContent}>
                <span className={styles.serviceOverviewIconBox}>
                  <ServiceIcon name={service.iconName} />
                </span>
                <h2 className="heading-style-h3">About this service</h2>
                {service.description.map((p) => (
                  <p key={p} className="text-size-regular text-color-grey">
                    {p}
                  </p>
                ))}
                <Link href="/contact-v1" className="button">
                  Talk to an advisor
                </Link>
              </div>

              <div className={styles.serviceOverviewGallery}>
                <img
                  src={service.mainImage}
                  alt={service.mainImageAlt}
                  className={styles.servicePhotoTall}
                />
                <img
                  src={service.secondaryImage}
                  alt={service.secondaryImageAlt}
                  className={styles.servicePhotoShort}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. Six Included Features */}
      <section className={styles.sectionServicesSplit}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.pricingHead}>
              <SectionEyebrow number="(02)" label="Included" />
              <h2 className="heading-style-h2">
                What comes with every Vaxmor service
              </h2>
            </div>

            <div className={styles.includedGrid}>
              {SERVICE_INCLUDED_FEATURES.map((feat) => (
                <div key={feat.title} className={styles.includedCard}>
                  <span className={styles.servicePreviewIcon}>
                    <GenericIcon iconKey={feat.icon} />
                  </span>
                  <h3 className="heading-style-h5 text-color-darkmain">
                    {feat.title}
                  </h3>
                  <p className="text-size-small text-color-grey">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 04. Four-Step Process & Shared Building Photo */}
      <section className={styles.sectionAboutIntro}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.pricingHead}>
              <SectionEyebrow number="(03)" label="How it works" />
              <h2 className="heading-style-h2">How this service gets started</h2>
            </div>

            <img
              src={SHARED_BUILDING_IMAGE}
              alt="Vaxmor commercial office building"
              className={styles.serviceProcessWideImg}
            />

            <div className={styles.stepsGridFour}>
              {SERVICE_DETAIL_PROCESS.map((step) => (
                <div key={step.number} className={styles.stepBoxCard}>
                  <span className={styles.timelineNumTile}>{step.number}</span>
                  <h3 className="heading-style-h5 text-color-darkmain">
                    {step.title}
                  </h3>
                  <p className="text-size-small text-color-grey">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05. Service FAQ */}
      <FAQSection data={FAQS.serviceDetail} />

      {/* 06. Related Services Carousel */}
      <RelatedServicesCarousel />

      {/* 07. Get Started */}
      <GetStartedPanel
        eyebrowNumber="(06)"
        heading="Get started with this service"
        description="Book an introductory call and receive a clear written scope within one business day."
        primaryCta={{ label: 'Talk to an advisor', href: '/contact-v1' }}
        secondaryCta={{ label: 'View pricing', href: '/pricing' }}
      />
    </SiteLayout>
  );
}
