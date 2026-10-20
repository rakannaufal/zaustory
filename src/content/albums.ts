import { defineAlbums } from '@/lib/content';

export const albums = defineAlbums([
  {
    slug: 'minsoc',
    name: 'Minsoc',
    category: 'Olahraga',
    description:
      'Aksi pertandingan dan kebersamaan tim di lapangan minisoccer.',
    plannedCount: 20,
    photos: [],
  },
  {
    slug: 'lapangan-bola',
    name: 'Lapangan bola',
    category: 'Olahraga',
    description:
      'Duel di lapangan, selebrasi, dan suasana pertandingan sepak bola.',
    plannedCount: 10,
    photos: [],
  },
  {
    slug: 'basket',
    name: 'Basket',
    category: 'Olahraga',
    description:
      'Perebutan bola, tembakan ke ring, dan ekspresi di tepi lapangan.',
    plannedCount: 10,
    photos: [],
  },
  {
    slug: 'padel',
    name: 'Padel',
    category: 'Olahraga',
    description: 'Reli, gerak pemain, dan momen bersama di lapangan padel.',
    plannedCount: 10,
    photos: [],
  },
  {
    slug: 'event',
    name: 'Event',
    category: 'Event',
    description:
      'Rangkaian acara, suasana, dan orang-orang yang hadir di dalamnya.',
    plannedCount: 30,
    photos: [],
  },
]);

export function getAlbumBySlug(slug: string) {
  return albums.find((album) => album.slug === slug);
}
