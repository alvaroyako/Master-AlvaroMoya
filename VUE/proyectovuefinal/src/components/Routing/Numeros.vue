<template>
  <div>
    <h1>Numeros Padre</h1>
    <h2 class="text-danger">La suma es {{ resultado }}</h2>
    <button class="btn btn-primary" @click="crearNumeros()">
      Nuevo numero
    </button>
    <hr />
    <div v-for="(n, index) in numeros" :key="index">
      <Numero :valor="n" v-on:sumarParent="sumarParent" />
    </div>
  </div>
</template>

<script>
import Numero from "./Numero.vue";
export default {
  name: "Numeros",
  data() {
    return {
      numeros: [],
      resultado: 0,
    };
  },
  components: {
    Numero,
  },
  methods: {
    crearNumeros() {
      var num = Math.floor(Math.random() * 10) + 1;
      this.numeros.push(num);
    },
    sumarParent(valor) {
      this.resultado += valor;
    },
  },
};
</script>