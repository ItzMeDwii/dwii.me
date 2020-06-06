<template>
  <button type="button" :class="checkButton()"><slot></slot></button>
</template>

<script lang="ts">
  import 'reflect-metadata'
  import Vue from "vue"
  import {Component, Prop} from "vue-property-decorator"

  @Component({
    name: "CvueButton"
  })
  export default class CvueButton extends Vue {
    @Prop({required: true})
    public buttonType!: string;

    @Prop({default: false})
    public disabled!: boolean;

    @Prop({default: 0})
    public buttonSize!: number;

    protected buttonClass = new Array<string>();

    public checkButton() {
      this.buttonClass.push("btn");
      this.buttonClass.push(`btn-${this.buttonType}`);
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
