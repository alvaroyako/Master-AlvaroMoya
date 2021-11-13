<template>
  <div>
    <h1>El numero es {{ num }}</h1>
    <h1>El triple es {{ triple }}</h1>
  </div>
</template>

<script>
export default {
  name: "NumeroTriple",
  mounted() {
    this.mostrarTriple();
  },
  data() {
    return {
      num: 0,
      triple: 0,
    };
  },
  methods: {
    mostrarTriple() {
      this.num = this.$route.params.numero;
      this.triple = parseInt(this.num) * 3;
    },
  },
};
</script>