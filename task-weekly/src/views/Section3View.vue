<template>
  <div class="container">
    <h2 class="text-center mt-5 mb-5">Section 3 - Introduction UI and UX</h2>
    <p>
      User Experience (UX) adalah apapun yang pengguna (user) rasakan ketika mereka menggunakan produk kita.
      Sedangkan, User Interface (UI) adalah visualisasi yang user gunakan untuk berinteraksi dengan produk kita.
    </p>
    <div class="text-center d-flex">
      <img src="@/assets/img/section-3/duosweb-homepage.png" class="mr-3"  width="50%" alt="">
      <img src="@/assets/img/section-3/duosweb-project.png"  width="50%" alt="">
    </div>
    <div class="expand-panel">
      <v-expansion-panels>
        <v-subheader>Pembahasan Materi</v-subheader>
        <!-- User Experience (UX) -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
            User Experience (UX)
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              User Experience (UX) adalah apapun yang pengguna (user) rasakan ketika mereka menggunakan produk kita.
              <br>
              Tahapan ketika ingin men-design User Experience, antara lain:
            </p>
            <ol>
              <div>
                <li>Empathize (User Personas, Job Stories, Usability Testing)</li>
                <p>Empathize adalah menempatkan posisi sebagai user, berempati dengan memahami dan menghargai user, sehingga komunikas dapat berjalan dan tersampaikan dengan baik.</p>
                <ul>
                  <li>User Persona adalah profile dari user kita sendiri, didasari dari ekspektasi, kebutuhan, tujuan, dan pola kebiasaan dari user itu sendiri.</li>
                  <li>Job Stories adalah cerita yang berdasarkan dari modelnya itu sendiri, berdasarkan situatuion, motivation, and outcome.</li>
                  <li>Usability Testing adalah salah satu cara untuk mengetahui apakah user dapat dengan mudah menggunakan aplikasi kita, seberapa efektif dan efisien sebuah aplikasi dapat membantu user untuk mencapai tujuan, dan apakah user puas dengan aplikasi yang digunakan.</li>
                </ul>
              </div>
              <div>
                <li>Define</li>
                <p>Pada tahap define, kita menggunakan semua informasi yang telah didapatkan selama di tahap empathize seperti diawal.</p>
                <ul>
                  <li>Priotising Pain Points adalah untuk memprioritaskan masalah yang ada, melakukan pemisahan resi dari yang terpenting hingga yang tidak terlalu penting, menyesuaikan kebutuhan.</li>
                  <li>Defining the Care Problem, pada tahap ini diharapakn menemukan inti permasalahannya, sehingga akan mengetahui apa yang perlu di fokuskan dalam pengembangan User Experience yang akan dibuat didalam produk nantinya.</li>
                </ul>
              </div>
              <div>
                <li>Ideate</li>
                <ul>
                  <li>User Goal adalah berisikan user flow, could be requirement, user journey, step, story, atau goal-nya.</li>
                  <li>Flow adalah user flow dengan langkah-langkah yang berbeda dari apa yang dilakukan oleh user di setiap langkahnya untuk menyelesaikan tugas atau mencapai tujuan.</li>
                  <li>Wireflow adalah kombinasi dari wireframe dan flowcharts.</li>
                </ul>
              </div>
            </ol>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!-- User Interface (UI) -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
            User Interface (UI)
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              User Interface (UI) adalah visualisasi yang user gunakan untuk berinteraksi dengan produk kita.
              <br>
              User Interface memiliki 4 pilar, ke empat pilar ini didasari dari bagaimana penampilan dan pemahaman dari desain yang dibuat saling bekerja sama.
            </p>
            <ol>
              <li>Consistency adalah desain yang menggunakan pola yang sama, selain itu juga urutan yang memiliki situasi yang mirip.</li>
              <li>Keep the interface simple, perlu untuk menghilangkan element-element yang tidak dibutuhan dan menggunakan bahasa yang jelas.</li>
              <li>Good Typography, Typace merupakan kumpulan huruf memiliki pola yang sama, perlu memperhatikan ukuran, jenis font, dan juga pengaturannya bertujuan agar text menjadi lebih mudah di baca.</li>
              <li>Offer Informative Feedback adalah informasi balik harus berarti, relevan, dan jelas.</li>
            </ol>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!-- Prototype -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
            Prototype
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              Prototype adalah simulasi atau contoh sample dari final produk tersebut.
              Tujuan dari protoype ini adalah untuk testing sebelum kalian menghabiskan banyak waktu dan uang dalam pembuatan projek tersebut.
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  <router-view />
  </div>
</template>

<script>
export default {
  name: 'Section3View',
};
</script>

<style scoped>
</style>