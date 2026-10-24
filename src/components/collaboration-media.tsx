'use client';

import { useState } from 'react';
import type { Affiliation } from '@/content/site';
import type { Photo } from '@/lib/content';
import { PhotoPreview } from '@/components/photo-preview';

export function CollaborationMedia({
  item,
  photos,
}: {
  item: Affiliation;
  photos: readonly Photo[];
}) {
  const [failed, setFailed] = useState(false);

  if (!item.video || failed) {
    return (
      <>
        <PhotoPreview
          photo={item.photo}
          photos={failed ? [item.photo] : photos}
          sizes="(max-width: 1040px) 45vw, 23vw"
        />
        {failed && (
          <p className="collaboration-error">Video tidak dapat dimuat.</p>
        )}
      </>
    );
  }

  return (
    <video
      data-reveal="fade"
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
