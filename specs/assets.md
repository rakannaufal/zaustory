# Assets

## Tersedia

Logo asli pemilik di assets/logo/: z_transparant.png memakai alpha, z_logo.png berlatar putih. Keduanya 1254x1254px; sumber tidak diubah.

Salinan terkompres di public/brand/:

- zaustory-transparent.png (640x138): logo hitam dengan margin kosong dipangkas; disimpan untuk permukaan terang.
- zaustory-white.png (600x600): komposisi asli berlatar putih.
- zaustory-light.png (640x138): siluet/alpha logo asli diwarnai #E2E9F3 untuk header/footer navy; tanpa latar dan tanpa perubahan bentuk.
- zaustory-navy.png (600x600): komposisi persegi logo terang di atas #001233 untuk kartu Open Graph/Twitter setelah domain dikonfigurasi.
- icon.png (64x64), apple-touch-icon.png (180x180): turunan z_logo.png, logo hitam berlatar putih sesuai permintaan pemilik; seluruh tulisan logo dipertahankan.

Barlow Condensed Black Italic 900/Manrope (SIL OFL) dari Fontsource; lucide-react (ISC). Referensi tipografi tambahan: Centered ZAUSTORY Wordmark.png dari pemilik. Bentuk logo berupa raster; font display dipilih sebagai pendekatan karakter, identitas font asli belum diketahui.

Teks lisensi disalin dari paket terpasang ke public/licenses/. Screenshot hasil browser, bukan foto portofolio, ada di docs/evidence/.

## Menunggu

32 foto album tersisa (Minsoc 10, Event 22), bio panjang, logo organisasi bila dibutuhkan. Kartu berbagi memakai logo sampai foto berizin tersedia. Tidak menggunakan foto stok/AI sebagai karya. Seluruh posisi foto kosong memakai ikon Lucide ImageIcon dengan label aksesibel dan caption sementara.

## Foto

JPEG/PNG/WebP/AVIF berizin di public/images/<album>/. Dianjurkan <=2400px dan sudah dikompres. src/alt/width/height wajib; caption opsional pada src/content/albums.ts. Rencana bukan jumlah tayang.

Pemilik memastikan izin subjek/publikasi dan nama/logo. Tidak ada upload pengunjung.

Potret: PNG/WebP/AVIF dengan alpha, tanpa latar kotak; dianjurkan komposisi vertikal. Simpan di public/images/profile/ dan isi photographerPortrait di src/content/site.ts dengan metadata Photo. Hero menggunakan contain dan menempatkan kaki/bagian bawah pada tepi hero. Foto pengalaman memakai satu Photo per entri experiences[].photo; rasio tampilan 1.6 dengan cover. Null tetap menampilkan ikon. Potret aktual tersedia sejak 2026-10-24; hero dan Tentang memakai dua sumber terpisah.

## Foto album pemilik, 2026-10-23

30 JPEG dari assets/minsoc, assets/football, dan assets/basket dipasang sesuai instruksi pemilik: masing-masing 10 foto ke album minsoc, lapangan-bola, dan basket. Turunan WebP kualitas 85 di public/images/<slug>/ mempertahankan dimensi asli 2048x1365 atau 1365x2048, tanpa metadata EXIF. Total WebP sekitar 10.33 MiB, dibanding sumber sekitar 65 MiB. Alt menjelaskan isi foto berdasarkan inspeksi visual; tidak menambahkan identitas, tanggal, atau nama acara rekaan. Sampul memakai foto pertama; strip otomatis mengambil maksimal 20 foto gabungan.

## Aset baru pemilik, 2026-10-24

- section1.png: hero, turunan profile/hero.webp 981x1602; latar hitam tersambung ke tepi (RGB maksimal 4) diubah menjadi alpha, isi subjek dipertahankan. about.png: Tentang, profile/about.webp 382x653, alpha asli dipertahankan.
- kampanye.jpeg, epa.jpeg, piala walikota.JPEG: public/images/experiences/ untuk tiga pengalaman sesuai nama.
- al azhar.JPEG, curva.PNG, persega.JPEG: public/images/collaborations/ untuk Al Azhar, Curva Apparel, Persega FC.
- assets/event/: 10 file, 8 foto unik. IMG_6998 (1).JPEG dan IMG_6999 (1).JPEG identik byte dengan versi tanpa (1); sumber dipertahankan, turunan hanya satu per foto. public/images/event/ memakai delapan WebP, maksimum sisi 2400px.
- Semua turunan foto WebP kualitas 85, orientasi dinormalisasi, metadata EXIF dibuang. Sumber asli tidak diubah.
- pspsstore.MOV: sumber HEVC 1080x1920, sekitar 42.77 detik. Turunan public/videos/pspsstore.mp4 H.264/AAC, 540x960, 24 fps, CRF 26, audio 96 kbit/s, faststart, tanpa metadata sumber; sekitar 6.80 MiB dibanding sumber sekitar 64 MiB. Poster public/images/collaborations/pspsstore.webp dari detik pertama. Kontrol native, playsInline, muted awal, preload none, tanpa autoplay. Gagal muat menampilkan poster dan pesan.
