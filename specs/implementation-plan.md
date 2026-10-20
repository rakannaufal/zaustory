# Implementation plan

Persetujuan pengguna 2026-10-20: "lanjutkan implementasinya" setelah asumsi/fase diusulkan. Status hanya diperbarui dengan bukti di progress.md.

## Fase 1: Spesifikasi operasional

- T-1.01: Ganti fixture specs dengan scope, rute, data, desain, keamanan, kriteria dan pemetaan uji nyata.
- T-1.02: Catat asumsi, pertanyaan, fase, design brief/tokens.
- Bukti: inspeksi konsistensi REQ-AC-TEST-TASK. Bukan bukti aplikasi.
- Risiko: materi pemilik belum tersedia; keadaan kosong harus jelas.

## Fase 2: Fondasi dan beranda

Dependensi: fase 1.

- T-2.01: Next.js/TypeScript/Tailwind, font lokal, token, header/footer, hero, album, pengalaman, tentang, kontak.
- T-2.02: README, env example, scripts, CI; isolasi Git jika diizinkan lingkungan.
- File: package.json/configs, src/app, src/content, src/components, .github/workflows.
- Verifikasi: lint, typecheck, build, HTTP beranda.

## Fase 3: Album dan kontak

Dependensi: fase 2.

- T-3.01: Filter, 5 detail, keadaan kosong, 404, album berikutnya.
- T-3.02: Validasi foto lokal, galeri/dialog, navigasi/fokus/error, fixture hanya dalam tes.
- T-3.03: Instagram, WhatsApp opsional, metadata/robots/sitemap.
- Verifikasi: TEST-01 hingga TEST-04, HTTP detail/404/metadata.
- Risiko: galeri dengan foto asli belum bisa diverifikasi; gunakan fixture tes tanpa publikasi.

## Fase 4: Verifikasi dan handoff

Dependensi: fase 3.

- T-4.01: Browser desktop/ponsel, filter/keyboard/reduced motion/axe; perbaiki temuan.
- T-4.02: Semua pemeriksaan, audit dependensi, bukti dan blocker.
- Verifikasi: TEST-05 dan TEST-06, screenshot dan hasil aktual.
- Handoff: aplikasi lokal; foto/bio/nomor/afiliasi/domain/hosting menunggu pemilik. Tanpa deploy produksi dalam scope.

## Fase 5: Pembaruan layout dan slot foto

Permintaan tambahan pemilik: layout lebih khas, potret fotografer transparan pada hero, seluruh foto sementara berupa ikon, jumlah slot sesuai rencana, satu foto per pengalaman.

- T-5.01: Hero diagonal dan area potret, indeks album asimetris, baris pengalaman dengan foto, susunan tentang/kontak, ImagePlaceholder bersama, galeri 20/10/10/10/30 slot.
- File: src/app/page.tsx, globals.css, album/[slug]/page.tsx, components/album-collection.tsx, photo-gallery.tsx, image-placeholder.tsx, content/site.ts.
- Verifikasi: TEST-07 ditambah regresi TEST-01 hingga TEST-06; lint/typecheck/unit/build/E2E/format, browser desktop/ponsel, screenshot.
- Risiko: potret dan foto asli belum tersedia. Ikon harus jelas sementara, tidak interaktif, tidak dihitung tayang. Tampilan cutout aktual menunggu aset.

## Fase 6: Thumbnail, CTA, dan strip foto

Permintaan tambahan pemilik: teks di dalam thumbnail tanpa angka jumlah foto, CTA sesuai fotografi, dua strip foto campuran setelah hero dengan arah berlawanan, favicon tetap berlatar putih.

- T-6.01: Overlay kategori/judul/deskripsi dalam kartu, CTA viewfinder/aperture, PhotoReel dengan pool lintas album dan acak stabil, jeda/putar/reduced motion, ikon favicon putih dari sumber asli.
- File: src/components/album-collection.tsx, photo-reel.tsx, site-header.tsx, contact-links.tsx, src/lib/photo-reel.ts, src/app/page.tsx, globals.css, public/brand/icon.png dan apple-touch-icon.png.
- Verifikasi: TEST-08, regresi TEST-01 hingga TEST-07; lint/typecheck/unit/build/E2E/format, screenshot desktop/ponsel.
- Risiko: belum ada foto asli. Batasi strip maksimal 20 foto per build agar DOM/gambar tetap ringan; fallback ikon, status jumlah detail tetap akurat. Animasi tidak berjalan tanpa JavaScript atau saat reduced motion.

## Fase 7: Tentang dan animasi scroll

Permintaan tambahan pemilik: Tentang tepat di bawah dua baris foto, satu potret fotografer pada Tentang, entrance pada setiap section saat scrolling.

- T-7.01: Pindahkan Tentang sebelum album, potret dari sumber hero dengan fallback ikon, urutan navigasi sesuai halaman. ScrollReveal progresif memakai IntersectionObserver dan Web Animations API; entrance sekali, pembatalan untuk reduced motion/fokus, HTML selalu terlihat.
- File: src/app/page.tsx, globals.css, src/components/scroll-reveal.tsx, photo-reel.tsx, site-header.tsx.
- Verifikasi: TEST-09 dan regresi; lint/typecheck/unit/build/E2E/format, inspeksi browser desktop/ponsel dan screenshot produksi lokal.
- Risiko: potret asli belum tersedia. Gerak tidak boleh menjadi syarat visibilitas atau mengganggu keyboard; tanpa JavaScript/API konten tetap terbaca. Tidak ada dependensi animasi tambahan.
