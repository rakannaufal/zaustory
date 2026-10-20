# Security

## Kontrol

- Tanpa input publik, upload, auth, API tulis, database, rahasia client.
- React mengescape teks; tanpa dangerouslySetInnerHTML.
- Foto hanya /images/, tanpa traversal, ekstensi raster; alt wajib, dimensi positif, ID/slug unik, jumlah <=rencana.
- Origin harus HTTPS murni; WhatsApp 8-15 digit internasional dimulai 1-9. Nilai invalid menonaktifkan metadata/tautan terkait.
- Tautan tab baru memakai rel noopener noreferrer.
- Header: nosniff, Referrer-Policy, X-Frame-Options, Permissions-Policy, CSP kompatibel Next.js. Inline bootstrap Next.js membutuhkan unsafe-inline; tidak ada HTML pengguna. HSTS menjadi konfigurasi host HTTPS.
- npm audit dijalankan; temuan aktual di progress.md.

## Privasi

Tanpa tracking atau data pengunjung. Hak foto dan penggunaan nama organisasi perlu konfirmasi. Default noindex hingga konten final. HTTPS produksi belum diasumsikan aktif lokal.
