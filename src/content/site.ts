import type { Photo } from '@/lib/content';

type Experience = Readonly<{
  name: string;
  year: string | null;
  category: string;
  photo: Photo | null;
}>;

const experiences: readonly Experience[] = [
  {
    name: 'Kampanye Walikota',
    year: '2024',
    category: 'Kampanye',
    photo: null,
  },
  { name: 'EPA PSPS', year: '2025', category: 'Olahraga', photo: null },
  {
    name: 'Piala Walikota x ISAC',
    year: null,
    category: 'Olahraga',
    photo: null,
  },
];

const albumHighlights: Readonly<Record<string, string>> = {
  minsoc: 'https://www.instagram.com/stories/highlights/18046316087620940/',
  'lapangan-bola':
    'https://www.instagram.com/stories/highlights/17875753182361815/',
  basket: 'https://www.instagram.com/stories/highlights/17963732528941047/',
  event: 'https://www.instagram.com/stories/highlights/17986710449824514/',
};

export const site = {
  name: 'Zaustory',
  title: 'Zaustory | Fotografi olahraga & event Pekanbaru',
  profileName: 'Zau Story | Agency Media',
  description:
    'Fotografi olahraga dan event dari Pekanbaru, Riau. Jelajahi album Zaustory, lihat sorotan pertandingan, dan hubungi kami untuk kebutuhan dokumentasimu.',
  location: 'Pekanbaru, Riau',
  instagram: 'https://www.instagram.com/zauustory/',
  instagramHandle: '@zauustory',
  photographer: {
    handle: '@rzzwadzaky',
    instagram: 'https://www.instagram.com/rzzwadzaky/',
  },
  mediaPartner: {
    handle: '@langkaahsenja_',
    instagram: 'https://www.instagram.com/langkaahsenja_/',
  },
  phone: {
    display: '+62 838-5465-3003',
    href: 'tel:+6283854653003',
  },
  albumHighlights,
  photographerPortrait: null as Photo | null,
  socialImage: {
    url: '/brand/zaustory-navy.png',
    width: 600,
    height: 600,
    alt: 'Logo Zaustory pada latar navy',
  },
  experiences,
  affiliations: ['Pspsstore', 'Al Azhar', 'Curva Apparel', 'Persega FC'],
} as const;
