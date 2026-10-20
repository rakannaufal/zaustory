# Components

| Komponen         | Kontrak                                                                                                                                                           |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BrandLogo        | Logo transparan asli, proporsi tetap, tautan beranda bernama aksesibel                                                                                            |
| SiteHeader       | BrandLogo, anchor, disclosure ponsel, fokus dan Escape                                                                                                            |
| SiteFooter       | Logo beranda, copyright tahun berjalan dan Website by rakandev; hanya nama pengembang bertaut ke Instagram                                                        |
| AlbumCollection  | Filter Semua/Olahraga/Event, pengumuman jumlah                                                                                                                    |
| AlbumCard        | Tautan detail; kategori, judul, deskripsi di dalam thumbnail; tanpa angka jumlah foto                                                                             |
| PhotoReel        | Dua baris dekoratif dari foto seluruh album, arah berlawanan, jeda/putar, reduced motion                                                                          |
| ScrollReveal     | Target data-reveal mandiri, media berskala ringan, stagger 60ms; sekali saat terlihat; reduced motion/fokus menampilkan semua target; tanpa JS/API tetap terlihat |
| ImagePlaceholder | Ikon Lucide, nama aksesibel, caption dan nomor slot opsional; noninteraktif                                                                                       |
| PhotoGallery     | Photos tervalidasi, sisa plannedCount menjadi slot ikon; pembesaran hanya foto asli                                                                               |
| PhotoLightbox    | Native modal, fokus awal/kembali, Escape, panah wrap, caption, pesan error                                                                                        |
| PhotoImage       | Next Image, dimensi/alt, fallback kegagalan                                                                                                                       |
| ContactLinks     | Instagram dan telepon publik dari site.ts, WhatsApp hanya nomor terkonfigurasi valid                                                                              |

Server components diprioritaskan; client untuk menu/filter/galeri, strip foto dan entrance. Ikon konsisten lucide-react.

Beranda memakai photographerPortrait opsional untuk hero dan Tentang, serta satu photo opsional untuk setiap pengalaman dari src/content/site.ts. Tentang tepat setelah strip foto. Potret memakai contain dengan object-position center bottom; transparansi aset dipertahankan. Nilai null menghasilkan ImagePlaceholder.
