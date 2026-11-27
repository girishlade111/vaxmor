export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
}

export const PERSONAL_PLANS: PricingTier[] = [
  {
    id: 'everyday',
    name: 'Everyday',
    price: '$0',
    period: '/ month',
    description: 'Simple banking for everyday spending and saving',
    features: [
      'Current account with no monthly fee',
      'Easy-access savings pot',
      'Contactless card and mobile app',
      'Dedicated advisor not included',
      'In-app chat support',
    ],
    ctaLabel: 'Open an account',
    ctaHref: '/contact-v1',
  },
  {
    id: 'invest',
    name: 'Invest',
    price: '0.45%',
    period: '/ year',
    description: 'Managed portfolios that grow with your goals',
    features: [
      'Everything in Everyday',
      'Diversified portfolio, five risk levels',
      'Automatic rebalancing',
      'Quarterly performance reports',
      'Annual review with an advisor',
    ],
    ctaLabel: 'Start investing',
    ctaHref: '/contact-v2',
    highlighted: true,
  },
  {
    id: 'private-wealth',
    name: 'Private Wealth',
    price: '0.80%',
    period: '/ year',
    description: 'Full wealth management with a dedicated advisor',
    features: [
      'Named wealth advisor and relationship banker',
      'Written financial plan, reviewed twice a year',
      'Tax, pension and estate planning',
      'Priority lending and foreign exchange',
      'Multi-currency private accounts',
    ],
    ctaLabel: 'Talk to an advisor',
    ctaHref: '/contact-v3',
  },
];

export const BUSINESS_PLANS: PricingTier[] = [
  {
    id: 'business-start',
    name: 'Business Start',
    price: '$0',
    period: '/ month',
    description: 'For sole traders and newly formed companies',
    features: [
      'Business account and debit cards',
      'Invoicing and expense tracking',
      'Accounting software sync',
      'Business banker not included',
      'In-app chat support',
    ],
    ctaLabel: 'Open a business account',
    ctaHref: '/contact-v1',
  },
  {
    id: 'business-growth',
    name: 'Business Growth',
    price: '$29',
    period: '/ month',
    description: 'For teams that pay staff and suppliers every month',
    features: [
      'Everything in Business Start',
      'Payroll for up to 25 people',
      'Multi-user access with approvals',
      'Overdraft and term loans on review',
      'Named business banker',
    ],
    ctaLabel: 'Choose Growth',
    ctaHref: '/contact-v2',
    highlighted: true,
  },
  {
    id: 'business-plus',
    name: 'Business Plus',
    price: '$79',
    period: '/ month',
    description: 'For groups running several entities and currencies',
    features: [
      'Cash pooling across entities',
      'Foreign exchange at preferential rates',
      'Trade finance and guarantees',
      'Treasury dashboard and reporting',
      'Priority lending decisions',
    ],
    ctaLabel: 'Talk to our team',
    ctaHref: '/contact-v3',
  },
];

// Reference-mode comparison keys preserve observed original template labels;
// Production-mode replaces leftover template keys with banking-relevant labels.
export const COMPARISON_KEYS_REFERENCE = [
  'Site visit',
  'Drawings',
  'Sourcing and specification',
  'Site coordination',
  'Revisions',
];

export const COMPARISON_KEYS_PRODUCTION = [
  'Core account',
  'Savings & portfolio',
  'Controls & automation',
  'Advisory access',
  'Support & reviews',
];

export const SERVICE_FEE_ROWS = [
  {
    service: 'Private banking',
    bestFor: 'High earners and professionals',
    minimum: '$250,000',
    fee: 'From 0.20% a year',
    href: '/services/private-banking',
  },
  {
    service: 'Investment portfolios',
    bestFor: 'First-time and growing investors',
    minimum: '$5,000',
    fee: '0.45% a year',
    href: '/services/investment-portfolios',
  },
  {
    service: 'Wealth management',
    bestFor: 'Families and business owners',
    minimum: '$1,000,000',
    fee: '0.80% a year',
    href: '/services/wealth-management',
  },
  {
    service: 'Retirement planning',
    bestFor: 'Ages 45 and over',
    minimum: 'No minimum',
    fee: 'Fixed planning fee',
    href: '/services/retirement-planning',
  },
  {
    service: 'Business banking',
    bestFor: 'Founders and small businesses',
    minimum: 'No minimum',
    fee: '$0 a month',
    href: '/services/business-banking',
  },
  {
    service: 'Lending and mortgages',
    bestFor: 'Home buyers and businesses',
    minimum: 'Case by case',
    fee: 'Rate set on review',
    href: '/services/lending-and-mortgages',
  },
];
