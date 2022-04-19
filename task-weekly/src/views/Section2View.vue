<template>
  <div class="container">
    <h2 class="text-center mt-5 mb-5">Section 2 - Version Control and Branch Management (Git)</h2>
    <p>Versioning berfungsi untuk mengatur versi dari source code program.
      Version control membedakan file dengan versi yang terbarunya.
      GIT merupakan salah satu version control system popular yang digunakan para developer untuk mengembangkan software secara bersama-sama.
      Git yang terdistribusi bukan tersentralisasi, artinya masing-masing computer dapat mendistribusikan ke dalam remote server dan memiliki masing-masing backup-an di remote computer / server tersebut.</p>

    <div class="expand-panel">
      <v-expansion-panels>
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
        <v-expansion-panel>
          <v-expansion-panel-header>
            Item2
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
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
