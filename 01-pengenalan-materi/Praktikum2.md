# Praktikum 2 : Membuat Proyek Pertama React Menggunakan Next.js

|              | **Pemrograman Berbasis Framework 2025** |
|--------------|------------------------------------|
| **NIM**     | 2241720175                         |
| **Nama**    | Mochammad Zakaro Al Fajri          |
| **Kelas**   | TI - 3D                            |

## Soal Praktikum 2

1. Pada Langkah ke-2, setelah membuat proyek baru menggunakan Next.js, terdapat beberapa istilah yang muncul. Jelaskan istilah tersebut, TypeScript, ESLint, Tailwind CSS, App Router, Import alias, App router, dan Turbopack!

    Jawab :
     - TypeScript adalah bahasa pemrograman yang memperluas JavaScript, yang berarti semua kode JavaScript valid dalam TypeScript. TypeScript menambahkan fitur seperti static typing, interfaces, dan classes untuk membantu pengembang menulis kode yang lebih aman dan mudah dikelola. TypeScript dikompilasi menjadi JavaScript agar dapat dijalankan di browser atau lingkungan Node.js.
     - ESLint adalah tools untuk memeriksa dan memperbaiki masalah kode JavaScript/TypeScript, menjaga konsistensi dan kualitas kode.
     - Tailwind CSS: Framework CSS yang menggunakan kelas utilitas untuk membangun UI dengan cepat tanpa menulis CSS kustom.
     - App Router adalah sistem routing yang digunakan dalam framework Next.js Yang menggantikan sistem routing berbasis file lama (pages/) dengan struktur yang lebih fleksibel dan berbasis komponen sehingga memungkinkan developer untuk mengatur routing, layout, dan data fetching dengan lebih intuitif, serta mendukung fitur seperti Server Components dan Nested Layouts.
     - Import Alias: Teknik untuk menyederhanakan jalur impor file, misalnya mengganti ../../../components dengan @components.
     - Turbopack adalah bundler JavaScript baru dan diklaim sebagai bundler tercepat untuk pengembangan JavaScript dan TypeScript. Ini dirancang khusus untuk mempercepat proses pengembangan dengan waktu build yang sangat cepat, terutama dalam proyek besar.

2. Apa saja kegunaak folder dan file yang ada pada struktur proyek React yang tampil pada gambar pada tahap percobaan ke-3!
    
    Jawab : Berikut ini merupakan fungsi dari tiap file dan folder dari react
    
    - **.next**: Folder ini dibuat secara otomatis oleh Next.js dan berisi hasil build proyek, seperti file HTML, CSS, dan JavaScript yang dihasilkan untuk produksi.
    - **node_modules**: Folder ini berisi semua dependensi dan library yang diinstal untuk proyek melalui npm atau yarn.
    - **public** : Folder ini digunakan untuk menyimpan aset statis seperti gambar, font, atau file lain.
    - **src/app**: Direktori utama aplikasi yang  berisi:
        - favicon.ico: Berisikan Ikon situs.
        - globals.css: Berisikan CSS global untuk aplikasi.
        - layout.tsx: Berisikan Layout umum aplikasi.
        - page.tsx: Berisikan Halaman utama aplikasi.
    - **.gitignore** : File yang berfungsi menentukan file dan folder yang harus diabaikan oleh git. Contoh : node_modules
    - **eslint.config.mjs** : merupakan file konfigurasi dari eslint
    - **next-env.d.ts** : File yang digunakan untuk menyesuaikan perilaku framework
    - **package-lock.json** : File yang digunakan untuk mengunci versi depedensi yang digunakan dan diinstal saat ini
    - **package.json** : File yang berisikan metadata, script dan list dependensi dari projek
    - **postcss.config.mjs** : File yang diguakan untuk konfigurasi dari postCSS (tools yang memproses CSS)
    - **tailwind.config.ts** : File yang digunakan untuk konfigurasi dari tailwind CSS
    - **tsconfig.json** : File yang digunakan utnuk konfigurasi dari typescript dan menentukan opsi dari kompilasi pengaturan projek

3. Buktikan dengan screenshoot yang menunjukkan bahwa tahapan percobaan di atas telah berhasil Anda lakukan!

    Jawab : 
    
    - Langkah 1 : Membuat folder proyek baru dengan nama belajar-react. Melalui konsol/command prompt/CMD masuk ke dalam folder tersebut dan jalankan perintah ini: "npx create-next-app"
        
        <img src="assets/prak2/1.png" width="500" />

    - Langkah 2 : Buka folder proyek hello-world menggunakan VS Code

        <img src="assets/prak2/folder.png" width="300" />

    - Langkah 3 : Running proyek hello-world dengan memasukkan perintah di bawah ini melalui konsol atau terminal di dalam VS Code.

        <img src="assets/prak2/2.png" width="500" />

        <img src="assets/prak2/3.png" width="500" />
