<template>
  <div class="container">
    <h2 class="text-center mt-5 mb-5">Section 4 - Figma</h2>
    <p>
      Figma adalah suatu alat editor vector grapik dan prototyping dimana berbasis website, dengan tambahan fitur-fitur yang online dan tersedia di aplikasi desktop untuk macOS dan juga Windows.
    </p>
    <div class="text-center d-flex">
      <img src="@/assets/img/section-4/Homepage.png" class="mr-3"  width="50%" alt="">
      <img src="@/assets/img/section-4/Menu.png"  width="50%" height="100%" alt="">
    </div>
    <div class="expand-panel">
      <v-expansion-panels>
        <v-subheader>Pembahasan Materi</v-subheader>
        <!-- Figma -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
            Figma
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              Figma adalah suatu alat editor vector grapik dan prototyping dimana berbasis website, dengan tambahan fitur-fitur yang online dan tersedia di aplikasi desktop untuk macOS dan juga Windows.
              <br>
              Keuntungan dari Figma, antara lain:
            </p>
            <ol>
              <li>Gratis untuk lebih dari dua user dan tiga projek dalam satu akun.</li>
              <li>Dapat berjalan di Mac maupun PC (sketch only on Mac).</li>
              <li>Kolaborasi tim secara real-time.</li>
              <li>Dapat import sketch files (tapi, tidak bisa di ekspor ke sketch!)</li>
              <li>Terintergrasi oleh Developers</li>
              <li>Team Library atau sistem desain yang bagus.</li>
              <li>Terintegrasi prototyping yang berkualitas tinggi.</li>
            </ol>
            <p>Kekurangan dari Figma adalah pengerjaannya hanya dilakukan secara online, dimana bisa di simpan dan membuatnya secara lokal, namun butuh untuk menambahkannya nanti secara online.</p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!-- IDE / Tools -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
            IDE / Tools
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <ol>
              <li>Importing old Sketch files</li>
              <li>Setting up new frames (atau artboards)</li>
              <li>Grid and layout columns</li>
              <li>Layers and groups</li>
              <li>Images</li>
              <li>Typography</li>
            </ol>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!-- Set Up Frame -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
            Bagaimana cara untuk set up sebuah frame dan grid yang simple ?
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <ol>
              <li>Step 1, membuat file baru dan pilih Frame tool di toolbar. Fokus ke sidebar di kanan dan pilih Desktop template untuk memulai membuat frame.</li>
              <li>Step 2, Sebelum memulai, set up simple grid terlebih dahulu akan memudahkan untuk meluruskan element. Fokus pada Design panel di kanan sidebar dan klik Layout Grid section, kemudian tambahkan grid ke dalam design.</li>
            </ol>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!-- Menu Bar -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
            Bagaimana untuk membuat Menu Bar ke dalam Website Design ?
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <ol>
              <li>Step 1, pilih Rectangle tool (R) di toolbar dan buatlah bentuk 1360 x 90 px. Fokus ke sidebar kanan, dan set Corner Radiusnya menjadi 10, kemudian klik Fill color dan diubah menjadi warna hex yang diinginkan.</li>
              <li>Step 2, Ambil Text Tool (T) dari toolbar dan klik frame, dan fokus ke Text section dari panel Design. Set font style dan juga ubah warna sesuai yang diinginkan.</li>
              <li>Step 3, drag and copy.</li>
              <li>Step 4, set Spacing between elements di Auto Layout.</li>
              <li>Step 5, Ellipse Tool (O).</li>
              <li>Step 6, Text tool di toolbar, untuk menambahkan text judul.</li>
              <li>Step 7, set font style to bold.</li>
              <li>Step 8, create component.</li>
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
  name: 'Section4View',
};
</script>

<style scoped>
</style>