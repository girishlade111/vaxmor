export const PARTNER_LOGOS = [
  {
    src: '/assets/logos/6af5bc7c3f8d75c8745c1df8_logoipsum-343.svg',
    alt: 'Partner logo 01',
  },
  {
    src: '/assets/logos/6af5bc7cc9d9a21f4a748e40_logoipsum-418.svg',
    alt: 'Partner logo 02',
  },
  {
    src: '/assets/logos/6af5bc7cd9c8feee4b1100f1_logoipsum-330.svg',
    alt: 'Partner logo 03',
  },
  {
    src: '/assets/logos/6af5bc7c59a35e175a88b869_logoipsum-264.svg',
    alt: 'Partner logo 04',
  },
  {
    src: '/assets/logos/6af5bc7ca3bedc320e2b324e_logoipsum-262.svg',
    alt: 'Partner logo 05',
  },
  {
    src: '/assets/logos/6af5bc7c6b3ef6a1b0a547d0_logoipsum-410.svg',
    alt: 'Partner logo 06',
  },
];

export const HOME_V1_DATA = {
  hero: {
    eyebrowNumber: '(01)',
    eyebrowLabel: 'Private banking since 2001',
    heading: 'Private banking, made clear for everyone',
    description:
      'One advisor for your accounts, investments and retirement plan, with every fee shown before you commit.',
    primaryCta: { label: 'Open an account', href: '/pricing' },
    secondaryCta: { label: 'How it works', href: '/services-v1' },
    avatars: [
      {
        src: '/assets/images/media/6af5425e48b17c8a81d3978e_1.webp',
        alt: 'Vaxmor client portrait',
      },
      {
        src: '/assets/images/media/6af5425e48b17c8a81d3973d_4.webp',
        alt: 'Vaxmor client portrait',
      },
      {
        src: '/assets/images/media/6af5425e48b17c8a81d396ec_3.webp',
        alt: 'Vaxmor client portrait',
      },
    ],
    clientCount: '12,000+',
    clientLabel: 'Clients who trust Vaxmor',
    heroPhoto:
      '/assets/images/media/6afbb3b58dcfc3fe2efbb9c3_business-presentation-in-modern-office-1.webp',
    heroPhotoAlt: 'Vaxmor advisor meeting a client',
    portfolio: {
      label: 'Portfolio balance',
      amount: '$248,560',
      change: '+12.4%',
    },
    salary: {
      label: 'Salary received',
      amount: '+$8,450.00',
    },
    stats: [
      { value: '$4.2B', label: 'Under management' },
      { value: '25 yrs', label: 'Independent' },
      { value: '1 day', label: 'Advisor reply time' },
    ],
  },
  aboutIntro: {
    eyebrowNumber: '(02)',
    eyebrowLabel: 'About Vaxmor',
    heading: 'Independent banking built on trust, discipline and long-term thinking.',
    description:
      'For over two decades we have helped families, founders and institutions grow and protect what matters, with advice that always puts your goals first.',
    ctaLabel: 'More about us',
    ctaHref: '/about-us',
    stats: [
      { value: '2001', label: 'Year founded' },
      { value: '40+', label: 'Senior advisors' },
      { value: '6', label: 'Regional offices' },
    ],
  },
  servicesSection: {
    eyebrowNumber: '(03)',
    eyebrowLabel: 'Services',
    heading: 'Banking and investing, handled by one team.',
    description:
      'Choose a single service or combine them into one plan, managed by an advisor who sees the full picture.',
    ctaLabel: 'All services',
    ctaHref: '/services-v1',
    photo:
      '/assets/images/media/6afbc18a61535adcef60ebd3_professional-discussion-7-1.webp',
    photoAlt: 'Vaxmor advisors meeting with clients',
  },
  cardsSection: {
    eyebrowNumber: '(04)',
    eyebrowLabel: 'Vaxmor cards',
    heading: 'More than a card. A smarter way to spend.',
    description:
      'The Vaxmor Metal card comes with no foreign transaction fees, cashback on every purchase and full control from your phone.',
    ctaLabel: 'Get your card',
    ctaHref: '/pricing',
    navyCardImage:
      '/assets/graphics/cards/6af5d2261bad0a2eb02fa963_051a2a9e83e019d0bc490ff4c0fdc901_vaxmor-card-metal.webp',
    blueCardImage:
      '/assets/graphics/cards/6af5d2260986746faf76c14b_5c666efe4db681b62cd2b0ad24f91542_vaxmor-card-everyday.webp',
    benefits: [
      {
        title: 'Contactless payments',
        description:
          "Tap to pay in stores worldwide, or add your card to your phone's digital wallet.",
        icon: 'contactless' as const,
      },
      {
        title: '2% cashback',
        description:
          'Earn on every purchase with no categories to track and no cap on rewards.',
        icon: 'cashback' as const,
      },
      {
        title: 'Instant card lock',
        description:
          'Freeze and unfreeze your card in one tap if it ever goes missing.',
        icon: 'lock' as const,
      },
    ],
  },
  businessSection: {
    eyebrowNumber: '(05)',
    eyebrowLabel: 'For business',
    heading: 'Built to support every business',
    description:
      'Accounts, credit and payments that grow with you, from your first invoice to global payroll.',
    ctaLabel: 'Open an account',
    ctaHref: '/contact-v2',
    audiences: [
      {
        id: 'small-businesses',
        number: '01',
        title: 'Small businesses',
        description:
          'A business account, card and invoicing in one place, with a banker who answers.',
        image:
          '/assets/images/media/6afbc18ab615b4f78b0053ea_artisan-retailer-in-concentration-1.webp',
        imageAlt: 'Small business owner at work',
      },
      {
        id: 'startups',
        number: '02',
        title: 'Startups',
        description:
          'Fast onboarding, venture debt and treasury tools built for funded teams.',
        image:
          '/assets/images/media/6afbc18a29e3a56f0daa0f47_collaborative-workspace-1-1.webp',
        imageAlt: 'Startup founder in a meeting',
      },
      {
        id: 'enterprises',
        number: '03',
        title: 'Enterprises',
        description:
          'Cash management, trade finance and FX across every entity you run.',
        image:
          '/assets/images/media/6afbc18a29e3a56f0daa0f56_office-meeting-discussion-1-1.webp',
        imageAlt: 'Enterprise finance team',
      },
    ],
  },
  stepsSection: {
    eyebrowNumber: '(06)',
    eyebrowLabel: 'How it works',
    heading: 'Open an account in three steps',
    durationLabel: 'About 10 minutes',
    steps: [
      {
        title: 'Apply online',
        description: 'Fill in a short form from your phone or laptop.',
        icon: 'doc' as const,
      },
      {
        title: 'Verify your ID',
        description: 'Scan your passport and take a quick selfie.',
        icon: 'shield' as const,
      },
      {
        title: 'Meet your banker',
        description: 'Your named banker calls to set up your plan.',
        icon: 'user' as const,
      },
    ],
  },
  appSection: {
    eyebrowNumber: '(07)',
    eyebrowLabel: 'Mobile app',
    heading: 'Every account, one app',
    description:
      'Check balances, move money, freeze a card or message your advisor from your phone.',
    phoneScreenImage:
      '/assets/graphics/app/6af8f54c79c0e4f0e735b18a_vaxmor-app-screen.webp',
    phoneScreenAlt: 'Vaxmor mobile banking app preview',
    leftFeatures: [
      {
        title: 'Instant transfers',
        description: 'Send and receive money in seconds, at home or abroad.',
        icon: 'send' as const,
      },
      {
        title: 'Card controls',
        description: 'Freeze your card, change PIN or set spending limits.',
        icon: 'card' as const,
      },
      {
        title: 'Savings goals',
        description: 'Set money aside automatically for tax, travel or a home.',
        icon: 'savings' as const,
      },
    ],
    rightFeatures: [
      {
        title: 'Spending insights',
        description: 'See where your money goes each month by category.',
        icon: 'chart' as const,
      },
      {
        title: 'Biometric sign-in',
        description: 'Unlock with your face or fingerprint, no codes to type.',
        icon: 'biometric' as const,
      },
      {
        title: 'Scheduled payments',
        description: 'Set up standing orders and regular transfers once.',
        icon: 'calendar' as const,
      },
    ],
  },
  factsSection: {
    eyebrowNumber: '(09)',
    eyebrowLabel: 'Facts and numbers',
    value: '98',
    suffix: '%',
    description: 'Long-term client retention over five years.',
  },
  insightsSection: {
    eyebrowNumber: '(10)',
    eyebrowLabel: 'Insights',
    heading: 'Market notes from our advisors',
    ctaLabel: 'Read all insights',
    ctaHref: '/blog',
  },
  newsletter: {
    heading: 'Get the monthly market note',
    description: 'One plain-language note a month from our investment team. No spam.',
    placeholder: 'you@example.com',
    ctaLabel: 'Subscribe',
  },
  getStarted: {
    eyebrowNumber: '(12)',
    eyebrowLabel: 'Get started',
    heading: 'Open an account with us today',
    description: 'Set up in under ten minutes, with a named banker from day one.',
    primaryCta: { label: 'Open account', href: '/contact-v2' },
    secondaryCta: { label: 'Talk to an advisor', href: '/contact-v2' },
    stats: [
      { value: '10 min', label: 'Average setup time' },
      { value: '$0', label: 'Monthly fee in year one' },
      { value: '24/7', label: 'Card support' },
    ],
  },
};

