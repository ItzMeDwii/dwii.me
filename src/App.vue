<!--
 * Welcome to Clovuer
 * The comments in each files will guide you through your very cool journey
 * discovering what Vue can do.
 -->
<template>
  <div id="app">
    <div id="nav">
      <nav class="py-2 navbar fixed-top navbar-expand-lg navbar-dark default-color">
        <div class="container">
          <a class="navbar-brand font-weight-bold" href="/"> DwiiUnknown </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#"><router-link to="/">Home</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><router-link to="/about">About</router-link></a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <ThemeChanger/>
            <LocaleChanger/>
          </ul>
        </div>
        </div>
      </nav>
    </div>
    <!--
     * This is where your content will be displayed.
     * Refer to `router/index.ts` for component that will be displayed
     * over a router.
    -->
    <router-view></router-view>
  </div>
</template>

<!--
 * Clovuer shipped with SCSS/SASS support via node-sass.
-->
<style lang="scss" src="./styles.scss"></style>

<script lang="ts">
  import Vue from "vue"
  import {Component} from "vue-property-decorator"
  /**
   * You can use `@/` as an equivalent for `./src`
   */
  import LocaleChanger from "@/components/LocaleChanger.vue";

  /**
   * @Component decorator is used to declare a Vue Component
   * and including Component into the Vue instance
   */
  @Component({
    name: "App",
    components: {
      LocaleChanger
    }
  })
  export default class App extends Vue {}
</script>
