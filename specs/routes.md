# Routes

| URL                  | Tujuan                                        | Kondisi                                        |
| -------------------- | --------------------------------------------- | ---------------------------------------------- |
| /                    | Identitas, album, pengalaman, tentang, kontak | Konten lokal, navigasi anchor                  |
| /#album              | Filter Semua/Olahraga/Event                   | Tautan album tetap SSR                         |
| /#pengalaman         | Tiga pengalaman brief                         | Tahun hanya bila diberikan                     |
| /#tentang            | Cakupan dan status bio                        | Tanpa riwayat pribadi rekaan                   |
| /#kontak             | Instagram, WhatsApp opsional                  | Tanpa nomor contoh                             |
| /album/minsoc        | Rencana 20 foto                               | Kosong bila photos=[]                          |
| /album/lapangan-bola | Rencana 10 foto                               | Sama                                           |
| /album/basket        | Rencana 10 foto                               | Sama                                           |
| /album/padel         | Rencana 10 foto                               | Sama                                           |
| /album/event         | Rencana 30 foto                               | Sama                                           |
| /album/<slug-asing>  | 404                                           | Tautan kembali                                 |
| /robots.txt          | Aturan crawl                                  | Disallow hingga indexing aktif                 |
| /sitemap.xml         | Peta URL                                      | URL hanya bila origin valid dan indexing aktif |

Semua halaman publik tanpa akun. Filter tidak mengubah konten dan tidak memerlukan backend.
