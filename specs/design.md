# Design

## Arah

Arsip fotografi olahraga: latar navy/slate tanpa bidang putih, Barlow Condensed Black Italic 900 dan Manrope lokal. Judul dan nama album kapital, tebal, padat, miring mengikuti karakter wordmark pemilik; teks isi/kontrol memakai Manrope. Signature: area potret fotografer transparan menyatu dengan bidang diagonal slate pada hero. Ikon gambar menjadi pengganti sementara seluruh foto yang belum tersedia.

## Struktur

Header navy dengan logo transparan terang; hero dua baris di kiri dan potret besar di kanan tanpa bingkai kartu. Indeks album memakai 12 kolom, ukuran/aspek/offset beragam. Pengalaman berupa baris lebar dengan tahun, nama, dan satu foto per pengalaman. Tentang menonjolkan judul dengan kolaborasi terpisah; kontak memakai judul besar dan CTA di bawahnya. Footer navy lebih dalam. Nama organisasi ditampilkan dengan konteks hubungan belum dikonfirmasi, tanpa logo/testimoni rekaan.

Setelah hero, dua strip thumbnail selebar layar bergerak berlawanan arah. Sumber foto digabung dari seluruh album, diacak stabil agar HTML/hidrasi konsisten, dipilih maksimal 20 foto; koleksi kecil diulang untuk loop. Selama belum ada foto, ikon dari lima album menjadi pengganti. Strip bersifat dekoratif; navigasi tetap melalui indeks album.

Kategori, judul, dan deskripsi kartu album berada di dalam sampul pada gradasi navy bawah; tanpa angka jumlah foto. CTA memakai sudut viewfinder, ikon aperture pada album/kontak navigasi, dan panah dengan pemisah. Favicon tetap berlatar putih.

## Tokens

Keputusan di ../.ui-craft/tokens.md; implementasi src/app/globals.css. Warna merek #001233 dan #33415C; permukaan #102543/#233652; teks #E2E9F3/#AEBED5. Tombol/fokus biru pucat #B4CAE8 dengan teks navy. Tema tetap, color-scheme dark; bukan fitur pemilih tema.

## Responsif dan gerak

320px ke atas; indeks album satu kolom ponsel, asimetris desktop. Potret berada setelah copy/CTA pada ponsel. Galeri tiga kolom desktop, dua kolom ponsel. Menu disclosure, Escape dan fokus kembali. Transisi 150-350ms; reduced motion menonaktifkan entrance dan smooth scroll.

Strip foto memiliki tombol jeda/putar dan berhenti saat hover. Reduced motion atau JavaScript nonaktif menampilkan strip statis tanpa tombol animasi. Animasi hanya mengubah transform.

## Kondisi

Sampul, potret, pengalaman, dan foto album yang belum tersedia memakai ikon gambar dengan nama aksesibel. Detail memiliki tepat 20/10/10/10/30 slot; foto asli menggantikan slot secara otomatis. Ikon tidak dapat diperbesar, tidak menambah jumlah tayang. Foto rusak diberi pesan; dialog tetap dapat ditutup. Tanpa carousel otomatis atau kursor kustom.
