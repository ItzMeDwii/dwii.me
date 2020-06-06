<template>
  <div class="btn-group" role="group">
    <button id="btnGroupDrop1" type="button" :class="checkButton()" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
      <a class="dropdown-item" v-for="(name, href, index) in data" v-bind:key="index" :href="href">{{name}}</a>
    </div>
  </div>
</template>

<script lang="ts">
  import 'reflect-metadata'
  import Vue from "vue"
  import {Component, Prop} from "vue-property-decorator"
  import {DropdownItem} from "@/clovuer_static_modules/clovuer/clovuer";

  @Component({
    name: "CvueButtonGroupDropdown"
  })
  export default class CvueButtonGroupDropdown extends Vue {
    @Prop({required: true})
    public buttonType!: string;

    @Prop({required: true})
    public data!: Array<DropdownItem>;

    @Prop({default: false})
    public disabled!: boolean;

    @Prop({default: 0})
    public buttonSize!: number;

    protected buttonClass = new Array<string>();

    public checkButton() {
      this.buttonClass.push("btn");
      this.buttonClass.push(`btn-${this.buttonType}`);
      this.buttonClass.push("dropdown-toggle");
      if(this.disabled) {
        this.buttonClass.push("disabled")
      }
      if (this.buttonSize === 1) {
        this.buttonClass.push("btn-lg")
      } else if (this.buttonSize === -1) {
        this.buttonClass.push("btn-sm")
      }

      return this.buttonClass.join(" ")
    }
  }
</script>
