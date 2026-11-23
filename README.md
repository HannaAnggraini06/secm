# For Mas, with love ♡

Website kejutan romantis statis menggunakan HTML, CSS, dan JavaScript. Bisa langsung di-deploy ke Vercel tanpa backend.

## Personalisasi sebelum deploy

1. Ganti foto contoh di `index.html` dengan foto kalian. Cari bagian `<img src="https://images.unsplash.com/...">`, lalu ganti URL-nya dengan file foto sendiri (misalnya `assets/foto-kita-1.jpg`).
2. Buat folder `assets` dan letakkan lagu MP3 yang boleh kamu gunakan di dalamnya dengan nama `our-song.mp3`. Tombol musik baru bisa diputar setelah file ini tersedia. Browser biasanya mensyaratkan pengguna menekan tombol Play terlebih dahulu.
3. Buka `script.js`, lalu ubah `SECRET_WORD` dan `SECRET_MESSAGE` sesuai keinginan.
4. Edit isi surat, alasan, dan caption foto langsung di `index.html`.

## Deploy ke Vercel

**Cara paling mudah:**
1. Ekstrak ZIP ini.
2. Upload folder proyek ke repository GitHub.
3. Login ke https://vercel.com lalu pilih **Add New → Project**.
4. Import repository tadi.
5. Framework Preset pilih **Other** (atau biarkan terdeteksi sebagai static site). Build Command dan Output Directory bisa dikosongkan.
6. Klik **Deploy**. Setelah selesai, Vercel memberikan link website.

Bisa juga deploy lewat Vercel CLI dari folder proyek: `npx vercel`.

Catatan: kata rahasia di website statis bukan password sungguhan karena kode JavaScript bisa dilihat pengunjung. Gunakan hanya sebagai elemen kejutan yang playful, bukan untuk menyimpan informasi pribadi.
