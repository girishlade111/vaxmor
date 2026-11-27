import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/config/site';
import { FOOTER_COLUMNS } from '@/content/navigation';
import styles from './Layout.module.css';

export interface SiteFooterProps {
  showAdvisorStrip?: boolean;
}

export function SiteFooter({ showAdvisorStrip = false }: SiteFooterProps) {
  return (
    <footer className={styles.footerLight}>
      <div className="padding-global">
        <div className="container-large">
          {showAdvisorStrip && (
            <div className={styles.footerCta}>
              <div className={styles.footerCtaText}>
                <h2 className="heading-style-h4">Talk to an advisor</h2>
                <p className="text-size-regular text-color-grey">
                  A named banker replies within one business day.
                </p>
              </div>
              <Link href="/contact-v1" className="button is-small">
                Book a call
              </Link>
            </div>
          )}

          <div className={styles.footerMain}>
            <div className={styles.footerBrand}>
              <Link href="/" className={styles.footerLogoLink}>
                <img
                  src={SITE_CONFIG.logo.svgPath}
                  alt="Vaxmor logo"
                  className={styles.footerLogo}
                  width={34}
                  height={34}
                />
                <span className={styles.navLogoText}>Vaxmor</span>
              </Link>
              <p className="text-size-regular text-color-grey">
                {SITE_CONFIG.tagline}
              </p>
              <div className={styles.footerSocials} aria-label="Social links">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className={styles.footerSocial}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className={styles.footerSocial}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <circle cx="12" cy="12" r="4" />
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <path d="M17.5 6.51l.01-.011" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="https://www.pinterest.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pinterest"
                  className={styles.footerSocial}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M8 14.5C5 10 9.462 6.5 12.5 6.5 15.538 6.5 18 8.154 18 12c0 3.038-2 5-4 5s-3-2-2.5-5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 10l-3 11.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </a>
              </div>
            </div>

            {FOOTER_COLUMNS.map((col) => (
              <div key={col.heading} className={styles.footerCol}>
                <p className="text-size-eyebrow text-color-secondary">
                  {col.heading}
                </p>
                {col.links.map((item) => (
                  <Link key={item.label} href={item.href} className={styles.footerLink}>
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>

          <div className={styles.footerBottom}>
            <div className={styles.footerDisclosure}>
              <p className="text-size-small text-color-grey">
                {SITE_CONFIG.disclosure}
              </p>
            </div>
            <div className={styles.footerCopyright}>
              <p className="text-size-small text-color-grey">
                {SITE_CONFIG.copyright} Powered by{' '}
                <a
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerAttribution}
                >
                  Next.js
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
