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
              Satya Bagus Dwiatmaja • 16 y.o. • DwiiUnknown#3704<br />
    I'm a Front-end Developer, i also like to make discord bots. Currently Developer at Auron Empire Minecraft Server & Mizu Development.<br />
    This website is made from Vue + Typescript and Material Design Bootstrap, you can check the source code <a href="https://github.com/ItzMeDwii/dwii.me">here</a>.
    </p>


            <div class="row d-flex justify-content-center my-4" role="group">
              <a href="https://github.com/ItzMeDwii/" target="_blank" class="btn text-white waves-efect font-weight-bolder">My Github</a>
              <a href="https://auronempire.com" class="btn text-white waves-efect font-weight-bolder">Auron Empire</a>
              <a href="https://mizudev.net" class="btn text-white waves-efect font-weight-bolder">Mizu Dev</a>
            </div>
          </div>
        </div>

  }

}
