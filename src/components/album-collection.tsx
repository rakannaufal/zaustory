'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import type { Album } from '@/lib/content';
import { ImagePlaceholder } from './image-placeholder';
import { PhotoImage } from './photo-image';

const filters = ['Semua', 'Olahraga', 'Event'] as const;

export function AlbumCollection({ albums }: { albums: readonly Album[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>('Semua');
  const visibleAlbums = albums.filter(
    (album) => filter === 'Semua' || album.category === filter,
  );

  return (
    <>
      <div className="album-toolbar">
        <div
          className="album-filters"
          role="group"
          aria-label="Filter kategori album"
        >
          {filters.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={filter === category}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <p role="status" className="album-result-count">
          {visibleAlbums.length} album
        </p>
      </div>

      <div className="album-grid" data-testid="album-grid">
        {visibleAlbums.map((album) => {
          const cover = album.photos[0];

          return (
            <Link
              href={`/album/${album.slug}`}
              key={album.slug}
              className={`album-card album-card-${album.slug}`}
            >
              <div
                className={`album-cover album-cover-${album.slug}`}
                data-reveal="media"
              >
                {cover ? (
                  <PhotoImage
                    photo={cover}
                    sizes="(max-width: 760px) 100vw, 65vw"
                  />
                ) : (
                  <ImagePlaceholder
                    label={`Sampul album ${album.name}. Foto belum tersedia.`}
                    caption=""
                  />
                )}
                <span className="album-open" aria-hidden="true">
                  <ArrowUpRight size={25} />
                </span>
                <div className="album-card-details">
                  <span className="album-category">{album.category}</span>
                  <h3>{album.name}</h3>
                  <p className="album-description">{album.description}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
