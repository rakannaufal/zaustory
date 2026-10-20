'use client';

import Link from 'next/link';
import { RotateCcw } from 'lucide-react';

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main id="main" tabIndex={-1} className="message-page container">
      <h1>
        Cerita terjeda
        <br />
        sebentar.
      </h1>
      <p>
        Halaman belum dapat dimuat. Coba lagi, atau kembali ke koleksi album.
      </p>
      <div className="message-actions">
        <button type="button" onClick={reset} className="button button-primary">
          <RotateCcw size={18} aria-hidden="true" />
          Coba lagi
        </button>
        <Link href="/#album" className="text-link">
          Kembali ke album
        </Link>
      </div>
    </main>
  );
}
