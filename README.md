# Mamaika Aqiqah & Catering — Review Pelanggan

Landing page Next.js statis untuk mengumpulkan masukan pelanggan dan mengarahkan
mereka ke halaman resmi Google Review Mamaika. Hasil build diterbitkan di
`review/index.html` untuk GitHub Pages. Rating dan komentar hanya berada di
browser; aplikasi ini tidak mengirim atau menyimpan data pelanggan ke server.

## Persyaratan

- Node.js 20.9 atau lebih baru
- npm

## Instalasi dan development

```bash
npm install
npm run dev
```

Buka [http://localhost:3000/review/](http://localhost:3000/review/). Untuk
memeriksa tipe dan menghasilkan file statis untuk publikasi:

```bash
npm run typecheck
npm run build
```

Build membuat `out/` dan menyalin hasil halaman ke folder `review/`.

## Mengganti aset

Ganti file dengan aset milik Mamaika sendiri, pertahankan nama dan formatnya:

- `public/images/mamaika-logo.jpg` — logo yang ditampilkan di header dan favicon.
  Jaga rasio aslinya; jangan memotong atau meregangkan logo.
- `public/images/catering-hero.jpg` — foto hidangan untuk hero.
- `public/images/mamaika-og.jpg` — gambar Open Graph untuk preview tautan.

Ketiga aset tersebut adalah file lokal dan tidak bergantung pada URL gambar
eksternal. Foto hero saat ini adalah foto hidangan yang diberikan bersama proyek.

## Mengubah tautan Google Review

Ubah konstanta `googleReviewUrl` pada `app/page.tsx`. Tautan dibuka langsung di
tab baru. Form tidak mengirim rating maupun komentar secara otomatis; pelanggan
menulis dan mengirim ulasan sendiri di Google. Tombol salin hanya menyalin
komentar dari browser pengguna.

## Metadata dan domain

Judul, deskripsi, Open Graph, Twitter Card, canonical, dan ikon dikonfigurasi
menggunakan Metadata API di `app/layout.tsx`. Halaman diekspor dengan base path
`/review` di `next.config.ts`. Domain yang sudah tercatat pada
konfigurasi situs lama adalah `mamaika.my.id`; nilai tersebut menjadi fallback.
Untuk menggantinya, salin `.env.example` ke `.env.local`, lalu atur:

```bash
NEXT_PUBLIC_SITE_URL=https://domain-resmi-anda
```

Gunakan URL origin HTTPS publik yang benar-benar sudah diarahkan ke deployment
(tanpa akhiran `/review`). Meta gambar menggunakan aset lokal
`/review/images/mamaika-og.jpg`; `metadataBase` akan menghasilkan URL absolut
setelah domain ditentukan. Setelah deploy, periksa bahwa URL gambar absolut
dapat diakses melalui HTTPS agar preview WhatsApp bekerja dengan baik.

## Deployment ke GitHub Pages

1. Jalankan `npm install` lalu `npm run build`.
2. Pastikan file `.nojekyll` di root repositori ikut dipush agar GitHub Pages
   menyajikan aset Next.js di folder `_next`.
3. Commit dan push folder `review/` hasil build ke branch `main`.
4. GitHub Pages harus menerbitkan branch `main` dari root repositori.
5. Halaman tersedia pada `https://mamaika.my.id/review/` jika domain di `CNAME`
   terhubung ke GitHub Pages.

Output juga dapat di-deploy ke Vercel sebagai static export. Tetapkan
`NEXT_PUBLIC_SITE_URL` ke origin HTTPS resmi sebelum build produksi.

## Menguji preview WhatsApp

Setelah domain dan deployment aktif, kirim `https://mamaika.my.id/review/` ke
chat WhatsApp. Periksa judul, deskripsi, dan gambar preview. Jika preview lama
masih muncul, tunggu cache platform diperbarui atau gunakan debugger berbagi
tautan Meta untuk meminta pengambilan ulang. Pastikan gambar OG dapat dimuat
tanpa login dan metadataBase menunjuk ke domain HTTPS yang benar.
