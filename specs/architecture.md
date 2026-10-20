# Architecture

## Stack

Next.js App Router, React, TypeScript strict, Tailwind CSS v4 (base/utility), token dan komposisi globals.css. Fontsource lokal; lucide-react. Dependensi dipin dengan lockfile.

## Rendering dan data

Prarender beranda/album saat build. generateStaticParams untuk album; slug asing 404. Data TypeScript lokal tanpa database/API. Next Image untuk foto lokal. Tidak ada fetch runtime gambar eksternal.

Tanpa loading.tsx global: pada build lokal, batas loading membuat HTML konten tersimpan dalam segmen tersembunyi yang memerlukan JavaScript. Rute statis dikirim dengan konten utama utuh. Jika sumber data asinkron ditambahkan, tempatkan loading pada bagian data tersebut dan periksa ulang alur tanpa JavaScript.

## Struktur

- src/app: layout, halaman, detail, 404/error, metadata.
- src/components: header, koleksi, galeri/dialog, kontak.
- src/content: fakta dan manifest album.
- src/lib: validasi dan konfigurasi.
- tests: komponen/validasi dan browser E2E.
- public: favicon, foto pemilik nanti.

## Keputusan

Monolit cukup untuk lihat karya dan hubungi. Server components membatasi JS. State hanya interaksi lokal. Build webpack dipilih untuk build deterministik lokal; font tidak mengakses Google Fonts.

## Batas

Tanpa CMS, auth, API tulis, data pengunjung, analytics. Hosting belum dipilih.
