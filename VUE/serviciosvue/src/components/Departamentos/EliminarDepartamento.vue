<template>
  <div class="container text-center"></div>
</template>

<script>
import ServiceDepartamentos from "./../../services/ServiceDepartamentos";

const service = new ServiceDepartamentos();
export default {
  name: "EliminarDepartamento",
  mounted() {
    this.id = this.$route.params.iddepartamento;
    this.deleteDepartamento();
  },
  data() {
    return {
      id: 0,
    };
  },
  methods: {
    deleteDepartamento() {
      service.deleteDepartamento(this.id).then((result) => {
        console.log(result);
        this.$router.push("/departamentos");
      });
    },
  },
};
</script>

<style>
</style>