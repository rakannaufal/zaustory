# Testing

## Perintah

- npm run lint: ESLint tanpa warning.
- npm run typecheck: TypeScript strict.
- npm test: Vitest, validasi/konfigurasi dan galeri/dialog dengan fixture tes.
- npm run build: Next.js production.
- npm run test:e2e: Playwright server produksi dan axe.
- npm run format:check: Prettier.
- npm audit: hasil aktual dicatat.

## Kasus

- TEST-01: 5 album, fakta pengalaman sesuai brief.
- TEST-02: Filter, semua detail, kosong, slug asing.
- TEST-03: Fixture hanya tes: buka, panah wrap, Escape/tutup, fokus kembali, gambar gagal.
- TEST-04: Instagram, nomor WhatsApp/origin/indexing valid dan invalid.
- TEST-05: Menu/skip link/keyboard/reduced motion/axe/overflow pada 320/390/768/1440px.
- TEST-06: Checks, metadata/robots/sitemap, audit, format.
- TEST-07: Slot potret hero, tiga foto pengalaman, jumlah slot setiap album, placeholder tidak membuka dialog; campuran foto nyata dan slot hanya menavigasi foto nyata. Slot tetap tersedia tanpa JavaScript. Inspeksi komposisi desktop/ponsel dilakukan lewat browser.
- TEST-08: Unit pemilihan foto lintas album, fallback/duplikasi koleksi kecil, batas 20, urutan stabil, koleksi kosong. Browser mengukur dua arah gerak, jeda/putar, reduced motion, posisi teks kartu dan CTA pada desktop/ponsel. Periksa ikon favicon berlatar putih; strip tanpa JavaScript harus statis.

## Bukti

Catat tanggal, perintah, hasil, batas dan artefak di progress.md. Tes belum dijalankan tetap pending. Fixture tidak boleh tampil sebagai portofolio publik.
