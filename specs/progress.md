# Progress

## Baseline 2026-10-20

Pembacaan AGENTS dan dokumen sesuai index selesai. Inventaris awal hanya AGENTS.md, specs/, .DS_Store; tanpa aplikasi/package/tests. Git root /Users/rakan, folder proyek untracked. Specs awal MODE MOCK, needs-review, tanpa fase operasional. Pengguna kemudian menyetujui implementasi.

## Status

| Fase           | Status                  | Bukti                                                                                                                    |
| -------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| 1 Spesifikasi  | Selesai untuk MVP lokal | 19 spesifikasi operasional, 20 tautan dokumen valid, 6 pemetaan REQ/AC/TEST/TASK konsisten; design brief/tokens tersedia |
| 2 Fondasi      | Terverifikasi lokal     | Next.js, beranda dan konten; lint/typecheck/build lulus; HTTP beranda 200                                                |
| 3 Album/kontak | Terverifikasi lokal     | Lima detail HTTP 200, slug asing 404, filter/menu/kontak; 31 tes unit/komponen lulus                                     |
| 4 Verifikasi   | Terverifikasi lokal     | 22 tes browser lulus, axe tanpa pelanggaran pada rute uji; audit 0 kerentanan; screenshot diperiksa                      |

## Hasil aktual 2026-10-20

Lingkungan: macOS ARM64, Node v26.8.2, npm 11.19.1, Next.js 16.4.2. Waktu dokumentasi 15:20 WIB. Ini verifikasi lokal, bukan bukti deploy produksi.

| Pemeriksaan          | Hasil yang diamati                                                                                                    |
| -------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Inspeksi spesifikasi | 20 tautan valid; 6 pemetaan kebutuhan/kriteria/uji/task konsisten                                                     |
| npm run lint         | Exit 0, tanpa error atau warning aplikasi                                                                             |
| npm run typecheck    | Exit 0; build produksi juga menjalankan TypeScript                                                                    |
| npm test             | 3 file, 31 tes lulus; galeri, fokus, cancel/Escape, navigasi wrap, gambar gagal, validasi metadata dan konfigurasi    |
| npm run build        | Exit 0; 10 keluaran statis termasuk beranda, lima album, 404, robots dan sitemap                                      |
| npm run test:e2e     | 22 lulus pada dua profil Chromium (desktop 1440x1000 dan ponsel 390x844), 15.2 detik                                  |
| Axe melalui E2E      | Tidak ada pelanggaran pada /, /album/minsoc, /album/tidak-ada di dua profil                                           |
| Responsif            | Tidak ada overflow horizontal pada 320, 390, 768, 1440px untuk beranda/detail/404                                     |
| Jalur kegagalan      | Album kosong, 404 dan tautan pulih, gambar rusak (fixture), nomor/origin invalid, filter offline                      |
| HTTP dan SEO         | Lima album 200, slug asing 404, header keamanan hadir, robots disallow, sitemap tanpa domain rekaan, metadata noindex |
| npm audit --json     | Audit setelah penggantian rantai ESLint: 0 info/low/moderate/high/critical                                            |
| Inspeksi sumber      | Tidak ada any, TODO, FIXME, atau console debug pada src/ dan tests/                                                   |

Pemeriksaan akhir: `npm run format:check`, `npm run typecheck`, dan `npm ls --depth=0` keluar dengan kode 0. Audit lockfile final juga 0 kerentanan. Server preview milik sesi dihentikan setelah verifikasi; jalankan `npm run dev -- --port 3001` untuk membuka kembali.

## Temuan yang diperbaiki

- Ikon Instagram tidak tersedia pada versi lucide-react terpasang: gunakan teks CTA dengan ikon panah yang tersedia.
- Label ARIA kartu menghilangkan sebagian teks yang terlihat: hapus label buatan, gunakan nama dari konten native; axe kemudian lulus.
- Selector menu awal hanya mengenali "Buka menu": sesuaikan tes dengan dua nama tombol; skenario Escape dan anchor kemudian lulus.
- Aturan aksesibilitas menandai listener pada container statis: pindahkan delegasi keyboard ke listener scoped dengan cleanup; lint dan tes kemudian lulus.
- Audit awal 5 temuan high berasal dari braces melalui eslint-config-next. Rilis braces yang tersedia belum memperbaikinya. Konfigurasi diganti ke plugin TypeScript, React, Hooks, dan jsx-a11y langsung; tidak menurunkan Next.js. Audit ulang 0.
- Font hero ponsel diperkecil setelah inspeksi screenshot agar judul tampil dua baris pada 390px.

