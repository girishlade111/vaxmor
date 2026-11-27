import type { Metadata } from 'next';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { SectionEyebrow } from '@/components/common/SectionEyebrow';
import styles from '@/styles/Sections.module.css';

export const metadata: Metadata = {
  title: 'Changelog',
  description:
    'Release notes for Vaxmor, listing what changed in each version, when it shipped and why it matters.',
};

export default function ChangelogPage() {
  return (
    <SiteLayout showAdvisorStrip={true}>
      <section className={styles.sectionBanner}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.bannerEditorialMeta}>
              <SectionEyebrow number="(01)" label="Template" />
            </div>
            <h1 className="heading-style-h1">Changelog</h1>
            <p className="text-size-regular text-color-grey" style={{ maxWidth: '34rem', marginTop: '1rem' }}>
              Every update to Vaxmor, listed by version with the date it shipped and what changed.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.docsSection}>
        <div className="padding-global">
          <div className="container-large" style={{ maxWidth: '52rem' }}>
            <div style={{ paddingTop: '2.5rem', borderTop: '1px solid var(--color-dark-grey)' }}>
              <h2 className="heading-style-h5 text-color-darkmain">
                Vaxmor – Webflow HTML Website Template
              </h2>
              <h3 className="text-size-small text-weight-medium text-color-darkmain" style={{ marginTop: '2rem', marginBottom: '0.75rem' }}>
                Release template
              </h3>
              <p className="text-size-regular text-color-grey">
                Vaxmor is actively maintained. Every release is documented below so you always know what changed, when, and why. Updates are grouped by version with a release date and a short summary under Added, Improved, and Fixed. If you purchased Vaxmor, you&apos;re entitled to all future updates within this template — just re-download from your Webflow Marketplace account whenever a new version ships. Have a request or found something that needs attention? Reach out through the support channel listed on the template page and it&apos;ll be reviewed for an upcoming release.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
