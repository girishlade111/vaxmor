'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE_CONFIG } from '@/config/site';
import { PAGES_MEGA_MENU, SERVICES_MEGA_MENU } from '@/content/navigation';
import {
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  GenericIcon,
  PhoneIcon,
} from '@/components/common/Icons';
import styles from './Layout.module.css';

type OpenMenu = 'services' | 'pages' | null;

export function MarketingHeader() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);
  const [servicesTab, setServicesTab] = useState<string>('individuals');
  const [pagesTab, setPagesTab] = useState<string>('main-pages');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<OpenMenu>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileAccordion(null);
  }, [pathname]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    }
    function handleClickOutside(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener('keydown', handleKey);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const activeServicesGroup =
    SERVICES_MEGA_MENU.find((t) => t.id === servicesTab) || SERVICES_MEGA_MENU[0];
  const activePagesGroup =
    PAGES_MEGA_MENU.find((t) => t.id === pagesTab) || PAGES_MEGA_MENU[0];

  return (
    <header ref={headerRef} className={styles.nav}>
      <div className="padding-global">
        <div className="container-large">
          <div className={styles.navWrap}>
            <Link href="/" className={styles.navBrand}>
              <img
                src={SITE_CONFIG.logo.svgPath}
                alt="Vaxmor logo"
                className={styles.navLogo}
                width={34}
                height={34}
              />
              <span className={styles.navLogoText}>{SITE_CONFIG.name}</span>
            </Link>

            <nav className={styles.desktopNav} aria-label="Main navigation">
              <Link
                href="/"
                className={`${styles.navItem} ${pathname === '/' ? styles.navItemActive : ''}`.trim()}
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className={`${styles.navItem} ${pathname === '/about-us' ? styles.navItemActive : ''}`.trim()}
              >
                About Us
              </Link>

              <button
                type="button"
                className={`${styles.navItem} ${openMenu === 'services' ? styles.navItemActive : ''}`.trim()}
                aria-expanded={openMenu === 'services'}
                aria-controls="services-mega-menu"
                onClick={() =>
                  setOpenMenu((prev) => (prev === 'services' ? null : 'services'))
                }
              >
                <span>Services</span>
                <ChevronDownIcon />
              </button>

              <Link
                href="/blog"
                className={`${styles.navItem} ${pathname.startsWith('/blog') ? styles.navItemActive : ''}`.trim()}
              >
                Insights
              </Link>

              <button
                type="button"
                className={`${styles.navItem} ${openMenu === 'pages' ? styles.navItemActive : ''}`.trim()}
                aria-expanded={openMenu === 'pages'}
                aria-controls="pages-mega-menu"
                onClick={() =>
                  setOpenMenu((prev) => (prev === 'pages' ? null : 'pages'))
                }
              >
                <span>Pages</span>
                <ChevronDownIcon />
              </button>

              <Link
                href="/pricing"
                className={`${styles.navItem} ${pathname === '/pricing' ? styles.navItemActive : ''}`.trim()}
              >
                Pricing
              </Link>
              <Link
                href="/contact-v1"
                className={`${styles.navItem} ${pathname.startsWith('/contact') ? styles.navItemActive : ''}`.trim()}
              >
                Contact
              </Link>
            </nav>

            <a href={SITE_CONFIG.contact.phoneHref} className={styles.navPhone}>
              <PhoneIcon />
              <span>{SITE_CONFIG.contact.phoneDisplay}</span>
            </a>

            <button
              type="button"
              className={styles.hamburger}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
            </button>
          </div>

          {openMenu === 'services' && (
            <div
              id="services-mega-menu"
              className={styles.megaPanel}
              role="region"
              aria-label="Services menu"
            >
              <div className={styles.megaTabs}>
                <div className={styles.megaTabsSidebar} role="tablist" aria-label="Client segments">
                  {SERVICES_MEGA_MENU.map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={servicesTab === tab.id}
                      className={`${styles.megaTabBtn} ${servicesTab === tab.id ? styles.megaTabBtnActive : ''}`.trim()}
                      onClick={() => setServicesTab(tab.id)}
                    >
                      <span>{tab.label}</span>
                      <ChevronRightIcon />
                    </button>
                  ))}
                </div>
                <div className={styles.megaTabContent} role="tabpanel">
                  <div className={styles.megaGridTwo}>
                    {activeServicesGroup.items.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className={styles.megaItem}
                        onClick={() => setOpenMenu(null)}
                      >
                        <div className={styles.megaIconBox}>
                          <GenericIcon iconKey={item.iconKey} />
                        </div>
                        <div>
                          <div className={styles.megaItemTitle}>{item.title}</div>
                          <div className={styles.megaItemDesc}>{item.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className={styles.megaFooter}>
                    <span>Compare plans from $0 a month</span>
                    <Link
                      href="/pricing"
                      className="button is-link"
                      onClick={() => setOpenMenu(null)}
                    >
                      <span>View pricing</span>
                      <ArrowRightIcon />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {openMenu === 'pages' && (
            <div
              id="pages-mega-menu"
              className={styles.megaPanel}
              role="region"
              aria-label="Pages menu"
            >
              <div className={styles.megaTabs}>
                <div className={styles.megaTabsSidebar} role="tablist" aria-label="Page groups">
                  {PAGES_MEGA_MENU.map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={pagesTab === tab.id}
                      className={`${styles.megaTabBtn} ${pagesTab === tab.id ? styles.megaTabBtnActive : ''}`.trim()}
                      onClick={() => setPagesTab(tab.id)}
                    >
                      <span>{tab.label}</span>
                      <ChevronRightIcon />
                    </button>
                  ))}
                </div>
                <div className={styles.megaTabContent} role="tabpanel">
                  <div className={styles.megaGridThree}>
                    {activePagesGroup.items.map((item) => (
                      <Link
                        key={item.href + item.title}
                        href={item.href}
                        className={styles.megaItem}
                        onClick={() => setOpenMenu(null)}
                      >
                        <div className={styles.megaIconBox}>
                          <GenericIcon iconKey={item.iconKey} />
                        </div>
                        <div>
                          <div className={styles.megaItemTitle}>{item.title}</div>
                          <div className={styles.megaItemDesc}>{item.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {mobileOpen && (
        <div className={styles.mobileMenu} role="region" aria-label="Mobile navigation">
          <div className={styles.mobileNavList}>
            <Link href="/" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <Link href="/about-us" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>
              About Us
            </Link>

            <button
              type="button"
              className={styles.mobileNavLink}
              aria-expanded={mobileAccordion === 'services'}
              onClick={() =>
                setMobileAccordion((prev) => (prev === 'services' ? null : 'services'))
              }
            >
              <span>Services</span>
              <ChevronDownIcon />
            </button>
            {mobileAccordion === 'services' && (
              <div className={styles.mobileGroup}>
                {SERVICES_MEGA_MENU.map((grp) => (
                  <div key={grp.id}>
                    <div className={styles.mobileGroupLabel}>{grp.label}</div>
                    {grp.items.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className={styles.mobileSubLink}
                        style={{ display: 'block' }}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}

            <Link href="/blog" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>
              Insights
            </Link>

            <button
              type="button"
              className={styles.mobileNavLink}
              aria-expanded={mobileAccordion === 'pages'}
              onClick={() =>
                setMobileAccordion((prev) => (prev === 'pages' ? null : 'pages'))
              }
            >
              <span>Pages</span>
              <ChevronDownIcon />
            </button>
            {mobileAccordion === 'pages' && (
              <div className={styles.mobileGroup}>
                {PAGES_MEGA_MENU.map((grp) => (
                  <div key={grp.id}>
                    <div className={styles.mobileGroupLabel}>{grp.label}</div>
                    {grp.items.map((item) => (
                      <Link
                        key={item.href + item.title}
                        href={item.href}
                        className={styles.mobileSubLink}
                        style={{ display: 'block' }}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}

            <Link href="/pricing" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>
              Pricing
            </Link>
            <Link href="/contact-v1" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
