import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})

export default class Home extends Vue {

  private render () {

    return <div id="home">
    <i class="fab fa-mdb"></i>aaa
  </div>

  }

}
