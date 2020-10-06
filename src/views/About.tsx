import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})

export default class Home extends Vue {

  private render () {

    return <div class="about">
    <h1>This is an about page</h1>
  </div>

  }

}