## Artefak

- [Beranda desktop](../docs/evidence/home-desktop.png)
- [Beranda ponsel](../docs/evidence/home-mobile.png)
- [Album desktop](../docs/evidence/album-desktop.png)
- Laporan browser lokal: ../playwright-report/index.html, diabaikan Git; CI mengunggah laporan setelah benar-benar dijalankan.
- Lisensi font/ikon disertakan di public/licenses/.
- Git root sekarang folder proyek ini, branch codex/zaustory-mvp. Tidak membuat commit atau menyentuh perubahan repo induk.

## Batas bukti

Foto asli belum tersedia: 0 foto tayang dan 80 foto rencana. Perilaku pembesaran diuji dengan fixture khusus komponen; native dialog pada galeri berisi foto aktual belum diuji di perangkat fisik. jsdom menyediakan polyfill showModal/close dan tidak membuktikan focus containment native di semua browser.

Chromium ponsel memakai emulasi viewport, bukan perangkat iOS/Android fisik. Safari/Firefox, pembaca layar manual, Lighthouse produksi, Core Web Vitals lapangan, GitHub CI, deployment dan rollback belum dijalankan. CSP mengizinkan inline bootstrap Next.js; tidak ada HTML pengguna atau formulir tulis.

## Blocker publikasi

Foto asli dan izin, bio dari Uwa, nomor WhatsApp, rincian afiliasi, domain/hosting. Kartu sosial logo tersedia setelah pembaruan berikut. Pengindeksan default nonaktif. Berikutnya isi konten pemilik, jalankan ulang pemeriksaan dengan foto aktual, lalu tetapkan publikasi.

## Pembaruan logo dan nama 2026-10-20, 19:33 WIB

- Logo pemilik dari assets/logo/ diperiksa visual dan alpha-nya. Sumber 1254x1254px tetap utuh; salinan web tersedia di public/brand/.
- Header/footer memakai varian transparan yang dipangkas marginnya, tanpa filter warna. Lebar header 192px desktop/164px ponsel, footer 160px; proporsi tetap dan target tautan minimal 44px.
- Varian berlatar putih dipakai favicon 64px, Apple touch icon 180px, kartu Open Graph/Twitter 600px. Metadata kartu hanya dipasang ketika origin valid; preview eksternal belum diuji.
- Nama organisasi diperbarui menjadi Persega FC sesuai koreksi pemilik; jenis hubungan tetap belum dikonfirmasi.
- Pemeriksaan awal menemukan regresi tanpa JavaScript: pemakaian Next Image pada logo membuat konten utama tersimpan dalam segmen tersembunyi dengan fallback loading. Logo kecil yang sudah terkompres kini disajikan melalui img native. Build ulang menghasilkan satu main yang terlihat; kedua tes tanpa JavaScript lalu lulus.

| Pemeriksaan setelah perubahan | Hasil aktual                                                                                                                                                             |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| npm run lint                  | Exit 0, tanpa warning                                                                                                                                                    |
| npm run typecheck             | Exit 0                                                                                                                                                                   |
| npm test                      | 3 file, 31 tes lulus; dijalankan ulang sesudah perubahan img native                                                                                                      |
| npm run build                 | Exit 0; 10 keluaran statis                                                                                                                                               |
| npm run test:e2e              | 22/22 lulus, Chromium desktop/ponsel, 19.0 detik; termasuk no-JS, axe, menu dan overflow 320/390/768/1440px                                                              |
| npm run format:check          | Exit 0                                                                                                                                                                   |
| Browser manual                | Dua logo berhasil dimuat 640x138px; ukuran tampilan desktop 192x41.4 dan 160x34.5px. Klik logo dari album kembali ke beranda; Persega FC terlihat pada daftar kolaborasi |
| Bukti visual                  | Screenshot beranda desktop/ponsel dan album di docs/evidence/ diperbarui dari pengujian produksi lokal; logo desktop/ponsel diperiksa visual                             |

