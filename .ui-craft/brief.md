# 1. Product purpose

Memperlihatkan cakupan fotografi olahraga dan event Zaustory, lalu mengarahkan calon klien ke kontak.

# 2. Primary user

Penyelenggara event, tim olahraga, dan calon klien yang menilai karya melalui ponsel sebelum menghubungi fotografer.

# 3. Principles

1. Karya harus milik Zaustory. Ketiadaan foto ditampilkan sebagai ikon gambar berlabel, bukan karya orang lain.
2. Album adalah inti navigasi. Pengunjung dapat membuka kategori tanpa formulir atau login.
3. Nomor frame menjadi penanda album dan urutan slot foto, bukan dekorasi penomoran setiap bagian.
4. Jumlah rencana tidak dianggap jumlah foto tayang. Informasi yang belum dikonfirmasi dinyatakan terbuka.
5. Identitas navy berasal dari brief. Gerak ringan mendukung orientasi tanpa menghalangi akses.

# 4. Success metric

Pengunjung mengenali lima kategori, membuka detail, dan menemukan Instagram melalui keyboard maupun ponsel. Pembesaran foto mempertahankan fokus dan navigasi keyboard.

# 5. Out of scope

- Admin, login, pembayaran, booking, database.
- Foto stok atau hasil generasi yang diklaim sebagai karya fotografer.
- Klaim lokasi, testimoni, afiliasi aktif yang belum dikonfirmasi.
- Publikasi sebelum konten disetujui.

# 6. Learned constraints

- 2026-10-20: Implementasi disetujui setelah peninjauan dokumen. Setiap fase membutuhkan bukti aktual.
- 2026-10-20: Gunakan logo asli dari assets/logo/. Varian transparan menyatu dengan permukaan terang; varian putih untuk ikon/kartu berbagi. Pertahankan bentuk dan warna, jangan mengganti dengan logo teks buatan.
- 2026-10-20: Tipografi display mengikuti referensi wordmark pemilik: tebal, padat, miring, kapital. Barlow Condensed Black Italic 900 menjadi pendekatan lokal; Manrope menjaga keterbacaan teks isi/kontrol.
- 2026-10-20: Pemilik meminta background dari palet navy/slate atau warna dekatnya, tanpa putih. Keputusan permukaan terang sebelumnya digantikan. Logo memakai varian terang dari alpha asli agar terbaca; sumber asli tetap utuh.
- 2026-10-20: Pemilik meminta komposisi lebih khas dan asimetris. Hero menyediakan potret fotografer transparan; seluruh foto yang belum tersedia memakai ikon gambar. Setiap detail album menampilkan seluruh slot rencana (20/10/10/10/30), tanpa menganggapnya foto tayang. Setiap pengalaman mendapat satu foto.
- 2026-10-20: Kategori, judul, dan deskripsi album berada di dalam thumbnail agar sampul menjadi satu kesatuan; kartu tanpa angka jumlah foto. CTA memakai sudut viewfinder dan ikon aperture sebagai detail fotografi.
- 2026-10-20: Setelah hero terdapat dua baris foto campuran seluruh album, bergerak ke kiri dan kanan. Ikon sementara digantikan foto dari data album; kontrol jeda dan reduced motion tetap tersedia.
- 2026-10-20: Favicon memakai logo hitam berlatar putih. Pengecualian ini tidak mengubah latar navy/slate halaman atau logo header/footer.
- 2026-10-20: Hapus teks dan toolbar di atas strip foto agar thumbnail langsung menyambung setelah hero. Kontrol jeda berupa ikon overlay saat hover atau fokus keyboard, tanpa mengambil baris tersendiri.
- 2026-10-20: Tentang berada tepat setelah dua baris foto, sebelum album. Tambahkan potret fotografer dari sumber hero; ikon sementara sampai aset tersedia. Setiap section mendapat entrance saat masuk layar, sekali saja agar scroll berulang tetap tenang; reduced motion dan konten tanpa JavaScript tetap didukung.
- 2026-10-20: Copy dan informasi mengikuti profil publik @zauustory: Pekanbaru/Riau, kredit @rzzwadzaky, media partner @langkaahsenja_, telepon. Gunakan bahasa kasual profesional, konkret, tanpa klaim harga/pengalaman baru atau kutipan caption yang tertutup login. Nomor telepon tidak otomatis menjadi WhatsApp. Brand tetap Zaustory; foto memakai ikon sampai tersedia aset berizin.

- 2026-10-20: Footer memakai "© [tahun berjalan] Zaustory · Website by rakandev". Hanya nama rakandev bertaut ke Instagram pengembang; copyright dan Website by berupa teks biasa. Tanpa tautan @zauustory atau kredit terpisah agar footer ringkas; logo tetap menuju beranda.
- 2026-10-20: Perjelas kemunculan section saat scroll melalui judul/teks, potret/kartu, dan baris pengalaman yang masuk secara mandiri. Gerak vertikal pendek dengan fade, skala foto ringan, stagger 60ms saat masuk bersama; sekali per elemen. Utamakan tiap kartu yang benar-benar masuk layar agar album panjang tetap terasa hidup. Fokus/reduced motion langsung menampilkan semua target tertunda; tanpa JS/API tetap terlihat.

# 7. Fold classes used

- 2026-10-20: type-only. Foto asli belum tersedia; hero tipografis dan slot sampul album berstatus kosong. Pemilihan manual karena tool fold_candidates tidak tersedia.
- 2026-10-20: split. Permintaan potret menggantikan hero type-only: tipografi miring di kiri, bidang diagonal slate dengan potret tanpa latar di kanan. Ikon sementara sampai potret asli tersedia. Variance 8; signature berupa potret yang menyatu dengan bidang hero dan bertumpu pada tepi bawah. Pemilihan manual; tool fold_candidates/check_fold tidak tersedia.

- 2026-10-23: Empat album: Minsoc, Basket, Football, Event; Padel dihapus. Hero memakai carousel latar foto olahraga acak setiap 3 detik, opacity rendah (24%) dan fade 600ms, tanpa tombol kontrol; reduced motion menampilkan foto statis. Strip setelah hero tetap di bawah viewport awal.

- 2026-10-23: Judul hero lebih transparan (72%/55%) dengan garis tepi tipis agar foto tetap terlihat. CTA utama menuju WhatsApp 087752053779, Instagram sekunder.

- 2026-10-24: Aset baru dipetakan menurut nama: section1 untuk hero, about untuk Tentang, tiga pengalaman, tiga foto kolaborasi dan satu video Pspsstore. Potret hero dan Tentang kini sumber terpisah. Kolaborasi menjadi grid media empat kolom desktop/dua kolom ponsel dengan label nama. Video native diputar manual; hero tetap tanpa tombol carousel. Event berisi delapan foto unik, sumber duplikat tidak ditayangkan ulang.

- 2026-10-24: Pemilik meminta animasi saat memasuki semua section, hover, dan pembesaran foto. Pertahankan arah navy/fotografi. Reveal per media: fade/naik 24px/skala 0.96 selama 600ms, teks 400ms, stagger 80ms. Foto Tentang, pengalaman, kolaborasi memakai lightbox dan hover zoom 1.035; video memakai fullscreen native. Area klik tetap stabil, reduced motion/no-JS tetap didukung.
