# Design

## Arah

Arsip fotografi olahraga: latar navy/slate tanpa bidang putih, Barlow Condensed Black Italic 900 dan Manrope lokal. Judul dan nama album kapital, tebal, padat, miring mengikuti karakter wordmark pemilik; teks isi/kontrol memakai Manrope. Signature: area potret fotografer transparan menyatu dengan bidang diagonal slate pada hero. Ikon gambar menjadi pengganti sementara seluruh foto yang belum tersedia.

## Struktur

Header navy dengan logo transparan terang; hero dua baris di kiri dan potret besar di kanan tanpa bingkai kartu. Urutan beranda: hero, strip foto, tentang, album, pengalaman, kontak. Tentang memakai potret 4:5 di kiri serta judul/profil di kanan, kolaborasi terpisah di bawahnya. Potret Tentang memakai about.png, hero memakai section1.png. Indeks album memakai 12 kolom, ukuran/aspek/offset beragam. Pengalaman berupa baris lebar dengan tahun, nama, dan satu foto per pengalaman. Kontak memakai judul besar dan CTA di bawahnya. Footer navy lebih dalam. Nama organisasi ditampilkan dengan konteks hubungan belum dikonfirmasi, tanpa logo/testimoni rekaan.

Setelah hero, dua strip thumbnail selebar layar bergerak berlawanan arah. Sumber foto digabung dari seluruh album, diacak stabil agar HTML/hidrasi konsisten, dipilih maksimal 20 foto; koleksi kecil diulang untuk loop. Selama belum ada foto, ikon dari empat album menjadi pengganti. Strip bersifat dekoratif; navigasi tetap melalui indeks album.

Kategori, judul, dan deskripsi kartu album berada di dalam sampul pada gradasi navy bawah; tanpa angka jumlah foto. CTA memakai sudut viewfinder, ikon aperture pada album/kontak navigasi, dan panah dengan pemisah. Favicon tetap berlatar putih.

## Tokens

Keputusan di ../.ui-craft/tokens.md; implementasi src/app/globals.css. Warna merek #001233 dan #33415C; permukaan #102543/#233652; teks #E2E9F3/#AEBED5. Tombol/fokus biru pucat #B4CAE8 dengan teks navy. Tema tetap, color-scheme dark; bukan fitur pemilih tema.

## Responsif dan gerak

320px ke atas; indeks album satu kolom ponsel, asimetris desktop. Potret hero berada setelah copy/CTA pada ponsel; Tentang berurutan judul, potret, profil. Galeri tiga kolom desktop, dua kolom ponsel. Menu disclosure, Escape dan fokus kembali. Transisi 150-400ms; reduced motion menonaktifkan entrance dan smooth scroll.

Setiap section setelah hero mendapat entrance per elemen: teks naik 24px dengan fade 400ms; potret/kartu naik 24px dan skala 0.96-1 dengan fade 600ms. Stagger 80ms, maksimal 240ms, dengan urutan media dan teks terpisah. Foto Tentang, tiap kartu kolaborasi/album, dan isi pengalaman menunggu viewport sendiri, sekali per elemen. Label serta video hanya fade. Hero mempertahankan entrance awal 350ms. ScrollReveal memakai IntersectionObserver dan Web Animations API; hanya konten di bawah layar disiapkan oleh JS, HTML server selalu terlihat. Tanpa JavaScript/API, konten tetap terlihat. Reduced motion atau fokus meniadakan animasi aktif dan tertunda agar interaksi tidak menunggu gerak.

Kelompok interaktif hanya mendapat fade tanpa perpindahan. Toolbar filter tidak dianimasikan; gerak sampul berada di dalam tautan album yang posisinya tetap agar klik/tap tidak meleset.

Strip foto memiliki tombol jeda/putar dan berhenti saat hover. Reduced motion atau JavaScript nonaktif menampilkan strip statis tanpa tombol animasi. Animasi hanya mengubah transform.

## Kondisi

Sampul, potret, pengalaman, dan foto album yang belum tersedia memakai ikon gambar dengan nama aksesibel. Detail memiliki tepat 20/10/10/30 slot; foto asli menggantikan slot secara otomatis. Ikon tidak dapat diperbesar, tidak menambah jumlah tayang. Foto rusak diberi pesan; dialog tetap dapat ditutup. Tanpa carousel otomatis atau kursor kustom.

Pembaruan 2026-10-23: empat album (Minsoc, Football, Basket, Event), kartu Event mengisi pasangan baris Basket setelah Padel dihapus. Tinggi minimum hero mengikuti viewport dikurangi tinggi header (88px desktop, 72px ponsel), sehingga strip foto baru terlihat setelah scroll. Deskripsi alt tidak menjadi caption lightbox.

## Carousel latar hero, 2026-10-23

Sesuai permintaan pemilik, bidang di belakang judul memakai foto acak Minsoc/Basket/Football. Opacity 24%, interval 3 detik, fade 600ms; bidang diagonal dan potret tetap pada lapisan di atasnya. Foto sebelumnya tetap terlihat sampai pengganti dimuat; pemilihan tidak mengulang foto aktif. Tanpa tombol kontrol sesuai permintaan pemilik. Reduced motion dan tab tersembunyi menghentikan interval; tanpa JS tetap satu foto statis. Gambar dekoratif memiliki alt kosong dan aria-hidden, tanpa caption.

Judul hero memakai fill terang transparan 72%/55% dengan stroke 0.6px/1px, sehingga foto tetap terlihat melalui huruf. CTA kontak utama kini WhatsApp 0877-5205-3779 sesuai instruksi pemilik; Instagram menjadi sekunder.

## Interaksi foto, 2026-10-24

Foto Tentang, pengalaman, dan tiga kolaborasi memakai tombol pembesaran dengan lightbox yang sama seperti galeri. Hover pointer desktop memperbesar gambar 1.035 dan memunculkan ikon expand; tombol tetap pada tempatnya. Ikon selalu terlihat di ponsel dan saat fokus keyboard. Modal fade 240ms, isi naik 12px dengan skala 0.985 selama 350ms, gambar berganti memakai fade 240ms. Panah menavigasi foto dalam kelompok terkait, Escape/tutup mengembalikan fokus. Alt tidak menjadi caption. Galeri detail juga mendapat entrance per foto. Reduced motion meniadakan reveal, hover zoom, dan entrance modal. Video mempertahankan kontrol fullscreen native.