Tidak ada perubahan dependensi atau deploy. Server preview yang sudah ada pada port 3001 dipertahankan. Kartu berbagi pada platform eksternal, perangkat fisik dan foto portofolio aktual masih belum terverifikasi.

## Pembaruan tipografi 2026-10-20, 19:44 WIB

Referensi Centered ZAUSTORY Wordmark.png diperiksa di atas latar terang karena tulisan hitam memakai transparansi. Judul, nama album, dan penanda arsip kini memakai Barlow Condensed Black Italic 900 lokal, kapital dengan italic asli dan font-synthesis none. Ini pendekatan karakter logo; identitas font asli belum diketahui. Teks isi/kontrol memakai Manrope. Ukuran hero dan leading disesuaikan agar judul tetap dua baris pada ponsel kecil.

| Pemeriksaan          | Hasil aktual                                                                                                                                                                                                                |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| npm run check        | Exit 0: lint/typecheck, 31 tes pada 3 file, build dengan 10 keluaran statis                                                                                                                                                 |
| npm run test:e2e     | 22/22 lulus, Chromium desktop/ponsel, 20.5 detik; axe, no-JS, navigasi dan overflow 320/390/768/1440px                                                                                                                      |
| npm run format:check | Exit 0                                                                                                                                                                                                                      |
| Browser manual       | Judul desktop, beranda 390px/320px, album Lapangan bola 320px diperiksa visual; teks tidak terpotong. Pada 320px font terkonfirmasi loaded, weight 900, style italic, ukuran 44.8px; scrollWidth sama dengan viewport 320px |
| Screenshot           | docs/evidence/home-desktop.png, home-mobile.png dan album-desktop.png diperbarui dari hasil browser produksi lokal                                                                                                          |

Tidak ada penambahan dependensi atau perubahan logo raster. Perangkat fisik, browser selain Chromium, pengukuran produksi dan deploy tetap belum dijalankan.

## Pembaruan latar navy/slate 2026-10-20, 19:55 WIB

Permintaan pemilik mengganti bidang terang dengan palet merek diterapkan pada seluruh halaman: dasar #001233, permukaan #102543/#233652, kontak #33415C, footer #000C24. Hero mempertahankan pola arsip dengan transisi navy/slate. Teks, tombol, hover, placeholder, pesan gambar gagal, dialog dan fokus memakai token yang sesuai latar gelap. Logo transparan terang dan kartu/ikon navy diturunkan dari alpha logo asli; sumber pemilik tetap utuh.

| Pemeriksaan          | Hasil aktual                                                                                                                                                                                                                        |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| npm run check        | Exit 0: lint/typecheck, 31 tes pada 3 file, build dengan 10 keluaran statis                                                                                                                                                         |
| npm run test:e2e     | 22/22 lulus, Chromium desktop/ponsel, 21.0 detik; axe tanpa pelanggaran pada beranda/detail/404, no-JS, menu, fokus dan overflow 320/390/768/1440px                                                                                 |
| npm run format:check | Exit 0                                                                                                                                                                                                                              |
| Browser manual       | Dasar body teramati rgb(0,18,51), teks rgb(226,233,243), color-scheme dark. Hero, album, pengalaman, tentang, kontak dan footer memakai navy/slate. Logo terbaca; menu ponsel dibuka lewat keyboard dengan indikator fokus terlihat |
| Kontras token        | Perhitungan WCAG: teks utama pada slate 8.38:1; sekunder pada slate 5.42:1; aksen judul pada slate 4.79:1; teks navy pada tombol biru 11.07:1                                                                                       |
| Metadata statis      | theme-color #001233, color-scheme dark; kedua logo memakai /brand/zaustory-light.png, ikon PNG tetap tersedia                                                                                                                       |
| Bukti visual         | Screenshot beranda desktop/ponsel dan detail album di docs/evidence/ diperbarui dari pengujian produksi lokal; keseluruhan bidang halaman dan detail diperiksa visual                                                               |

