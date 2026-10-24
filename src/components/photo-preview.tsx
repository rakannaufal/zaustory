'use client';

import { Expand } from 'lucide-react';
import { useCallback, useState } from 'react';
import type { Photo } from '@/lib/content';
import { PhotoImage } from './photo-image';
import { PhotoLightbox } from './photo-lightbox';

export function PhotoPreview({
  photo,
  photos = [photo],
  sizes,
  mode = 'cover',
}: {
  photo: Photo;
  photos?: readonly Photo[];
  sizes: string;
  mode?: 'cover' | 'contain';
}) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <button
        type="button"
        className="photo-open-button photo-preview"
        aria-label={`Perbesar foto: ${photo.alt}`}
        onClick={() => setOpen(true)}
      >
        <span className="photo-preview-visual" data-reveal="media">
          <PhotoImage photo={photo} sizes={sizes} mode={mode} />
          <span className="photo-expand" aria-hidden="true">
            <Expand size={21} />
          </span>
        </span>
      </button>
      {open && (
        <PhotoLightbox
          photos={photos}
          initialIndex={Math.max(
            0,
            photos.findIndex(({ id }) => id === photo.id),
          )}
          onClose={close}
        />
      )}
    </>
  );
}
