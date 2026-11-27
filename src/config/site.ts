export type AppMode = 'reference' | 'production';

export const APP_MODE: AppMode =
  process.env.NEXT_PUBLIC_APP_MODE === 'production' ? 'production' : 'reference';

export const SITE_CONFIG = {
  name: 'Vaxmor',
  tagline:
    'Independent banking and investment advice for families, founders and institutions since 2001.',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  logo: {
    svgPath: '/assets/brand/6af96ebc6cca54008f8adfb3_vaxmor-dark.svg',
    ogImage: '/assets/brand/6b04fd8f3a90751f1ab2b9ae_vaxmor-og-image.jpg',
    favicon: '/assets/brand/6afd067d479b410eb1a73176_vaxmor-dark.png',
  },
  utilityBar: {
    leftText: 'Consultations and site visits by appointment',
    rightText: 'Level 4, 25 King William Street, London',
  },
  contact: {
    phoneDisplay: '+44 20 7946 0182',
    phoneHref: 'tel:+442079460182',
    email: 'hello@vaxmor.com',
    officeAddress: 'Level 4, 25 King William Street, London EC4R 9AS',
    hours: 'Monday–Friday, 9am–6pm, with advisor meetings by appointment',
    hoursShort: 'Mon-Fri 9am-6pm · Advisor meetings by appointment',
    mapImage:
      '/assets/maps/6afc07f5a04eb31a0c3b7551_de8ec50489d43c1df59dddb030383b7f_screenshot-2026-11-17-at-15.52.55-1.webp',
    demoNotice:
      'Demonstration environment: enquiries are validated locally and not transmitted to an operating bank.',
  },
  disclosure:
    'Sample disclosure: deposits are protected up to the limits of your national guarantee scheme. Investments can fall as well as rise.',
  copyright: '© 2026 Vaxmor. All rights reserved.',
};