Tidak ada penambahan dependensi atau deploy. Kontras token dihitung untuk pasangan warna solid, bukan pengukuran semua piksel gradien/foto. Foto aktual, perangkat fisik dan preview kartu berbagi eksternal masih belum terverifikasi.

## Fase 5: Layout dan slot foto, 2026-10-20, 20:31 WIB

T-5.01 diterapkan untuk permintaan layout lebih khas, potret fotografer transparan, ikon gambar sementara, seluruh slot album, dan satu foto per pengalaman. REQ-07/AC-07/TEST-07 ditambahkan pada spesifikasi operasional.

- Hero split memakai bidang diagonal slate, judul miring besar, dan area potret tanpa latar kotak. photographerPortrait pada site.ts masih null; background placeholder teramati rgba(0,0,0,0). Tampilan potret asli belum dapat diverifikasi.
- Indeks lima album memakai 12 kolom asimetris desktop dan satu kolom ponsel. Sampul dan seluruh posisi foto kosong memakai ImagePlaceholder Lucide dengan nama aksesibel.
- Detail album menyediakan Minsoc 20, lapangan bola 10, basket 10, padel 10, event 30 slot. Jumlah tayang tetap 0. Placeholder bukan tombol; foto asli menggantikan slot, hanya foto asli masuk lightbox.
- Tiga pengalaman masing-masing memiliki satu foto opsional; saat ini ikon sementara. Tahun/nama/foto dipisah dalam baris lebar, jarak tahun dan judul diperiksa ulang pada desktop/ponsel.
- Susunan tentang, daftar kolaborasi dan kontak diperbarui. Logo asli, font lokal, palet navy/slate, dan Persega FC dipertahankan.

| Pemeriksaan       | Hasil aktual                                                                                                                             |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| npm run lint      | Exit 0, tanpa warning; dijalankan ulang setelah perbaikan batas loading                                                                  |
| npm run typecheck | Exit 0; build akhir juga menyelesaikan pemeriksaan TypeScript                                                                            |
| npm test          | 3 file, 33 tes lulus; termasuk jumlah slot noninteraktif dan campuran foto/placeholder yang tidak mencampurkan slot ke lightbox          |
| npm run build     | Exit 0; 10 keluaran statis termasuk lima album                                                                                           |
| npm run test:e2e  | Build akhir: 22/22 lulus, 56.6 detik, Chromium desktop 1440x1000 dan ponsel 390x844                                                      |
| Jumlah slot       | Seluruh lima detail berstatus 200 dan memiliki 20/10/10/10/30 list item/ikon; jumlah tayang 0                                            |
| Aksesibilitas     | Axe tanpa pelanggaran pada beranda, Minsoc dan 404 di kedua profil; menu, skip link, reduced motion dan keyboard lulus                   |
| Responsif         | Tidak ada overflow horizontal beranda/detail/404 pada 320/390/768/1440px                                                                 |
| Tanpa JavaScript  | Lima tautan album terlihat; Minsoc dapat dibuka dan seluruh 20 slot hadir                                                                |
| Browser manual    | Hero desktop dan 390/320px, tiga foto pengalaman, menu ponsel dan album Minsoc diperiksa; area potret transparan dan jarak tahun terbaca |

Uji E2E awal menemukan dua kegagalan tanpa JavaScript (20/22 lulus): loading.tsx global membuat konten utama tersimpan dalam segmen Suspense tersembunyi. Batas loading global dihapus karena seluruh data sudah diprarender. HTML beranda/Minsoc/Event kemudian memiliki satu main tanpa segmen main tersembunyi; kedua tes tanpa JavaScript dan seluruh suite akhir lulus. Rationale tercatat pada D-16.

Bukti produksi lokal diperbarui dari screenshot E2E yang lulus:

