'use client';

import Image from 'next/image';
import { ImageOff } from 'lucide-react';
import { useState } from 'react';
import type { Photo } from '@/lib/content';

type PhotoImageProps = {
  photo: Photo;
  sizes: string;
  mode?: 'cover' | 'contain';
  priority?: boolean;
};

export function PhotoImage({
  photo,
  sizes,
  mode = 'cover',
  priority = false,
}: PhotoImageProps) {
  const [failedSource, setFailedSource] = useState<string | null>(null);

  if (failedSource === photo.src) {
    return (
      <div
        className="photo-failure"
        role="img"
        aria-label={`Foto tidak dapat dimuat: ${photo.alt}`}
      >
        <ImageOff size={28} aria-hidden="true" />
        <p>Foto tidak dapat dimuat.</p>
        <span>{photo.alt}</span>
      </div>
    );
  }

  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      width={photo.width}
      height={photo.height}
      sizes={sizes}
      priority={priority}
      className={`photo-image photo-image-${mode}`}
      onError={() => setFailedSource(photo.src)}
    />
  );
}
