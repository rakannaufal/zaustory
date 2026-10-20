# Decisions

## 2026-10-20

- D-01: Fixture bukan spesifikasi final; pengguna menyetujui spesifikasi operasional dan implementasi per fase.
- D-02: Next.js/TypeScript/Tailwind, data lokal, tanpa backend/admin/database.
- D-03: Tanpa aset asli, gunakan kosong berlabel; plannedCount berbeda dari photos.length.
- D-04: Bio dan afiliasi belum dikonfirmasi; tanpa klaim klien aktif.
- D-05: Font lokal, Barlow Condensed/Manrope; build tanpa Google Fonts.
- D-06: Lokal dahulu; noindex. Publikasi di luar scope.
- D-07: Git awal /Users/rakan; jangan menyentuh perubahan repo induk. Isolasi sebelum commit.
- D-08: Repo terpisah berhasil dibuat pada folder proyek, branch codex/zaustory-mvp; tidak membuat commit.
- D-09: eslint-config-next membawa rantai braces dengan temuan high tanpa rilis perbaikan yang tersedia. Gunakan plugin TypeScript/React/Hooks/jsx-a11y langsung; lint tetap tanpa warning dan audit ulang 0.
- D-10: Node mengikuti irisan engine tooling: ^22.22.2, ^24.15.0, atau >=26.0.0. CI memakai rilis Node 22 terbaru.
- D-11: Logo pemilik menggantikan logo teks/favikon buatan. Transparan pada header/footer terang, versi putih pada ikon/kartu berbagi; sumber utuh, salinan web terkompres tanpa perubahan warna.
- D-12: Nama organisasi dikoreksi pemilik menjadi Persega FC. Status hubungan tetap menunggu konfirmasi.
- D-13: Referensi wordmark pemilik menjadi arah tipografi. Gunakan Barlow Condensed Black Italic 900 lokal untuk display/album/arsip kapital; Manrope untuk teks isi/kontrol. Varian italic asli menghindari distorsi sintetis; ukuran dan leading disesuaikan agar teks miring tidak terpotong.
- D-14: Pemilik mengganti arah latar menjadi navy/slate tanpa putih. Tema tetap memakai #001233/#33415C dengan permukaan turunan dan teks/batas/fokus terang. Logo, ikon dan kartu sosial memakai turunan terang/navy dari alpha asli. Ini menggantikan pilihan permukaan terang dan penggunaan varian putih pada D-11; aset sumber tetap utuh.
- D-15: Pemilik meminta layout lebih khas dengan potret transparan di hero, satu foto per pengalaman, serta ikon sementara pada seluruh posisi foto. Indeks album memakai komposisi asimetris, detail memakai contact sheet 20/10/10/10/30 slot. Foto asli menggantikan slot; hanya photos.length yang dihitung tayang atau masuk lightbox.
- D-16: Pemeriksaan produksi menemukan loading.tsx global membungkus konten statis dalam segmen Suspense tersembunyi, sehingga halaman hanya menampilkan loading tanpa JavaScript. Batas loading global dihapus; seluruh rute memakai data lokal yang sudah diprarender. Navigasi client mempertahankan halaman sebelumnya sampai tujuan tersedia. Ini juga menghindari ketergantungan JavaScript untuk menampilkan HTML album.

## Pertanyaan terbuka

- Q-01: Foto asli, urutan, caption/alt, izin.
- Q-02: Bio Uwa dan identitas publik.
- Q-03: Makna "Bagian sampai sekarang".
- Q-04: WhatsApp, domain, hosting.
- Q-05: Potret fotografer transparan dan satu foto untuk setiap pengalaman.

Tidak ada pertanyaan dianggap terjawab karena waktu berlalu.