- [Beranda desktop](../docs/evidence/home-desktop.png)
- [Beranda ponsel](../docs/evidence/home-mobile.png)
- [Beranda lengkap](../docs/evidence/home-full-desktop.png)
- [Pengalaman](../docs/evidence/experience-desktop.png)
- [Album desktop](../docs/evidence/album-desktop.png)
- [Album ponsel](../docs/evidence/album-mobile.png)

Pemeriksaan akhir npm run format:check keluar 0; seluruh file yang diperiksa sesuai Prettier. Inspeksi src/tests tidak menemukan TODO, FIXME, atau console debug.

Fase ini selesai pada lingkup UI/slot sementara, bukan kesiapan publikasi. Masih 0 foto asli: diperlukan 80 foto album, satu potret transparan, dan tiga foto pengalaman. Pembesaran memakai fixture komponen; cutout/foto aktual, perangkat fisik, Safari/Firefox, CI dan deployment belum diverifikasi. Dependensi tidak berubah. Preview yang sudah ada pada port 3001 dipertahankan.

## Fase 6: Thumbnail, CTA, dan strip foto, 2026-10-20, 20:54 WIB

T-6.01 diterapkan sesuai permintaan tambahan pemilik:

- Kategori, judul, dan deskripsi berada di dalam thumbnail album pada overlay navy. Angka slot/tayang dan penanda nomor pada kartu dihapus; jumlah serta slot detail album tetap sesuai data.
- CTA album dan kontak memakai sudut viewfinder, aperture, serta panah terpisah. Tautan Instagram hero memiliki ikon percakapan dan garis bawah. Target sentuh/fokus tetap tersedia.
- PhotoReel setelah hero menampilkan dua baris dekoratif yang bergerak berlawanan arah. Seluruh foto album digabung sebagai pool, diacak secara deterministik, dipilih maksimal 20 foto. Koleksi kecil diulang untuk loop; tanpa foto asli, ikon mewakili kelima album. Duplikat visual disembunyikan dari pembaca layar; navigasi album tetap pada indeks.
- Tombol jeda/putar dan hover menghentikan animasi. Reduced motion atau JavaScript nonaktif menampilkan strip statis tanpa kontrol animasi.
- Favicon 64x64 dan Apple touch icon 180x180 dibuat ulang dari z_logo.png berlatar putih. Header/footer tetap memakai logo transparan terang; kartu berbagi tetap navy.

| Pemeriksaan                               | Hasil aktual                                                                                                                                         |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| npm run check                             | Exit 0: lint tanpa warning, TypeScript strict, 36 tes pada 4 file, build dengan 10 keluaran statis                                                   |
| npm run build setelah perbaikan responsif | Exit 0; TypeScript dan seluruh keluaran statis selesai                                                                                               |
| npm run test:e2e akhir                    | 24/24 lulus, 27.3 detik; Chromium desktop 1440x1000 dan ponsel 390x844                                                                               |
| Gerak strip                               | Pengukuran transform membuktikan baris pertama ke kiri dan kedua ke kanan; jeda stabil, putar kembali berjalan pada kedua profil                     |
| Reduced motion/tanpa JavaScript           | Animasi none, tombol animasi disembunyikan; tautan album/detail tetap dapat dibuka                                                                   |
| Responsif/aksesibilitas                   | Tanpa overflow beranda/detail/404 pada 320/390/768/1440px; axe tanpa pelanggaran pada tiga jenis rute, kedua profil                                  |
| Inspeksi browser                          | CTA desktop/390px dan kartu 320px diperiksa visual; pengukuran kelima kategori/judul/deskripsi seluruhnya dalam batas thumbnail pada 320px dan 768px |
| Konten strip                              | Tes fixture membuktikan gabungan foto lintas album, urutan stabil, input tidak dimutasi, fallback ikon, batas 20, koleksi kosong                     |
| Favicon                                   | PNG 64x64 dan 180x180 diperiksa dimensi/piksel dan ikon 64px diperiksa visual; latar putih dan tulisan hitam dari sumber pemilik                     |
| npm run format:check                      | Exit 0; seluruh file yang diperiksa sesuai Prettier                                                                                                  |

