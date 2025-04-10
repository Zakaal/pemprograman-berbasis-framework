# Pertemuan 5 | Membangun Website Pribadi dengan Next.js (App Router), React, dan Tailwind CSS 

|              | **Pemrograman Berbasis Framework 2025** |
|--------------|------------------------------------|
| **NIM**     | 2241720175                         |
| **Nama**    | Mochammad Zakaro Al Fajri          |
| **Kelas**   | TI - 3D                            |

## Praktikum 1 : Persiapan Lingkungan

### Langkah 1 : Pastikan Node.js dan npm sudah terinstal di komputer Anda.

<img src="assets/p1/1.png" width="500">

### Langkah 2 : Buat direktori baru dan Inisialisasi proyek Next.js 

<img src="assets/p1/2.png" width="500">

### Langkah 3 : Buka app/layout.tsx, tambahkan import './globals.css', dan modifikasi menjadi sebagai berikut:

<img src="assets/p1/3.png" width="700">

## Praktikum 2 : Membuat Halaman Website

### Langkah 1 : Buat file app/page.tsx sebagai halaman "Tentang Saya":

<img src="assets/p2/1.png" width="700">

### Langkah 2 : Buat file app/projects/page.tsx sebagai halaman "Proyek"

<img src="assets/p2/2.png" width="700">

### Langkah 3 : Buat file app/essays/page.tsx sebagai halaman "Esai"

<img src="assets/p2/3.png" width="700">

### Langkah 4 : Buka browser dan akses : 

- http://localhost:3000/ untuk halaman "Tentang Saya".

    <img src="assets/p2/o1.png" width="650">

- http://localhost:3000/projects untuk halaman "Proyek"

    <img src="assets/p2/o2.png" width="650">

- http://localhost:3000/essays untuk halaman "Esai".
  
    <img src="assets/p2/o3.png" width="650">

## Praktikum 3 : Membuat Layout dan Navigasi

**Layout digunakan untuk menyediakan struktur yang konsisten di seluruh halaman, seperti navbar dan footer.**

### Langkah 1 : Buat direktori src/components 

<img src="assets/p3/1.png" width="300">

### Langkah 2 : Buat file src/components/Layout.tsx

<img src="assets/p3/2.png" width="700">

### Langkah 3 : Buat file src/components/Navbar.tsx

<img src="assets/p3/3.png" width="700">

### Langkah 4 : Buat file src/components/Footer.tsx

<img src="assets/p3/4.png" width="700">

### Langkah 5 : Update file app/layout.tsx untuk menggunakan layout

<img src="assets/p3/5.png" width="700">

### Langkah 6 : Update setiap halaman menambahkan metadata dengan generateMetadata

<img src="assets/p3/5.png" width="700">

### Langkah 7 : Output 

<img src="assets/p3/7.png" width="700">

## Praktikum 4 : Membuat Halaman Proyek dengan Grid Responsif

**Halaman proyek akan menampilkan daftar proyek dalam bentuk grid yang responsif.**

### Langkah 1 : Buat folder di public/images. Kemudian tambahkan dua image, lalu rename dengan nama project1.png dan project2.png

<img src="assets/p4/1.png" width="300">

### Langkah 2 : Modifikasi file app/projects/page.tsx

- Tambahkan import next/image

    <img src="assets/p4/2a.png" width="700">

- Buat card project item

    <img src="assets/p4/2b.png" width="700">

- Modifikasi komponen project

    <img src="assets/p4/2c.png" width="700">

### Langkah 3 : Output 

<img src="assets/p4/3.png" width="700">

## Tugas 

1. **Modifikasi halaman "Esai" dengan Grid daftar artikel yang telah ditulis.**

    Jawab : 
    
    <img src="assets/s/1b.png" width="700">

2. **Modifikasi halaman “Tentang Saya” Buat tampilan yang menarik**

    Jawab : 
        
    <img src="assets/s/2b.png" width="700">
