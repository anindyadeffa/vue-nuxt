<template>
  <div class="container">
    <h2 class="text-center mt-5 mb-5">Section 9 - Clean Code</h2>
    <p>Clean Code adalah istilah untuk kode yang mudah dibaca, difahami, dan diubah oleh programmer.</p>
    <div class="text-center">
      <img src="@/assets/img/section-9/clean-code.png" width="50%" alt="">
    </div>
    <div class="expand-panel">
      <v-expansion-panels>
        <v-subheader>Pembahasan Materi</v-subheader>
        <!--  Clean Code -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
              Kenapa harus melakukan 'Clean Code'?
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <ol>
              <li>Work Collaboration, tidak memungkiri kita nantinya akan bekerja secara berkolaborasi, dimana bekerja secara team, bukan individual.</li>
              <li>Feature Development, membuat fitur baru menjadi mudah dibaca, difahami, dan memodifikasinya menjadi lebih mudah.</li>
              <li>Faster Development, memudahkan pengerjaan menjadi lebih cepat.</li>
            </ol>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!--  Karakteristik dari Clean Code -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
              Karakteristik dari Clean Code
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>Karakteristik dari Clean Code, antara lain:</p>
            <ol>
              <li>Penamaan yang mudah difahami.</li>
              <li>Mudah dieja dan dicari.</li>
              <li>Singkat namun mendeskripsikan konteks.</li>
              <li>Konsisten.</li>
              <li>Hindari penambahan konteks yang tidak perlu.</li>
              <li>Komentar</li>
              <li>Function</li>
            </ol>
            <p>Saran Formatting:</p>
            <ol>
              <li>Lebar baris code 80 - 120 karakter.</li>
              <li>Satu class 300 - 500 baris.</li>
              <li>Baris code yang berhubungan saling berdekatan.</li>
              <li>Deklarasi variabel berdekatan dengan penggunanya.</li>
              <li>Perhatikan indentasi.</li>
              <li>Menggunakan prettier atau formatter.</li>
            </ol>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!--  Clean Code Principle -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
              Clean Code Principle
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <ol>
              <div>
                <li>KISS (Keep It So Simple)</li>
                <p>Hindari membuat fungsi yang dibuat untuk melakukan A, sekaligus memodifikasi B, mengecek fungsi C, dst.
                  <br>
                  Tips dari KISS, antara lain:</p>
                  <ul>
                    <li>Fungsi atau class harus kecil.</li>
                    <li>Fungsi dibuat untuk melakukan satu tugas saja.</li>
                    <li>Jangan gunakan terlalu banyak argumen pada fungsi.</li>
                    <li>Harus diperhatikan untuk mencapai kondisi yang seimbang, kecil dan jumlahnya minimal.</li>
                  </ul>
              </div>
              <div>
                <li>DRY (Don't Repeat Yourself)</li>
                <p>Duplikasi code terjadi karena sering copy paste. Untuk menghindari duplikasi code buatlah fungsi yang dapat digunakan secara berulang-ulang.</p>
              </div>
              <div>
                <li>Refactoring</li>
                <p>
                  Refactoring adalah proses restrukturisasi kode yang dibuat, dengan cara mengubah struktur internal tanpa mengubah perilaku eksternal. Prinsip KISS dan DRY bisa dicapai dengan cara refactor.
                  <br>
                  Teknik Refactoring, antara lain:
                </p>
                  <ul>
                    <li>Membuat sebuah abstraksi.</li>
                    <li>Memecah kode dengan fungsi/class.</li>
                    <li>Perbaiki penamaan dan lokasi kode.</li>
                    <li>Deteksi kode yang memiliki duplikasi.</li>
                  </ul>
              </div>
            </ol>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Section9View',
};
</script>

<style scoped>
</style>