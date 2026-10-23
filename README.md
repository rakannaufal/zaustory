# Zaustory

Portofolio fotografi olahraga dan event. Next.js App Router, React, TypeScript strict, Tailwind CSS. Judul memakai Barlow Condensed Black Italic 900, kapital mengikuti karakter logo; teks isi memakai Manrope. Semua font lokal.

Latar tetap navy/slate dari #001233 dan #33415C; teks, tombol, fokus, dan logo terang menjaga kontras. Tanpa bidang putih atau pemilih tema.

## Menjalankan

Node.js 22.22.2+, 24.15+, atau 26+ dan npm. Gunakan rilis LTS aktif.

```sh
npm ci
npm run dev
```

Buka http://127.0.0.1:3000. Untuk production lokal:

```sh
npm run build
npm start
```

Jika port 3000 terpakai, jalankan `npm run dev -- --port 3001`, lalu buka http://127.0.0.1:3001.

## Environment

Konfigurasi opsional: salin `.env.example` menjadi `.env.local`. Tidak ada API key atau database.

| Variabel                    | Default dan kegunaan                                                                                              |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_SITE_URL        | Kosong. Origin HTTPS final, tanpa path/query, untuk canonical dan sitemap                                         |
| NEXT_PUBLIC_WHATSAPP_NUMBER | Opsional. Kosong memakai 6287752053779 milik pemilik; override 8-15 digit internasional, tanpa `+`/spasi/awalan 0 |
| NEXT_PUBLIC_ALLOW_INDEXING  | false. Aktif hanya dengan nilai true dan origin valid, setelah konten disetujui                                   |

Environment public dibaca saat build. Rebuild setelah perubahan. Preview default noindex; sitemap kosong dan robots disallow.

## Mengisi foto

Empat album ada di `src/content/albums.ts`: Minsoc 20, Football 10, basket 10, event 30. Itu **jumlah rencana**, bukan foto tayang. Saat ini 30 foto pemilik tayang: Minsoc 10, Football 10, dan basket 10. Sumber JPEG di `assets/minsoc/`, `assets/football/`, dan `assets/basket/` dipertahankan; turunan WebP tanpa metadata EXIF ada di `public/images/`. Dimensi asli dipertahankan (2048x1365 atau 1365x2048). Event masih kosong; Minsoc menyisakan 10 slot.

Setiap detail menampilkan seluruh slot rencana dengan ikon gambar sementara. Slot bukan tombol dan tidak dapat diperbesar. Setiap foto yang ditambahkan menggantikan satu slot; sisa slot tetap terlihat. Sampul album memakai foto pertama, atau ikon saat kosong.

1. Siapkan foto berizin JPEG/PNG/WebP/AVIF, dianjurkan <=2400px dan terkompres.
2. Simpan di `public/images/<slug>/`.
3. Isi `photos` pada album yang sesuai:

```ts
photos: [
  {
    id: 'minsoc-01',
    src: '/images/minsoc/pertandingan-01.webp',
    alt: 'Deskripsi konkret isi foto untuk pengguna pembaca layar',
    width: 1800,
    height: 1200,
    caption: 'Caption faktual, opsional',
  },
],
```

Ganti contoh dengan metadata foto sebenarnya. Slug/ID harus unik, alt tidak kosong, dimensi positif, path lokal raster; jumlah foto tidak melebihi rencana. Naikkan plannedCount secara sengaja bila rencana berubah. Sampul menggunakan foto pertama. Jumlah tayang otomatis dari panjang photos. Deskripsi alt hanya untuk aksesibilitas; lightbox menampilkan caption hanya jika caption diisi secara eksplisit. Foto dapat diperbesar dengan klik/Enter, panah kiri/kanan, Escape, serta tombol tutup; kegagalan gambar diberi pesan.

