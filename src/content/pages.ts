export const ABOUT_PAGE_DATA = {
  hero: {
    eyebrowNumber: '(01)',
    eyebrowLabel: 'About Vaxmor',
    heading: 'An independent bank built on trust, clarity and patience',
    description:
      'For more than two decades, Vaxmor has helped households, founders and businesses bank, invest and plan with confidence, guided by one advisor and fees you can see in full.',
    smallImage:
      '/assets/images/media/6afc03f08792288188aaeac3_urban-sky-perspective-1.webp',
    smallImageAlt: 'Modern architectural courtyard looking up toward open sky',
    largeImage:
      '/assets/images/media/6afc03f031d2ab9b5fd62442_engaged-leadership-in-professional-team-meeting-1.webp',
    largeImageAlt: 'Advisors and clients seated around a conference table',
  },
  editorial: {
    eyebrowNumber: '(02)',
    eyebrowLabel: 'About Vaxmor',
    statement:
      'Twenty-five years of patient banking',
    subcopy:
      'What began as a small advisory office in London now serves 12,000 clients, run on the same promise: clear advice, fair fees, one advisor.',
    bullets: [
      'Senior advisors on every account. You work directly with the person managing your plan, not a rotating team.',
      'No hidden commissions. We are paid by you, so our advice is never tied to a product.',
    ],
    expertiseHeading: 'Expertise',
    expertise: [
      'Wealth management',
      'Investment portfolios',
      'Private banking',
      'Business lending',
    ],
    footnote: 'Est. 2001 · Four UK offices',
  },
  founder: {
    eyebrowNumber: '(03)',
    eyebrowLabel: 'Meet the founder',
    heading: 'Built on trust, clarity and patience',
    copy: 'Our founder believes good banking should feel simple and honest. After years in private banking, she started Vaxmor to give every client clear advice, fair fees and a relationship that lasts.',
    name: 'Céline Hart',
    location: 'London, United Kingdom',
    avatar:
      '/assets/images/media/6afc03f0a6531713a54cd76b_portrait-of-a-woman-1-1.webp',
    handshakeImage:
      '/assets/images/media/6afc03f0d0256c9c4118cdb5_professional-handshake-4-1.webp',
    handshakeAlt: 'Founder shaking hands with a client in a contemporary office',
    videoTriggerTitle: 'Watch our studio story',
    videoTriggerCopy: 'Learn more about the vision, values, and mission.',
    videoYoutubeId: 'GrG-Ee9rAzE',
    videoDisclaimer:
      'Reference template media: embedded YouTube tutorial referenced on the template Licenses page.',
  },
  facts: {
    eyebrowNumber: '(04)',
    eyebrowLabel: 'Facts and numbers',
    value: '62',
    suffix: '%',
    description: 'New clients who join through a personal referral from an existing family or founder.',
    stats: [
      { value: '2001', label: 'Year founded' },
      { value: '40+', label: 'Senior advisors' },
      { value: '4 offices', label: 'Regional offices' },
    ],
  },
  timeline: {
    eyebrowNumber: '(05)',
    eyebrowLabel: 'Our story',
    heading: 'How Vaxmor grew, one client at a time',
    image:
      '/assets/images/architecture/6afc03f0d0256c9c4118cdb9_brickwork-verticality-modern-commercial-building-1.webp',
    imageAlt: 'Modern commercial brick office building',
    milestones: [
      {
        number: '1',
        title: '2001: Our first office',
        description:
          'Céline Hart opens a two-room advisory office in the City of London with six founding clients.',
      },
      {
        number: '2',
        title: '2008: Steady through the crisis',
        description:
          'While markets fell, no client was forced to sell, and our client base doubled the following year.',
      },
      {
        number: '3',
        title: '2016: Business banking',
        description:
          'Expanded to serve founders and growing SMEs with multi-currency accounts and working capital.',
      },
      {
        number: '4',
        title: '2024: Four offices',
        description:
          'Added teams in Bristol, Edinburgh and Manchester while keeping every client with one named advisor.',
      },
    ],
  },
};