export const HOME_V2_DATA = {
  hero: {
    eyebrowNumber: '(01)',
    eyebrowLabel: 'Mobile banking',
    heading: 'Banking that fits in your pocket and your plans',
    description:
      'Send money, track spending and grow savings from one app, with a named banker on call.',
    primaryCta: { label: 'Open an account', href: '/pricing' },
    secondaryCta: { label: 'See how it works', href: '/services-v1' },
    phoneFrame:
      '/assets/graphics/app/6af9a795dd30da1efb6dcdd2_minimalist-smartphone-and-flowers-1-1.webp',
    leftScreen:
      '/assets/graphics/cards/6af9ac55c154f2a7491d65cd_vaxmor-app-cards.webp',
    centerScreen:
      '/assets/images/media/6af9ac5578008228b664e645_vaxmor-app-home.webp',
    rightScreen:
      '/assets/images/media/6af9ac569a240af3994a09ee_vaxmor-app-savings.webp',
  },
  about: {
    eyebrowNumber: '(02)',
    eyebrowLabel: 'About Vaxmor',
    statement:
      'We manage money with a long view: clear plans, diversified portfolios and advice that holds up through every market cycle.',
    subcopy:
      'Founded in 2001, Vaxmor works with households, founders and growing businesses. Every client relationship is led by a senior advisor, from the first conversation to every annual review.',
    expertise: [
      'Wealth management',
      'Investment portfolios',
      'Private banking',
      'Business lending',
    ],
    footnote: 'Est. 2001, 12,000 active clients',
  },
  security: {
    eyebrowNumber: '(04)',
    eyebrowLabel: 'Security',
    heading: 'Bank from your phone with full protection',
    description:
      'The app carries the same safeguards as our branches, running quietly behind every tap.',
    image:
      '/assets/graphics/app/6afbca7f8f474a0b55a713b5_hand-with-smartphone-1.webp',
    imageAlt: 'Person holding smartphone using secure banking app',
    items: [
      {
        title: 'Device-bound login',
        description:
          'Your account only opens on phones you have approved, so a stolen password is not enough.',
      },
      {
        title: 'Face and fingerprint unlock',
        description:
          'Sign in and confirm payments with biometrics instead of codes you have to remember.',
      },
      {
        title: 'Live payment alerts',
        description:
          'Every card payment and transfer sends a push alert within seconds.',
      },
      {
        title: 'Spending limits you set',
        description:
          'Cap daily card spend or online payments, and change the limit any time in the app.',
      },
    ],
  },
  results: [
    { value: '$4.2B', label: 'Assets under management' },
    { value: '12,000+', label: 'Active clients' },
    { value: '25 yrs', label: 'Of independent banking' },
    { value: '98%', label: 'Client retention' },
  ],
  whyCards: [
    {
      number: '01',
      title: 'No monthly account fee',
      description:
        'Everyday accounts carry no monthly charge in year one, and every later fee is listed up front.',
      dark: false,
    },
    {
      number: '02',
      title: 'A banker you can message',
      description:
        'Chat with your named banker in the app and get a reply the same business day.',
      dark: true,
    },
    {
      number: '03',
      title: 'Instant transfers',
      description:
        'Send money to anyone with a phone number and see it arrive in seconds.',
      dark: false,
    },
  ],
};