Uji browser pertama: 23/24 lulus; desktop pada 320px menemukan scrollWidth 371px. Rasio sampul dan min-height membuat lebar otomatis menjadi 351px meski kolom 280px. width: 100% pada sampul memperbaiki sumber masalah; browser kemudian menunjukkan scrollWidth 320px dan seluruh teks tetap dalam kartu. Build dan seluruh E2E diulang hingga hasil akhir di atas. Pemeriksaan awal TypeScript juga menangkap ikon Instagram yang tidak diekspor versi Lucide terpasang dan indeks array ketat; impor diganti MessageCircle yang tersedia, tipe tuple/batas indeks diperjelas sebelum pemeriksaan akhir.

Bukti screenshot berasal dari suite produksi lokal yang lulus; crop tidak mengubah isi UI:

- [CTA dan dua strip](../docs/evidence/photo-reel-desktop.png)
- [Teks di dalam thumbnail](../docs/evidence/album-cards-desktop.png)
- [Beranda lengkap](../docs/evidence/home-full-desktop.png)
- Beranda desktop/ponsel, pengalaman, dan detail album pada docs/evidence/ diperbarui.

Fase ini selesai untuk UI lokal dan ikon sementara. Foto asli dalam strip, perangkat fisik, Safari/Firefox, CI, serta deployment belum diverifikasi. Tidak ada dependensi baru. Preview port 3001 dipertahankan.

## Koreksi toolbar strip, 2026-10-20

Teks "Beragam sudut, satu cerita." dan baris toolbar dihapus sesuai screenshot pemilik. Thumbnail langsung menyambung setelah hero. Kontrol jeda berupa ikon overlay 44px yang muncul saat hover atau fokus keyboard, tanpa teks/baris tersendiri. Aturan CSS toolbar yang tidak terpakai dihapus.

Verifikasi aktual: build/TypeScript, lint dan format lulus. Enam E2E terarah lulus dalam 18.6 detik pada Chromium desktop/ponsel: arah gerak, jeda/putar, reduced motion, axe dan screenshot. Suite penuh 24 tes serta unit tidak diulang untuk perubahan presentasi ini. Browser mengonfirmasi toolbar/teks tidak ada dan jarak hero ke baris foto pertama 0px. Bukti produksi lokal: [strip tanpa toolbar](../docs/evidence/photo-reel-clean.png). Foto asli tetap belum tersedia; tanpa deploy.

## Persiapan GitHub, 2026-10-20

Pemilik meminta proyek dimasukkan ke https://github.com/rakannaufal/zaustory. Remote diperiksa kosong sebelum commit pertama; target push main tanpa force. Kandidat commit berisi source, spesifikasi, aset, bukti dan workflow CI; node_modules, build, hasil tes sementara dan .env privat diabaikan. Pemindaian kandidat tidak menemukan pola kunci privat/token yang diperiksa. Dua trailing whitespace pada fixture AGENTS.md dibersihkan tanpa mengubah isi aturan.

Verifikasi versi terakhir sebelum commit: npm run check keluar 0 (lint, TypeScript, 36 tes pada 4 file, 10 keluaran statis); npm run format:check keluar 0; seluruh 24 E2E desktop/ponsel lulus dalam 33.0 detik; npm audit --audit-level=high menemukan 0 kerentanan. Hasil ini adalah pemeriksaan lokal. Eksekusi CI GitHub dan deployment belum menjadi bukti pada saat catatan dibuat. Foto asli tetap belum tersedia.

## Fase 7: Tentang dan animasi scroll, 2026-10-20, 21:49 WIB

T-7.01 diterapkan untuk REQ-09/AC-09/TEST-09 sesuai permintaan pemilik:

- Urutan beranda menjadi hero, dua baris foto, Tentang, album, pengalaman, kontak. Navigasi mengikuti urutan section.
- Tentang menyediakan satu potret 4:5 di kiri profil pada desktop; ponsel berurutan judul, potret, profil. Sumber memakai photographerPortrait yang sama dengan hero, contain dan posisi bawah. Nilai masih null sehingga ikon sementara tampil, bukan foto rekaan.
- ScrollReveal memberi entrance sekali saat section terlihat: opacity dan translateY 20px selama 350ms. Strip, Tentang, album, pengalaman dan kontak memakainya; hero mempertahankan entrance awal. Tidak ada dependensi baru.
- HTML tidak disembunyikan sebelum observer. Tanpa JavaScript/API animasi, konten tetap terlihat. Reduced motion awal meniadakan entrance; perubahan preferensi atau fokus keyboard membatalkan entrance aktif.