Fakta situs di `src/content/site.ts`. Bio singkat berasal dari profil publik [@zauustory](https://www.instagram.com/zauustory/): Pekanbaru, Riau; fotografer @rzzwadzaky; media partner @langkaahsenja_; telepon +62 838-5465-3003. Pembaruan pemilik 2026-10-23 mengganti kontak menjadi WhatsApp 0877-5205-3779 (wa.me/6287752053779); CTA hero/kontak menuju WhatsApp dengan pesan awal, telepon memakai nomor yang sama. Instagram tetap tersedia sebagai tautan sekunder. Sumber dan batas adaptasi di [docs/content-sources.md](docs/content-sources.md). Afiliasi tidak diklaim sebagai klien aktif.

Album kosong Minsoc, Football, basket, dan event menautkan sorotan Instagram yang sesuai melalui `site.albumHighlights`. Foto/caption unggahan tidak diambil; aset web tetap diisi melalui manifest lokal.

## Latar hero

Hero menampilkan foto dekoratif dari album Minsoc, Basket, dan Football dengan opacity 24%. Foto berganti acak setiap 3 detik tanpa mengulang foto yang sedang tampil, memakai fade 600ms setelah gambar pengganti selesai dimuat. Maksimal dua gambar berada di DOM. Tanpa tombol kontrol sesuai permintaan pemilik; tab tersembunyi dan reduced motion menghentikan pergantian. Tanpa JavaScript, foto pertama tetap terlihat. Gambar yang gagal diganti mempertahankan foto sebelumnya. Latar tidak mengubah tinggi hero atau posisi strip setelah scroll. Judul memakai warna terang dengan alpha 72% pada baris pertama dan 55% pada baris kedua, garis tepi 0.6px/1px menjaga bentuk huruf.

## Potret dan pengalaman

Hero menyediakan potret fotografer transparan yang menyatu dengan bidang diagonal navy/slate. Tentang berada tepat setelah dua baris foto bergerak dan menampilkan potret dari sumber yang sama, di samping profil pada desktop, di antara judul dan teks pada ponsel. Isi `photographerPortrait` di `src/content/site.ts` dengan satu objek `Photo` (id, src, alt, width, height); simpan aset PNG/WebP/AVIF dengan alpha di `public/images/profile/`. Rasio vertikal dianjurkan. Tampilan memakai `contain`, tanpa menambah latar pada gambar.

Setiap entri `experiences` memiliki satu `photo` dengan format metadata yang sama; simpan di `public/images/experiences/`. Foto tampil dengan rasio 1.6 dan `cover`. Nilai `null` pada potret/pengalaman menampilkan ikon sementara. Potret dan foto pengalaman belum tersedia; foto album olahraga sudah tayang.

## Logo

Aset asli di `assets/logo/` dipertahankan. Header/footer memakai turunan transparan terang di `public/brand/`, dengan bentuk/alpha asli dan warna #E2E9F3 agar terbaca pada navy. Favicon dan Apple touch icon memakai logo hitam berlatar putih sesuai permintaan pemilik. Kartu Open Graph/Twitter memakai logo terang berlatar navy. Kartu berbagi aktif dengan `NEXT_PUBLIC_SITE_URL` valid; preview eksternal baru dapat diuji setelah deploy. Rincian varian/dimensi di `specs/assets.md`.

Strip foto setelah hero menggabungkan foto dari seluruh album, mengacak urutan secara stabil, dan memilih maksimal 20 foto untuk dua baris. Koleksi kecil diulang untuk loop; ketika seluruh album kosong, ikon menjadi pengganti. Isi `photos` di `src/content/albums.ts` untuk menggantinya otomatis. Tombol jeda/putar tersedia; reduced motion dan mode tanpa JavaScript menampilkan strip statis.

Section setelah hero muncul per elemen: judul/teks naik 24px, potret dan kartu album naik 32px dengan skala 0.985 ke 1. Durasi 400ms; elemen yang masuk bersamaan berjeda 60ms, maksimal 120ms. Setiap kartu dan baris pengalaman menunggu masuk layar sendiri, bukan mengikuti pembungkus section yang sudah jauh di atasnya. Entrance berjalan sekali; hero mempertahankan animasi awalnya.

ScrollReveal membaca penanda `data-reveal`; nilai `media` memakai efek foto, penanda kosong memakai efek teks. Tanpa penanda, pembungkus menjadi target (strip foto). Hanya elemen di bawah layar yang disiapkan oleh JavaScript; konten yang sudah terlihat tidak disembunyikan ulang. Reduced motion atau fokus dalam section menampilkan seluruh kontennya seketika, termasuk animasi tertunda. Filter tidak mengulang entrance. Tanpa JavaScript, IntersectionObserver, atau Web Animations API, seluruh konten tetap terlihat. Tidak ada dependensi animasi tambahan.

Toolbar filter langsung tersedia. Kelompok berisi tautan/tombol hanya memudar tanpa bergeser; sampul album bergerak di dalam tautan yang tetap pada tempatnya agar klik cepat tidak meleset.

## Pemeriksaan

```sh
npm run format:check
npm run check
npx playwright install chromium
npm run test:e2e
npm audit
```

E2E menjalankan server production port 3100, dua profil Chromium desktop/ponsel, pemeriksaan axe, rute, filter, keyboard, no-JS, offline, serta screenshot. Jalankan build dahulu. Tes komponen memakai fixture foto khusus tes, bukan foto publik. Hasil lokal dan batas verifikasi dicatat di `specs/progress.md`. CI disiapkan, belum berarti pernah dijalankan di GitHub.

## Struktur dan spesifikasi

`src/app` halaman/metadata; `src/components` UI; `src/content` konten; `src/lib` validasi; `tests` unit/komponen/E2E. Mulai dari `AGENTS.md` lalu `specs/index.md`. Status terbaru hanya di `specs/progress.md`; fixture historis pada AGENTS bukan status implementasi saat ini.

## Sebelum publikasi

Masih diperlukan sisa foto album, potret/foto pengalaman, bio panjang dari Uwa bila diinginkan, konfirmasi hubungan organisasi, domain/hosting, pemeriksaan ulang memakai konten final. Bio singkat dan telepon publik sudah tersedia dari Instagram. Kartu berbagi logo sudah tersedia. Belum ada deploy, tracking, CMS, login, database, booking, atau pembayaran. Rekomendasi hosting Next.js: Vercel; pemilihan paket/biaya menunggu pemilik.

Font Fontsource berlisensi SIL OFL; ikon Lucide ISC. Teks lisensi ada di `public/licenses/`. Foto tetap hak pemilik. Tidak menetapkan lisensi publik untuk kode/aset pemilik.
