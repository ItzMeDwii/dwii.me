<!--
 * Welcome to Clovuer
 * The comments in each files will guide you through your very cool journey
 * discovering what Vue can do.
 -->
<template>
  <div class="hello">
    <!--
     * Prop declared before can be used
     * as simple as using curly bracket wrap.
    -->
    <h1>{{ msg }}</h1>
    <h4>An Extended Vue</h4>
    <p>
      {{ $t('message.helloworld.1') }}<br>
      {{ $t('message.helloworld.2') }}
      <a href="https://github.com/BillyAddlers/clovuer" target="_blank" rel="noopener">{{ $t('message.helloworld.3') }}</a>
        {{ $t('message.helloworld.4') }}
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">{{ $t('message.helloworld.5') }}</a> {{ $t('message.helloworld.6') }}
    </p>
    <h3>{{ $t('message.helloworld.installed') }}</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank" rel="noopener">typescript</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank" rel="noopener">pwa</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>{{ $t('message.helloworld.essential_links') }}</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>{{ $t('message.helloworld.ecosystem') }}</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
  /**
   * [reflect-metadata](https://github.com/rbuckton/reflect-metadata) is used to emit metadata decorator
   * for the @Prop tag to use TypeScript type as an actual type for Vue Prop.
   */
  import 'reflect-metadata'
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class HelloWorld extends Vue {
    /**
     * @Prop decorator is used to declare Prop.
     * Prop is accessible via HTML attribute tag.
     */
    @Prop()
    private msg!: string;
  }
</script>

<!--
 * "scoped" attribute tag limit the Style to this component only
 -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
