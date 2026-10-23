# Routes

| URL                  | Tujuan                                        | Kondisi                                        |
| -------------------- | --------------------------------------------- | ---------------------------------------------- |
| /                    | Identitas, album, pengalaman, tentang, kontak | Konten lokal, navigasi anchor                  |
| /#album              | Filter Semua/Olahraga/Event                   | Tautan album tetap SSR                         |
| /#pengalaman         | Tiga pengalaman brief                         | Tahun hanya bila diberikan                     |
| /#tentang            | Profil publik, fotografer, media partner      | Tanpa riwayat pribadi rekaan                   |
| /#kontak             | Instagram, telepon, WhatsApp opsional         | Nomor telepon publik bukan asumsi WhatsApp     |
| /album/minsoc        | Rencana 20 foto                               | Kosong bila photos=[]                          |
| /album/lapangan-bola | Rencana 10 foto                               | Sama                                           |
| /album/basket        | Rencana 10 foto                               | Sama                                           |
| /album/event         | Rencana 30 foto                               | Sama                                           |
| /album/<slug-asing>  | 404                                           | Tautan kembali                                 |
| /robots.txt          | Aturan crawl                                  | Disallow hingga indexing aktif                 |
| /sitemap.xml         | Peta URL                                      | URL hanya bila origin valid dan indexing aktif |

Semua halaman publik tanpa akun. Filter tidak mengubah konten dan tidak memerlukan backend.

Pembaruan 2026-10-23: Minsoc, Football (URL lapangan-bola), dan Basket masing-masing menampilkan 10 foto. Event masih kosong. Rute /album/padel kini 404.
