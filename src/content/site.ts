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

export const site = {
  name: 'Zaustory',
  description:
    'Portofolio fotografi olahraga dan event Zaustory. Jelajahi album Minsoc, lapangan bola, basket, padel, dan event.',
  instagram: 'https://www.instagram.com/zaustory/',
  instagramHandle: '@zaustory',
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
