# Content

## Sumber

src/content/site.ts: identitas, pengalaman, nama organisasi. src/content/albums.ts: kategori, plannedCount, photos. Validasi di src/lib/content.ts.

## Copy

- Hero: "Momen berlalu. Cerita tinggal."
- Deskripsi: "Dari energi di lapangan sampai cerita di luar pertandingan. Setiap momen punya tempat di sini."
- CTA: "Jelajahi album" dan "Hubungi via Instagram".
- Album kosong: "Foto belum tersedia" disertai jumlah slot dan keterangan ikon akan diganti foto asli. Setiap slot bernomor dan memakai caption "Foto sementara".
- Rencana jumlah selalu berlabel; jumlah tayang dari photos.length.
- Bio: "Cerita di balik kamera segera hadir." Materi dari Uwa sedang dilengkapi.
- Organisasi tidak dinyatakan klien aktif tanpa konfirmasi.

## Editorial tertunda

Bio Uwa, foto, caption/alt, izin, nomor telepon, rincian afiliasi. Jangan mengganti dengan data contoh publik.

## Pembaruan

Simpan foto berizin di public/images/<album>/. Isi src, alt, width, height, caption opsional pada manifest. Validasi saat build; format lengkap ada di README.

Potret hero: photographerPortrait pada site.ts, null sampai potret transparan asli tersedia. Pengalaman: satu photo per entri experiences, null sampai aset tersedia. Slot bukan foto tayang; photos album tetap kosong.
