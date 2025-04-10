# 02 REACTJS | Laporan Praktikum Pertemuan 2 

|              | **Pemrograman Berbasis Framework 2025** |
|--------------|------------------------------------|
| **NIM**     | 2241720175                         |
| **Nama**    | Mochammad Zakaro Al Fajri          |
| **Kelas**   | TI - 3D                            |

## Praktikum 1: Persiapan Lingkungan

### Langkah 1 : Pastikan Node.js dan npm sudah terinstal di komputer Anda.

<img src="assets/1/3.png" width="500"/>

### Langkah 2 : Inisialisasi proyek React

<img src="assets/1/p1l1.png" width="500"/>

### Langkah 3 : Jalankan aplikasi React 

<img src="assets/1/2.png" width="500"/>

## Praktikum 2 : Membuat Komponen React

### Langkah 1 : Buka file src/App.js di text editor Anda.

<img src="assets/2/3.png" width="300"/>

### Langkah 2 : Ganti kode di dalamnya sesuai dengan perintah.

<img src="assets/2/1.png" width="500"/>

### Output : 

<img src="assets/2/2.png" width="700"/>

## Praktikum 3 : Menggunakan JSX untuk Membuat Komponen Dinamis

### Langkah 1 : Buat file baru di direktori src dengan nama Counter.js.

<img src="assets/3/1.png" width="300"/>

### Langkah 2 : Tambahkan kode berikut untuk membuat komponen Counter.

<img src="assets/3/2.png" width="500"/>

### Langkah 3 : Buka file src/App.js dan impor komponen Counter.

<img src="assets/3/3.png" width="500"/>

### Langkah 4 : Tambahkan komponen Counter ke dalam komponen App.

<img src="assets/3/4.png" width="500"/>

### Output : 

<img src="assets/3/output.png" width="700"/>

## Praktikum 4 :  Menggunakan Props untuk Mengirim Data

### Langkah 1 : Buat file baru di direktori src dengan nama Greeting.js. 

<img src="assets/4/1.png" width="300"/>

### Langkah 2 : Tambahkan kode untuk membuat komponen Greeting yang menerima props

<img src="assets/4/2.png" width="500"/>

### Langkah 3 : Buka file src/App.js dan impor komponen Greeting

<img src="assets/4/3.png" width="500"/>

### Langkah 4 : Tambahkan komponen Greeting ke dalam komponen App dan kirim props name

<img src="assets/4/4.png" width="500"/>

### Output : 

<img src="assets/4/output.png" width="700"/>

## Praktikum 5 : Menggunakan State untuk Mengelola Data

### Langkah 1 : Buka file src/App.js dan tambahkan kode berikut untuk membuat komponen yang mengelola state

<img src="assets/5/1.png" width="500"/>

### Langkah 2 : Tambahkan komponen Example ke dalam komponen App

<img src="assets/5/2.png" width="500"/>

### output : 

<img src="assets/5/output.png" width="700"/>

## Soal

<img src="assets/soal/allcode.png" width="700"/>

1. **Buat komponen baru bernama TodoList yang menampilkan daftar tugas (todo list). Gunakan state untuk mengelola daftar tugas dan props untuk mengirim data tugas ke komponen anak.**

    Jawab : 

    Komponen TodoList.js

    <img src="assets/soal/1.png" width="500"/>

    Penjelasan : 
    
    - State digunakan untuk menyimpan data dalam komponen React

    - state `todos` digunakan untuk menyimpan daftar tugas yang telah ditambahkan. `setTodos` adalah fungsi yang digunakan untuk memperbarui state `todos`.

    - State `newTodo` digunakan untuk menyimpan teks tugas yang sedang dimasukkan dalam input.  `setNewTodo` adalah fungsi yang digunakan untuk memperbarui nilai dari `newTodo`.

2. **Tambahkan fitur untuk menambahkan tugas baru ke dalam daftar menggunakan form input.**

    Jawab : 

    <img src="assets/soal/add.png" width="500"/>

    Penjelasan : 

    - Fungsi `addTodo` digunakan untuk menambahkan tugas baru jika input valid dan membersihkan kolom input setelahnya.

3. **Implementasikan fitur untuk menghapus tugas dari daftar.**

    Jawab : 

    <img src="assets/soal/3.png" width="500"/>

    Penjelasan : 

    - Fungsi `removeTodo` digunakan untuk  menghapus tugas berdasarkan indeks yang dipilih. Fungsi ini menggunakan `filter` untuk membuat array baru tanpa tugas yang akan dihapus.

### Output : 

<img src="assets/soal/Output.png" width="700"/>

<img src="assets/soal/Output2.png" width="700"/>