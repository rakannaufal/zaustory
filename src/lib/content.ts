export type Photo = Readonly<{
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}>;

export type Album = Readonly<{
  slug: string;
  name: string;
  category: 'Olahraga' | 'Event';
  description: string;
  plannedCount: number;
  photos: readonly Photo[];
}>;

const identifierPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const photoPathPattern =
  /^\/images\/(?:[a-zA-Z0-9_-]+\/)*[a-zA-Z0-9_-]+\.(?:jpe?g|png|webp|avif)$/i;

export function defineAlbums(input: readonly Album[]): readonly Album[] {
  const slugs = new Set<string>();

  for (const album of input) {
    if (!identifierPattern.test(album.slug) || slugs.has(album.slug)) {
      throw new Error(`Invalid or duplicate album slug: ${album.slug}`);
    }
    slugs.add(album.slug);

    if (
      !album.name.trim() ||
      !album.description.trim() ||
      !['Olahraga', 'Event'].includes(album.category) ||
      !Number.isInteger(album.plannedCount) ||
      album.plannedCount < 1 ||
      album.photos.length > album.plannedCount
    ) {
      throw new Error(`Invalid album content: ${album.slug}`);
    }

    const photoIds = new Set<string>();
    for (const photo of album.photos) {
      if (
        !identifierPattern.test(photo.id) ||
        photoIds.has(photo.id) ||
        !photoPathPattern.test(photo.src) ||
        !photo.alt.trim() ||
        !Number.isInteger(photo.width) ||
        !Number.isInteger(photo.height) ||
        photo.width < 1 ||
        photo.height < 1 ||
        photo.width > 16000 ||
        photo.height > 16000
      ) {
        throw new Error(`Invalid photo in ${album.slug}: ${photo.id}`);
      }
      photoIds.add(photo.id);
    }
  }

  return input;
}
