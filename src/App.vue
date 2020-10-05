<template>
  <div id="app">
    <div id="nav">
      <Sidenav />
    </div>
    <div id="main" class="container">
    <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from "@/components/Navbar.vue";

@Component({
  components: {
    Navbar
  },
})
export default class App extends Vue {}
</script>

<style lang="scss" src="./stylesheets/global.scss"></style>