export const HOME_V3_DATA = {
  hero: {
    eyebrowNumber: '(01)',
    eyebrowLabel: 'Cards and payments',
    description:
      'One card for 40+ currencies, live exchange rates, and biometric approval on every payment.',
    primaryCta: { label: 'Get your card', href: '/pricing' },
    secondaryCta: { label: 'See pricing', href: '/pricing' },
    cardInlineImage:
      '/assets/graphics/cards/6af5d2261bad0a2eb02fa963_051a2a9e83e019d0bc490ff4c0fdc901_vaxmor-card-metal.webp',
    stageImage:
      '/assets/images/media/6afbcbd431d2ab9b5fc911ff_professional-woman-at-desk-1-1.webp',
    stageImageAlt: 'Vaxmor client smiling at desk',
    stats: [
      { value: '0%', label: 'FX markup on card spend (sample)' },
      { value: '40+', label: 'Currencies held (sample)' },
      { value: '24/7', label: 'Fraud monitoring (sample)' },
    ],
  },
  whyList: [
    {
      number: '01',
      title: 'Real exchange rates',
      description:
        'Card spend abroad converts at the live market rate, with no hidden markup (sample terms).',
    },
    {
      number: '02',
      title: 'Controls in your pocket',
      description:
        'Set limits, block online or ATM use and freeze the card from the app in seconds.',
    },
    {
      number: '03',
      title: 'Metal card as standard',
      description:
        'A solid metal card comes with every account, with no annual card fee in year one.',
    },
    {
      number: '04',
      title: 'Cashback on every purchase',
      description:
        'Earn on everyday spend with no categories to track and no cap on rewards.',
    },
    {
      number: '05',
      title: 'Protected purchases',
      description:
        'Eligible purchases carry fraud and purchase protection, with disputes handled by a real person.',
    },
    {
      number: '06',
      title: 'Help in any time zone',
      description:
        'Lost card or blocked payment? Our card team answers day and night, wherever you are.',
    },
  ],
  timelineSteps: [
    {
      number: '1',
      title: 'Apply in the app',
      description:
        'Tell us a little about yourself and verify your ID with a passport scan and a quick selfie.',
    },
    {
      number: '2',
      title: 'Get a virtual card',
      description:
        "Your virtual card appears in the app straight away, ready to add to your phone's digital wallet.",
    },
    {
      number: '3',
      title: 'Receive your metal card',
      description:
        'The physical card arrives by tracked post within a few working days (sample timing).',
    },
    {
      number: '4',
      title: 'Set your controls',
      description:
        'Choose spending limits, travel settings and alerts so the card works the way you do.',
    },
  ],
};
