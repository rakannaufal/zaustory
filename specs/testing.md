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

- TEST-01: 4 album, fakta pengalaman sesuai brief.
- TEST-02: Filter, semua detail, kosong, slug asing.
- TEST-03: Fixture serta foto album asli: buka, panah wrap, Escape/tutup, fokus kembali, gambar gagal.
- TEST-04: Instagram, nomor WhatsApp/origin/indexing valid dan invalid.
- TEST-05: Menu/skip link/keyboard/reduced motion/axe/overflow pada 320/390/768/1440px.
- TEST-06: Checks, metadata/robots/sitemap, audit, format.
- TEST-07: Slot potret hero, tiga foto pengalaman, jumlah slot setiap album, placeholder tidak membuka dialog; campuran foto nyata dan slot hanya menavigasi foto nyata. Slot tetap tersedia tanpa JavaScript. Inspeksi komposisi desktop/ponsel dilakukan lewat browser.
- TEST-08: Unit pemilihan foto lintas album, fallback/duplikasi koleksi kecil, batas 20, urutan stabil, koleksi kosong. Browser mengukur dua arah gerak, jeda/putar, reduced motion, posisi teks kartu dan CTA pada desktop/ponsel. Periksa ikon favicon berlatar putih; strip tanpa JavaScript harus statis.
- TEST-09: Urutan strip/tentang/album dan satu potret tentang. Browser membuktikan entrance saat section terlihat, tidak berulang setelah scroll kembali, pembatalan jika reduced motion diaktifkan, serta visibilitas tanpa JavaScript. Periksa potret dan susunan teks desktop/ponsel; fokus keyboard tidak boleh menunggu animasi.
- TEST-10: Cocokkan sumber profil publik dan tautan. Browser memeriksa lokasi/metadata, kredit fotografer/media partner, Instagram dua u, tel publik, sorotan tiap album; WhatsApp tetap tersembunyi tanpa konfigurasi. Periksa copy/kontak pada desktop/ponsel.
- TEST-11: Target di bawah layar menunggu viewport, lalu opacity/transform kembali normal; sekali per target. Kartu pertama tidak membuka kartu terakhir. Durasi 400ms dan skala media terukur di browser. Reduced motion menampilkan semua target tertunda, fokus filter mengakhiri seluruh entrance section, filter tetap berfungsi. Hilangkan IntersectionObserver/animate secara terpisah untuk memastikan fallback konten terlihat; regresi no-JS, axe dan navigasi anchor.

## Bukti

Catat tanggal, perintah, hasil, batas dan artefak di progress.md. Tes belum dijalankan tetap pending. Fixture tidak boleh tampil sebagai portofolio publik.

Pembaruan 2026-10-23: E2E memeriksa 10 foto tayang per album olahraga, gambar termuat, lightbox/panah wrap/fokus, tanpa caption dari alt, rute Padel 404, strip di luar viewport awal dan terlihat setelah scroll.
