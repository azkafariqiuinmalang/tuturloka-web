# Landing page TuturLoka

Halaman utama memakai Next.js App Router dan mengikuti desain referensi di `index.html`. Navigasi ponsel dan kuis Jawa–Sunda memakai React. Kedua versi memakai stylesheet, font Inter, logo, dan gambar Bu Sari dari direktori `assets/`.

## Menjalankan Next.js

Gunakan Node.js 22.12 atau lebih baru.

```sh
npm ci
npm run dev
```

Buka [localhost:3000](http://localhost:3000). Untuk menjalankan versi produksi, gunakan `npm run build` lalu `npm start`.

## Berkas utama

- `app/page.jsx` memuat hero tiga ponsel, fitur, Bu Sari, cara kerja, bahasa, ajakan mengunduh, dan FAQ.
- `app/navigation.jsx`, `app/quiz.jsx`, dan `app/page-effects.jsx` menangani interaksi halaman Next.js.
- `public/feature-story.js` menyelaraskan panel contoh “Sowan Simbah” dengan posisi scroll pada Next.js dan HTML lokal. Contoh ditampilkan berurutan saat gerakan dikurangi atau JavaScript dinonaktifkan.
- `assets/img/sari_lesson_*.webp` berisi dua render transparan Bu Sari dari aset Blender lokal `karakter/dewasa/dewasa-kebaya-01.blend`. Katalog aset mencatat kebaya karya joyoboyo.
- `assets/css/style.css` mengatur tampilan dan breakpoint kedua versi.
- `assets/css/budaya.css` dimuat terakhir dan memberi tata letak ala Praktika dengan unsur budaya: header pil dengan garis progres parang, hero berupa kartu dengan gunungan berayun dan gelembung koreksi, pita aksara Jawa, bingkai gapura dan bayangan wayang untuk Bu Sari, langkah belajar dalam grid bento, atap joglo, dan kartu unduh mengambang. Semua animasinya berhenti bila pengunjung memilih gerak dikurangi.
- `assets/fonts/noto-sans-javanese.woff` adalah potongan Noto Sans Javanese (OFL, lihat `NotoSansJavanese-OFL.txt`) yang hanya berisi aksara Jawa. Browser baru mengunduhnya bila halaman menampilkan aksara.
- `index.html` dapat dibuka langsung dari folder proyek untuk membandingkan desain. Versi ini menggunakan `assets/js/main.js`.

## Sumber galeri busana adat

Galeri menampilkan sepuluh render WebP dari lima pasangan karakter di `karakter/adat-indonesia` dalam pustaka aset lokal. Karakter dasar berasal dari Microsoft Rocketbox dan menggunakan lisensi MIT. [Lisensi Rocketbox](assets/img/adat/rocketbox-LICENSE.txt)

Busana berasal dari AR-Pakaian-Adat. Katalog aset lokal mencatat bahwa izin publikasi busana belum terverifikasi. Nama daerah mengikuti pengelompokan aset di katalog. [Repositori sumber busana](https://github.com/dr-iskandar/AR-Pakaian-Adat)

## Referensi gerakan pada bagian Fitur

- Cula memperlihatkan satu proses dalam beberapa tahap. TuturLoka memakai satu situasi belajar dari memilih ragam sampai membandingkan kosakata. [Studi kasus Refokus](https://www.refokus.com/projects/cula)
- Gouach memakai scroll untuk membuka detail produknya. Perubahan kalimat dan penjelasan Bu Sari menjadi detail yang dibuka di sini. [Contoh Gouach di Webflow](https://webflow.com/blog/february-2023-projects)
- Framer menyelaraskan visual yang menetap dengan teks dan indikator kemajuan. TuturLoka memakai prinsip tersebut saat pengunjung menggulir turun maupun naik. [Framer Sticky Scroll](https://www.framer.com/marketplace/components/sticky-scroll/)
