import type { Photo } from '@/lib/content';

type Experience = Readonly<{
  name: string;
  year: string | null;
  category: string;
  photo: Photo | null;
}>;

export type Affiliation = Readonly<{
  name: string;
  photo: Photo;
  video?: string;
}>;

const affiliations: readonly Affiliation[] = [
  {
    name: 'Pspsstore',
    photo: {
      id: 'pspsstore',
      src: '/images/collaborations/pspsstore.webp',
      alt: 'Cuplikan video Pspsstore.',
      width: 540,
      height: 960,
    },
    video: '/videos/pspsstore.mp4',
  },
  {
    name: 'Al Azhar',
    photo: {
      id: 'al-azhar',
      src: '/images/collaborations/al-azhar.webp',
      alt: 'Pemain basket mengangkat bola di lapangan Al Azhar.',
      width: 1365,
      height: 2048,
    },
  },
  {
    name: 'Curva Apparel',
    photo: {
      id: 'curva',
      src: '/images/collaborations/curva.webp',
      alt: 'Koleksi pakaian Curva Apparel pada rak gantung.',
      width: 1080,
      height: 1350,
    },
  },
  {
    name: 'Persega FC',
    photo: {
      id: 'persega',
      src: '/images/collaborations/persega.webp',
      alt: 'Pemain Persega FC berseragam kuning di lapangan.',
      width: 2048,
      height: 1365,
    },
  },
];

const experiences: readonly Experience[] = [
  {
    name: 'Kampanye Walikota',
    year: '2024',
    category: 'Kampanye',
    photo: {
      id: 'kampanye',
      src: '/images/experiences/kampanye.webp',
      alt: 'Pembicara memegang mikrofon dalam kegiatan kampanye.',
      width: 1112,
      height: 1161,
    },
  },
  {
    name: 'EPA PSPS',
    year: '2025',
    category: 'Olahraga',
    photo: {
      id: 'epa',
      src: '/images/experiences/epa.webp',
      alt: 'Para pemain mengikuti latihan sepak bola EPA PSPS.',
      width: 1179,
      height: 869,
    },
  },
  {
    name: 'Piala Walikota x ISAC',
    year: null,
    category: 'Olahraga',
    photo: {
      id: 'piala-walikota',
      src: '/images/experiences/piala-walikota.webp',
      alt: 'Tiga peserta berbincang dengan mikrofon pada acara Piala Walikota.',
      width: 2400,
      height: 1597,
    },
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
    display: '0877-5205-3779',
    href: 'tel:+6287752053779',
  },
  whatsappNumber: '6287752053779',
  albumHighlights,
  photographerPortrait: {
    id: 'hero-portrait',
    src: '/images/profile/hero.webp',
    alt: 'Fotografer Zaustory membidik melalui kamera.',
    width: 981,
    height: 1602,
  } satisfies Photo,
  aboutPortrait: {
    id: 'about-portrait',
    src: '/images/profile/about.webp',
    alt: 'Fotografer Zaustory berdiri membawa kamera.',
    width: 382,
    height: 653,
  } satisfies Photo,
  socialImage: {
    url: '/brand/zaustory-navy.png',
    width: 600,
    height: 600,
    alt: 'Logo Zaustory pada latar navy',
  },
  experiences,
  affiliations,
} as const;
