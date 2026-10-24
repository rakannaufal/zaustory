'use client';

import { useState } from 'react';
import type { Affiliation } from '@/content/site';
import { PhotoImage } from '@/components/photo-image';

export function CollaborationMedia({ item }: { item: Affiliation }) {
  const [failed, setFailed] = useState(false);

  if (!item.video || failed) {
    return (
      <>
        <PhotoImage photo={item.photo} sizes="(max-width: 1040px) 45vw, 23vw" />
        {failed && (
          <p className="collaboration-error">Video tidak dapat dimuat.</p>
        )}
      </>
    );
  }

  return (
    <video
      aria-label={`Video ${item.name}`}
      src={item.video}
      poster={item.photo.src}
      controls
      playsInline
      muted
      preload="none"
      width={item.photo.width}
      height={item.photo.height}
      onError={() => setFailed(true)}
    >
      Browser ini tidak mendukung pemutaran video.
    </video>
  );
}
