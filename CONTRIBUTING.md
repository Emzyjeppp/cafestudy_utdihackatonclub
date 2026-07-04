# Panduan Kontribusi (Contributing Guidelines)

Terima kasih telah tertarik untuk berkontribusi di **UTDI Hackathon Club**! 🎓🏆

Repositori ini adalah tempat kita belajar bersama. Kontribusi dari seluruh anggota klub sangat kami harapkan, mulai dari perbaikan ejaan teks, perbaikan kode (*bug fixes*), hingga penambahan fitur halaman baru.

Harap baca panduan ini untuk memahami alur kerja kontribusi kami.

---

## 1. Alur Kontribusi (Workflow) 🚀

### Langkah 1: Fork Repositori
Fork repositori ini ke akun GitHub Anda masing-masing terlebih dahulu.

### Langkah 2: Clone ke Lokal
Clone repositori yang telah Anda fork ke komputer Anda:
```bash
git clone https://github.com/USERNAME/cafestudy_utdihackatonclub.git
```

### Langkah 3: Buat Branch Baru
Selalu buat branch baru sebelum menulis kode. Jangan menulis langsung di branch `main`.
Gunakan format penamaan branch berikut:
* `feature/nama-fitur` (untuk fitur baru)
* `bugfix/nama-bug` (untuk perbaikan kesalahan kode)
* `docs/deskripsi-dokumentasi` (untuk pembaruan tulisan/README)

Contoh:
```bash
git checkout -b feature/lofi-playlist
```

### Langkah 4: Tulis Kode & Commit
Tulis perubahan Anda secara rapi. Gunakan pesan commit yang jelas dan deskriptif dalam bahasa Indonesia/Inggris:
```bash
git commit -m "Add Lo-Fi audio stream playback simulator"
```

### Langkah 5: Push ke GitHub Anda
Push branch tersebut ke hasil fork di akun GitHub Anda:
```bash
git push origin feature/lofi-playlist
```

### Langkah 6: Ajukan Pull Request (PR)
Buka repositori utama kami di GitHub, klik tombol **Compare & pull request**. 
Isi template Pull Request dengan menjelaskan apa yang Anda ubah dan bagaimana cara mengujinya.

---

## 2. Aturan Penulisan Kode (Coding Standards) 🛠️
* **HTML Semantik:** Gunakan elemen penataan yang tepat seperti `<header>`, `<main>`, `<section>`, dan `<footer>`.
* **CSS Variabel:** Gunakan variabel token warna yang dideklarasikan di `styles.css` agar warna tetap konsisten.
* **Aksesibilitas (A11y):** Pastikan semua gambar memiliki tag `alt` dan tombol ikon memiliki deskripsi pembantu `aria-label`.
* **Clean Code:** Jaga agar kode JavaScript mudah dibaca dengan penamaan fungsi yang deskriptif dan komentar ringkas.

---
Semoga kontribusi Anda membantu platform belajar ini menjadi lebih keren! Selamat belajar dan berkolaborasi! 💻💚
