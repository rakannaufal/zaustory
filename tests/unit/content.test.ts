import { describe, expect, it } from 'vitest';
import { albums } from '@/content/albums';
import { defineAlbums, type Album } from '@/lib/content';
import { testPhotos } from '../fixtures/photos';

const validAlbum: Album = {
  slug: 'test-album',
  name: 'Test album',
  category: 'Olahraga',
  description: 'Test content',
  plannedCount: 2,
  photos: testPhotos,
};

describe('portfolio content contract', () => {
  it('preserves the four requested albums and distinguishes planned work from published work', () => {
    expect(
      albums.map(({ slug, plannedCount }) => [slug, plannedCount]),
    ).toEqual([
      ['minsoc', 20],
      ['lapangan-bola', 10],
      ['basket', 10],
      ['event', 30],
    ]);
    expect(
      albums.reduce((count, album) => count + album.photos.length, 0),
    ).toBe(30);
    expect(albums.map((album) => album.photos.length)).toEqual([10, 10, 10, 0]);
  });

  it('accepts real photo metadata with local raster paths', () => {
    expect(defineAlbums([validAlbum])).toEqual([validAlbum]);
  });

  it('rejects duplicate routes and duplicate photo identifiers', () => {
    expect(() => defineAlbums([validAlbum, validAlbum])).toThrow(
      'duplicate album slug',
    );
    expect(() =>
      defineAlbums([
        { ...validAlbum, photos: [testPhotos[0]!, testPhotos[0]!] },
      ]),
    ).toThrow('Invalid photo');
  });

  it.each([
    'https://example.com/photo.jpg',
    '/images/../private.jpg',
    '/images/test/photo.svg',
    '/images/test/photo.jpg?x=1',
    '/images/test/%2e%2e/photo.jpg',
  ])('rejects unsafe or unsupported photo source %s', (src) => {
    expect(() =>
      defineAlbums([{ ...validAlbum, photos: [{ ...testPhotos[0]!, src }] }]),
    ).toThrow('Invalid photo');
  });

  it('rejects missing alt, invalid dimensions, and counts over the planned limit', () => {
    for (const invalid of [
      { alt: ' ' },
      { width: 0 },
      { height: -1 },
      { width: 1.5 },
    ]) {
      expect(() =>
        defineAlbums([
          { ...validAlbum, photos: [{ ...testPhotos[0]!, ...invalid }] },
        ]),
      ).toThrow('Invalid photo');
    }
    expect(() => defineAlbums([{ ...validAlbum, plannedCount: 1 }])).toThrow(
      'Invalid album content',
    );
  });
});
