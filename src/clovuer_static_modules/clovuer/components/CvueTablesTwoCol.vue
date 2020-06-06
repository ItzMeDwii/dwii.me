<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">{{heades.header}}</th> <th scope="col">{{heades.data}}</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-{{tableClass}}" v-for="(data, index) in tables" v-bind:key="index">
        <th scope="row">{{data.header}}</th> <td>{{data.data}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
  import 'reflect-metadata'
  import Vue from "vue"
  import {Component, Prop} from "vue-property-decorator"
  import {TwoCol} from "@/clovuer_static_modules/clovuer/clovuer";

  @Component({
    name: "CvueTablesTwoCol"
  })
  export default class CvueTablesTwoCol extends Vue {
    @Prop({required: true})
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public heades!: TwoCol;
    /**
     *
     */
    @Prop({required: true})
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public tables!: Array<TwoCol>;

    @Prop({default: "active"})
    public tableClass!: string;

    protected isOdd(num: number) {
      return (num % 2) == 1;
    }

    public getFirstArrayData() {
      const data = new Array<TwoCol>();
      this.tables.forEach((value: TwoCol, index) => {
        if(this.isOdd(index)) data.push(value)
      })
    }

    public getSecondArrayData() {
      const data = new Array<TwoCol>();
      this.tables.forEach((value: TwoCol, index) => {
        if(!this.isOdd(index)) data.push(value)
      })
    }
  }
</script>
