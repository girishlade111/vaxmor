import React from 'react';
import { UtilityBar } from './UtilityBar';
import { MarketingHeader } from './MarketingHeader';
import { SiteFooter } from './SiteFooter';

export interface SiteLayoutProps {
  children: React.ReactNode;
  showAdvisorStrip?: boolean;
}

export function SiteLayout({ children, showAdvisorStrip = false }: SiteLayoutProps) {
  return (
    <div className="page-wrapper">
      <div role="region" aria-label="Office notice and skip navigation">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <UtilityBar />
      </div>
      <MarketingHeader />
      <main id="main-content" className="main-wrapper">
        {children}
      </main>
      <SiteFooter showAdvisorStrip={showAdvisorStrip} />
    </div>
  );
}
