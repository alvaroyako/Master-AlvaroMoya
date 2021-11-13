<template>
  <div>
    <h1>Primer componente de Vue</h1>
    <h2>{{ saludo }}</h2>
    <h2>Hola, {{ nombre }}</h2>
    <img src="./../assets/img/duro.jpg" />
  </div>
</template>

<script>
export default {
  name: "HolaMundo",
  data() {
    return {
      saludo: "Mi primer componente",
      nombre: "Alumno Vue",
    };
  },
};
</script>

<style scoped>
@import "./../assets/css/estilosvue.css";
</style>