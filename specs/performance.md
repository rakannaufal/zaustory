# Performance

- Prarender halaman publik; tanpa request API.
- Font WOFF2 lokal, display swap; tanpa font jaringan saat build.
- Foto dengan dimensi/sizes, lazy load kecuali prioritas bila ada.
- JS client hanya menu/filter/galeri.
- Tanpa animasi layout, polling, motion library, autoplay.
- Target produksi LCP <2.5s, CLS <0.1, INP <200ms; belum merupakan hasil pengukuran.

Verifikasi lokal: build statis, HTTP, overflow viewport, ruang gambar. Lighthouse produksi dan Core Web Vitals menunggu aset/hosting aktual.
