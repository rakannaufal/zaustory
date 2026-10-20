# Agents

## Aturan Git aktif

Instruksi pemilik 2026-10-20, berlaku untuk seluruh pekerjaan berikutnya di repositori ini; bukan bagian dari fixture historis.

- Setelah setiap perubahan tugas selesai, jalankan pemeriksaan yang relevan, buat commit kecil dengan pesan conventional commit, lalu langsung push ke origin/main tanpa meminta persetujuan ulang.
- Gunakan `git push origin HEAD:main` dari branch kerja yang melacak origin/main. Jika tujuan branch diubah oleh pemilik, ikuti tujuan tersebut.
- Pertahankan setiap checkpoint agar perubahan dapat dikembalikan. Jangan amend, force-push, atau menulis ulang riwayat tanpa instruksi eksplisit. Jika diminta rollback, gunakan commit `git revert`, verifikasi, lalu push.
- Commit hanya file dalam lingkup tugas. Jangan memasukkan rahasia, .env privat, node_modules, hasil build, atau perubahan pengguna yang tidak terkait.
- Verifikasi hasil push dan kecocokan commit remote sebelum melaporkan keberhasilan. Jika pemeriksaan atau push gagal, tangani penyebabnya; laporkan blocker yang belum terselesaikan secara jelas.

## Fixture historis

> MODE MOCK. Dokumen fixture untuk menguji alur aplikasi, bukan spesifikasi AI final.

## Tujuan
Aturan agent, urutan baca, batas akses, bukti penyelesaian

## Fakta dari brief
Zaustory website portofolio phographer profesional
Warna Primary #001233,#33415C

Tentang - dari uwa

 Album
1.Minsoc 20 foto
2.lapangan bola 10 foto
3.basket 10 foto
4.padel 10 foto
5.event 30 foto

 Pengalaman
1.Kampanye Walikota 2024
2.EPA PSPS 2025
4.Piala walikota x isac  

Bagian - sampai sekarang 
1.Pspsstore 
2 Al Azhar 
3.Curva Apparel 
4.Persegaf FC

Ig zaustory NoHp

## Rancangan awal
REQ-01: Website memenuhi tujuan utama dalam brief.
AC-01: REQ-01 dapat ditelusuri ke alur pengguna.
TEST-01: Verifikasi REQ-01 terhadap AC-01 setelah implementasi.
T-1.01: Implementasikan REQ-01 kemudian jalankan TEST-01.

## Asumsi dan pertanyaan terbuka
A-01: [ISI] Konfirmasi rincian kebutuhan bersama pemilik.

## Status
Belum diimplementasikan. Belum ada bukti pengujian proyek target.

## Urutan baca

- [specs/brief.md](specs/brief.md)
- [specs/prd.md](specs/prd.md)
- [specs/routes.md](specs/routes.md)
- [specs/design.md](specs/design.md)
- [specs/components.md](specs/components.md)
- [specs/content.md](specs/content.md)
- [specs/architecture.md](specs/architecture.md)
- [specs/security.md](specs/security.md)
- [specs/accessibility.md](specs/accessibility.md)
- [specs/performance.md](specs/performance.md)
- [specs/seo.md](specs/seo.md)
- [specs/assets.md](specs/assets.md)
- [specs/testing.md](specs/testing.md)
- [specs/acceptance.md](specs/acceptance.md)
- [specs/implementation-plan.md](specs/implementation-plan.md)
- [specs/deployment.md](specs/deployment.md)
- [specs/decisions.md](specs/decisions.md)
- [specs/progress.md](specs/progress.md)
- [specs/index.md](specs/index.md)