export const SERVICES_V1_DATA = {
  hero: {
    eyebrowNumber: '(01)',
    eyebrowLabel: 'Our services',
    heading: 'Six services, one advisor who sees them all',
    description:
      'Wealth, investing, private banking, retirement, business banking and lending, each shaped around the plan you already have.',
    image:
      '/assets/images/media/6afc3f82aa31e8988f72b25a_professional-discussion-9-1.webp',
    imageAlt: 'Advisor and client in conversation',
  },
  process: {
    eyebrowNumber: '(03)',
    eyebrowLabel: 'How it works',
    heading: 'A clear path from first call to a working plan',
    image:
      '/assets/images/media/6afc3f8235a2dd180101dd29_professional-discussion-8-1.webp',
    imageAlt: 'Advisor and client discussing paperwork across a desk',
    steps: [
      {
        number: '1',
        title: 'Free consultation',
        description:
          'Tell us about your goals. We review where you are today and explain your options honestly, at no cost.',
      },
      {
        number: '2',
        title: 'Transparent fee proposal',
        description:
          'You receive a clear, written proposal with every fee shown, so you know exactly what to expect.',
      },
      {
        number: '3',
        title: 'Your financial plan',
        description:
          'We build a written plan covering savings, investments, protection and retirement, matched to your risk level.',
      },
      {
        number: '4',
        title: 'Ongoing reviews',
        description:
          'Your advisor reviews the plan with you regularly and adjusts it as your life and the markets change.',
      },
    ],
  },
  profileFinder: {
    eyebrowNumber: '(04)',
    eyebrowLabel: 'Who we serve',
    heading: 'Find the right service for you',
    description:
      'Pick the profile closest to yours and start with the services that fit. Your advisor tailors the rest.',
    ctaLabel: 'Talk to an advisor',
    ctaHref: '/contact-v1',
    profiles: [
      {
        id: 'individuals',
        title: 'Individuals',
        description: 'Bank, save and invest with one advisor who knows your goals.',
        services: [
          { label: 'Private banking', href: '/services/private-banking' },
          { label: 'Investment portfolios', href: '/services/investment-portfolios' },
        ],
      },
      {
        id: 'families',
        title: 'Families',
        description: 'Plan school fees, a home and what you pass on, as one household.',
        services: [
          { label: 'Wealth management', href: '/services/wealth-management' },
          { label: 'Retirement planning', href: '/services/retirement-planning' },
        ],
      },
      {
        id: 'founders',
        title: 'Founders',
        description: 'Keep personal and company money apart, and plan the exit early.',
        services: [
          { label: 'Business banking', href: '/services/business-banking' },
          { label: 'Wealth management', href: '/services/wealth-management' },
        ],
      },
      {
        id: 'businesses',
        title: 'Businesses',
        description: 'Accounts, credit lines and cash flow, with a banker who answers.',
        services: [
          { label: 'Business banking', href: '/services/business-banking' },
          { label: 'Lending and mortgages', href: '/services/lending-and-mortgages' },
        ],
      },
    ],
  },
  security: {
    eyebrowNumber: '(05)',
    eyebrowLabel: 'Security',
    heading: 'Safeguards on every service we run',
    description:
      'Whether we hold your savings, your portfolio or your company account, the same controls apply.',
    ctaLabel: 'Ask about security',
    ctaHref: '/contact-v2',
    image:
      '/assets/images/media/6afc3f821f018b2f20a63775_business-discussion-1-1.webp',
    imageAlt: 'Advisors discussing account safeguards in a bright office',
    featureCard: {
      title: 'Independent audits',
      description: 'External auditors review our controls every year and report directly to the board.',
    },
    sideCard: {
      title: 'Two-person approvals',
      description: 'Large transfers and portfolio changes need sign-off from two members of staff.',
    },
    bottomCards: [
      {
        title: 'Segregated client assets',
        description:
          'Investments are held with regulated custodians, kept apart from our own balance sheet.',
      },
      {
        title: 'Encrypted documents',
        description:
          'Statements, plans and contracts are shared through an encrypted client portal, never plain email.',
      },
      {
        title: 'Deposit protection',
        description:
          'Eligible cash balances fall under the national guarantee scheme. Sample copy, edit for your region.',
      },
    ],
  },
};

