export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQGroup {
  eyebrowNum: string;
  eyebrowText: string;
  heading: string;
  description: string;
  assistanceTitle: string;
  assistanceCopy: string;
  assistanceCta: {
    label: string;
    href: string;
  };
  items: FAQItem[];
}

export const FAQS: Record<string, FAQGroup> = {
  home: {
    eyebrowNum: '(11)',
    eyebrowText: 'FAQ',
    heading: 'Questions before you switch',
    description: 'Straight answers on fees, safety and moving your accounts.',
    assistanceTitle: 'Still deciding?',
    assistanceCopy: 'A named banker replies within one business day.',
    assistanceCta: { label: 'Talk to an advisor', href: '/contact-v2' },
    items: [
      {
        question: 'What does an account cost?',
        answer:
          'Everyday accounts are free for the first year. Advisory fees are shown in writing before you sign anything.',
      },
      {
        question: 'How is my money protected?',
        answer:
          'Deposits are covered by your national guarantee scheme, and every login uses two-factor sign-in.',
      },
      {
        question: 'Can you move my existing accounts?',
        answer:
          'Yes. Your banker handles the transfer and redirects your regular payments for you.',
      },
      {
        question: 'Do I need a minimum balance?',
        answer:
          'There is no minimum for everyday banking. Wealth plans start from a sample threshold you can edit.',
      },
      {
        question: 'Can I bank fully from my phone?',
        answer:
          'Most tasks work in the app, and our branches stay open by appointment.',
      },
    ],
  },
  homeV2: {
    eyebrowNum: '(09)',
    eyebrowText: 'FAQ',
    heading: 'App and account questions',
    description:
      'What to expect when you open an account and start banking from your phone.',
    assistanceTitle: 'Need a hand with the app?',
    assistanceCopy:
      'Message your banker in the app and get a reply the same business day.',
    assistanceCta: { label: 'Talk to an advisor', href: '/contact-v1' },
    items: [
      {
        question: 'How long does it take to open an account?',
        answer:
          'Most applications are approved in about ten minutes, and your virtual card is ready to use straight away.',
      },
      {
        question: 'Which phones does the app support?',
        answer:
          'The app runs on all recent smartphones and tablets, and you can also sign in from any web browser.',
      },
      {
        question: 'Can I add my card to a mobile wallet?',
        answer:
          "Yes. Add your card to your phone's digital wallet from the app as soon as your account opens.",
      },
      {
        question: 'What happens if I lose my phone?',
        answer:
          'Call us or sign in on the web to lock the app and your cards. Your money stays protected while you set up a new device.',
      },
      {
        question: 'Are there fees for spending abroad?',
        answer:
          'Card payments abroad use the live exchange rate with no foreign transaction fee. ATM limits are shown in the app.',
      },
    ],
  },
  servicesV1: {
    eyebrowNum: '(07)',
    eyebrowText: 'FAQ',
    heading: 'Questions about our services',
    description:
      'How the six services fit together, and how to choose where to begin.',
    assistanceTitle: 'Not sure which service fits?',
    assistanceCopy:
      'Book a short call and an advisor will point you to the right starting place.',
    assistanceCta: { label: 'Talk to an advisor', href: '/contact-v1' },
    items: [
      {
        question: 'Can I use more than one service?',
        answer:
          'Yes. Most clients combine two or three, and one advisor coordinates all of them under a single plan.',
      },
      {
        question: 'Is there a minimum to start?',
        answer:
          'Everyday banking has no minimum. Wealth and portfolio services start from sample thresholds you can edit.',
      },
      {
        question: 'How are service fees charged?',
        answer:
          'Each service lists its fee up front. Ongoing fees are taken monthly and shown on every statement.',
      },
      {
        question: 'Can I change services later?',
        answer:
          'You can add, pause or close a service at any time, with no exit penalty.',
      },
      {
        question: 'Who manages my services day to day?',
        answer:
          'Your named advisor leads the relationship, supported by specialists for lending, tax and investments.',
      },
    ],
  },
  servicesV2: {
    eyebrowNum: '(08)',
    eyebrowText: 'FAQ',
    heading: 'Business banking questions',
    description:
      'What owners ask before moving company accounts, credit and payroll to us.',
    assistanceTitle: 'Running a bigger operation?',
    assistanceCopy:
      'Ask for a call with our business banking lead to plan a group setup.',
    assistanceCta: { label: 'Talk to an advisor', href: '/contact-v1' },
    items: [
      {
        question: 'What do I need to open a business account?',
        answer:
          'Your company registration number, details of each director and a recent proof of address for the business.',
      },
      {
        question: 'Can several people use the account?',
        answer:
          'Yes. Add staff with their own cards and set approval rules for payments above a limit you choose.',
      },
      {
        question: 'Do you offer business credit?',
        answer:
          'We offer overdrafts, term loans and equipment finance, each priced after a review of your accounts.',
      },
      {
        question: 'Does it connect to accounting software?',
        answer:
          'Transactions sync daily with popular accounting tools, so reconciliation takes minutes.',
      },
      {
        question: 'Can you help with my personal finances too?',
        answer:
          'Many owners pair business banking with wealth or retirement planning, managed by the same team.',
      },
    ],
  },
  servicesV3: {
    eyebrowNum: '(08)',
    eyebrowText: 'FAQ',
    heading: 'Questions about the planning process',
    description:
      'What happens between your first call and your first annual review.',
    assistanceTitle: 'Want to see a sample plan?',
    assistanceCopy:
      'Ask your advisor for an anonymised example before you commit.',
    assistanceCta: { label: 'Talk to an advisor', href: '/contact-v1' },
    items: [
      {
        question: 'How long does it take to build a plan?',
        answer:
          'Most plans are written, agreed and funded within four to six weeks of the first call.',
      },
      {
        question: 'What should I bring to the first meeting?',
        answer:
          'Recent statements for your accounts, pensions and loans, plus a rough idea of your goals.',
      },
      {
        question: 'Do I have to move my investments?',
        answer:
          'Not always. We review what you hold first and only suggest changes that clearly improve your plan.',
      },
      {
        question: 'How often is my plan reviewed?',
        answer:
          'You get a quarterly report and a full review every year, plus extra reviews when your life changes.',
      },
      {
        question: 'Can my partner join the meetings?',
        answer:
          'Yes. We encourage couples to plan together, and both of you get access to the client portal.',
      },
    ],
  },
  serviceDetail: {
    eyebrowNum: '(04)',
    eyebrowText: 'FAQ',
    heading: 'Questions about this service',
    description:
      'Who it suits, what it costs and how it fits with the rest of your finances.',
    assistanceTitle: 'Is this service right for you?',
    assistanceCopy:
      'Book a free introductory call and we will tell you honestly if it fits.',
    assistanceCta: { label: 'Talk to an advisor', href: '/contact-v1' },
    items: [
      {
        question: 'Who is this service designed for?',
        answer:
          'The overview above lists the clients it suits best. Your advisor confirms the fit on your first call.',
      },
      {
        question: 'How is the fee calculated?',
        answer:
          'Each service has a published fee, confirmed in a written quote before you sign anything.',
      },
      {
        question: 'How long does setup take?',
        answer:
          'Most services are live within two weeks of accepting your quote.',
      },
      {
        question: 'Can I combine it with other services?',
        answer:
          'Yes. Every service shares one advisor, one statement and one login.',
      },
      {
        question: 'What if my needs change?',
        answer:
          'Tell your advisor and the service is adjusted at your next review, or sooner if it matters.',
      },
    ],
  },
  pricing: {
    eyebrowNum: '(06)',
    eyebrowText: 'FAQ',
    heading: 'Questions about fees and billing',
    description: 'How we charge, when we charge and what is never charged.',
    assistanceTitle: 'Want a personal fee quote?',
    assistanceCopy:
      'Your advisor can model the exact fees for your balances before you sign up.',
    assistanceCta: { label: 'Talk to an advisor', href: '/contact-v1' },
    items: [
      {
        question: 'When are fees taken?',
        answer:
          'Monthly plan fees are taken on the first of each month. Percentage fees are worked out daily and charged monthly.',
      },
      {
        question: 'Are there exit or transfer fees?',
        answer:
          'No. You can move or close any account or portfolio without an exit penalty.',
      },
      {
        question: 'What does the percentage fee cover?',
        answer:
          'Portfolio management, rebalancing, reporting and advisor reviews. Fund costs are listed separately on every statement.',
      },
      {
        question: 'Can I switch plans later?',
        answer:
          'Yes. Move up or down at any time, and the new fee applies from the next billing month.',
      },
      {
        question: 'Do you earn commission on products?',
        answer:
          'Never. We are paid only by your fees, so no recommendation earns us a commission.',
      },
    ],
  },
  contactV1: {
    eyebrowNum: '(04)',
    eyebrowText: 'FAQ',
    heading: 'Before you get in touch',
    description: 'What happens after you send a message or book a meeting.',
    assistanceTitle: 'Prefer to talk now?',
    assistanceCopy:
      'Call our London office and an advisor will pick up during business hours.',
    assistanceCta: { label: 'Call the office', href: 'tel:+442079460182' },
    items: [
      {
        question: 'How quickly will someone reply?',
        answer:
          'Every enquiry gets a personal reply from an advisor within one business day.',
      },
      {
        question: 'Is the first meeting free?',
        answer:
          'Yes. The first conversation carries no cost or obligation, by phone, video or in person.',
      },
      {
        question: 'Can I meet at a branch?',
        answer:
          'All four branches take appointments. Mention your nearest office when you send the form.',
      },
      {
        question: 'What should I put in my message?',
        answer:
          'A short note on your goals and timeline is enough. We ask for documents later, only if needed.',
      },
      {
        question: 'Do you work with clients abroad?',
        answer:
          'We serve clients across Europe by video call, with multi-currency accounts for those living overseas.',
      },
    ],
  },
  contactV2: {
    eyebrowNum: '(04)',
    eyebrowText: 'FAQ',
    heading: 'Support questions',
    description: 'Quick answers for clients who already bank with Vaxmor.',
    assistanceTitle: 'Card lost or stolen?',
    assistanceCopy:
      'Call our card line any time, day or night, to block it straight away.',
    assistanceCta: { label: 'Call the card line', href: 'tel:+442079460182' },
    items: [
      {
        question: 'How do I reset my app password?',
        answer:
          'Tap Forgot password on the sign-in screen and confirm with your face or fingerprint.',
      },
      {
        question: 'How do I report a suspicious payment?',
        answer:
          'Freeze your card in the app, then call us. We investigate and update you within two business days.',
      },
      {
        question: 'Can I change my named banker?',
        answer:
          'Yes. Ask in the app or by email and we will introduce you to another advisor.',
      },
      {
        question: 'Where do I find my statements?',
        answer:
          'Monthly statements sit in the Documents tab of the app and client portal, going back seven years.',
      },
      {
        question: 'How do I make a complaint?',
        answer:
          'Email or call us and a senior team member responds within five business days. Sample process, edit for your region.',
      },
    ],
  },
};
