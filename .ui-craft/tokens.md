# Tokens

Sumber implementasi: src/app/globals.css.

## Color

- Navy #001233; slate #33415C.
- Dasar #001233; permukaan #102543/#233652; kontak #33415C; footer #000C24. Hero memiliki bidang diagonal slate di belakang potret; slot gambar memakai gradasi navy/slate halus.
- Teks #E2E9F3, sekunder #AEBED5, aksen judul #9FB3D0. Tombol/fokus #B4CAE8, hover #D1DFF0; teks tombol navy.
- Garis bidang #334968; batas kontrol #687C98. Warna terang dipakai untuk keterbacaan, bukan latar halaman.
- Tema navy tetap sesuai permintaan pemilik; color-scheme dark dan theme-color #001233. Tanpa toggle tema.

## Typography

- Barlow Condensed Black Italic 900 untuk judul, album dan arsip; kapital, padat, miring mengikuti karakter logo. Manrope variable untuk body dan kontrol. Font lokal melalui Fontsource, tanpa italic/bold sintetis.
- Body 16px; kecil 12-14px; heading 48-128px; hero fluid 80-144px desktop, 40-104px ponsel; angka tabular. Tahun pengalaman dan jumlah slot memakai display italic.

## Space and shape

- Spacing 4/8/12/16/24/32/48/64/96/128px.
- Radius 4px kontrol, 8px pemberitahuan, 12px dialog; sampul album sudut tajam.
- CTA fotografi bersudut tajam dengan dua sudut viewfinder, aperture pada CTA album/kontak navigasi, dan panah terpisah. CTA utama 60px; kontak navigasi 44px.
- Dua lapis shadow hanya untuk menu dan dialog.
- Indeks album memakai 12 kolom asimetris desktop, satu kolom ponsel. Galeri berupa contact sheet tiga kolom desktop, dua kolom ponsel. Slot bukan tombol dan tidak membuka dialog.
- Tentang setelah strip memakai potret 4:5 kiri, judul/profil kanan pada desktop; judul, potret, profil berurutan pada ponsel. Potret memakai contain dan sumber yang sama dengan hero.

## Motion and layers

- Hover 150ms; hero 350ms; reveal teks 400ms/media 600ms dengan stagger 80ms (maksimal 240ms); hanya opacity/transform/color.
- Reduced motion meniadakan entrance dan smooth scroll.
- Kelompok interaktif hanya fade; toolbar filter tetap terlihat. Sampul album bergerak di dalam area tautan yang tetap pada tempatnya.
- Entrance per elemen sekali saat masuk viewport: opacity 0-1, teks translateY 24px-0, foto/kartu translateY 24px-0 dan scale 0.96-1, 600ms dengan easing token. Web Animations API + IntersectionObserver; HTML selalu terlihat tanpa JavaScript/API. Hanya target di bawah layar disiapkan; konten awal yang terlihat tidak disembunyikan. Reduced motion/fokus meniadakan seluruh entrance aktif maupun tertunda di section.
- Strip foto memakai dua loop transform linear 56 detik dengan arah berlawanan; tombol jeda dan hover menghentikan gerak. Tanpa JavaScript atau dengan reduced motion, strip statis dan kontrol animasi disembunyikan.
- Konten 0; header 20; dialog native top layer.
- Fokus terlihat; target interaktif minimal 44px.

- 2026-10-24: Hover foto 350ms, scale 1.035 hanya pointer desktop; ikon expand muncul saat hover/fokus dan selalu terlihat di ponsel. Dialog fade 240ms, isi 350ms, gambar berganti fade 240ms. Reduced motion meniadakan semua gerak ini. Area tombol tetap; hanya visual di dalamnya bergerak.
