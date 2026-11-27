import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { TESTIMONIALS } from '@/content/testimonials';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { SectionEyebrow } from '@/components/common/SectionEyebrow';
import { FeaturedTestimonialPanel } from '@/components/common/TestimonialSections';
import { GetStartedPanel } from '@/components/common/GetStartedPanel';
import styles from '@/styles/Sections.module.css';

export function generateStaticParams() {
  return TESTIMONIALS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = TESTIMONIALS.find((t) => t.slug === slug);
  if (!item) return { title: 'Client Story Not Found' };
  return {
    title: item.clientName,
    description: item.metaDescription,
  };
}

export default async function TestimonialDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = TESTIMONIALS.find((t) => t.slug === slug);
  if (!item) notFound();

  return (
    <SiteLayout showAdvisorStrip={true}>
      <section className={styles.sectionBanner}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.bannerSplitHero}>
              <div className={styles.bannerSplitText}>
                <SectionEyebrow number="(01)" label={item.position} />
                <h1 className="heading-style-h1">{item.clientName}</h1>
                <p className="text-size-large text-color-grey">{item.quote}</p>
              </div>
              <div className={styles.bannerSplitPhoto}>
                <img
                  src={item.photo}
                  alt={item.photoAlt}
                  className={styles.bannerImgCover}
                  style={{ objectPosition: 'top center' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturedTestimonialPanel
        eyebrowNumber="(02)"
        eyebrowLabel="Client stories"
        heading="What our clients say"
        initialSlug={item.slug}
      />

      <GetStartedPanel
        eyebrowNumber="(03)"
        heading="Open an account with us today"
        description="Set up in under ten minutes, with a named banker from day one."
        primaryCta={{ label: 'Open account', href: '/contact-v2' }}
        secondaryCta={{ label: 'Talk to an advisor', href: '/contact-v2' }}
      />
    </SiteLayout>
  );
}
