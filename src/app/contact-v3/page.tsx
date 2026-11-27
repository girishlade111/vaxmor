import type { Metadata } from 'next';
import { CONTACT_VARIANTS } from '@/content/pages';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { SectionEyebrow } from '@/components/common/SectionEyebrow';
import { PartnerLogoStrip } from '@/components/common/PartnerLogoStrip';
import { BranchGrid, ContactSplitCard } from '@/components/contact/ContactSections';
import styles from '@/styles/Sections.module.css';

export const metadata: Metadata = {
  title: 'Contact V3',
  description:
    'The third contact layout in Vaxmor, pairing an appointment-request form with office locations, business hours and direct contacts.',
};

export default function ContactV3Page() {
  const v3 = CONTACT_VARIANTS.v3;

  return (
    <SiteLayout showAdvisorStrip={false}>
      {/* 01. Stacked Editorial Hero */}
      <section className={styles.sectionBanner}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.bannerEditorialMeta}>
              <SectionEyebrow number={v3.eyebrowNumber} label={v3.eyebrowLabel} />
            </div>
            <div className={styles.bannerEditorialGrid}>
              <div className={styles.bannerEditorialHeading}>
                <h1 className="heading-style-h1">{v3.heading}</h1>
              </div>
              <div className={styles.bannerEditorialDesc}>
                <p className="text-size-regular text-color-grey">{v3.description}</p>
              </div>
            </div>

            <div className={styles.bannerStackImage}>
              <img
                src={v3.heroImage}
                alt={v3.heroImageAlt}
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

      {/* 02. Dark/Light Split Appointment Card */}
      <section className={styles.sectionContact}>
        <div className="padding-global">
          <div className="container-large">
            <ContactSplitCard
              eyebrowNumber={v3.infoEyebrow}
              infoTitle={v3.infoTitle}
              infoDescription={v3.infoDescription}
              formHeading={v3.formHeading}
            />
          </div>
        </div>
      </section>

      {/* 03. Branches */}
      <BranchGrid />

      {/* 04. Partner Strip */}
      <PartnerLogoStrip label="Trusted by 12,000+ clients and leading financial partners" />
    </SiteLayout>
  );
}
