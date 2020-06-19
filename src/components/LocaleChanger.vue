<!--
 * Welcome to Clovuer
 * The comments in each files will guide you through your very cool journey
 * discovering what Vue can do.
 -->
<template>
  <div class="locale-changer">
    <!--
     * v-on is used to listen to a certain event. In this case, button clicks
     * v-on then emit `changeLocale()` method to inject locale into prefered lang.
    -->
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
         aria-haspopup="true" aria-expanded="false">
        <i class="fas fa-globe fa-lg"></i>
      </a>
      <div class="dropdown-menu dropdown-menu-right"
           aria-labelledby="navbarDropdownMenuLink">
        <a class="dropdown-item" v-on:click="changeLocale('en')">EN</a>
        <a class="dropdown-item" v-on:click="changeLocale('jp')">JP</a>
        <a class="dropdown-item" v-on:click="changeLocale('id')">ID</a>
      </div>
    </li>

  </div>
</template>

<script lang="ts">
  import Vue from "vue"
  import {Component} from "vue-property-decorator"
  @Component({
    name: "LocaleChanger"
  })
  export default class LocaleChanger extends Vue {
    public langs = ["en", "jp", "id"];
    public lang = localStorage.getItem("lang");
    /**
     * Locale changes are injected directly into the root.
     */
    public changeLocale(locale: string) {
      localStorage.setItem("lang", locale);
      return this.$root.$i18n.locale = locale;
    }
  }
</script>