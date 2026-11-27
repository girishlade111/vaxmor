export interface ServiceRecord {
  id: string;
  number: number;
  numberLabel: string;
  slug: string;
  name: string;
  summary: string;
  description: string[];
  iconName:
    | 'wealth'
    | 'investment'
    | 'private'
    | 'retirement'
    | 'business'
    | 'lending';
  mainImage: string;
  mainImageAlt: string;
  secondaryImage: string;
  secondaryImageAlt: string;
  metaDescription: string;
  bestFor: string;
  minimumLabel: string;
  feeLabel: string;
  order: number;
}

export const SERVICES: ServiceRecord[] = [
  {
    id: 'wealth-management',
    number: 1,
    numberLabel: '01',
    slug: 'wealth-management',
    name: 'Wealth management',
    summary:
      'One advisor and one plan for everything you own, earn and want to pass on.',
    description: [
      'A single advisor who sees your whole financial picture: investments, property, pensions, tax and estate. We build one written plan, review it twice a year, and adjust it when your life changes rather than when the market does. Suited to households and founders with complex finances.',
    ],
    iconName: 'wealth',
    mainImage:
      '/assets/images/media/6afd0bca9e9aa5d8af67e6a9_6afc7370d88ed11e06008a4b_business-meeting-scene-11-1.webp',
    mainImageAlt: 'Advisor walking two clients through a plan on a whiteboard',
    secondaryImage:
      '/assets/images/media/6afd0bca9e9aa5d8af67e6ac_6afc737274114210ba4904e6_team-strategy-meeting-1.webp',
    secondaryImageAlt: 'Advisor presenting a strategy to a small group using a flip chart',
    metaDescription:
      'Wealth management with one advisor and one written plan for your investments, property, pensions, tax and estate, reviewed twice a year as your life moves.',
    bestFor: 'Families and business owners',
    minimumLabel: '$1,000,000',
    feeLabel: '0.80% a year',
    order: 1,
  },
  {
    id: 'investment-portfolios',
    number: 2,
    numberLabel: '02',
    slug: 'investment-portfolios',
    name: 'Investment portfolios',
    summary:
      'Diversified, low-cost portfolios matched to your goals and your risk tolerance.',
    description: [
      'Globally diversified portfolios built from low-cost funds and rebalanced automatically. You choose from five risk levels, see every holding and every fee in your dashboard, and receive a plain-language report each quarter. No lock-in period and no performance fees.',
    ],
    iconName: 'investment',
    mainImage:
      '/assets/images/media/6afd0bcb9e9aa5d8af67e6b4_6afc72e17f3094a19b1c1d33_woman-analyzing-financial-charts-on-desktop-monitor-1.webp',
    mainImageAlt: 'Woman analysing market charts on a desktop monitor',
    secondaryImage:
      '/assets/images/media/6afd0bcb9e9aa5d8af67e6bb_6afc72e390692b19cb423eae_financial-analyst-at-work-1.webp',
    secondaryImageAlt: 'Financial analyst working beside market monitors',
    metaDescription:
      'Diversified, low-cost investment portfolios matched to your goals and risk level, with every holding and fee visible and plain-language quarterly reports.',
    bestFor: 'First-time and growing investors',
    minimumLabel: '$5,000',
    feeLabel: '0.45% a year',
    order: 2,
  },
  {
    id: 'private-banking',
    number: 3,
    numberLabel: '03',
    slug: 'private-banking',
    name: 'Private banking',
    summary:
      'A dedicated banker, priority service and accounts built around your cash flow.',
    description: [
      'Current and savings accounts in multiple currencies, a named relationship banker you can call directly, and priority access to lending and foreign exchange. Designed for clients who want their day-to-day banking handled with the same care as their investments.',
    ],
    iconName: 'private',
    mainImage:
      '/assets/images/media/6afd0bcb9e9aa5d8af67e6b8_6afc72390c98fa052de6ef1f_professional-discussion-10-1.webp',
    mainImageAlt: 'Private banker reviewing a document with a client in his office',
    secondaryImage:
      '/assets/images/media/6afd0bcb9e9aa5d8af67e6c4_6afc723c8f3c89befe3f1232_professional-reading-scene-1-1.webp',
    secondaryImageAlt: 'Client reading financial documents in a quiet lounge',
    metaDescription:
      'Private banking with a named relationship banker, multi-currency accounts and priority access to lending and foreign exchange, built around your cash flow.',
    bestFor: 'High earners and professionals',
    minimumLabel: '$250,000',
    feeLabel: 'From 0.20% a year',
    order: 3,
  },
  {
    id: 'retirement-planning',
    number: 4,
    numberLabel: '04',
    slug: 'retirement-planning',
    name: 'Retirement planning',
    summary:
      'A clear answer to when you can stop working, and how to get there.',
    description: [
      'We model your income, savings and pensions to show what retirement realistically looks like, then set a contribution plan to close any gap. Includes pension consolidation, drawdown strategy and yearly check-ins so the plan keeps pace with your life.',
    ],
    iconName: 'retirement',
    mainImage:
      '/assets/images/media/6afd0bd47ca8a3e5b2ef8386_6afc7400af8765fd91d016c6_elderly-couple-relaxing-1.webp',
    mainImageAlt: 'Retired couple relaxing together on a sofa at home',
    secondaryImage:
      '/assets/images/media/6afd0bcb9e9aa5d8af67e6c8_6afc7403ea9cdce60758c2eb_office-collaboration-scene-4-1.webp',
    secondaryImageAlt: 'Advisor speaking with a client beside a bright window',
    metaDescription:
      'Retirement planning that shows when you can stop working and how to get there, with pension consolidation, a drawdown strategy and a yearly plan check-in.',
    bestFor: 'Ages 45 and over',
    minimumLabel: 'No minimum',
    feeLabel: 'Fixed planning fee',
    order: 4,
  },
  {
    id: 'business-banking',
    number: 5,
    numberLabel: '05',
    slug: 'business-banking',
    name: 'Business banking',
    summary:
      'Accounts, payments and treasury tools for growing companies.',
    description: [
      'Business current accounts, international payments, payroll integration and cash-sweep tools that put idle balances to work. A business specialist helps you plan working capital, so finance supports your growth instead of slowing it down.',
    ],
    iconName: 'business',
    mainImage:
      '/assets/images/media/6afd0bcb9e9aa5d8af67e6cc_6afc732840cd4db306e3afae_business-meeting-scene-10-1.webp',
    mainImageAlt: 'Business owner leading a meeting with his team',
    secondaryImage:
      '/assets/images/media/6afd0bcb9e9aa5d8af67e6d3_6afc732974114210ba48de49_team-meeting-discussion-1.webp',
    secondaryImageAlt: 'Small business team discussing plans around a table',
    metaDescription:
      'Business banking for growing companies: current accounts, international payments, payroll integration and treasury tools, with a dedicated specialist.',
    bestFor: 'Founders and small businesses',
    minimumLabel: 'No minimum',
    feeLabel: '$0 a month',
    order: 5,
  },
  {
    id: 'lending-and-mortgages',
    number: 6,
    numberLabel: '06',
    slug: 'lending-and-mortgages',
    name: 'Lending and mortgages',
    summary:
      'Mortgages and credit structured around your full financial position.',
    description: [
      'Residential mortgages, buy-to-let finance and secured credit lines assessed on your whole balance sheet, not a single payslip. Decisions are made by people who understand complex income, with clear terms and no early repayment surprises.',
    ],
    iconName: 'lending',
    mainImage:
      '/assets/images/media/6afd0bcb9e9aa5d8af67e6d7_6afc72891e2e0fde6bc0778b_key-exchange-outdoors-1-1.webp',
    mainImageAlt: 'Couple receiving the keys to their new home',
    secondaryImage:
      '/assets/images/media/6afd0bcc9e9aa5d8af67e6de_6afc728a90692b19cb420f18_key-exchange-close-up-1.webp',
    secondaryImageAlt: 'Close-up of keys exchanged across a wooden table with documents',
    metaDescription:
      'Mortgages, buy-to-let finance and secured credit assessed on your whole balance sheet, with clear terms, fast decisions and no early repayment surprises.',
    bestFor: 'Home buyers and businesses',
    minimumLabel: 'Case by case',
    feeLabel: 'Rate set on review',
    order: 6,
  },
];

