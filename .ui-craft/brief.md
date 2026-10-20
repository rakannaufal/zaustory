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

- 2026-10-20: Kredit pengembang menyatu sebagai tautan pada baris copyright ke Instagram rakandev. Hapus tautan @zauustory dan teks Credit by rakandev yang terpisah agar footer ringkas; logo tetap menuju beranda.

# 7. Fold classes used

- 2026-10-20: type-only. Foto asli belum tersedia; hero tipografis dan slot sampul album berstatus kosong. Pemilihan manual karena tool fold_candidates tidak tersedia.
- 2026-10-20: split. Permintaan potret menggantikan hero type-only: tipografi miring di kiri, bidang diagonal slate dengan potret tanpa latar di kanan. Ikon sementara sampai potret asli tersedia. Variance 8; signature berupa potret yang menyatu dengan bidang hero dan bertumpu pada tepi bawah. Pemilihan manual; tool fold_candidates/check_fold tidak tersedia.
