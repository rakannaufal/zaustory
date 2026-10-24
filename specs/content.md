# Content

## Sumber

src/content/site.ts: identitas, lokasi, kontak, kredit profil, sorotan, pengalaman, nama organisasi. src/content/albums.ts: kategori, plannedCount, photos. Validasi di src/lib/content.ts. Fakta Instagram dan batas adaptasi tercatat di [sumber konten](../docs/content-sources.md).

## Copy

- Hero: "Di lapangan. Dalam ingatan." dengan lokasi Pekanbaru, Riau.
- Deskripsi: "Fotografi olahraga dan event. Menangkap aksi pertandingan, suasana acara, dan momen di antaranya."
- CTA: "Jelajahi album" dan "Hubungi via Instagram".
- Album kosong: "Foto belum tersedia" disertai jumlah slot dan keterangan ikon akan diganti foto asli. Setiap slot bernomor dan memakai caption "Foto sementara".
- Rencana jumlah selalu berlabel; jumlah tayang dari photos.length.
- Tentang: nama profil Zau Story | Agency Media, fotografi dari Pekanbaru, kredit @rzzwadzaky dan media partner @langkaahsenja_. Tautan menuju profil masing-masing.
- Kontak: WhatsApp 0877-5205-3779 dikonfirmasi pemilik 2026-10-23; CTA utama menuju wa.me/6287752053779. Telepon memakai nomor yang sama; @zauustory tetap tautan sekunder.
- Album kosong Minsoc/Football/basket/event menautkan sorotan terkait. Tidak menganggap isi sorotan sudah disalin ke web.
- Organisasi tidak dinyatakan klien aktif tanpa konfirmasi.

## Editorial tertunda

Bio panjang Uwa, sisa foto album, rincian afiliasi. Bio singkat dan telepon sudah bersumber dari profil publik. Jangan mengganti materi tertunda dengan data contoh atau caption yang belum terbaca.

## Pembaruan

Simpan foto berizin di public/images/<album>/. Isi src, alt, width, height, caption opsional pada manifest. Validasi saat build; format lengkap ada di README.

Potret hero: photographerPortrait dari section1.png. Tentang: aboutPortrait dari about.png. Pengalaman: satu photo per entri experiences dari kampanye.jpeg, epa.jpeg, dan piala walikota.JPEG. Slot bukan foto tayang; album minsoc, lapangan-bola, dan basket masing-masing berisi 10 foto pemilik sejak 2026-10-23. Event berisi 8 foto unik sejak 2026-10-24; dua file duplikat di sumber tidak ditayangkan ulang. Padel dihapus sesuai instruksi pemilik. Nama album lapangan-bola menjadi Football; URL lama dipertahankan. Lightbox tidak menampilkan alt sebagai caption. Alt berdasarkan isi foto; caption opsional belum diisi.

Pembaruan pemilik 2026-10-23: nomor kontak kini 0877-5205-3779. CTA hero/kontak memakai WhatsApp https://wa.me/6287752053779 dengan pesan awal. Tautan telepon tel:+6287752053779; Instagram tetap tautan sekunder. Environment WhatsApp opsional mengganti nomor default; kosong memakai nomor pemilik.

Pembaruan aset 2026-10-24: kolaborasi memakai foto Al Azhar, Curva Apparel, Persega FC dan video Pspsstore berdasarkan nama file sumber. Video diputar manual, muted awal, dengan poster dan pesan jika gagal dimuat. Alt tetap untuk aksesibilitas; tidak menjadi caption terlihat. Total foto album tayang 38 dari 70 slot rencana.
