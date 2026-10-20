# Design

## Arah

Arsip fotografi olahraga: latar navy/slate tanpa bidang putih, Barlow Condensed Black Italic 900 dan Manrope lokal. Judul dan nama album kapital, tebal, padat, miring mengikuti karakter wordmark pemilik; teks isi/kontrol memakai Manrope. Signature: area potret fotografer transparan menyatu dengan bidang diagonal slate pada hero. Ikon gambar menjadi pengganti sementara seluruh foto yang belum tersedia.

## Struktur

Header navy dengan logo transparan terang; hero dua baris di kiri dan potret besar di kanan tanpa bingkai kartu. Urutan beranda: hero, strip foto, tentang, album, pengalaman, kontak. Tentang memakai potret 4:5 di kiri serta judul/profil di kanan, kolaborasi terpisah di bawahnya. Sumber potret sama dengan hero. Indeks album memakai 12 kolom, ukuran/aspek/offset beragam. Pengalaman berupa baris lebar dengan tahun, nama, dan satu foto per pengalaman. Kontak memakai judul besar dan CTA di bawahnya. Footer navy lebih dalam. Nama organisasi ditampilkan dengan konteks hubungan belum dikonfirmasi, tanpa logo/testimoni rekaan.

Setelah hero, dua strip thumbnail selebar layar bergerak berlawanan arah. Sumber foto digabung dari seluruh album, diacak stabil agar HTML/hidrasi konsisten, dipilih maksimal 20 foto; koleksi kecil diulang untuk loop. Selama belum ada foto, ikon dari lima album menjadi pengganti. Strip bersifat dekoratif; navigasi tetap melalui indeks album.

Kategori, judul, dan deskripsi kartu album berada di dalam sampul pada gradasi navy bawah; tanpa angka jumlah foto. CTA memakai sudut viewfinder, ikon aperture pada album/kontak navigasi, dan panah dengan pemisah. Favicon tetap berlatar putih.

## Tokens

Keputusan di ../.ui-craft/tokens.md; implementasi src/app/globals.css. Warna merek #001233 dan #33415C; permukaan #102543/#233652; teks #E2E9F3/#AEBED5. Tombol/fokus biru pucat #B4CAE8 dengan teks navy. Tema tetap, color-scheme dark; bukan fitur pemilih tema.

## Responsif dan gerak

320px ke atas; indeks album satu kolom ponsel, asimetris desktop. Potret hero berada setelah copy/CTA pada ponsel; Tentang berurutan judul, potret, profil. Galeri tiga kolom desktop, dua kolom ponsel. Menu disclosure, Escape dan fokus kembali. Transisi 150-400ms; reduced motion menonaktifkan entrance dan smooth scroll.

Setiap section setelah hero mendapat entrance per elemen: judul/teks naik 24px, potret/kartu naik 32px dengan skala 0.985-1, opacity 0-1 selama 400ms. Elemen yang masuk bersamaan berjeda 60ms, maksimal 120ms. Kartu album dan baris pengalaman menunggu viewport sendiri, sekali per elemen. Hero mempertahankan entrance awal 350ms. ScrollReveal memakai IntersectionObserver dan Web Animations API; hanya konten di bawah layar disiapkan oleh JS, HTML server selalu terlihat. Tanpa JavaScript/API, konten tetap terlihat. Reduced motion atau fokus meniadakan animasi aktif dan tertunda agar interaksi tidak menunggu gerak.

Kelompok interaktif hanya mendapat fade tanpa perpindahan. Toolbar filter tidak dianimasikan; gerak sampul berada di dalam tautan album yang posisinya tetap agar klik/tap tidak meleset.

Strip foto memiliki tombol jeda/putar dan berhenti saat hover. Reduced motion atau JavaScript nonaktif menampilkan strip statis tanpa tombol animasi. Animasi hanya mengubah transform.

## Kondisi

Sampul, potret, pengalaman, dan foto album yang belum tersedia memakai ikon gambar dengan nama aksesibel. Detail memiliki tepat 20/10/10/10/30 slot; foto asli menggantikan slot secara otomatis. Ikon tidak dapat diperbesar, tidak menambah jumlah tayang. Foto rusak diberi pesan; dialog tetap dapat ditutup. Tanpa carousel otomatis atau kursor kustom.
