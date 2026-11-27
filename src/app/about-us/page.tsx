import type { Metadata } from 'next';
import { ABOUT_PAGE_DATA } from '@/content/pages';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { SectionEyebrow } from '@/components/common/SectionEyebrow';
import { VideoLightbox } from '@/components/about/VideoLightbox';
import { RollingStatistic } from '@/components/common/RollingStatistic';
import { TeamPortraitGrid } from '@/components/team/TeamSections';
import { CompactTestimonialCarousel } from '@/components/common/TestimonialSections';
import { GetStartedPanel } from '@/components/common/GetStartedPanel';
import styles from '@/styles/Sections.module.css';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Meet the team behind Vaxmor, with the founding story, advisors, values and the figures behind them.',
};

export default function AboutUsPage() {
  const { hero, editorial, founder, facts, timeline } = ABOUT_PAGE_DATA;

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
                <img
                  src={hero.smallImage}
                  alt={hero.smallImageAlt}
                  className={styles.bannerImgCover}
                />
              </div>
              <div className={styles.bannerEditorialLarge}>
                <img
                  src={hero.largeImage}
                  alt={hero.largeImageAlt}
                  className={styles.bannerImgCover}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. Editorial Introduction & Expertise */}
      <section className={styles.sectionAboutEditorial}>
        <div className="padding-global">
          <div className="container-large">
            <div style={{ marginBottom: '2rem' }}>
              <SectionEyebrow
                number={editorial.eyebrowNumber}
                label={editorial.eyebrowLabel}
              />
            </div>

            <div className={styles.aboutEditorialGrid}>
              <div>
                <h2 className="heading-style-h3">{editorial.statement}</h2>
                <p className="text-size-regular text-color-grey" style={{ marginTop: '1.5rem' }}>
                  {editorial.subcopy}
                </p>
                <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {editorial.bullets.map((b) => (
                    <p key={b} className="text-size-small text-color-grey">
                      {b}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-size-eyebrow text-color-grey">
                  {editorial.expertiseHeading}
                </div>
                <div className={styles.expertiseList}>
                  {editorial.expertise.map((item) => (
                    <div key={item} className={styles.expertiseItem}>
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-size-small text-color-grey" style={{ marginTop: '1.25rem' }}>
                  {editorial.footnote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. Founder Section & Video Lightbox Trigger */}
      <section className={styles.sectionFounder}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.founderSplit}>
              <div className={styles.founderCol}>
                <SectionEyebrow
                  number={founder.eyebrowNumber}
                  label={founder.eyebrowLabel}
                />
                <h2 className="heading-style-h2">{founder.heading}</h2>
                <p className="text-size-regular text-color-grey">{founder.copy}</p>
                <div className={styles.founderSig}>
                  <img
                    src={founder.avatar}
                    alt={founder.name}
                    className={styles.founderAvatar}
                    width={56}
                    height={56}
                  />
                  <div>
                    <div className="text-size-medium text-weight-medium text-color-darkmain">
                      {founder.name}
                    </div>
                    <div className="text-size-small text-color-grey">
                      {founder.location}
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.founderMedia}>
                <img
                  src={founder.handshakeImage}
                  alt={founder.handshakeAlt}
                  className={styles.bannerImgCover}
                />
              </div>
            </div>

            <VideoLightbox
              title={founder.videoTriggerTitle}
              description={founder.videoTriggerCopy}
              youtubeId={founder.videoYoutubeId}
              disclaimer={founder.videoDisclaimer}
            />
          </div>
        </div>
      </section>

      {/* 04. Large 62% Rolling Statistic */}
      <section className={styles.sectionFacts}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.factsWrap}>
              <SectionEyebrow
                number={facts.eyebrowNumber}
                label={facts.eyebrowLabel}
              />
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
            </div>
          </div>
        </div>
      </section>

      {/* 05. Company History Timeline */}
      <section className={styles.sectionTimeline}>
        <div className="padding-global">
          <div className="container-large">
            <div style={{ marginBottom: '3.5rem', maxWidth: '42rem' }}>
              <SectionEyebrow
                number={timeline.eyebrowNumber}
                label={timeline.eyebrowLabel}
              />
              <h2 className="heading-style-h2" style={{ marginTop: '1rem' }}>
                {timeline.heading}
              </h2>
            </div>

            <div className={styles.timelineGrid}>
              <div className={styles.timelineImgWrap}>
                <img
                  src={timeline.image}
                  alt={timeline.imageAlt}
                  className={styles.bannerImgCover}
                />
              </div>

              <div className={styles.timelineList}>
                {timeline.milestones.map((m) => (
                  <div key={m.number} className={styles.timelineRow}>
                    <span className={styles.timelineNumTile}>{m.number}</span>
                    <div>
                      <h3 className="heading-style-h5 text-color-darkmain">
                        {m.title}
                      </h3>
                      <p className="text-size-regular text-color-grey" style={{ marginTop: '0.4rem' }}>
                        {m.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06. Six Visible Team Portraits */}
      <TeamPortraitGrid
        eyebrowNumber="(06)"
        eyebrowLabel="Our team"
        heading="The people who run Vaxmor"
        columns={3}
      />

      {/* 07. Compact Client Testimonials */}
      <CompactTestimonialCarousel
        eyebrowNumber="(07)"
        eyebrowLabel="Clients"
        heading="Why clients have stayed with us for years"
      />

      {/* 08. Get Started */}
      <GetStartedPanel
        eyebrowNumber="(08)"
        heading="Become part of the Vaxmor story"
        description="Speak with an advisor about your accounts, investments or long-term plan."
        primaryCta={{ label: 'Open account', href: '/contact-v1' }}
        secondaryCta={{ label: 'Talk to an advisor', href: '/contact-v2' }}
      />
    </SiteLayout>
  );
}
