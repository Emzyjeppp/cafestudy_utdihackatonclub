# UTDI Hackathon Club - Pertemuan Ke-3 🚀

Selamat datang di repositori resmi **Pertemuan Ketiga UTDI Hackathon Club**! 🎓🏆

Fokus utama pada pertemuan kali ini adalah mempraktikkan pembuatan antarmuka web modern dengan pendekatan **Multi-Page App (MPA)** yang memiliki desain visual konsisten, ramah aksesibilitas (A11y), teroptimasi SEO lokal, dan kaya akan fitur interaktif menggunakan Vanilla JavaScript.

## 🌟 Fitur Utama Proyek (CafeStudy)
Dalam pertemuan ini, kita membangun platform **CafeStudy ("Fuel Your Focus")** dengan fitur-fitur pendukung:
1. **Multi-Page Layout Konsisten:** Struktur navigasi, warna, dan komponen yang selaras di seluruh halaman (Beranda, Menu, Workspaces, Lokasi).
2. **Interactive Shopping Cart:** Simulator keranjang belanja di halaman Menu yang mendukung kustomisasi opsi minuman (gula, es, susu alternatif) dan kalkulasi otomatis.
3. **Interactive Seat Selector:** Peta pemilihan kursi co-working space secara visual, lengkap dengan filter zona konsentrasi dan pembaruan kapasitas kursi secara real-time.
4. **Mading Event & Workshop:** Papan informasi kegiatan kampus terintegrasi dengan tombol registrasi peserta instan.
5. **Global Lo-Fi Ambient Player:** Pemutar audio white-noise/lo-fi yang melayang di bagian bawah halaman lengkap dengan visualisasi equalizer gelombang suara bergerak.
6. **Local SEO & GEO Optimization:** Penerapan data terstruktur JSON-LD `CafeOrCoffeeShop` untuk meningkatkan visibilitas mesin pencari lokal.

## 🛠️ Teknologi yang Digunakan
* **Struktur:** HTML5 Semantik
* **Styling:** Tailwind CSS (v3) & Custom CSS-First Properties (Design Tokens & Animasi Equalizer)
* **Interaktivitas:** Vanilla JavaScript (DOM Manipulation, Intersecting Observer, Event Listeners)
* **Ikon & Font:** Material Symbols Outlined & Plus Jakarta Sans

## 📁 Struktur Folder
```text
cafestudy/
├── src/                # Folder Source Code Website Utama
│   ├── index.html      # Halaman Beranda (Landing Page & Events)
│   ├── menu.html       # Halaman Daftar Menu & Order Simulator
│   ├── workspaces.html # Halaman Peta Kursi & Booking System
│   ├── location.html   # Halaman Peta Lokasi & Form Masukan
│   └── styles.css      # CSS Global (Variables, Glassmorphism, & Audio Waves)
├── .github/            # Folder Pengaturan GitHub (Issue/PR Templates)
├── BLUEPRINT.md        # Dokumen Arsitektur Proyek
├── CHANGELOG.md        # Catatan Perubahan Versi
├── CONTRIBUTING.md     # Panduan Kontribusi Anggota
├── LICENSE             # Lisensi Proyek (MIT License)
└── SECURITY.md         # Kebijakan Keamanan Proyek
```

## 🚀 Cara Menjalankan Proyek
1. Clone repositori ini ke komputer lokal Anda:
   ```bash
   git clone https://github.com/Emzyjeppp/cafestudy_utdihackatonclub.git
   ```
2. Buka folder proyek di Text Editor favorit Anda (misalnya VS Code).
3. Jalankan file `src/index.html` menggunakan ekstensi **Live Server** di browser Anda.

---
*Dibuat dengan 💚 oleh UTDI Hackathon Club.*
