import type { Metadata } from 'next';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { SectionEyebrow } from '@/components/common/SectionEyebrow';
import styles from '@/styles/Sections.module.css';

export const metadata: Metadata = {
  title: 'Licenses',
  description:
    'Licensing details for the fonts, images, icons, logos and video used across Vaxmor.',
};

export default function LicensesPage() {
  return (
    <SiteLayout showAdvisorStrip={true}>
      <section className={styles.sectionBanner}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.bannerEditorialMeta}>
              <SectionEyebrow number="(01)" label="Template" />
            </div>
            <h1 className="heading-style-h1">Licenses</h1>
            <p className="text-size-regular text-color-grey" style={{ maxWidth: '34rem', marginTop: '1rem' }}>
              Licensing details for the fonts, images and icons used across Vaxmor, and where each one comes from.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.docsSection}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.docsCard}>
              <h2 className="heading-style-h2" style={{ marginBottom: '1.25rem' }}>Disclaimer</h2>
              <p className="text-size-regular text-color-darkmain" style={{ marginBottom: '1rem' }}>
                All graphical assets in this template are licensed for personal and commercial use. Check each individual license below before redistributing.
              </p>
              <p className="text-size-regular text-color-darkmain">
                Photos in this template, including the team and client portraits, are AI-generated with Lummi under the Lummi license. Client logos are placeholders from Logoipsum. Replace sample assets with approved production media prior to public launch.
              </p>
            </div>

            <div className={styles.docsCard}>
              <h2 className="heading-style-h2" style={{ marginBottom: '1.25rem' }}>Fonts</h2>
              <p className="text-size-regular text-color-darkmain">
                <a href="https://fonts.google.com/specimen/Inter" target="_blank" rel="noopener noreferrer">Inter</a>
              </p>
              <p className="text-size-regular text-color-darkmain">
                <a href="https://fonts.google.com/specimen/Geist+Mono" target="_blank" rel="noopener noreferrer">Geist Mono</a>
              </p>
            </div>

            <div className={styles.docsCard}>
              <h2 className="heading-style-h2" style={{ marginBottom: '1.25rem' }}>Images</h2>
              <p className="text-size-regular text-color-darkmain">
                <a href="https://www.lummi.ai/" target="_blank" rel="noopener noreferrer">
                  Lummi (AI-Generated Images, Including Team And Client Portraits)
                </a>
              </p>
            </div>

            <div className={styles.docsCard}>
              <h2 className="heading-style-h2" style={{ marginBottom: '1.25rem' }}>Icons</h2>
              <p className="text-size-regular text-color-darkmain">
                <a href="https://github.com/iconoir-icons/iconoir" target="_blank" rel="noopener noreferrer">
                  Iconoir (MIT License)
                </a>
              </p>
            </div>

            <div className={styles.docsCard}>
              <h2 className="heading-style-h2" style={{ marginBottom: '1.25rem' }}>Logos</h2>
              <p className="text-size-regular text-color-darkmain">
                <a href="https://logoipsum.com/" target="_blank" rel="noopener noreferrer">
                  Logoipsum (Placeholder Logos)
                </a>
              </p>
            </div>

            <div className={styles.docsCard}>
              <h2 className="heading-style-h2" style={{ marginBottom: '1.25rem' }}>Videos</h2>
              <p className="text-size-regular text-color-darkmain" style={{ marginBottom: '0.5rem' }}>
                YouTube Video
              </p>
              <p className="text-size-regular text-color-darkmain">
                <strong>How to create a slick video player lightbox similar to SpaceX</strong> by{' '}
                <strong>Webflow</strong> (youtube.com/@Webflow). Embedded through the YouTube player under the Standard YouTube License. Not hosted or redistributed locally.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
