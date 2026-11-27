import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/site';
import { CONTACT_VARIANTS } from '@/content/pages';
import { FAQS } from '@/content/faqs';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { SectionEyebrow } from '@/components/common/SectionEyebrow';
import { ContactForm } from '@/components/common/ContactForm';
import { StaticOfficeMap } from '@/components/contact/ContactSections';
import { TeamHorizontalGrid } from '@/components/team/TeamSections';
import { FAQSection } from '@/components/common/FAQSection';
import { MailIcon, PhoneIcon, PinIcon } from '@/components/common/Icons';
import styles from '@/styles/Sections.module.css';

export const metadata: Metadata = {
  title: 'Contact V2',
  description:
    'The second contact layout in Vaxmor, with the support form set beside full branch, phone and client support details.',
};

export default function ContactV2Page() {
  const v2 = CONTACT_VARIANTS.v2;

  return (
    <SiteLayout showAdvisorStrip={false}>
      {/* 01. Split Support Hero */}
      <section className={styles.sectionBannerBleed}>
        <div className="padding-global" style={{ width: '100%' }}>
          <div className="container-large">
            <div className={styles.bannerBleedText}>
              <SectionEyebrow number={v2.eyebrowNumber} label={v2.eyebrowLabel} />
              <h1 className="heading-style-h1">{v2.heading}</h1>
              <p className="text-size-regular text-color-grey">{v2.description}</p>
            </div>
          </div>
        </div>
        <div className={styles.bannerBleedPhotoWrap}>
          <img
            src={v2.heroImage}
            alt={v2.heroImageAlt}
            className={styles.bannerImgCover}
          />
        </div>
      </section>

      {/* 02. Support Form, 3 Info Cards, Map */}
      <section className={styles.sectionContact}>
        <div className="padding-global">
          <div className="container-large">
            <ContactForm heading={v2.formHeading} />

            <div className={styles.contactThreeColCards}>
              <div className={styles.contactOfficeCard}>
                <span className={styles.contactIcon}>
                  <PinIcon />
                </span>
                <h2 className="heading-style-h5 text-color-secondary">Office</h2>
                <p className="text-size-small text-color-grey">
                  {SITE_CONFIG.contact.officeAddress}
                </p>
              </div>

              <div className={styles.contactOfficeCard}>
                <span className={styles.contactIcon}>
                  <PhoneIcon />
                </span>
                <h2 className="heading-style-h5 text-color-secondary">Phone</h2>
                <p className="text-size-small text-color-grey">
                  {SITE_CONFIG.contact.phoneDisplay}
                </p>
              </div>

              <div className={styles.contactOfficeCard}>
                <span className={styles.contactIcon}>
                  <MailIcon />
                </span>
                <h2 className="heading-style-h5 text-color-secondary">Email</h2>
                <p className="text-size-small text-color-grey">
                  {SITE_CONFIG.contact.email}
                </p>
              </div>
            </div>

            <StaticOfficeMap />
          </div>
        </div>
      </section>

      {/* 03. Advisor Selection Grid */}
      <TeamHorizontalGrid
        eyebrowNumber="(03)"
        eyebrowLabel="Our team"
        heading="Choose who you would like to speak with"
      />

      {/* 04. Support FAQ */}
      <FAQSection data={FAQS.contactV2} />
    </SiteLayout>
  );
}
