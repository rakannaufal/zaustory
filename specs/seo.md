# SEO

- Judul/deskripsi unik beranda/album, Open Graph, favicon PNG dan Apple touch icon dari logo asli.
- Judul/deskripsi beranda menyebut Pekanbaru dari bio publik @zauustory. Judul utama Open Graph/Twitter mengikuti site.title; sumber di docs/content-sources.md.
- Canonical dan sitemap dari NEXT_PUBLIC_SITE_URL berupa origin HTTPS valid. Tidak mengarang domain.
- NEXT_PUBLIC_ALLOW_INDEXING default false; metadata noindex dan robots disallow. true + origin valid mengaktifkan indeks dan sitemap beranda/empat album.
- Tanpa structured data ulasan, alamat, pengalaman rekaan.
- Halaman 404 HTTP 404 dan noindex.
- Kartu Open Graph/Twitter memakai logo berlatar navy ketika origin valid; beranda dan detail album memakai aset yang sama. Preview platform eksternal menunggu domain/deploy. Foto sosial khusus opsional setelah foto berizin tersedia.

Uji metadata/robots/sitemap melalui HTTP. Status aktual di progress.md.
