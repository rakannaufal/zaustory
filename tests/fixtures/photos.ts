import type { Photo } from '@/lib/content';

// Test data only. These paths are never added to the public portfolio.
export const testPhotos: readonly Photo[] = [
  {
    id: 'test-one',
    src: '/images/test/one.jpg',
    alt: 'Pemain membawa bola',
    width: 1200,
    height: 800,
    caption: 'Caption foto pertama',
  },
  {
    id: 'test-two',
    src: '/images/test/two.jpg',
    alt: 'Tim di tepi lapangan',
    width: 800,
    height: 1200,
  },
];
