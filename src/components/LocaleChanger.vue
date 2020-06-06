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
    <button type="button" class="btn btn-success" v-on:click="changeLocale('en')">EN</button>
    <button type="button" class="btn btn-info" v-on:click="changeLocale('jp')">JP</button>
  </div>
</template>

<script lang="ts">
  import Vue from "vue"
  import {Component} from "vue-property-decorator"

  @Component({
    name: "LocaleChanger"
  })
  export default class LocaleChanger extends Vue {
    public langs = ["en", "jp"];
    /**
     * Locale changes are injected directly into the root.
     */
    public changeLocale(locale: string) {
      this.$root.$i18n.locale = locale
    }
  }
</script>

<style scoped lang="scss">
  .locale-changer {
    .btn {
      margin: 0.2rem;
    }
  }
</style>
