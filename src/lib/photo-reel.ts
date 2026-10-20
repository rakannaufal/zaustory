import type { Album, Photo } from './content';

export type ReelFrame = Readonly<{
  id: string;
  albumName: string;
  photo: Photo | null;
}>;

export function createPhotoReelRows(
  albums: readonly Album[],
): [ReelFrame[], ReelFrame[]] {
  const photos: ReelFrame[] = albums.flatMap((album) =>
    album.photos.map((photo) => ({
      id: `${album.slug}-${photo.id}`,
      albumName: album.name,
      photo,
    })),
  );
  const pool: ReelFrame[] = photos.length
    ? photos
    : albums.map((album) => ({
        id: album.slug,
        albumName: album.name,
        photo: null,
      }));

  if (!pool.length) return [[], []];

  // A seeded shuffle keeps static HTML and hydration in the same order.
  let seed = 20261020;
  for (let index = pool.length - 1; index > 0; index -= 1) {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    const swap = seed % (index + 1);
    [pool[index], pool[swap]] = [pool[swap]!, pool[index]!];
  }

  const selection = pool.slice(0, 20);
  const frames = Array.from(
    { length: Math.max(12, selection.length) },
    (_, index) => selection[index % selection.length]!,
  );

  return [
    frames.filter((_, index) => index % 2 === 0),
    frames.filter((_, index) => index % 2 === 1),
  ];
}
