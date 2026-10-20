# Deployment

## Lokal

Node 22.22.2+, 24.15+, atau 26+; npm ci; .env.local opsional dari .env.example; npm run dev. Production lokal: npm run build lalu npm start. Host 127.0.0.1, port default 3000.

## Environment

- NEXT_PUBLIC_SITE_URL: origin HTTPS final, opsional lokal.
- NEXT_PUBLIC_WHATSAPP_NUMBER: 8-15 digit internasional, opsional.
- NEXT_PUBLIC_ALLOW_INDEXING: false hingga konten disetujui.
  Nilai public dibaca saat build; perubahan perlu rebuild.

## Produksi belum dijalankan

Rekomendasi Vercel untuk Next.js; biaya tergantung paket/penggunaan dan belum disetujui. Alternatif Node + reverse proxy HTTPS. Tidak membuat layanan berbayar.

## Gate

Foto/bio/kontak, izin, afiliasi, domain, checks, browser, audit, HTTPS/header host. Social image kemudian indexing dengan origin valid.

## Operasi

Rollback ke deployment sebelumnya pada host terpilih. Health GET / dan detail album 200. Belum ada deployment atau rollback teruji.
