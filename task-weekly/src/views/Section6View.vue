<template>
  <div class="container">
    <h2 class="text-center mt-5 mb-5">Section 6 - Cascading Style Sheets (CSS)</h2>
    <p>
      Cascading Style Sheets (CSS) adalah suatu bahasa yang digunakan untuk dapat menghias halaman (color, size, font, background, width, height, dll).
      Selain itu, juga dapat mengatur posisi pada halaman web (float, align, display, position, dll).
    </p>
    <div class="text-center">
      <img src="@/assets/img/section-6/file-1.png" width="30%" alt="">
      <img src="@/assets/img/section-6/file-2.png" width="70%" alt="">
      <img src="@/assets/img/section-6/file-2-mobile-responsive.png" width="50%" alt="">
    </div>
    <div class="expand-panel">
      <v-expansion-panels>
        <v-subheader>Pembahasan Materi</v-subheader>
        <!-- Cara menambahkan file CSS -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
            Cara menambahkan file CSS ke HTML
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>Ada 3 cara menambahkan file CSS ke dalam HTML, antara lain:</p>
            <ol>
              <li>External CSS, berupa link file yang disisipkan ke dalam tag head pada HTML. Ekstensi file CSS adalah .css</li>
              <li>Internal CSS, biasa digunakan di dalam satu file HTML, didalam bagian tag head maupun body HTML, di definisikan dengan tag style.</li>
              <li>Inline CSS, biasa digunakan untuk elemen tunggal pada HTML.</li>
            </ol>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!-- CSS Selector -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
            CSS Selector
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              CSS Selector adalah pola yang digunakan untuk memilih element, yang ingin di styling.
            </p>
            <ol>
              <li>Selector ID (#), setiap element hanya memiliki satu tag id, dan dalam satu halaman tidak boleh ada dua penamaan id yang berbeda.</li>
              <li>Selector Class (.), tag class dengan nama yang sama dapat dipakai berulang, dan satu element boleh memiliki lebih dari satu Class yang berbeda.</li>
            </ol>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!-- CSS Grouping -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
            CSS Grouping
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              CSS Grouping adalah beberapa selector dapat dikelompokkan ke dalam satu deklarasi style, penggunaannya tag selector. contoh : h1,h2 {}.
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!-- CSS Font -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
            CSS Font
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              CSS Font adalah beberapa font style pada css. (font, font-family, font-size, font-weight, dan font-style).
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!-- CSS Margin dan Padding -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
            CSS Margin dan Padding
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              CSS Margin dan Padding adalah membuat ruang atau jarak disekitar element.
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!-- CSS Background -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
            CSS Background
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              CSS Background adalah beberapa style background di CSS (background-color, image, repeat, size, dan position).
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!-- CSS Link Event -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
            CSS Link Event
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              CSS Link Event adalah beberapa link event pada CSS (:hover, :active, :visited).
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!-- CSS Transisi -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
            CSS Transisi
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              CSS Transisi adalah transisi CSS dapat mengubah value properti menjadi lebih halus dalam durasi yang ditentukan.
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!-- CSS Display -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
            CSS Display
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              CSS Display adalah menentukan tampilan pada element (block, inline-block, dan none).
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
         <!-- CSS Table -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
            CSS Table
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              CSS Table adalah membuat style pada element table HTML.
            </p>
            <ol>
              <li>Border untuk menambahkan border pada table, th, dan td.</li>
              <li>order-collapse untuk membuat border menjadi single border.</li>
              <li>:nth-child(even) untuk membuat background stripe.</li>
            </ol>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  <router-view />
  </div>
</template>

<script>
export default {
  name: 'Section6View',
};
</script>

<style scoped>
</style>