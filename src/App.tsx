import { Component, Vue } from 'vue-property-decorator';
import "./stylesheets/global.scss";

@Component({
  components: {
  },
})

export default class Home extends Vue {

  private render () {

    return <div id="app">
    <div id="nav">
    </div>
    <div id="main" class="container">
    <router-view/>
    </div>
  </div>

  }
  
}