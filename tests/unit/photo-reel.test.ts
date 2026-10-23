import { describe, expect, it } from 'vitest';
import { albums } from '@/content/albums';
import { createPhotoReelRows } from '@/lib/photo-reel';
import { testPhotos } from '../fixtures/photos';

describe('photo reel content', () => {
  it('provides two placeholder rows covering every album when no photos exist', () => {
    const rows = createPhotoReelRows(
      albums.map((album) => ({ ...album, photos: [] })),
    );
    expect(rows).toHaveLength(2);
    expect(rows.every((row) => row.length >= 6)).toBe(true);
    expect(new Set(rows.flat().map((frame) => frame.albumName))).toEqual(
      new Set(albums.map((album) => album.name)),
    );
    expect(rows.flat().every((frame) => frame.photo === null)).toBe(true);
  });

  it('mixes published photos across albums, keeps stable order and preserves input', () => {
    const source = albums.map((album, index) => ({
      ...album,
      photos: index < 2 ? testPhotos : [],
    }));
    const original = structuredClone(source);
    const rows = createPhotoReelRows(source);
    expect(rows).toEqual(createPhotoReelRows(source));
    expect(source).toEqual(original);
    expect(rows.flat().every((frame) => frame.photo !== null)).toBe(true);
    expect(new Set(rows.flat().map((frame) => frame.id)).size).toBe(4);
    expect(new Set(rows.flat().map((frame) => frame.albumName))).toEqual(
      new Set(['Minsoc', 'Football']),
    );
  });

  it('caps the selection at twenty photos and handles an empty collection', () => {
    const source = albums.map((album) => ({
      ...album,
      photos: Array.from({ length: 10 }, (_, index) => ({
        ...testPhotos[0]!,
        id: `photo-${index}`,
      })),
    }));
    const frames = createPhotoReelRows(source).flat();
    expect(frames).toHaveLength(20);
    expect(new Set(frames.map((frame) => frame.id)).size).toBe(20);
    expect(createPhotoReelRows([])).toEqual([[], []]);
  });
});
