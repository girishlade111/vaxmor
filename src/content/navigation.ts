export interface MegaMenuItem {
  href: string;
  title: string;
  description: string;
  iconKey:
    | 'wallet'
    | 'card'
    | 'home'
    | 'savings'
    | 'building'
    | 'lending'
    | 'payments'
    | 'chart'
    | 'family'
    | 'education'
    | 'umbrella'
    | 'estate'
    | 'grid'
    | 'list'
    | 'mail'
    | 'phone'
    | 'pin'
    | 'doc'
    | 'edit'
    | 'chat'
    | 'palette'
    | 'book'
    | 'clock'
    | 'shield'
    | 'alert'
    | 'lock';
}

export interface MegaMenuTab {
  id: string;
  label: string;
  items: MegaMenuItem[];
}

export const SERVICES_MEGA_MENU: MegaMenuTab[] = [
  {
    id: 'individuals',
    label: 'Individuals',
    items: [
      {
        href: '/services/private-banking',
        title: 'Everyday banking',
        description: 'Checking and savings accounts with no monthly fees.',
        iconKey: 'wallet',
      },
      {
        href: '/pricing',
        title: 'Credit cards',
        description: 'Cashback and travel cards with clear, simple rates.',
        iconKey: 'card',
      },
      {
        href: '/services/lending-and-mortgages',
        title: 'Home loans',
        description: 'Fixed and variable mortgages for every stage of life.',
        iconKey: 'home',
      },
      {
        href: '/services/investment-portfolios',
        title: 'Savings and deposits',
        description: 'Term deposits that grow your money at a steady rate.',
        iconKey: 'savings',
      },
    ],
  },
  {
    id: 'businesses',
    label: 'Businesses',
    items: [
      {
        href: '/services/business-banking',
        title: 'Business accounts',
        description: 'Multi-user accounts built for daily operations.',
        iconKey: 'building',
      },
      {
        href: '/services/lending-and-mortgages',
        title: 'Business lending',
        description: 'Working capital and equipment finance on fair terms.',
        iconKey: 'lending',
      },
      {
        href: '/services/business-banking',
        title: 'Payments and payroll',
        description: 'Pay suppliers and staff from one simple dashboard.',
        iconKey: 'payments',
      },
      {
        href: '/services/wealth-management',
        title: 'Treasury management',
        description: 'Cash flow forecasting and liquidity tools for growth.',
        iconKey: 'chart',
      },
    ],
  },
  {
    id: 'families',
    label: 'Families',
    items: [
      {
        href: '/services/private-banking',
        title: 'Joint accounts',
        description: 'Shared spending with separate controls for each member.',
        iconKey: 'family',
      },
      {
        href: '/services/investment-portfolios',
        title: 'Education savings',
        description: 'Plan ahead for school and university costs.',
        iconKey: 'education',
      },
      {
        href: '/services/retirement-planning',
        title: 'Life and protection',
        description: 'Cover that keeps your family secure through change.',
        iconKey: 'umbrella',
      },
      {
        href: '/services/wealth-management',
        title: 'Estate planning',
        description: 'Pass on wealth with clear, well-structured trusts.',
        iconKey: 'estate',
      },
    ],
  },
];

export const PAGES_MEGA_MENU: MegaMenuTab[] = [
  {
    id: 'main-pages',
    label: 'Main pages',
    items: [
      {
        href: '/',
        title: 'Homepage',
        description: 'Main landing layout',
        iconKey: 'home',
      },
      {
        href: '/home-v2',
        title: 'Home V2',
        description: 'Sticky service index',
        iconKey: 'home',
      },
      {
        href: '/home-v3',
        title: 'Home V3',
        description: 'Card-led opening',
        iconKey: 'card',
      },
      {
        href: '/about-us',
        title: 'About us',
        description: 'Story, team and values',
        iconKey: 'building',
      },
      {
        href: '/pricing',
        title: 'Pricing',
        description: 'Plans compared side by side',
        iconKey: 'chart',
      },
      {
        href: '/blog',
        title: 'Insights',
        description: 'Articles and market notes',
        iconKey: 'doc',
      },
    ],
  },
  {
    id: 'page-layouts',
    label: 'Page layouts',
    items: [
      {
        href: '/services-v1',
        title: 'Services V1',
        description: 'Service list and finder',
        iconKey: 'list',
      },
      {
        href: '/services-v2',
        title: 'Services V2',
        description: 'Image grid and comparison',
        iconKey: 'grid',
      },
      {
        href: '/services-v3',
        title: 'Services V3',
        description: 'Service slider and process',
        iconKey: 'list',
      },
      {
        href: '/contact-v1',
        title: 'Contact V1',
        description: 'Form with branch details',
        iconKey: 'mail',
      },
      {
        href: '/contact-v2',
        title: 'Contact V2',
        description: 'Form beside support details',
        iconKey: 'phone',
      },
      {
        href: '/contact-v3',
        title: 'Contact V3',
        description: 'Form with office locations',
        iconKey: 'pin',
      },
    ],
  },
  {
    id: 'cms-and-utility',
    label: 'CMS and utility',
    items: [
      {
        href: '/services/wealth-management',
        title: 'Service detail',
        description: 'CMS service template',
        iconKey: 'doc',
      },
      {
        href: '/blog/how-much-cash-should-you-really-keep',
        title: 'Insight detail',
        description: 'CMS article template',
        iconKey: 'edit',
      },
      {
        href: '/testimonial/marcus-b',
        title: 'Testimonial detail',
        description: 'CMS testimonial template',
        iconKey: 'chat',
      },
      {
        href: '/style-guide',
        title: 'Style guide',
        description: 'Type, colors and components',
        iconKey: 'palette',
      },
      {
        href: '/instructions',
        title: 'Instructions',
        description: 'How the template works',
        iconKey: 'book',
      },
      {
        href: '/changelog',
        title: 'Changelog',
        description: 'Release notes',
        iconKey: 'clock',
      },
      {
        href: '/licenses',
        title: 'Licenses',
        description: 'Fonts, images and icons',
        iconKey: 'shield',
      },
      {
        href: '/404',
        title: '404 page',
        description: 'Page not found',
        iconKey: 'alert',
      },
      {
        href: '/401',
        title: 'Password page',
        description: 'Protected page',
        iconKey: 'lock',
      },
    ],
  },
];

export const FOOTER_COLUMNS = [
  {
    heading: 'Banking',
    links: [
      { label: 'Private banking', href: '/services-v1' },
      { label: 'Investments', href: '/services-v1' },
      { label: 'Business lending', href: '/services-v1' },
      { label: 'Cards', href: '/pricing' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About us', href: '/about-us' },
      { label: 'Insights', href: '/blog' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Contact', href: '/contact-v2' },
    ],
  },
  {
    heading: 'Template',
    links: [
      { label: 'Style guide', href: '/style-guide' },
      { label: 'Instructions', href: '/instructions' },
      { label: 'Licenses', href: '/licenses' },
      { label: 'Changelog', href: '/changelog' },
    ],
  },
];
