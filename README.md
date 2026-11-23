# Landing page TuturLoka

Halaman promosi Tuturloka untuk masyarakat umum: fitur aplikasi, perkenalan Bu Sari sebagai tutor, cara kerja, kuis contoh Jawa/Sunda, bahasa yang tersedia, dan tanya jawab. Tombol unduh mengarah ke Google Play.

Statis: HTML, CSS, dan sedikit JavaScript tanpa framework atau build. Bisa di-host di mana saja (GitHub Pages, Netlify, Vercel, Cloudflare Pages, atau disajikan API Go).

## Menjalankan lokal

```powershell
python -m http.server 8099
```

Jalankan dari folder repo ini, lalu buka http://localhost:8099.

## Isi folder

| Berkas | Isi |
|---|---|
| `index.html` | Seluruh halaman |
| `assets/css/style.css` | Gaya, token warna, responsif (375–1440 px), `prefers-reduced-motion` |
| `assets/js/main.js` | Menu ponsel, animasi muncul, kuis contoh |
| `assets/img/` | Render Bu Sari dari `pradigi-app/assets/sari` (diperkecil untuk web) dan logo TuturLoka (kakatua) dari pemilik produk |
| `assets/fonts/` | Inter (OFL, lihat `Inter-OFL.txt`) |

## Keputusan desain

- Tata letak mengikuti referensi landing page aplikasi yang diberikan pemilik produk: hero dengan tiga ponsel, pita fitur, kartu manfaat di sekitar ponsel, langkah berselang-seling, CTA unduh.
- Warna dan huruf mengikuti `pradigi-app/DESIGN.md`: putih, biru muda `#4DB8F7` dengan teks biru tua `#062A49`, hanya Inter. Aksen emas dan motif kawung diambil dari kebaya batik Bu Sari.
- Tidak ada statistik, rating, atau testimoni karangan. Klaim hanya yang benar di aplikasi dan dokumen proyek (Jawa tersedia, Sunda segera hadir, mode tamu, suara diubah jadi teks di HP).
- Kalimat Jawa/Sunda di mockup dan kuis berasal dari kamus draf Tuturloka (`backend/pradigi-backend/data/seed/`) dan masih menunggu validator bahasa.
- Tangkapan layar di `pradigi-app/assets/WhatsApp Image ...` adalah rujukan aplikasi lain dan tidak dipakai.

Gaya disusun dengan skill `ui-ux-pro-max` (pola App Store Style Landing, checklist aksesibilitas). Saran font Baloo/Comic Neue dan palet indigo dari skill tidak dipakai karena bertentangan dengan identitas Tuturloka.
