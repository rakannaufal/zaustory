import type { MetadataRoute } from 'next';
import { albums } from '@/content/albums';
import { publicConfig } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  if (!publicConfig.allowIndexing || !publicConfig.origin) return [];
  const origin = publicConfig.origin;
  return [
    { url: origin },
    ...albums.map((album) => ({ url: `${origin}/album/${album.slug}` })),
  ];
}