export const SERVICES_V2_DATA = {
  hero: {
    eyebrowNumber: '(01)',
    eyebrowLabel: 'Our services',
    heading: 'Banking and advice for growing businesses',
    description:
      'Business accounts, lending and the personal wealth behind them, compared openly and run by one team.',
    image:
      '/assets/images/media/6afc41be7fbfef5f20c51992_focused-desk-work-1.webp',
    imageAlt: 'Business leader reviewing financial documents at desk',
  },
  businessStages: [
    {
      id: 'smes',
      number: '01',
      title: 'Sole traders and SMEs',
      description:
        'One account for takings, supplier payments and tax pots, plus a banker you can call.',
      image:
        '/assets/images/media/6afbc18ab615b4f78b0053ea_artisan-retailer-in-concentration-1.webp',
      imageAlt: 'Small business owner at work',
    },
    {
      id: 'venture',
      number: '02',
      title: 'Venture-backed teams',
      description:
        'Hold funding rounds safely, pay a growing team and draw venture debt when you need runway.',
      image:
        '/assets/images/media/6afbc18a29e3a56f0daa0f47_collaborative-workspace-1-1.webp',
      imageAlt: 'Startup founder in a meeting',
    },
    {
      id: 'groups',
      number: '03',
      title: 'Groups and holdings',
      description:
        'Cash pooling, trade finance and FX across every entity you run.',
      image:
        '/assets/images/media/6afbc18a29e3a56f0daa0f56_office-meeting-discussion-1-1.webp',
      imageAlt: 'Enterprise finance team',
    },
  ],
  steps: {
    eyebrowNumber: '(04)',
    eyebrowLabel: 'How it works',
    heading: 'Open a business account in three steps',
    durationLabel: 'About 20 minutes',
    items: [
      {
        title: 'Tell us about the company',
        description: 'Share your company number, directors and what the business does.',
        icon: 'doc' as const,
      },
      {
        title: 'Verify the owners',
        description: 'Each director confirms their ID with a passport scan and selfie.',
        icon: 'shield' as const,
      },
      {
        title: 'Meet your business banker',
        description: 'Your banker sets up cards, payroll and any credit lines you need.',
        icon: 'user' as const,
      },
    ],
  },
};

export const SERVICES_V3_DATA = {
  hero: {
    eyebrowNumber: '(01)',
    eyebrowLabel: 'Our services',
    heading: 'Advice-led planning, from first call to annual review',
    description:
      'One advisor maps your accounts, investments and pension, then builds and runs a written plan with you.',
    smallImage:
      '/assets/images/media/6afc436de2bc9aa82fe77cab_office-discussion-scene-5-1.webp',
    smallImageAlt: 'Advisors reviewing a client plan together',
    largeImage:
      '/assets/images/media/6afc436d0efc884fd490abdb_business-meeting-scene-9-1.webp',
    largeImageAlt: 'Advisor presenting financial projections on a display',
  },
  fiveSteps: [
    {
      number: '01',
      title: 'Discovery call',
      description: 'Your goals, timeline, income and how comfortable you are with risk.',
      timing: 'DAY 1',
    },
    {
      number: '02',
      title: 'Financial review',
      description: 'Accounts, pensions, debts and investments mapped in one place.',
      timing: '1-2 WEEKS',
    },
    {
      number: '03',
      title: 'Plan and proposal',
      description: 'A written plan with portfolio, savings and protection, and every fee shown.',
      timing: '1-2 WEEKS',
    },
    {
      number: '04',
      title: 'Account setup',
      description: 'Accounts opened, transfers arranged and portfolios funded.',
      timing: '1-2 WEEKS',
    },
    {
      number: '05',
      title: 'Ongoing reviews',
      description: 'Quarterly reports, rebalancing and a full review with your advisor.',
      timing: 'EVERY YEAR',
    },
  ],
  whyImages: [
    '/assets/images/media/6afc443705942452aed01e84_grandmother-and-grandchild-1-1.webp',
    '/assets/images/media/6afc44374cfe25d981c6622e_tender-mother-and-baby-1.webp',
  ],
  whyItems: [
    {
      title: 'Independent recommendations',
      description:
        'We are not tied to any fund house, so every product in your plan is chosen on merit.',
    },
    {
      title: 'One advisor, start to finish',
      description:
        'The person who writes your plan is the person who reviews it with you each year.',
    },
    {
      title: 'Fees agreed in writing',
      description:
        'Planning and management fees are fixed in your proposal and never change without notice.',
    },
    {
      title: 'Plans in plain language',
      description:
        'Your plan is a short document you can read in one sitting, not a hundred pages of jargon.',
    },
  ],
  securityImage:
    '/assets/graphics/app/6afc48f00f1443855a6bd839_woman-using-smartphone-1-1.webp',
  securityItems: [
    {
      title: 'Private client portal',
      description:
        'Plans, statements and tax papers live in an encrypted portal only you and your advisor can open.',
    },
    {
      title: 'Verified instructions',
      description:
        'Any change to your plan or payee details is confirmed by phone before we act on it.',
    },
    {
      title: 'Regulated custody',
      description:
        'Investments sit with independent, regulated custodians in your name.',
    },
    {
      title: 'Protected cash',
      description:
        'Eligible deposits are covered by the national guarantee scheme. Sample copy, edit for your region.',
    },
  ],
  facts: {
    value: '94',
    suffix: '%',
    description: 'of planning clients reach their first milestone on schedule.',
    stats: [
      { value: '$4.2B', label: 'Planned and managed for clients' },
      { value: '3,400', label: 'Written plans in place' },
      { value: '4-6 weeks', label: 'From first call to a working plan' },
    ],
    footnote: 'Sample figures based on plans reviewed between 2020 and 2025.',
  },
};

