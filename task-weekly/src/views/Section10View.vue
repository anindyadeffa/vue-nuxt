<template>
  <div class="container">
    <h2 class="text-center mt-5 mb-5">Section 10 - Frontend Fundamental</h2>
    <div class="text-center">
      <img src="@/assets/img/section-10/mobile-responsive.png" width="50%" alt="">
      <img src="@/assets/img/section-10/tablet-responsive.png" width="50%" alt="">
      <img src="@/assets/img/section-10/web-responsive.png" width="50%" alt="">
    </div>
    <div class="expand-panel">
      <v-expansion-panels>
        <v-subheader>Pembahasan Materi</v-subheader>
        <!--  HTML -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
              HTML
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>HTML (Hypertext Markup Language) adalah bahasa markup yang standar untuk membuat dan menyusun halaman web.
              <br>
              Cara kerja HTML, yaitu File HTML diakhiri dengan eksistensi .html atau .htm. Eksistensi file ini bisa dirender dengan menggunakan web browser apapun.
            </p>
            <br>
            <p>HTML Tag</p>
            <p>Sebuah file HTML yang terdiri atas serangkaian tags (elements). Sebagian besar elemen bahasa markup ini memiliki tag pembuka dan penutup yang menggunakan syntax tag.
            Tag HTML memiliki dua tipe utama, yaitu block-level dan inline tags.</p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!-- CSS -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
            CSS
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              CSS (Cascading Style Sheets) digunakan untuk mendesain halaman depan atau tampilan website.
              <br>
              Cara kerja CSS, yaitu CSS membuat style di dalam halaman web yang dapat berinteraksi dengan elemen HTML.
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!-- Media Queries -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
            Media Queries
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>Media query merupakan modul CSS yang berguna membuat layout kita responsive dengan menyesuaikan tampilan berdasarkan ukuran layar perangkat.</p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!-- Javascript -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
            Javascript
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>Script yang "membuat halam web menjadi hidup" yang memungkinkan adanya interaksi dengan pengguna. Javascipt bisa ditulis langsung ke dalam kode HTML dari sebuah web dan berjalan otomatis saat halaman dimuat.
              Cara Kerja Javascript, yaitu bisa langsung menambahkan JavaScript di HTML dengan menggunakan tag script>.</p>
            <ol>
              <li>Variabel, wadah untuk menyimpan atau mengingat sebuah nilai.</li>
              <li>Operasi Matematika, memungkinkan kita untuk melakukan penambahan, pengurangan, perkalian, dll terhadap variabel dan angka.</li>
              <li>Fungsi, wadah untuk menyimpan logika atau algoritma yang dapat digunakan lagi dengan praktis.</li>
              <li>Kelas, sebuah fungsi khusus yang bisa dipakai sebagai template untuk membuat obyek dengan mudah.</li>
              <li>Kondisi, sebuah logika pemisah antara dua nilai, true, dan false.</li>
              <li>Pengulangan, untuk melakukan pengulangan sesuai syarat kondisi yang ditentukan. (Pengulangan ForEach, Map, Filter)</li>
            </ol>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!-- Node.js -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
            Node.js
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>Runtime environment untuk JavaScript, dengan Node.js kita dapat menjalankan kode JavaScript di mana pun, tidak hanya terbatas pada lingkungan browser. Cara kerja Node.js, Node.js akan melakukan eksekusi atau menjalankan file yang memiliki ekstensi js.</p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!-- NPM -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
            NPM
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>NPM (Node Package Manager) adalah command line yang dapat menginstal dan meng-uninstall package, mengelola versi, dan dependensi yang diperlukan untuk menjalankan proyek.
              Cara kerja NPM, yaitu NPM bekerja untuk mengatur package pada proyek yang berjalan dengan node.js.
              Package pada node.js memuat semua file yang dibutuhkan sebagai module.
              Module adalah library JavaScript yang dapat kita masukkan ke dalam proyek.</p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!-- Git -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
            Git
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>Git adalah salah satu sistem pengontrol versi (Version Control System) pada proyek perangkat lunak. Pengontrol versi bertugas mencatat setiap perubahan pada file proyek yang dikerjakan oleh banyak orang maupun sendiri.</p>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Section10View',
};
</script>

<style scoped>
</style>