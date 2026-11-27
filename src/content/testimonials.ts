export interface TestimonialRecord {
  id: string;
  slug: string;
  clientName: string;
  position: string;
  quote: string;
  photo: string;
  photoAlt: string;
  metaDescription: string;
  order: number;
  referenceOnly: boolean;
}

export const TESTIMONIALS: TestimonialRecord[] = [
  {
    id: 'marcus-b',
    slug: 'marcus-b',
    clientName: 'Marcus B.',
    position: 'Wealth management client, London',
    quote:
      'For the first time I can see everything we own on one page. Our advisor turned six accounts and three pensions into one plan we actually understand.',
    photo:
      '/assets/images/media/6af5425e48b17c8a81d3993a_6aa79f39e4ffc4ef227d9100_6a92eddafe4ac4fdef10d1c2_neutral-20portrait-201.webp',
    photoAlt: 'Marcus B. portrait',
    metaDescription:
      'Marcus B., a Vaxmor wealth management client in London, on how one advisor turned six accounts and three pensions into a single plan the family understands.',
    order: 1,
    referenceOnly: true,
  },
  {
    id: 'patricia-h',
    slug: 'patricia-h',
    clientName: 'Patricia H.',
    position: 'Investment portfolio client, Manchester',
    quote:
      'They asked about our plans for the next ten years before they mentioned a single fund. The portfolio still matches the goals we set together.',
    photo:
      '/assets/images/media/6af5425e48b17c8a81d398b5_6aa79f39e4ffc4ef227d90f0_6a92eddafe4ac4fdef10d225_confident-20woman-20portrait-201.webp',
    photoAlt: 'Patricia H. portrait',
    metaDescription:
      'Patricia H., an investment portfolio client in Manchester, on why Vaxmor asked about her ten-year plans first and built a portfolio around those goals.',
    order: 2,
    referenceOnly: true,
  },
  {
    id: 'daniel-k',
    slug: 'daniel-k',
    clientName: 'Daniel K.',
    position: 'Private banking client, Edinburgh',
    quote:
      'Fees are shown in full, reports arrive on time, and my advisor tells me plainly when doing nothing is the right move. That honesty is rare.',
    photo:
      '/assets/images/media/6af5425e48b17c8a81d39905_6aa79f39e4ffc4ef227d90fd_6a92eddafe4ac4fdef10d24a_portrait-20of-20a-20gentleman-201.webp',
    photoAlt: 'Daniel K. portrait',
    metaDescription:
      'Daniel K., a private banking client in Edinburgh, on transparent fees, reports that arrive on time and an advisor honest enough to recommend doing nothing.',
    order: 3,
    referenceOnly: true,
  },
  {
    id: 'james-p',
    slug: 'james-p',
    clientName: 'James P.',
    position: 'Mortgage client, Bristol',
    quote:
      'Our bank saw self-employed income as a problem. Vaxmor read the whole balance sheet and approved our mortgage in under three weeks.',
    photo:
      '/assets/images/media/6af5425e48b17c8a81d398d7_6aa79f39e4ffc4ef227d90f3_6a92eddafe4ac4fdef10d1d8_portrait-20of-20a-20man-20-1-202.webp',
    photoAlt: 'James P. portrait',
    metaDescription:
      'James P., a self-employed mortgage client in Bristol, on how Vaxmor read his whole balance sheet and approved the family mortgage in under three weeks.',
    order: 4,
    referenceOnly: true,
  },
  {
    id: 'maria-s',
    slug: 'maria-s',
    clientName: 'Maria S.',
    position: 'Retirement planning client, Leeds',
    quote:
      'We kept putting off retirement planning. One afternoon with our advisor gave us a date, a monthly number and, finally, some peace of mind.',
    photo:
      '/assets/images/media/6af5425e48b17c8a81d3995d_6aa79f39e4ffc4ef227d9106_6a92eddafe4ac4fdef10d24c_professional-20portrait-20-10-201.webp',
    photoAlt: 'Maria S. portrait',
    metaDescription:
      'Maria S., a retirement planning client in Leeds, on how one afternoon with a Vaxmor advisor gave her family a retirement date, a monthly number and calm.',
    order: 5,
    referenceOnly: true,
  },
  {
    id: 'thomas-w',
    slug: 'thomas-w',
    clientName: 'Thomas W.',
    position: 'Business banking client, Founder',
    quote:
      'International payments that used to take days now clear the same afternoon, and our idle cash finally earns something. Finance stopped being a bottleneck.',
    photo:
      '/assets/images/media/6af5425e48b17c8a81d3991d_6aa79f39e4ffc4ef227d90fa_6a92eddafe4ac4fdef10d24b_portrait-20of-20a-20man-20-2-201.webp',
    photoAlt: 'Thomas W. portrait',
    metaDescription:
      'Thomas W., a business banking client and founder, on same-day international payments and idle cash that now earns, so finance no longer slows his growth.',
    order: 6,
    referenceOnly: true,
  },
  {
    id: 'karen-d',
    slug: 'karen-d',
    clientName: 'Karen D.',
    position: 'Wealth management client, Cambridge',
    quote:
      'When markets dropped, my advisor called me before I could panic. We stayed the course, and I am glad every single day that we did.',
    photo:
      '/assets/images/media/6af5425e48b17c8a81d398ee_6aa79f39e4ffc4ef227d90f6_6a92eddafe4ac4fdef10d1ef_professional-20portrait-20-11-201.webp',
    photoAlt: 'Karen D. portrait',
    metaDescription:
      'Karen D., a wealth management client in Cambridge, on the advisor who called before she could panic in a market drop, and why staying the course paid off.',
    order: 7,
    referenceOnly: true,
  },
  {
    id: 'robert-m',
    slug: 'robert-m',
    clientName: 'Robert M.',
    position: 'Private banking client, Oxford',
    quote:
      'Opening the account took ten minutes, and I have had the same named banker ever since. It feels like a private bank without the old-fashioned stuffiness.',
    photo:
      '/assets/images/media/6af5425e48b17c8a81d3994c_6aa79f39e4ffc4ef227d9103_6a92eddafe4ac4fdef10d238_portrait-20of-20young-20man-201.webp',
    photoAlt: 'Robert M. portrait',
    metaDescription:
      'Robert M., a private banking client in Oxford, on a ten-minute account opening and a named banker who feels like a private bank without the stuffiness.',
    order: 8,
    referenceOnly: true,
  },
];
