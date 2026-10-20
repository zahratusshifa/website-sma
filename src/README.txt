STARTER WEBSITE PROFIL SMA NEGERI 1 PEMALANG
============================================

Cara memasang:
1. Ekstrak ZIP ini.
2. Buka folder hasil ekstrak.
3. Salin isi folder `src` ke folder `src` milik project Next.js kamu. Jika diminta, izinkan file contoh menggantikan file yang sama (terutama layout.js, page.js, globals.css).
4. Salin folder `public/images` dari ZIP ini ke folder `public/images` milik project kamu.
5. Pastikan project menggunakan Next.js App Router dan Tailwind CSS. File globals.css memakai sintaks Tailwind CSS v4 (`@import "tailwindcss";`).
6. Di terminal VS Code, jalankan `npm run dev`.
7. Buka http://localhost:3000.

Hal penting:
- File `src/app/layout.js` menggunakan Navbar dan Footer bersama untuk semua halaman.
- Homepage adalah `src/app/page.js`.
- Berita contoh tersimpan di `src/data/berita.js`; enam item sudah disiapkan dan tiap item memiliki halaman detail dinamis `/berita/[id]`.
- Data prestasi contoh tersimpan di `src/data/prestasi.js`.
- Ganti foto di `public/images` atau ubah nama path pada file data bila perlu.
- Nama file gambar di starter ini: hero-smansa.jpg, popda.jpeg, zulkifli-hasan.jpeg, pesta-demokrasi.jpeg, kegiatan-smansa.jpg.
- Teks berita, tanggal, data prestasi, sejarah, visi-misi, nama kepala sekolah, dan kontak harus diperiksa dan diganti dengan informasi resmi sebelum dipublikasikan.
- Jika project kamu memakai Tailwind CSS v3 dan error pada `@import "tailwindcss";`, beri tahu aku. File CSS-nya perlu disesuaikan dengan versi Tailwind yang terpasang.
