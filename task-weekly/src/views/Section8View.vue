<template>
  <div class="container">
    <h2 class="text-center mt-5 mb-5">Section 8 - Javascript Refreshment</h2>
    <p>
      Javascript adalah bahasa pemrograman yang High-level, Scripting, Untyped dan interpreted.
      Javascript adalah bahasa pemrogaman tingkat tinggi, yang dibuat untuk berinteraksi dengan halaman web, apapun itu web browsernya.
      Javascript merupakan bahasa yang untyped atau bahasa yang tidak terpengaruh dengan tipe data.
      Javacript adalah bahasa yang fleksibel, mudah untuk di uji, dan javascript sendiri memiliki beberapa framework library yaitu Bootstrap, Vue, React, dll.
      Javascript adalah bahasa pemrograman yang mudah di pelajari, namun sulit untuk dikuasai, karena banyaknya library yang ada di javascript.
    </p>
    <div class="text-center">
      <img src="@/assets/img/section-8/nomor-1a.png" width="50%" alt="">
      <img src="@/assets/img/section-8/nomor-1b.png" width="50%" alt="">
    </div>
    <div class="expand-panel">
      <v-expansion-panels>
        <v-subheader>Pembahasan Materi</v-subheader>
        <!--  Declaration -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
              Declaration
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              Declaration adalah proses pembuatan variabel untuk menyimpan data.
            </p>
            <ol>
              <li>Redeclaration adalah mendeklarasikan kembali variabel dengan nama yang sama. Untuk Var disini bisa dilakukan deklarasi ulang, sedangkan Let dan Const tidak dapat dilakukan deklarasi ulang.</li>
              <li>Reassignment adalah memberikan nilai baru ke dalam variabel yang sudah ada nilai sebelumnya. untuk Var dan Let dapat melakukan reassignment, sedangkan Const tidak.</li>
            </ol>
            <p>Declaration memiliki 3 cara untuk deklarasi, antara lain:</p>
            <ul>
              <li>Var, pada umumnya jarang digunakan.</li>
              <li>Let, digunakan saat kita membutuhkan nilai yang dapat diubah.</li>
              <li>Const, digunakan saat kita membutuhkan nilai yang tidak bisa di "reassign",
                dimana tidak dapat memberikan nilai baru saat variabel const tersebut sudah memiliki nilai sebelumnya.
                Saat kita mendeklarasikan variabel const, kita harus memberikan nilai pada variabel tersebut.
              </li>
            </ul>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!--  Scoping -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
              Scoping
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              Scoping adalah untuk menentukan dimana variabel, fungsi, dan objek diatur dan dapat diakses dalam kode kita. Ini berarti ruang lingkup variabel dikendalikan oleh lokasi deklarasi variabel.
            </p>
            <ol>
              <li>Global Scope</li>
              <li>Function Scope</li>
              <li>Block Scope</li>
            </ol>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!--  Hoisting -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
              Hoisting
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              Hoisting adalah membuat beberapa jenis variabel atau fungsi yang dapat diakses atau digunakan dalam kode sebelum di deklarasikan.
              Deklarasi Var dan function adalah hoisted, oleh karena itu mereka dapat digunakan bahkan sebelum deklarasi itu sendiri terjadi.
              Sedangkan Let dan const tidak hoisted, oleh karena itu mereka tidak dapat digunakan bahkan sebelum deklarasi terjadi.
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!--  Values and References -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
              Values and References
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <ol>
              <li>Primitives, meneruskan nilai.</li>
                Primitive dalam pemrograman adalah unit pemprosesan terkecil dan elemen paling sederhana yang tersedia dalam bahasa pemrograman.
                Tipe data yang ada pada Primitive terdapat String, Boolean, Number, BigInt(ES11), Undefined, Null, dan Symbol (ES6).
              <li>Objects, juga disebut dengan collection atau reference type.</li>
                Objects adalah unit yang menyimpan properti dan fungsi (method).
                Terdapat : Object, Array, Function, Date, Set, Map, Weak Set, dan Weak Map.
            </ol>
            <p>
              Aturan sederhana untuk meneruskan nilai adalah bahwa semua nilai primitif dalam JavaScript diteruskan oleh nilai.
              Meneruskan References bagaimanapun, akan memberikan references yang sama.
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!--  Destructuring -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
              Destructuring
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              Destructuring adalah ekspresi dari JavaScript yang memungkinkan untuk menyalin nilai dari array, atau propeprt dari objek, ke dalam variabel yang berbeda.
            </p>
            <ol>
              <li>Array, seperti assignment, maka kita harus mendeklarasikan variabel tersebut terlebih dahulu. Menggunakan const ketika data tersebut kosong atau undefined, tidak akan terjadi error.</li>
              <li>Object, kita dapat menyalin nilai properti object ke dalam suatu variabel.</li>
            </ol>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!--  Spread -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
              Spread
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>Spread Syntax dapat digunakan ketika semua elemen dari object atau array perlu dimasukkan ke dalam semacam daftar. Spread terdiri dari Array dan Object.</p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!--  Method pada Array -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
              Method pada Array
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>Method adalah sebuah fungsi yang terkait dengan object, membuat programnya sesederhana mungkin, sesuai kegunaan masing-masing.</p>
            <ol>
              <li>Concat, menghubungkan dua atau lebih array, dan mengembailkan salinan array yang digabungkan.</li>
              <li>Map, membuat array baru dengan hasil memanggil fungsi untuk setiap elemen array.</li>
              <li>Foreach, memanggil fungsi setiap elemen array.</li>
              <li>Slice, memilih bagian dari array, dan mengembalikan array baru.</li>
              <li>Filter, membuat array baru dengan setiap elemen, dalam array yang lulus seleksi.</li>
              <li>Reduce, melakukan operasi pada setiap elemen array menjadi nilai tunggal (dari kiri ke kanan).</li>
            </ol>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!--  Control Flow -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
              Control Flow
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <ol>
              <li>Normal Flow adalah pengeksekusian statement dari atas ke bawah atau kiri ke kanan yang dilakukan secara berurutan.</li>
              <div>
                <li>Control Flow adalah untuk mengatur alur eksekusi pada statement atau jalannya program sesuai keinginan kita.</li>
                <ul>
                  <li>Pengulangan (Loop / Iterasi) (For, While, Do While)</li>
                  <li>Pengkondisian (Percabangan) (If ... Else, Switch, Block, Try Catch, Break, Continue, Throw)</li>
                  <li>Try ... Catch, Try bertugas mengeksekusi statment di dalamnya, sedangkan catch bertugas menangkap error yang terjadi pada statment di dalam try.</li>
                  <li>Throw, terjadi didalam block try, bertugas melemparkan error sesuai kondisi yang diinginkan, error itu akan ditangkap oleh catch.</li>
                </ul>
              </div>
            </ol>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!--  Function -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
              Function
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>Function di dalam Javascript adalah sebuah objek, karena memiliki properti dan juga method. Function digunakan untuk melakukan serangkaian komputasi / produser yang dapat digunakan berulang kali.</p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!--  Async - Await -->
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">
              Async - Await
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <ol>
              <li>Synchronous, mengekeskusi setiap perintah satu persatu sesuai urutan kode yang dituliskan.</li>
              <li>Asynchronous, hasil eksekusi atau output tidak selalu berdasarkan urutan kode, tetapi berdasarkan waktu proses.</li>
              <li>Callback adalah fungsi yang dikirimkan sebagai parameter pada fungsi lain atau Callback adalah fungsi yang dieksekusi setelah fungsi lain selesai dijalankan.</li>
              <li>Promise adalah objek yang merepresentasikan keberhasilan atau kegagalan pada sebuah event yang asynchronous dimasa mendatang.</li>
              <li>Asynchronous Function adalah sebuah function yang bekerja secara asynchronous yang menghasilkan promise sebagai return value-nya, tetapi cara penulisan code-nya menggunakan penulisan yang synchronous (standar).</li>
              <li>Await adalah sebuah keyword yang terdapat pada async function yang tujuannya menghentikan eksekusi sambil menunggu promise-nya selesai.</li>
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
  name: 'Section8View',
};
</script>

<style scoped>
</style>