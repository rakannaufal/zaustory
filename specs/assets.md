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

40 foto album tersisa (Minsoc 10, event 30), satu potret fotografer transparan, satu foto untuk masing-masing dari tiga pengalaman, bio, logo organisasi. Kartu berbagi memakai logo sampai foto berizin tersedia. Tidak menggunakan foto stok/AI sebagai karya. Seluruh posisi foto kosong memakai ikon Lucide ImageIcon dengan label aksesibel dan caption sementara.

## Foto

JPEG/PNG/WebP/AVIF berizin di public/images/<album>/. Dianjurkan <=2400px dan sudah dikompres. src/alt/width/height wajib; caption opsional pada src/content/albums.ts. Rencana bukan jumlah tayang.

Pemilik memastikan izin subjek/publikasi dan nama/logo. Tidak ada upload pengunjung.

Potret: PNG/WebP/AVIF dengan alpha, tanpa latar kotak; dianjurkan komposisi vertikal. Simpan di public/images/profile/ dan isi photographerPortrait di src/content/site.ts dengan metadata Photo. Hero menggunakan contain dan menempatkan kaki/bagian bawah pada tepi hero. Foto pengalaman memakai satu Photo per entri experiences[].photo; rasio tampilan 1.6 dengan cover. Null tetap menampilkan ikon. Belum ada aset asli untuk memverifikasi tampilan cutout aktual.

## Foto album pemilik, 2026-10-23

30 JPEG dari assets/minsoc, assets/football, dan assets/basket dipasang sesuai instruksi pemilik: masing-masing 10 foto ke album minsoc, lapangan-bola, dan basket. Turunan WebP kualitas 85 di public/images/<slug>/ mempertahankan dimensi asli 2048x1365 atau 1365x2048, tanpa metadata EXIF. Total WebP sekitar 10.33 MiB, dibanding sumber sekitar 65 MiB. Alt menjelaskan isi foto berdasarkan inspeksi visual; tidak menambahkan identitas, tanggal, atau nama acara rekaan. Sampul memakai foto pertama; strip otomatis mengambil maksimal 20 foto gabungan.
