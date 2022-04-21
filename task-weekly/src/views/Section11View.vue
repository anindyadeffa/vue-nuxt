<template>
  <div class="container">
    <h2 class="text-center mt-5 mb-5">Section 11 - Vue Fundamental</h2>
    <p class="text-center">Vue adalah framework dari Javascript untuk mengembangkan tampilan website yang lebih interaktif dan dinamis.</p>
    <div class="text-center">
      <img src="@/assets/img/section-11/todo-list.png" width="30%" alt="">
      <img src="@/assets/img/section-11/todo-list-1.png" width="30%" alt="">
      <img src="@/assets/img/section-11/todo-list-final.png" width="30%" alt="">
    </div>
    <div class="expand-panel">
      <v-expansion-panels>
        <v-subheader>Pembahasan Materi</v-subheader>
        <!--  Vue -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
              Alasan penggunaan vue, antara lain:
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <ol>
              <li>Mudah membuat aplikasi frontend dan website.</li>
              <li>Mudah dipelajari dan menyenangkan.</li>
              <li>Vue juga memiliki dokumentasi yang lengkap dan rapi.</li>
              <li>Ramping dan cepat.</li>
            </ol>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!--  Cara Kerja Vue -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
              Cara Kerja Vue
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <ol>
              <li>Vue CDN, Vue dapat digunakan atau di-import langsung di file HTML dengan menambahkan (tag script src="https://unpkg.com/vue").</li>
              <li>Vue CLI, Vue CLI ini menggunakan perkakas standar dari ekosistem Vue untuk memudahkan setup/pembuatan aplikasi Vue. Vue CLI menyediakan perkakas untuk pengembangan tersebut menjadi lebih mudah.</li>
            </ol>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!--  Dasar-dasar Vue -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
              Dasar-dasar Vue
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <ol>
              <li>Vue Instance, setiap aplikasi Vue dimulai dengan membuat instance Vue baru dengan fungsi Vue. Instance itu seperti ingatan, apabila instance tidak digunakan lagi, ingatan yang ada di instance itu akan ke reset atau hilang.</li>
              <div>
                <li>Vue Data Binding</li>
                <p>Vue.js menggunakan sintaks template berbasis HTML yang memungkinkan kita untuk secara deklaratif mengikat DOM dengan di render ke data instance Vue yang mendasarinya.
                  <br>
                  Ada 3 jenis data binding pada Vue:
                </p>
                <ul>
                  <li>Di dalam konten, untuk menambahkan text ke dalam konten element dapat menggunakan kurung kurawal.</li>
                  <li>Di atribut elemen, untuk menambahkan variabel ke dalam atribut elemen dapat menggunakan v-bind.</li>
                  <li>Element HTML, untuk menambahkan HTML elemen ke dalam DOM dapat menggunakan atribut v-html.</li>
                </ul>
              </div>
              <li>Vue Reactivity, Vue instance memiliki property bernama data, jika value dari data ada yang berubah maka value yang ditampilkan pada interface akan berubah otomatis tanpa harus dimuat ulang.</li>
            </ol>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!--  Vue Directive -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
              Vue Directive
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>Vue Directive adalah atribut khusus yang diawali dengan v-. Directive berfungsi untuk menjalankan satu perintah atau ekspresi javascript di dalam atribut.
              <br>
              Macam Vue Directive, antara lain:</p>
            <ol>
              <li>v-bind, direktif untuk memberitahu Vue kalau kita ingin melakukan one way data binding.</li>
              <li>v-model, direktif untuk memberitahu Vue kalau kita ingin melakukan two way data binding.</li>
              <li>v-if, v-else, dan v-else-if, direktif yang digunakan untuk melakukan rendering secara kondisional.</li>
              <li>v-on, direktif untuk memberitahu Vue kalau kita ingin memanggil fungsi.</li>
              <li>v-for, direktif untuk memberitahu Vue kalau kita ingin melakukan pengulangan.</li>
            </ol>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!--  Shorthand Vue Directive -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
              Shorthand Vue Directive
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>Khusus untuk v-bind dan v-on dapat disingkat dengan sintaks seperti berikut:
              <br>
              Vue Directive yang perlu diingat:
            </p>
            <ol>
              <li>Direktif Data Binding : v-bind, v-model, v-html, v-text.</li>
              <li>Direktif Conditional Rendering : v-if, v-else, v-else-if.</li>
              <li>Direktif Perulangan : v-for.</li>
              <li>Direktif Event : v-on.</li>
            </ol>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!--  Events dan Method -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
              Events dan Method
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <ol>
              <li>Memantau Events, kita dapat menggunakan direktif v-on untuk mendengarkan peristiwa DOM dan menjalankan ebeberapa JavaScript saat di picu.</li>
              <li>Menggunakan Methods, methods adalah fungsi, yang dapat diakses secara langsung pada instance VM, atau menggunakannya dalam ekspresi direktif. Semua metode akan memiliki konteks "this" secara otomatis terikat ke instance Vue.</li>
            </ol>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!--  Computed Properties dan Watchers -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
              Computed Properties dan Watchers
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <ol>
              <div>
                <li>Computed Properties</li>
                <p>Memberikan terlalu banyak logika secara langsung di template dapat menyebabkan menjadi berat dan susah untuk dipelihara. Pada poin ini, template tidak lagi sederhana dan deklaratif. Masalahnya diperburuk ketika kita ingin memasukan pesan terbalik itu ke dalam template lebih dari sekali. Itulah mengapa untuk logika yang kompleks kita harus menggunakan computed properties.</p>
              </div>
              <div>
                <li>Watchers</li>
                <p>Watcher di Vue.js adalah fitur khusus yang memungkinkan kita untuk memantau sebuah variabel dan melakukan tindakan tertentu ketika nilai tersebut berubah.</p>
              </div>
            </ol>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!--  Component -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
              Component
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>Komponen adalah Vue instance yang dapat digunakan kembali dengan nama yang kita definisikan. Kita bisa menggunakan komponen ini sebagai kustom elemen di dalam instance root Vue yang dibuat dengan new Vue.</p>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Section11View',
};
</script>

<style scoped>
</style>