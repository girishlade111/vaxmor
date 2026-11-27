export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  showInSixCardGrid: boolean;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'celine-hart',
    name: 'Céline Hart',
    role: 'Founder, Chief Executive',
    bio: 'Founded Vaxmor in 2001 after two decades in private banking. Still meets every new wealth client personally.',
    photo:
      '/assets/images/media/6af5425e48b17c8a81d399fc_professional-portrait-6-1.webp',
    showInSixCardGrid: true,
  },
  {
    id: 'idris-bello',
    name: 'Idris Bello',
    role: 'Chief Investment Officer',
    bio: 'Leads portfolio strategy and risk, turning market research into clear, diversified portfolios.',
    photo:
      '/assets/images/media/6af5425e48b17c8a81d39a03_portrait-of-a-man-1.webp',
    showInSixCardGrid: true,
  },
  {
    id: 'rosa-kwan',
    name: 'Rosa Kwan',
    role: 'Head of Private Banking',
    bio: 'Looks after relationship bankers and makes sure every client gets a fast, personal answer.',
    photo:
      '/assets/images/media/6af5425e48b17c8a81d39a05_smiling-professional-portrait-1.webp',
    showInSixCardGrid: true,
  },
  {
    id: 'henrik-sund',
    name: 'Henrik Sund',
    role: 'Head of Lending',
    bio: 'Structures mortgages and business credit around the whole balance sheet, not a single payslip.',
    photo:
      '/assets/images/media/6af5425e48b17c8a81d399fe_professional-portrait-8-1.webp',
    showInSixCardGrid: false,
  },
  {
    id: 'priya-ramanathan',
    name: 'Priya Ramanathan',
    role: 'Senior Wealth Advisor',
    bio: 'Advises founders and families on tax, pensions and long-term succession plans.',
    photo:
      '/assets/images/media/6af5425e48b17c8a81d39a0c_professional-portrait-5-1.webp',
    showInSixCardGrid: true,
  },
  {
    id: 'lea-bonnet',
    name: 'Léa Bonnet',
    role: 'Retirement Planner',
    bio: 'Builds retirement income and drawdown schedules tailored to each household.',
    photo:
      '/assets/images/media/6af5425e48b17c8a81d39a0a_smiling-man-portrait-1.webp',
    showInSixCardGrid: true,
  },
  {
    id: 'tomasz-wilk',
    name: 'Tomasz Wilk',
    role: 'Business Banking Lead',
    bio: 'Works with founders and finance directors on working capital, FX and treasury.',
    photo:
      '/assets/images/media/6af5425e48b17c8a81d39a02_confident-portrait-1.webp',
    showInSixCardGrid: true,
  },
];
