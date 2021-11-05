<template>
  <div>
    <h1>Api coches</h1>
    <div v-for="(coche, index) in coches" :key="index">
      <h1>{{ coche.marca }}</h1>
      <h1>{{ coche.modelo }}</h1>
      <h1>{{ coche.conductor }}</h1>
      <img style="width: 400px; height: 300px" :src="coche.imagen" />
      <hr />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Global } from "./Global";
export default {
  name: "Coche",
  data() {
    return {
      coches: [],
    };
  },
  mounted() {
    this.cargarCoches();
  },
  methods: {
    cargarCoches() {
      var request = "/webresources/coches";
      var url = Global.urlcoches + request;
      axios.get(url).then((res) => {
        this.coches = res.data;
      });
    },
  },
};
</script>