| Pemeriksaan             | Hasil aktual                                                                                                                                                                      |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| npm run check           | Exit 0 setelah perbaikan durasi produksi: lint, TypeScript, 36 tes pada 4 file, build dengan 10 keluaran statis                                                                   |
| E2E animasi terarah     | 2/2 lulus, 7.9 detik; entrance keempat section, sekali saat terlihat, pembatalan reduced motion dan fokus pada kedua profil                                                       |
| npm run test:e2e        | 28/28 lulus, 35.4 detik; Chromium desktop 1440x1000 dan ponsel 390x844                                                                                                            |
| Regresi browser         | Urutan strip/Tentang/album, satu potret Tentang, 80 slot album, filter, jeda strip, menu, keyboard, offline, HTTP/SEO dan tanpa JavaScript lulus                                  |
| Aksesibilitas/responsif | Axe tanpa pelanggaran pada beranda/detail/404; tidak ada overflow horizontal pada 320/390/768/1440px                                                                              |
| Format/lint akhir       | npm run format:check dan npm run lint keluar 0                                                                                                                                    |
| Inspeksi manual         | Browser 1280px dan 390px: potret, judul, profil dan kolaborasi terbaca; posisi Tentang sesuai. Override viewport dan tab pemeriksaan dibersihkan; preview port 3001 dipertahankan |

Uji browser awal menemukan entrance terlalu singkat: minifier produksi mengubah token 350ms menjadi .35s, sedangkan parseFloat awal memperlakukannya sebagai 0.35ms. Probe browser membuktikan durasi aktual 0.35ms. Konversi satuan CSS s/ms diperbaiki; probe sementara dihapus. Pemeriksaan penuh dan uji animasi akhir di atas memakai build yang sudah diperbaiki.

Bukti dari screenshot beranda penuh hasil suite produksi lokal yang lulus, dipotong tanpa mengubah isi UI agar dua strip dan Tentang terlihat bersama:

- [Tentang desktop](../docs/evidence/about-desktop.png)
- [Tentang ponsel](../docs/evidence/about-mobile.png)
- [Beranda lengkap](../docs/evidence/home-full-desktop.png)

Fase ini selesai pada lingkup UI lokal dengan placeholder. Potret dan seluruh foto asli tetap belum tersedia; bio final masih menunggu pemilik. Bukti ini tidak mencakup CI GitHub, deployment, perangkat fisik atau Safari/Firefox. Audit dependensi tidak diulang karena tidak ada perubahan dependensi; hasil audit sebelumnya dicatat pada persiapan GitHub.

## Fase 8: Copy dan informasi Instagram, 2026-10-20

T-8.01 diterapkan untuk REQ-10/AC-10/TEST-10 berdasarkan profil publik yang ditunjuk pemilik, https://www.instagram.com/zauustory/. Profil dibaca langsung di browser; rincian provenance dan batas adaptasi di [sumber konten](../docs/content-sources.md).

- Hero menjadi "Di lapangan. Dalam ingatan." dengan Pekanbaru, Riau. Copy Tentang/album/pengalaman/kontak diperbarui; judul/deskripsi dan metadata berbagi memakai cakupan fotografi serta lokasi terverifikasi.
- Nama profil Zau Story | Agency Media, kredit @rzzwadzaky, media partner @langkaahsenja_, serta telepon +62 838-5465-3003 dimasukkan. Tautan Instagram dikoreksi menjadi @zauustory, memakai dua u; brand tetap Zaustory.
- Telepon memakai tel:+6283854653003. Tidak menganggapnya nomor WhatsApp; konfigurasi WhatsApp opsional tetap terpisah.
- Album kosong Minsoc, lapangan bola, basket, dan event menuju sorotan yang terlihat pada profil. Padel tetap menuju profil umum. Jumlah slot/data dan nama Persega FC dipertahankan; beranda tidak menampilkan jumlah foto pada kartu.
- Detail unggahan meminta login, sehingga tidak ada caption/foto Instagram yang diterbitkan ulang. Semua foto web masih ikon sementara; tidak menambah pengalaman, harga, testimoni, atau klaim klien aktif.

