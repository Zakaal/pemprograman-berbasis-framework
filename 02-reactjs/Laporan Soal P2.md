# 02 REACTJS | Laporan Soal Praktikum Pertemuan 2

|              | **Pemrograman Berbasis Framework 2025** |
|--------------|------------------------------------|
| **NIM**     | 2241720175                         |
| **Nama**    | Mochammad Zakaro Al Fajri          |
| **Kelas**   | TI - 3D                            |

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

<img src="assets/soal/output.png" width="700"/>

<img src="assets/soal/output2.png" width="700"/>
    