export const SERVICE_INCLUDED_FEATURES = [
  {
    title: 'A written scope',
    description: 'Goals, holdings and fees set out in plain language before you sign.',
    icon: 'document' as const,
  },
  {
    title: 'A specialist on call',
    description: 'Direct phone and email access to the person running your service.',
    icon: 'specialist' as const,
  },
  {
    title: 'Fixed review dates',
    description: 'Calendar check-ins twice a year, plus calls whenever your life shifts.',
    icon: 'calendar' as const,
  },
  {
    title: 'Live reporting',
    description: 'Every balance, fee and transaction visible in the app at any hour.',
    icon: 'report' as const,
  },
  {
    title: 'No lock-in',
    description: 'Add, pause or close a service at any time without exit penalties.',
    icon: 'unlock' as const,
  },
  {
    title: 'Works with the rest',
    description: 'Shares one advisor, one statement and one login across your accounts.',
    icon: 'connect' as const,
  },
];

export const SERVICE_DETAIL_PROCESS = [
  {
    number: '01',
    title: 'Introductory call',
    description: 'Thirty minutes on the phone or in a branch to map your goals and answer questions.',
  },
  {
    number: '02',
    title: 'Scope and quote',
    description: 'A written plan showing what we recommend and the exact fee, valid for 30 days.',
  },
  {
    number: '03',
    title: 'Setup and onboarding',
    description: 'We handle transfers, paperwork and portal access; most services go live in two weeks.',
  },
  {
    number: '04',
    title: 'First review',
    description: 'A full check-in three months in to confirm everything works as promised.',
  },
];

export const SHARED_BUILDING_IMAGE =
  '/assets/images/architecture/6afc03f0d0256c9c4118cdb9_brickwork-verticality-modern-commercial-building-1.webp';
