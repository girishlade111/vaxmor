import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ARTICLES } from '@/content/articles';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { SectionEyebrow } from '@/components/common/SectionEyebrow';
import { ArrowLeftIcon } from '@/components/common/Icons';
import styles from '@/styles/Sections.module.css';

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: 'Article Not Found' };
  return {
    title: article.title,
    description: article.metaDescription,
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = article.relatedSlugs
    .map((s) => ARTICLES.find((a) => a.slug === s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  return (
    <SiteLayout showAdvisorStrip={true}>
      <article className={styles.sectionBanner}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.blogDetailHero}>
              <div className={styles.blogDetailHeroContent}>
                <span className={styles.blogDetailTag}>{article.category}</span>
                <h1 className="heading-style-h1">{article.title}</h1>
              </div>
              <div className={styles.blogDetailHeroImgWrap}>
                <img
                  src={article.heroImage}
                  alt={article.title}
                  className={styles.bannerImgCover}
                />
              </div>
            </div>

            <div className={styles.blogDetailBody}>
              <aside className={styles.blogDetailAside}>
                <div className={styles.blogDetailSummary}>
                  <span className={`text-size-small text-weight-medium ${styles.blogDetailLabel}`}>
                    In short
                  </span>
                  <p className="text-size-regular text-color-darkmain">
                    {article.summary}
                  </p>
                </div>

                <div className={styles.blogDetailCta}>
                  <h2 className="heading-style-h5 text-color-darkmain">
                    {article.advisorCta.title}
                  </h2>
                  <p className="text-size-small text-color-grey">
                    {article.advisorCta.description}
                  </p>
                  <Link href={article.advisorCta.href} className="button is-small">
                    Book a call
                  </Link>
                </div>

                <Link href="/blog" className={styles.blogDetailBack}>
                  <ArrowLeftIcon />
                  <span className="text-size-small text-weight-medium">
                    Back to all insights
                  </span>
                </Link>
              </aside>

              <div className={styles.blogDetailRich}>
                {article.bodyBlocks.map((block, idx) =>
                  block.tag === 'h2' ? (
                    <h2 key={idx}>{block.text}</h2>
                  ) : block.tag === 'h3' ? (
                    <h3 key={idx} className="heading-style-h5 text-color-darkmain">
                      {block.text}
                    </h3>
                  ) : (
                    <p key={idx}>{block.text}</p>
                  )
                )}
                <p className="text-size-small text-style-italic text-color-grey">
                  {article.disclaimer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Insights */}
      <section className={styles.sectionNews}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.newsHeader}>
              <div className={styles.newsHeadText}>
                <SectionEyebrow number="(02)" label="Insights" />
                <h2 className="heading-style-h2">Market notes from our advisors</h2>
              </div>
              <Link href="/blog" className="button">
                Read all insights
              </Link>
            </div>

            <div className={styles.newsList}>
              {related.map((art) => (
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
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
