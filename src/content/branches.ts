export interface BranchLocation {
  id: string;
  city: string;
  address: string;
  phone: string;
  openingHours: string;
  image: string;
  referenceOnly: boolean;
}

export const BRANCHES: BranchLocation[] = [
  {
    id: 'london',
    city: 'London',
    address: 'Level 4, 25 King William Street, London EC4R 9AS',
    phone: '+44 20 7946 0182',
    openingHours: 'Mon-Fri 9am-6pm',
    image:
      '/assets/images/architecture/6afc185b581b1db4c2b6d85c_twilight-reflections-on-the-cylindrical-glass-skyscraper-1.webp',
    referenceOnly: true,
  },
  {
    id: 'bristol',
    city: 'Bristol',
    address: '18 Corn Street, Bristol BS1 1HQ',
    phone: '+44 117 496 0190',
    openingHours: 'Mon-Fri 9am-6pm',
    image:
      '/assets/images/architecture/6afc185bec470e75e7741dab_modernist-concrete-building-1.webp',
    referenceOnly: true,
  },
  {
    id: 'edinburgh',
    city: 'Edinburgh',
    address: '42 Thistle Street, Edinburgh EH2 1EN',
    phone: '+44 131 496 0204',
    openingHours: 'Mon-Fri 9am-6pm',
    image:
      '/assets/images/architecture/6afc185bab8c56af9d6173b1_modern-urban-minimalism-1.webp',
    referenceOnly: true,
  },
  {
    id: 'manchester',
    city: 'Manchester',
    address: '9 Blossom Street, Manchester M4 6AJ',
    phone: '+44 161 496 0221',
    openingHours: 'Mon-Fri 9am-5pm',
    image:
      '/assets/images/architecture/6afc185b581b1db4c2b6d85c_twilight-reflections-on-the-cylindrical-glass-skyscraper-1.webp',
    referenceOnly: true,
  },
];
