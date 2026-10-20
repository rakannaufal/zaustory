'use client';

import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { Photo } from '@/lib/content';
import { PhotoImage } from './photo-image';

type PhotoLightboxProps = {
  photos: readonly Photo[];
  initialIndex: number;
  onClose: () => void;
};

export function PhotoLightbox({
  photos,
  initialIndex,
  onClose,
}: PhotoLightboxProps) {
  const [index, setIndex] = useState(initialIndex);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const photo = photos[index];
  const move = useCallback(
    (direction: number) => {
      setIndex(
        (current) => (current + direction + photos.length) % photos.length,
      );
    },
    [photos.length],
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        move(event.key === 'ArrowRight' ? 1 : -1);
      }
    }

    function handleBackdropClick(event: MouseEvent) {
      if (event.target === dialog) onClose();
    }

    dialog.addEventListener('keydown', handleKeyDown);
    dialog.addEventListener('click', handleBackdropClick);
    dialog.showModal();
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';

    return () => {
      dialog.removeEventListener('keydown', handleKeyDown);
      dialog.removeEventListener('click', handleBackdropClick);
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) {
        previousFocus.focus();
      }
    };
  }, [move, onClose]);

  if (!photo) return null;

  return (
    <dialog
      ref={dialogRef}
      className="photo-dialog"
      aria-label="Pembesaran foto"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
    >
      <div className="lightbox-shell">
        <div className="lightbox-topbar">
          <p role="status" aria-live="polite">
            Foto {index + 1} dari {photos.length}
          </p>
          <button
            ref={closeRef}
            type="button"
            className="icon-button"
            aria-label="Tutup foto"
            onClick={onClose}
          >
            <X size={24} aria-hidden="true" />
          </button>
        </div>
        <figure className="lightbox-figure">
          <div className="lightbox-image-container">
            <PhotoImage
              key={photo.id}
              photo={photo}
              sizes="100vw"
              mode="contain"
              priority
            />
          </div>
          <figcaption>{photo.caption ?? photo.alt}</figcaption>
        </figure>
        <div className="lightbox-navigation">
          <button
            type="button"
            className="lightbox-direction"
            aria-label="Foto sebelumnya"
            disabled={photos.length < 2}
            onClick={() => move(-1)}
          >
            <ArrowLeft size={20} aria-hidden="true" />
            <span>Sebelumnya</span>
          </button>
          <span className="lightbox-keyboard-hint">
            Panah untuk berpindah. Esc untuk menutup.
          </span>
          <button
            type="button"
            className="lightbox-direction"
            aria-label="Foto berikutnya"
            disabled={photos.length < 2}
            onClick={() => move(1)}
          >
            <span>Berikutnya</span>
            <ArrowRight size={20} aria-hidden="true" />
          </button>
        </div>
      </div>
    </dialog>
  );
}
