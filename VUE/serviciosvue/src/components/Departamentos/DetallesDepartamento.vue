<template>
  <div class="container text-center">
    <h1>Detalles</h1>
    <router-link class="btn btn-info" to="/departamentos"
      >Volver al listado</router-link
    >
    <h2 class="text-primary">
      {{ departamento.nombre + ", " + departamento.localidad }}
    </h2>
  </div>
</template>

<script>
export default {
  name: "DetallesDepartamento",
  mounted() {
    this.departamento.numero = this.$route.params.iddepartamento;
    this.departamento.nombre = this.$route.params.nombre;
    this.departamento.localidad = this.$route.params.localidad;
  },
  data() {
    return {
      departamento: {
        numero: 0,
        nombre: "",
        localidad: "",
      },
    };
  },
};
</script>

<style>
</style>