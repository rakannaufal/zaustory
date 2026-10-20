import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { PhotoGallery } from '@/components/photo-gallery';
import { albums, getAlbumBySlug } from '@/content/albums';
import { site } from '@/content/site';
import { publicConfig } from '@/lib/config';

type AlbumPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return albums.map((album) => ({ slug: album.slug }));
}

export async function generateMetadata({
  params,
}: AlbumPageProps): Promise<Metadata> {
  const { slug } = await params;
  const album = getAlbumBySlug(slug);
  if (!album) return { title: 'Album tidak ditemukan' };

  return {
    title: `Album ${album.name}`,
    description: `${album.description} Portofolio fotografi ${album.category.toLowerCase()} Zaustory.`,
    ...(publicConfig.origin
      ? { alternates: { canonical: `/album/${album.slug}` } }
      : {}),
    openGraph: {
      title: `Album ${album.name} | Zaustory`,
      description: album.description,
      ...(publicConfig.origin
        ? { url: `/album/${album.slug}`, images: [site.socialImage] }
        : {}),
    },
  };
}

export default async function AlbumPage({ params }: AlbumPageProps) {
  const { slug } = await params;
  const album = getAlbumBySlug(slug);
  if (!album) notFound();

  const position = albums.findIndex((item) => item.slug === slug);
  const nextAlbum = albums[(position + 1) % albums.length];

  return (
    <main id="main" tabIndex={-1} className="album-page">
      <div className="container">
        <Link href="/#album" className="text-link back-link">
          <ArrowLeft size={18} aria-hidden="true" />
          Kembali ke album
        </Link>
        <header className="album-page-heading">
          <div>
            <p className="eyebrow">{album.category}</p>
            <h1>
              {album.name}
              <span className="album-title-period">.</span>
            </h1>
          </div>
          <div className="album-page-description">
            <p>{album.description}</p>
            <dl>
              <div>
                <dt>Tayang</dt>
                <dd>{album.photos.length} foto</dd>
              </div>
              <div>
                <dt>Rencana</dt>
                <dd>{album.plannedCount} foto</dd>
              </div>
            </dl>
          </div>
        </header>
        <section
          className="album-gallery-section"
          aria-label={`Foto album ${album.name}`}
        >
          <PhotoGallery
            photos={album.photos}
            albumName={album.name}
            plannedCount={album.plannedCount}
          />
        </section>
        {nextAlbum && (
          <Link href={`/album/${nextAlbum.slug}`} className="next-album-link">
            <div>
              <p>Album berikutnya</p>
              <span>{nextAlbum.name}</span>
            </div>
            <ArrowUpRight size={42} aria-hidden="true" />
          </Link>
        )}
      </div>
    </main>
  );
}
