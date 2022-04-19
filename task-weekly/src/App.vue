<template>
  <v-app id="App">
    <v-app-bar
      elevation="10"
      color="black darken-3"
      dark
      height="60"
      >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer">
        <font-awesome-icon icon="fa-solid fa-bars" />
      </v-app-bar-nav-icon>
      <v-toolbar-title href="/">Anindya Deffa Nabila - Vue Kelas A
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-grey--text text--accent-4"
        >
          <v-list-item href="/">
              <font-awesome-icon icon="fa-solid fa-house" />
              <v-list-item-title class="title-sidebar">Home</v-list-item-title>
          </v-list-item>
          <v-list-item href="/section-2">
              <font-awesome-icon icon="fa-solid fa-book" />
              <v-list-item-title class="title-sidebar">Section 2</v-list-item-title>
          </v-list-item>
          <v-list-item href="/section-3">
              <font-awesome-icon icon="fa-solid fa-book" />
              <v-list-item-title class="title-sidebar">Section 3</v-list-item-title>
          </v-list-item>
          <v-list-item href="/section-4">
              <font-awesome-icon icon="fa-solid fa-book" />
              <v-list-item-title class="title-sidebar">Section 4</v-list-item-title>
          </v-list-item>
          <v-list-item href="/section-5">
              <font-awesome-icon icon="fa-solid fa-book" />
              <v-list-item-title class="title-sidebar">Section 5</v-list-item-title>
          </v-list-item>
          <v-list-item href="/section-6">
              <font-awesome-icon icon="fa-solid fa-book" />
              <v-list-item-title class="title-sidebar">Section 6</v-list-item-title>
          </v-list-item>
          <v-list-item class="github-icon">
            <v-btn icon
              href="https://github.com/anindyadeffa"
              target="_blank"
              style="font-size: 35px;">
              <font-awesome-icon icon="fa-brands fa-github" />
            </v-btn>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      group: null,
      drawer: false,
    }
  },
  watch: {
    group () {
      this.drawer = false
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.text-center {
  text-align: center;
}
.text-headline {
  margin: 5% 0 5% 0;
}
.title-sidebar {
  margin-left: 10px;
}
.github-icon {
  justify-content: center;
}
</style>
