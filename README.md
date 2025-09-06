#  Arcanum Calculation
**Project tittle ** = Arcanum Calculation

**Description**     = Deskripsi Proyek Kalkulator Sederhana
Proyek ini adalah implementasi kalkulator sederhana yang dibangun menggunakan teknologi web dasar: HTML, CSS, dan JavaScript. Tujuannya adalah untuk membuat antarmuka kalkulator yang berfungsi penuh dan interaktif, mirip dengan kalkulator standar pada perangkat digital.
Identifikasi dan Analisis File
**index.html**
Berkas ini adalah fondasi dari antarmuka pengguna (UI). Ia mendefinisikan struktur halaman web, termasuk:
•	Header: Judul halaman "Kalkulator Sederhana" dan tautan ke berkas CSS (style.css).
•	Bagian Output (<section id='output'>): Area tampilan untuk ekspresi matematika yang sedang diketik (<div id='expression'>) dan hasilnya (<div id='result'>).
•	Bagian Tombol (<section id='buttons'>): Sebuah kontainer yang berisi semua tombol kalkulator, yang disusun menggunakan sistem grid. Setiap tombol memiliki:
o	Atribut data-action: Menentukan fungsi dari tombol, seperti 'clear', 'number', 'addition', atau 'submit'.
o	Atribut data-value: Menyimpan nilai yang akan ditambahkan ke ekspresi atau digunakan dalam operasi, seperti '7', '+', atau '='.
•	Skrip (<script src="script.js">): Tautan ke berkas JavaScript yang menangani logika dan interaktivitas kalkulator.
**style.css**
Berkas ini bertanggung jawab untuk tampilan visual kalkulator, termasuk tata letak, warna, dan gaya. Beberapa poin pentingnya adalah:
•	Tata Letak: Menggunakan flexbox untuk tata letak keseluruhan halaman (body) dan grid untuk menyusun tombol-tombol agar terlihat rapi.
•	Desain: Menyesuaikan font, ukuran, dan warna untuk output (expression dan result) agar mudah dibaca.
•	Gaya Tombol: Menggunakan kelas CSS (.btn-light, .btn-dark, .btn-blue, .btn-red) untuk memberikan warna yang berbeda pada tombol-tombol tertentu.
•	Efek Interaktif: Menerapkan efek hover pada tombol untuk memberikan umpan balik visual saat pengguna mengarahkan kursor ke atasnya.
**script.js**
Berkas ini adalah "otak" dari kalkulator, mengelola semua logika dan fungsionalitas. Berikut adalah fungsi utamanya:
•	Penanganan Acara (addEventListener): Kode ini menunggu hingga seluruh halaman selesai dimuat (DOMContentLoaded), lalu menambahkan event listener ke kontainer tombol (#buttons).
•	Logika Tombol: Fungsi buttonClick(event) menangani setiap klik tombol. Berkas ini menggunakan atribut data-action dari setiap tombol untuk menentukan operasi yang harus dilakukan.
•	Variabel Status: Menggunakan variabel expression, result, dan isResultDisplayed untuk melacak status kalkulator.
•	Fitur Fungsionalitas:
o	clear: Mengatur ulang ekspresi dan hasil.
o	backspace: Menghapus karakter terakhir dari ekspresi.
o	negate: Mengubah tanda positif menjadi negatif dan sebaliknya.
o	number dan decimal: Menambahkan angka atau titik desimal ke ekspresi, dengan validasi untuk mencegah lebih dari satu titik desimal.
o	operator: Menambahkan operator matematika (+, -, *, /) ke ekspresi, dengan validasi agar tidak ada dua operator berdekatan.
o	submit: Menghitung hasil dari ekspresi menggunakan fungsi eval(), yang memungkinkan evaluasi string sebagai kode JavaScript. Fungsi ini juga menyertakan penanganan kesalahan (try...catch) untuk ekspresi yang tidak valid.
•	Pembaruan Tampilan: Setelah setiap aksi, skrip ini memperbarui konten elemen #expression dan #result di DOM agar sesuai dengan status internal kalkulator.

**Technologies use**d  = Teknologi yang digunakan yaitu teknologi web HTML, CSS, dan JAVASCRIPT

**Features**           =  Fitur-fitur yang dimiliki yaitu:
                          •	Operasi Dasar: Mampu melakukan operasi matematika dasar seperti penjumlahan (+), pengurangan (-), perkalian (*), dan pembagian (/).
                          •	Modulus: Terdapat tombol % yang digunakan untuk operasi modulus (sisa bagi).
                          •	Tampilan Dinamis: Memiliki dua area tampilan: satu untuk menampilkan ekspresi yang sedang diketik (20*5), dan satu lagi untuk menampilkan hasilnya (100).
                          •	Tombol Fungsional: Dilengkapi dengan berbagai tombol khusus:
                          o	C (Clear): Untuk menghapus seluruh ekspresi dan mengulang perhitungan dari awal.
                          o	+/- (Negate): Untuk mengubah tanda angka dari positif menjadi negatif atau sebaliknya.
                          o	Backspace: Tombol dengan simbol &#x232B; untuk menghapus karakter terakhir dari ekspresi.
                          o (Desimal): Untuk menambahkan titik desimal pada angka.
                          •	Penanganan Input: Mampu menangani input angka dan operator secara berurutan, dengan validasi untuk mencegah input operator ganda atau titik desimal yang tidak valid.
                          •	Tombol Submit: Tombol = untuk menghitung hasil dari ekspresi yang telah dimasukkan.
                          •	Penanganan Error: Menggunakan blok try...catch untuk menampilkan pesan 'Error' jika terjadi kesalahan dalam perhitungan ekspresi.

**Setup instructions **   = **Pengaturan di index.html**
                          File ini mengatur struktur dasar halaman, termasuk:
                          •	Tampilan (Output): Area tampilan untuk kalkulator diatur dalam sebuah <section> dengan id='output'. Di dalamnya, terdapat dua div untuk menampilkan ekspresi           
                          (id='expression') dan hasil (id='result').
                          •	Tombol (Buttons): Semua tombol kalkulator dikelompokkan dalam <section> dengan id='buttons'. Setiap tombol memiliki atribut:
                          o	class: Untuk menentukan gaya visual (misalnya, btn-light, btn-dark, btn-blue, btn-red).
                          o	data-action: Menjelaskan fungsi tombol, seperti 'clear', 'number', 'multiplication', atau 'submit'.
                          o	data-value: Memberikan nilai spesifik dari tombol, seperti '7', '-', atau '='.
                          •	Koneksi File: Terdapat tautan ke file CSS (<link rel="stylesheet" ... href="style.css">) dan JavaScript (<script src="script.js"></script>) untuk mengatur tampilan dan
                            fungsionalitas.

                            Pengaturan di style.css
                            File ini berfokus pada pengaturan visual dan tata letak, seperti:
                          •	Tata Letak Halaman: Menggunakan flexbox untuk membuat bodi halaman berorientasi vertikal (flex-direction: column) dan mengatur posisi konten.
                          •	Tata Letak Tombol: Menggunakan grid untuk menyusun tombol-tombol dalam 4 kolom (grid-template-columns: repeat(4, 1fr)).
                          •	Gaya Tombol: Mendefinisikan kelas CSS untuk berbagai jenis tombol dengan warna berbeda:
                          o	.btn-light: Emas (gold)
                          o	.btn-dark: Abu-abu (gray)
                          o	.btn-blue: Biru muda (skyblue)
                          o	.btn-red: Merah (gray), meskipun nama kelasnya 'red', warnanya diatur abu-abu.
                          •	Efek Interaktif: Mengatur efek hover pada tombol agar warnanya berubah saat kursor diarahkan ke atasnya, memberikan umpan balik visual kepada pengguna.

                             Pengaturan di script.js
                            File ini berisi logika fungsional, yang mencakup:
                          •	Pengaksesan DOM: Menggunakan document.querySelector() untuk mendapatkan referensi ke elemen HTML berdasarkan ID-nya (#buttons, #expression, #result).
                          •	Variabel Status: Mengatur variabel expression, result, dan isResultDisplayed untuk mengelola status kalkulator.



              
                                                



                  
                          



