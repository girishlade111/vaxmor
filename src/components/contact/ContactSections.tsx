import React from 'react';
import { SITE_CONFIG } from '@/config/site';
import { BRANCHES } from '@/content/branches';
import { SectionEyebrow } from '@/components/common/SectionEyebrow';
import { ContactForm } from '@/components/common/ContactForm';
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from '@/components/common/Icons';
import styles from '@/styles/Sections.module.css';

export function ContactInformationCard({
  heading = 'Speak with an advisor',
}: {
  heading?: string;
}) {
  const rows = [
    { label: 'Office', value: SITE_CONFIG.contact.officeAddress, icon: <PinIcon /> },
    { label: 'Phone', value: SITE_CONFIG.contact.phoneDisplay, icon: <PhoneIcon /> },
    { label: 'Email', value: SITE_CONFIG.contact.email, icon: <MailIcon /> },
    { label: 'Hours', value: SITE_CONFIG.contact.hours, icon: <ClockIcon /> },
  ];

  return (
    <div className={styles.contactCard}>
      <h2 className="heading-style-h4" style={{ marginBottom: '0.5rem' }}>
        {heading}
      </h2>
      <div>
        {rows.map((r) => (
          <div key={r.label} className={styles.contactInfoRow}>
            <span className={styles.contactIcon}>{r.icon}</span>
            <div>
              <div className={styles.contactInfoKey}>{r.label}</div>
              <div className="text-size-small text-color-darkmain">{r.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function StaticOfficeMap() {
  return (
    <div className={styles.contactMapWrap}>
      <img
        src={SITE_CONFIG.contact.mapImage}
        alt="Map showing Vaxmor London office near King William Street"
        className={styles.contactMapImg}
      />
    </div>
  );
}

export function BranchGrid({
  eyebrowNumber = '(03)',
  eyebrowLabel = 'Our branches',
  heading = 'Visit us in person',
}: {
  eyebrowNumber?: string;
  eyebrowLabel?: string;
  heading?: string;
}) {
  return (
    <section className={styles.sectionLocations}>
      <div className="padding-global">
        <div className="container-large">
          <div className={styles.locationHead}>
            <SectionEyebrow number={eyebrowNumber} label={eyebrowLabel} />
            <h2 className="heading-style-h2">{heading}</h2>
          </div>

          <div className={styles.locationCardGrid}>
            {BRANCHES.map((branch) => (
              <div key={branch.id} className={styles.locationCard}>
                <img
                  src={branch.image}
                  alt={`${branch.city} branch building`}
                  className={styles.locationBgImg}
                />
                <div className={styles.locationOverlay}>
                  <h3 className="heading-style-h4 text-color-white">{branch.city}</h3>
                  <p className="text-size-small text-color-darkgrey">{branch.address}</p>
                  <div className={styles.locationMetaRow}>
                    <PhoneIcon />
                    <span className="text-size-small text-color-white">{branch.phone}</span>
                  </div>
                  <p className="text-size-tiny text-color-darkgrey">{branch.openingHours}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSplitCard({
  eyebrowNumber,
  infoTitle,
  infoDescription,
  formHeading,
}: {
  eyebrowNumber: string;
  infoTitle: string;
  infoDescription: string;
  formHeading: string;
}) {
  const rows = [
    { label: 'Office', value: SITE_CONFIG.contact.officeAddress },
    { label: 'Phone', value: SITE_CONFIG.contact.phoneDisplay },
    { label: 'Email', value: SITE_CONFIG.contact.email },
    { label: 'Hours', value: SITE_CONFIG.contact.hoursShort },
  ];

  return (
    <div className={styles.contactSplitCard}>
      <div className={styles.contactSplitLeft}>
        <div>
          <SectionEyebrow number={eyebrowNumber} label="Contact" onDark />
          <h2 className="heading-style-h4 text-color-white" style={{ marginTop: '1rem' }}>
            {infoTitle}
          </h2>
          <p className="text-size-small text-color-darkgrey" style={{ marginTop: '0.5rem' }}>
            {infoDescription}
          </p>
        </div>

        <div className={styles.contactSplitInfoList}>
          {rows.map((r) => (
            <div key={r.label} className={styles.contactSplitInfoRow}>
              <span className="text-size-tiny text-color-darkgrey">{r.label}</span>
              <span className="text-size-small text-color-white">{r.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.contactSplitRight}>
        <ContactForm heading={formHeading} />
      </div>
    </div>
  );
}
