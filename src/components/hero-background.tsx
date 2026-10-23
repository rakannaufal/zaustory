'use client';

import Image from 'next/image';
import { useEffect, useState, useSyncExternalStore } from 'react';
import type { Photo } from '@/lib/content';

function subscribeToMotion(callback: () => void) {
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  preference.addEventListener('change', callback);
  document.addEventListener('visibilitychange', callback);
  return () => {
    preference.removeEventListener('change', callback);
    document.removeEventListener('visibilitychange', callback);
  };
}

function motionAllowed() {
  return (
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
    !document.hidden
  );
}

export function HeroBackground({ photos }: { photos: readonly Photo[] }) {
  const [slide, setSlide] = useState({
    current: 0,
    previous: null as number | null,
    ready: true,
  });
  const canAnimate = useSyncExternalStore(
    subscribeToMotion,
    motionAllowed,
    () => false,
  );

  useEffect(() => {
    if (!canAnimate || photos.length < 2) return;

    const timer = window.setInterval(() => {
      const random = Math.random();
      setSlide((current) => {
        if (!current.ready) return current;
        return {
          current:
            (current.current + 1 + Math.floor(random * (photos.length - 1))) %
            photos.length,
          previous: current.current,
          ready: false,
        };
      });
    }, 3000);
    return () => window.clearInterval(timer);
  }, [canAnimate, photos.length]);

  if (!photos.length) return null;

  return (
    <>
      <div className="hero-background" id="hero-background" aria-hidden="true">
        {[slide.previous, slide.current].map((index) => {
          const photo = index === null ? undefined : photos[index];
          if (!photo) return null;
          const isCurrent = index === slide.current;
          return (
            <Image
              key={photo.id}
              src={photo.src}
              alt=""
              width={photo.width}
              height={photo.height}
              sizes="100vw"
              loading="eager"
              fetchPriority={slide.previous === null ? 'high' : 'auto'}
              className="hero-background-image"
              data-current={isCurrent}
              data-visible={!isCurrent || slide.ready}
              onLoad={() => {
                if (isCurrent) {
                  setSlide((value) =>
                    value.current === index ? { ...value, ready: true } : value,
                  );
                }
              }}
              onError={() => {
                if (isCurrent) {
                  // Keep the last usable image when a replacement fails.
                  setSlide((value) =>
                    value.current === index && value.previous !== null
                      ? { current: value.previous, previous: null, ready: true }
                      : value,
                  );
                }
              }}
            />
          );
        })}
      </div>
    </>
  );
}
