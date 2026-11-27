import React from 'react';
import { PARTNER_LOGOS } from '@/content/home';
import styles from '@/styles/Sections.module.css';

export function PartnerLogoStrip({
  label = 'Working alongside leading financial partners',
}: {
  label?: string;
}) {
  return (
    <section className={styles.sectionTrustBar}>
      <div className="padding-global">
        <div className="container-large">
          <div className={styles.trustBarLayout}>
            <p className={`text-size-small text-color-grey ${styles.trustBarLabel}`}>
              {label}
            </p>
            <span className={styles.trustBarDivider} aria-hidden="true" />
            <div className={styles.trustBarLogos}>
              <div className={styles.trustBarTrack}>
                {[0, 1].map((dup) => (
                  <div
                    key={dup}
                    className={styles.trustBarGroup}
                    aria-hidden={dup === 1 ? 'true' : undefined}
                  >
                    {PARTNER_LOGOS.map((logo) => (
                      <img
                        key={`${dup}-${logo.alt}`}
                        src={logo.src}
                        alt={dup === 0 ? logo.alt : ''}
                        className={styles.trustBarLogo}
                        height={28}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
