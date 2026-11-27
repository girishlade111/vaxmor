import type { Metadata } from 'next';
import { APP_MODE, SITE_CONFIG } from '@/config/site';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Vaxmor - Banking & Financial Advisory',
    template: '%s - Vaxmor',
  },
  description:
    'Independent banking and investment advice for families, founders and institutions since 2001.',
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  robots:
    APP_MODE === 'reference'
      ? { index: false, follow: false }
      : { index: true, follow: true },
  icons: {
    icon: SITE_CONFIG.logo.favicon,
  },
  openGraph: {
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.logo.ogImage, width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body>{children}</body>
    </html>
  );
}
