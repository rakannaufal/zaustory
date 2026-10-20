# Components

| Komponen         | Kontrak                                                                                  |
| ---------------- | ---------------------------------------------------------------------------------------- |
| BrandLogo        | Logo transparan asli, proporsi tetap, tautan beranda bernama aksesibel                   |
| SiteHeader       | BrandLogo, anchor, disclosure ponsel, fokus dan Escape                                   |
| SiteFooter       | Instagram, copyright tahun berjalan                                                      |
| AlbumCollection  | Filter Semua/Olahraga/Event, pengumuman jumlah                                           |
| AlbumCard        | Tautan detail; kategori, judul, deskripsi di dalam thumbnail; tanpa angka jumlah foto    |
| PhotoReel        | Dua baris dekoratif dari foto seluruh album, arah berlawanan, jeda/putar, reduced motion |
| ImagePlaceholder | Ikon Lucide, nama aksesibel, caption dan nomor slot opsional; noninteraktif              |
| PhotoGallery     | Photos tervalidasi, sisa plannedCount menjadi slot ikon; pembesaran hanya foto asli      |
| PhotoLightbox    | Native modal, fokus awal/kembali, Escape, panah wrap, caption, pesan error               |
| PhotoImage       | Next Image, dimensi/alt, fallback kegagalan                                              |
| ContactLinks     | Instagram tetap, WhatsApp hanya nomor valid                                              |

Server components diprioritaskan; client hanya untuk menu/filter/galeri. Ikon konsisten lucide-react.

Beranda memakai photographerPortrait opsional dan satu photo opsional untuk setiap pengalaman dari src/content/site.ts. Potret memakai contain dengan object-position center bottom; transparansi aset dipertahankan. Nilai null menghasilkan ImagePlaceholder.