export const PRICING_HERO_DATA = {
  eyebrowNumber: '(01)',
  eyebrowLabel: 'Pricing',
  heading: 'Clear fees, shown before you commit',
  description:
    'Choose the plan that fits where you are today, from free everyday banking to full wealth management. Every fee is written down up front, with no hidden commissions or exit penalties.',
  image:
    '/assets/images/media/6afc05196ffe4f8553611c76_typing-on-laptop-1.webp',
  imageAlt: 'Hands typing on a laptop beside a notebook',
};

export const BLOG_HERO_DATA = {
  eyebrowNumber: '(01)',
  eyebrowLabel: 'Insights',
  heading: 'Market notes from our advisors',
  description:
    'Plain-language writing from Vaxmor advisors on saving, investing, interest rates, retirement and business finance, for anyone who wants to make clearer money decisions.',
  image:
    '/assets/images/media/6afc06086cc1a3212bbd8953_contemplative-morning-1.webp',
  imageAlt: 'Advisor reading a newspaper with morning coffee beside a window',
};

export const CONTACT_VARIANTS = {
  v1: {
    eyebrowNumber: '(01)',
    eyebrowLabel: 'Contact',
    heading: 'Tell us about your financial goals',
    description:
      'Share what you want to achieve, your timeline and any questions. An advisor replies to every enquiry within one business day.',
    smallImage:
      '/assets/images/media/6afc09fb15e56a482c3d9f09_luxurious-hotel-lobby-interior-1.webp',
    smallImageAlt: 'Vaxmor office reception interior',
    largeImage:
      '/assets/graphics/app/6afc0e05af1476d01d1fa85a_professional-phone-call-1-1.webp',
    largeImageAlt: 'Advisor speaking with a client on the telephone',
    formHeading: 'Send us a message',
    infoHeading: 'Speak with an advisor',
  },
  v2: {
    eyebrowNumber: '(01)',
    eyebrowLabel: 'Contact information',
    heading: 'Support for clients and new enquiries',
    description:
      'Already banking with us or just exploring? Reach the right team by phone, email or message and get a reply within one business day.',
    heroImage:
      '/assets/images/media/6afc19fe519256b8fafaa834_virtual-meeting-in-a-modern-office-1.webp',
    heroImageAlt: 'Client speaking with an advisor on a video call',
    formHeading: 'Message our support team',
  },
  v3: {
    eyebrowNumber: '(01)',
    eyebrowLabel: 'Visit us',
    heading: 'Meet your advisor face to face',
    description:
      'Book a meeting at one of our four offices, or ask for a video call if you would rather talk from home.',
    heroImage:
      '/assets/images/media/6afc1f1311a733b0ee9ba5a1_elegant-hotel-lobby-1.webp',
    heroImageAlt: 'Vaxmor London private client lounge',
    formHeading: 'Request an appointment',
    infoEyebrow: '(02)',
    infoTitle: 'Plan your visit',
    infoDescription:
      'Pick a time that suits you and we will confirm your meeting room, advisor and anything to bring.',
  },
};
