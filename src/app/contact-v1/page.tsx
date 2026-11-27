import type { Metadata } from 'next';
import { CONTACT_VARIANTS } from '@/content/pages';
import { FAQS } from '@/content/faqs';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { SectionEyebrow } from '@/components/common/SectionEyebrow';
import { ContactForm } from '@/components/common/ContactForm';
import {
  BranchGrid,
  ContactInformationCard,
  StaticOfficeMap,
} from '@/components/contact/ContactSections';
import { FAQSection } from '@/components/common/FAQSection';
import styles from '@/styles/Sections.module.css';

export const metadata: Metadata = {
  title: 'Contact V1',
  description:
    'Book a call with an advisor. A short enquiry form paired with branch details, opening hours and a reply within one business day.',
};

export default function ContactV1Page() {
  const v1 = CONTACT_VARIANTS.v1;

  return (
    <SiteLayout showAdvisorStrip={false}>
      {/* 01. Asymmetric Hero */}
      <section className={styles.sectionBanner}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.bannerEditorialMeta}>
              <SectionEyebrow number={v1.eyebrowNumber} label={v1.eyebrowLabel} />
            </div>
            <div className={styles.bannerEditorialGrid}>
              <div className={styles.bannerEditorialHeading}>
                <h1 className="heading-style-h1">{v1.heading}</h1>
              </div>
              <div className={styles.bannerEditorialDesc}>
                <p className="text-size-regular text-color-grey">{v1.description}</p>
              </div>
            </div>
            <div className={styles.bannerEditorialImageRow}>
              <div className={styles.bannerEditorialSmall}>
                <img
                  src={v1.smallImage}
                  alt={v1.smallImageAlt}
                  className={styles.bannerImgCover}
                />
              </div>
              <div className={styles.bannerEditorialLarge}>
                <img
                  src={v1.largeImage}
                  alt={v1.largeImageAlt}
                  className={styles.bannerImgCover}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. Form & Information Split + Grayscale Map */}
      <section className={styles.sectionContact}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.contactTwoCol}>
              <ContactForm heading={v1.formHeading} />
              <ContactInformationCard heading={v1.infoHeading} />
            </div>
            <StaticOfficeMap />
          </div>
        </div>
      </section>

      {/* 03. Four Branches */}
      <BranchGrid />

      {/* 04. FAQ */}
      <FAQSection data={FAQS.contactV1} />
    </SiteLayout>
  );
}
