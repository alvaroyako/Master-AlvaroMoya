<template>
  <div>
    <h1>Parametros routing</h1>
    <h2 style="color: blue">El numero recibido es {{ numero }}</h2>
    <h2 style="color: red">El doble es {{ doble }}</h2>
    <button @click="redirectToHome()">Volver</button>
  </div>
</template>

<script>
export default {
  name: "NumeroDoble",
  mounted() {
    this.mostrarDoble();
  },
  watch: {
    "$route.params.numero"(nextVal, prevVal) {
      if (nextVal != prevVal) {
        this.mostrarDoble();
      }
    },
  },
  data() {
    return {
      numero: 0,
      doble: 0,
    };
  },
  methods: {
    redirectToHome() {
      this.$router.push("/");
    },
    mostrarDoble() {
      this.numero = this.$route.params.numero;
      this.doble = parseInt(this.numero) * 2;
    },
  },
};
</script>