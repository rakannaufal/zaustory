import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main id="main" tabIndex={-1} className="message-page container">
      <p className="eyebrow">404 / Di luar frame</p>
      <h1>
        Cerita ini
        <br />
        belum ditemukan.
      </h1>
      <p>
        Halaman yang kamu cari tidak tersedia. Temukan cerita lainnya di koleksi
        album Zaustory.
      </p>
      <Link href="/#album" className="button button-primary">
        <ArrowLeft size={18} aria-hidden="true" />
        Kembali ke album
      </Link>
    </main>
  );
}
