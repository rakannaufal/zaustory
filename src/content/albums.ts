import { defineAlbums } from '@/lib/content';

export const albums = defineAlbums([
  {
    slug: 'minsoc',
    name: 'Minsoc',
    category: 'Olahraga',
    description:
      'Permainan cepat, ruang yang dekat. Cerita dari lapangan minisoccer.',
    plannedCount: 20,
    photos: [],
  },
  {
    slug: 'lapangan-bola',
    name: 'Lapangan bola',
    category: 'Olahraga',
    description:
      'Pertandingan, pergerakan, dan cerita yang tumbuh di lapangan sepak bola.',
    plannedCount: 10,
    photos: [],
  },
  {
    slug: 'basket',
    name: 'Basket',
    category: 'Olahraga',
    description: 'Ritme permainan dan momen di antara setiap lemparan.',
    plannedCount: 10,
    photos: [],
  },
  {
    slug: 'padel',
    name: 'Padel',
    category: 'Olahraga',
    description:
      'Pertemuan gerak, permainan, dan cerita di dalam lapangan padel.',
    plannedCount: 10,
    photos: [],
  },
  {
    slug: 'event',
    name: 'Event',
    category: 'Event',
    description:
      'Orang-orang, suasana, dan momen yang membuat sebuah acara berarti.',
    plannedCount: 30,
    photos: [],
  },
]);

export function getAlbumBySlug(slug: string) {
  return albums.find((album) => album.slug === slug);
}
