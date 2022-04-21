<template>
  <div class="container">
    <h2 class="text-center mt-5 mb-5">Section 7 - Bootstrap</h2>
    <p>
      Frontend Framework adalah sekumpulan aturan kode yang bisa kita gunakan untuk mempermudah dalam membuat suatu tampilan website.
      Bootstrap membantu memudahkan dalam pembangunan sebuah website menjadi lebih mudah.
      Tugas Frontend adalah untuk mewujudkan tampilan UI dan UX yang sudah dibuat oleh UI/UX Designer.
    </p>
    <p>Alasan pemilihan Bootstrap, antara lain:</p>
    <ol>
      <li>Gratis,</li>
      <li>Mudah dipelajari,</li>
      <li>Cepat, dan</li>
      <li>Responsif.</li>
    </ol>
    <div class="text-center">
      <img src="@/assets/img/section-7/task-web-responsive.png" width="70%" alt="">
      <img src="@/assets/img/section-7/task-navbar-responsive.png" width="30%" alt="">
    </div>
  <router-view />
  </div>
</template>

<script>
export default {
  name: 'Section7View',
};
</script>

<style scoped>
</style>