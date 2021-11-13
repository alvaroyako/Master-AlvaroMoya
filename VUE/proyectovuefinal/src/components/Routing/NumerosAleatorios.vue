<template>
  <div>
    <h1>Numeros aleatorios</h1>
    <ul>
      <li v-for="(n, index) in numeros" :key="index">
        <router-link :to="'/triple/' + n">{{ n }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NumerosAleatorios",
  mounted() {
    this.crearNumeros();
  },
  data() {
    return {
      numeros: [],
    };
  },
  methods: {
    crearNumeros() {
      for (var i = 0; i < 10; i++) {
        var n = Math.floor(Math.random() * 100);
        this.numeros.push(n);
      }
    },
  },
};
</script>