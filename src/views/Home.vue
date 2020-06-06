<!--
 * Welcome to Clovuer
 * The comments in each files will guide you through your very cool journey
 * discovering what Vue can do.
 -->
<template>
  <div class="home">
    <img alt="Vue logo" style="height: 200px; width: 200px" src="../assets/logo.png">
    <img alt="Vue logo" style="height: 150px; width: 150px" src="../assets/heart.png">
    <img alt="Vue logo" style="height: 200px; width: 200px" src="../assets/typescript-logo.png">
    <!--
     * Vue Components can be called as easy as using HTML's custom tags
     * Some Component also have property called Prop, and can be defined
     * via HTML attribute tag.
     * i18n was implemented using v-bind directive. See `./locales` for available messages.
    -->
    <HelloWorld :msg="$t('message.welcome')"/>
  </div>
</template>

<script lang="ts">
  import HelloWorld from '@/components/HelloWorld.vue'
  import Vue from "vue"
  import {Component} from "vue-property-decorator"

  @Component({
    name: "Home",
    components: {
      HelloWorld
    }
  })
  export default class Home extends Vue {}
</script>
