'use client';

import { Pause, Play } from 'lucide-react';
import { useState } from 'react';
import type { Album } from '@/lib/content';
import { createPhotoReelRows } from '@/lib/photo-reel';
import { ImagePlaceholder } from './image-placeholder';
import { PhotoImage } from './photo-image';
import { ScrollReveal } from './scroll-reveal';

export function PhotoReel({ albums }: { albums: readonly Album[] }) {
  const [paused, setPaused] = useState(false);
  const rows = createPhotoReelRows(albums);

  if (!rows[0].length) return null;

  return (
    <section
      className="photo-reel"
      aria-label="Pilihan foto dari seluruh album"
      data-paused={paused}
    >
      <button
        className="reel-toggle"
        type="button"
        aria-label={paused ? 'Putar animasi' : 'Jeda animasi'}
        aria-controls="photo-reel-rows"
        onClick={() => setPaused((value) => !value)}
      >
        {paused ? (
          <Play size={18} aria-hidden="true" />
        ) : (
          <Pause size={18} aria-hidden="true" />
        )}
      </button>
      <div id="photo-reel-rows" aria-hidden="true">
        <ScrollReveal className="reel-window">
          {rows.map((frames, row) => (
            <div
              key={row}
              className={`reel-track ${row === 1 ? 'reel-track-right' : ''}`}
            >
              {[0, 1].map((copy) => (
                <div key={copy} className="reel-group">
                  {frames.map((frame, index) => (
                    <figure className="reel-frame" key={`${frame.id}-${index}`}>
                      {frame.photo ? (
                        <PhotoImage
                          photo={frame.photo}
                          sizes="(max-width: 760px) 180px, 288px"
                        />
                      ) : (
                        <ImagePlaceholder
                          label={`Foto album ${frame.albumName} belum tersedia.`}
                          caption=""
                        />
                      )}
                      <figcaption>{frame.albumName}</figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
