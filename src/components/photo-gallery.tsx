'use client';

import { ArrowUpRight, Expand } from 'lucide-react';
import { useCallback, useState } from 'react';
import { site } from '@/content/site';
import type { Photo } from '@/lib/content';
import { PhotoImage } from './photo-image';
import { PhotoLightbox } from './photo-lightbox';

export function PhotoGallery({
  photos,
  albumName,
  instagramHighlight,
}: {
  photos: readonly Photo[];
  albumName: string;
  instagramHighlight?: string;
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const close = useCallback(() => setSelectedIndex(null), []);

  return (
    <>
      {photos.length === 0 && (
        <div className="gallery-notice">
          <div>
            <p className="empty-status">Foto belum tersedia</p>
            <p>Lihat karya lainnya di Instagram Zaustory.</p>
          </div>
          <a
            className="text-link"
            href={instagramHighlight ?? site.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            {instagramHighlight
              ? `Lihat sorotan ${albumName}`
              : 'Lihat Instagram'}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      )}
      {photos.length > 0 && (
        <ol className="photo-grid" aria-label={`Galeri ${albumName}`}>
          {photos.map((photo, index) => (
            <li key={photo.id}>
              <button
                type="button"
                className="photo-open-button"
                style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
                aria-label={`Perbesar foto: ${photo.alt}`}
                onClick={() => setSelectedIndex(index)}
              >
                <span className="photo-preview-visual" data-reveal="media">
                  <PhotoImage
                    photo={photo}
                    sizes="(max-width: 760px) 50vw, 33vw"
                  />
                  <span className="photo-expand" aria-hidden="true">
                    <Expand size={21} />
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ol>
      )}
      {selectedIndex !== null && (
        <PhotoLightbox
          photos={photos}
          initialIndex={selectedIndex}
          onClose={close}
        />
      )}
    </>
  );
}