| Pemeriksaan             | Hasil aktual                                                                                                                              |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Perilaku awal           | HTTP preview lokal masih memuat "Momen berlalu. Cerita tinggal." dan URL Instagram lama sebelum perubahan                                 |
| npm run check           | Exit 0: lint tanpa warning, TypeScript strict, 36 tes pada 4 file, build 10 keluaran statis                                               |
| npm run test:e2e        | 30/30 lulus, 37.1 detik; Chromium desktop 1440x1000 dan ponsel 390x844                                                                    |
| Fakta/tautan/metadata   | Lokasi, judul/deskripsi, kredit fotografer/media partner, Instagram dua u, tel publik, empat URL sorotan dan fallback padel sesuai sumber |
| Regresi                 | Lima album/80 slot, filter, 404, menu/keyboard, animasi/reduced motion, offline, no-JS dan HTTP/SEO lulus                                 |
| Aksesibilitas/responsif | Axe tanpa pelanggaran pada beranda/detail/404; tanpa overflow 320/390/768/1440px                                                          |
| Inspeksi visual         | Hero/profil/kontak diperiksa di browser; screenshot produksi desktop/ponsel diperiksa, kredit/telepon terbaca dan CTA utuh                |

Bukti screenshot dari suite produksi lokal yang lulus; crop hanya memilih section, tanpa mengubah isi UI:

- [Profil desktop](../docs/evidence/instagram-profile-desktop.png)
- [Profil ponsel](../docs/evidence/instagram-profile-mobile.png)
- [Kontak desktop](../docs/evidence/instagram-contact-desktop.png)
- [Kontak ponsel](../docs/evidence/instagram-contact-mobile.png)
- [Beranda lengkap terbaru](../docs/evidence/home-full-desktop.png)

Verifikasi telepon mencakup tujuan tautan, bukan melakukan panggilan. Tautan sorotan terlihat pada profil, tetapi pemutaran/isi penuh di Instagram belum diperiksa. Tidak ada dependensi baru; audit dependensi tidak diulang, hasil sebelumnya ada pada catatan persiapan GitHub. Lingkup copy dan informasi publik selesai secara lokal. Foto berizin, bio panjang, rincian afiliasi/WhatsApp, domain/hosting, CI GitHub dan deployment tetap belum diverifikasi.

## Kredit footer, 2026-10-20

Permintaan pemilik: tambahkan "Credit by rakandev" ke https://www.instagram.com/rakandevv/. Footer menampilkan kredit bersama tautan Instagram Zaustory, dengan baris yang membungkus pada ponsel; tautan eksternal memakai target blank dan rel noopener noreferrer.

Verifikasi aktual: npm run lint, npm run build (termasuk TypeScript, 10 keluaran statis), npm run format:check dan git diff --check keluar 0. Delapan E2E terarah lulus dalam 14.3 detik pada Chromium desktop/ponsel: identitas/tautan lama tetap ada, tanpa overflow 320/390/768/1440px, axe tanpa pelanggaran pada beranda/detail/404, screenshot. Pemeriksaan HTML hasil build membuktikan satu kredit, URL, target dan rel yang benar pada tujuh halaman memakai layout situs (beranda, lima album, 404). Halaman global error bawaan Next.js tidak memakai footer. Screenshot footer desktop/ponsel diperiksa visual. Unit dan suite E2E penuh tidak diulang untuk perubahan presentasi kecil ini; tidak ada dependensi baru.

Bukti: [footer desktop](../docs/evidence/footer-credit-desktop.png) dan [footer ponsel](../docs/evidence/footer-credit-mobile.png). Tidak ada perubahan deployment.
