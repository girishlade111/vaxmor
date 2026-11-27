import type { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_HERO_DATA } from '@/content/pages';
import { ARTICLES } from '@/content/articles';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { SectionEyebrow } from '@/components/common/SectionEyebrow';
import { GetStartedPanel } from '@/components/common/GetStartedPanel';
import { CalendarIcon } from '@/components/common/Icons';
import styles from '@/styles/Sections.module.css';

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Market insights from Vaxmor advisors on investing, saving, retirement, interest rates and business finance, written in plain language for everyday clients.',
};

export default function BlogListingPage() {
  return (
    <SiteLayout showAdvisorStrip={true}>
      {/* 01. Editorial Hero */}
      <section className={styles.sectionBanner}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.bannerEditorialMeta}>
              <SectionEyebrow
                number={BLOG_HERO_DATA.eyebrowNumber}
                label={BLOG_HERO_DATA.eyebrowLabel}
              />
            </div>

            <div className={styles.bannerEditorialGrid}>
              <div className={styles.bannerEditorialHeading}>
                <h1 className="heading-style-h1">{BLOG_HERO_DATA.heading}</h1>
              </div>
              <div className={styles.bannerEditorialDesc}>
                <p className="text-size-regular text-color-grey">
                  {BLOG_HERO_DATA.description}
                </p>
              </div>
            </div>

            <div className={styles.bannerStackImage}>
              <img
                src={BLOG_HERO_DATA.image}
                alt={BLOG_HERO_DATA.imageAlt}
                className={styles.bannerImgCover}
              />
            </div>

            <div className={styles.bannerMetaStrip}>
              <span className="text-size-eyebrow text-color-grey">EST. 2001</span>
              <span className="text-size-eyebrow text-color-grey">
                LONDON, UNITED KINGDOM
              </span>
              <span className="text-size-eyebrow text-color-grey">
                $4.2B UNDER MANAGEMENT
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 02. Six Article Photo-Overlay Cards */}
      <section className={styles.sectionBlogGrid}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.blogGridThree}>
              {ARTICLES.map((art) => (
                <Link
                  key={art.id}
                  href={`/blog/${art.slug}`}
                  className={styles.articleImageCard}
                >
                  <img
                    src={art.coverImage}
                    alt={art.title}
                    className={styles.articleCardBg}
                  />
                  <div className={styles.articleCardScrim} aria-hidden="true" />
                  <div className={styles.articleCardBody}>
                    <span className={styles.articleCardCat}>{art.category}</span>
                    <h2 className="heading-style-h5 text-color-white">
                      {art.title}
                    </h2>
                    <span className={styles.articleCardDate}>
                      <CalendarIcon />
                      <span>{art.publishedAt}</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 03. Get Started */}
      <GetStartedPanel
        eyebrowNumber="(06)"
        heading="Open an account with us today"
        description="Set up in under ten minutes, with a named banker from day one."
        primaryCta={{ label: 'Open account', href: '/contact-v2' }}
        secondaryCta={{ label: 'Talk to an advisor', href: '/contact-v2' }}
      />
    </SiteLayout>
  );
}
