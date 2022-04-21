<template>
  <div class="container">
    <h2 class="text-center mt-5 mb-5">Section 2 - Version Control and Branch Management (Git)</h2>
    <p>
      Versioning berfungsi untuk mengatur versi dari source code program.
      Version control membedakan file dengan versi yang terbarunya.
      GIT merupakan salah satu version control system popular yang digunakan para developer untuk mengembangkan software secara bersama-sama.
      Git yang terdistribusi bukan tersentralisasi, artinya masing-masing computer dapat mendistribusikan ke dalam remote server dan memiliki masing-masing backup-an di remote computer / server tersebut.
    </p>
    <div class="text-center">
      <img src="@/assets/img/section-2/network-graph.png"  width="50%" alt="">
    </div>
    <div class="expand-panel">
      <v-expansion-panels>
        <v-subheader>Pembahasan Materi</v-subheader>
        <!-- Git Repository (Folder Project) -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
            Git Repository (Folder Project)
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              Folders and Files yang telah di distribukan ke Folder Project akan memberitahukan keseluruhan History yang telah dilakukan.
              Git track every file changes. Commit = the record of changes, yang artinya seluruh commit akan tercatat di Git, di setiap bagian pada file yang mengalami perubahan nantinya.
              <br>
              Belajar secara pratikal, yang dilakukan sebagai berikut:
            </p>
            <ol>
              <li>Git Install</li>
              <li>Check Git version</li>
              <li>Make a new repository</li>
              <li>Using Git Bash</li>
              <li>Git Cloning</li>
            </ol>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!-- The Staging Area -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
            The Staging Area
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              Perubahan dari Working Directory dengan melakukan 'git add' untuk memasuukan perubahan tersebut ke staging area. Dari Staging Directory akan masuk ke Repository dengan melakukan 'git commit'.
              <br>
              Belajar secara pratikal, yang dilakukan sebagai berikut:
            </p>
            <ol>
              <li>Git add</li>
              <li>Git commit -m 'commit message'</li>
              <li>Git push, git push dilakukan ketika file telah di commit, yang berarti telah di wrap ke dalam satu paket yang akan siap dikirim menggunakan perintah 'git push' tersebut.</li>
              <li>Commit Message, penulisan commit message harus dijelaskan secara deskripsi, jelas dan terperinci.</li>
            </ol>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!-- Git Diff And Stash -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
            Git Diff And Stash
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              Git diff berfungsi untuk mengetahui bagaimana perubahan yang terjadi di file yang telah di ubah.
              <br>
              Git Stash berfungsi untuk menyimpan perubahan itu, sehingga nanti dapat dikembalikan di perubahan-perubahan yang diinginkan.
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!-- Inspecting Repository -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
            Inspecting Repository
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>Bagaimana untuk dapat me-management versi yang telah dibuat.</p>
            <ol>
              <li>Git Log and Git Checkout</li>
              Git Log, berfungsi untuk dapat menampilkan setiap commit yang telah dilakukan, sedangkan Git Checkout untuk dapat kembali ke commit-an sebelumnya.
              <li>Git Reset</li>
              Git reset terbagi menjadi dua jenis, antara lain:
              <ul>
                <li>Git reset - soft : uncommit change, changes are left staged.</li>
                <li>Git reset - hard : uncommit + unstage + delete changes, nothing left.</li>
              </ul>
            </ol>
            <p>
              Perbedaannya:
              <ul>
                <li>Untuk soft, perubahannya terjadi tidak sebanyak yang dilakukan hard, dan juga commit-an nya tetap masih ada.</li>
                <li>Sedangkan, untuk hard, nanti bisa menghapuskan commit di versi yang kita pilih atau input.</li>
                <li>Soft lebih di recommended, karena hard akan menghilangkan secara permanent.</li>
              </ul>
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!-- Syncing -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
            Syncing (Git Remote, Git Fecth, Git Push, and Git Pull)
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              Git remote memberikan versi dari remote-an kita sewaktu clone, yang nantinya akan muncul sebuah link dari github repository yang sudah kita akses atau telah dibuat.
              <br>
              Belajar secara pratikal, yang dilakukan sebagai berikut:
            </p>
            <ol>
              <li>Git remote</li>
              <li>Git fetch</li>
              <li>Git push, git push dilakukan ketika file telah di commit, yang berarti telah di wrap ke dalam satu paket yang akan siap dikirim menggunakan perintah 'git push' tersebut.</li>
              <li>Git pull</li>
            </ol>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!-- Branches -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
            Branches
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              Melakukan penyabangan untuk mempermudah kolaborasi dengan banyak cabang.
              <br>
              Belajar secara pratikal, yang dilakukan sebagai berikut:
            </p>
            <ol>
              <li>List branch : git branch --list</li>
              <li>Create a new branch : git branch feature-1</li>
              <li>Delete branch : git branch -D feature-1</li>
              <li>List remote branch</li>
              <li>Git push origin branch</li>
            </ol>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!-- Pull Request -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
            Pull Request
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>Teknik ini digunakan untuk kita dapat bisa berkontribusi terhadap repository yang sudah ada, baik repository teman ataupun perusahaan.</p>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  <router-view />
  </div>
</template>

<script>
export default {
  name: 'Section2View',
};
</script>

<style scoped>
.expand-panel {
  padding: 2% 10% 2% 10%;
}
</style>
