import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})

export default class Home extends Vue {

  private render() {

    return <div id="home">
          <div class="animated zoomIn">
            <img src="https://avatars1.githubusercontent.com/u/32206405" class="avatar rounded my-3 mx-auto d-block" width="150px" />

            <h1 class="text-center text-white font-weight-bold my-1">DwiiUnknown</h1>

            <p class="text-center text-white my-2">
              Satya Bagus Dwiatmaja • 15 y.o. • DwiiUnknown#3704<br />
    I'm a Front-end Developer, i also like to make discord bots. Currently Developer at Auron Empire Minecraft Server & Mizu Development.
    </p>


            <div class="row d-flex justify-content-center my-4" role="group">
              <a href="https://github.com/ItzMeDwii/" class="btn text-white waves-efect font-weight-bolder">My Github</a>
            </div>
          </div>
        </div>

  }

}
