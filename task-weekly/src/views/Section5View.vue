<template>
  <div class="container">
    <h2 class="text-center mt-5 mb-5">Section 5 - HTML</h2>
    <p>
      Frontend adalah sebuah bagian dari website yang membuat tampilan yang menarik kepada user.
      HTML (Hypertext Markup Language) adalah sebuah standar yang digunakan secara luas untuk menampilkan halaman web.
    </p>
    <div class="text-center">
      <img src="@/assets/img/section-5/form-page.png" width="75%" alt="">
      <img src="@/assets/img/section-5/index-page.png" width="75%" alt="">
      <img src="@/assets/img/section-5/welcome-page.png" width="75%" alt="">
    </div>
    <div class="expand-panel">
      <v-expansion-panels>
        <v-subheader>Pembahasan Materi</v-subheader>
        <!-- HTML (Hypertext Markup Language) -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
            HTML (Hypertext Markup Language)
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              HTML (Hypertext Markup Language) adalah sebuah standar yang digunakan secara luas untuk menampilkan halaman web.
              <br>
              Kegunaan HTML, antara lain :
            </p>
            <ol>
              <li>Membuat struktur dari halaman website.</li>
              <li>Mengatur tampilan dan isi dari halaman web.</li>
              <li>Membuat tabel dengan tag HTML table.</li>
              <li>Membuat form HTML.</li>
              <li>Membuat gambar dengan canvas.</li>
              <li>Mempublikasikan halaman website secara online.</li>
            </ol>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!-- HTML Editors -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
            HTML Editors
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>HTML Editors yang dapat digunakan antara lain Notepad, Visual Studio Code, Notepad++, dan Atom Editor.</p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!-- Dokumentasi HTML -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
            Dokumentasi HTML
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <ol>
              <li>DOCTYPE html untuk mendefinisikan dokumen ini sebagai HTML5</li>
              <li>tag html elemen root dari halaman HTML</li>
              <li>tag head berisi informasi meta tentang dokumen</li>
              <li>tag title untuk menentukan judul untuk dokumen</li>
              <li>tag body berisi konten halaman yang terlihat</li>
            </ol>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!-- Tag HTML -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
            Tag HTML
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <ol>
              <li>Tag Div, yang didalamnya berisikan content HTML</li>
              <li>Tag Heading dan Paragraph HTML, tag heading h1 sampai h6 dan tag p untuk paragraf</li>
              <div>
                <li>Styling pada paragraf HTML</li>
                <ul>
                  <li>tag strong untuk membuat text lebih tebal</li>
                  <li>tag em untuk menjadi italic.</li>
                  <li>tag s untuk membuat text dengan garis tercoret.</li>
                  <li>tag br atau tag line break untuk membuat garis baru.</li>
                </ul>
              </div>
              <li>Tag Link HTML atau anchor, link dengan membuka tab baru menggunakan target="\_blank"</li>
              <li>Tag image HTML</li>
              <div>
                <li>List HTML (li)</li>
                <ul>
                  <li>Ordered List (ol) untuk list yang berurut. Untuk type terdapat type a, A, i, dan I.</li>
                  <li>Unordered List (ul) untuk list yang tidak terurut. Untuk type-nya terdapat square, disc, dan circle.</li>
                </ul>
              </div>
              <div>
                <li>Tag Table HTML</li>
                <ul>
                  <li>tag table untuk membuat tabel.</li>
                  <li>tag tr untuk baris tabel atau table row.</li>
                  <li>tag td untuk kolom tabel atau table data.</li>
                  <li>tag th untuk table head.</li>
                </ul>
              </div>
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
  name: 'Section5View',
};
</script>

<style scoped>
</style>