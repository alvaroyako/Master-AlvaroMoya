<template>
  <div class="container text-center">
    <h1>Insertar departamento</h1>

    <router-link to="/departamentos" class="btn btn-primary"
      >Volver al listado</router-link
    >
    <div style="width: 500px; margin: 0 auto">
      <form method="post" v-on:submit.prevent="insertarDepartamento()">
        <div class="form-group">
          <label>Numero</label>
          <input
            type="number"
            class="form-control"
            v-model="departamento.numero"
          />
        </div>
        <div class="form-group">
          <label>Nombre</label>
          <input
            type="text"
            class="form-control"
            v-model="departamento.nombre"
          />
        </div>
        <div class="form-group">
          <label>Localidad</label>
          <input
            type="text"
            class="form-control"
            v-model="departamento.localidad"
          />
        </div>
        <button class="btn btn-success mt-4">Insertar Departamento</button>
      </form>
    </div>
  </div>
</template>

<script>
import ServiceDepartamentos from "./../../services/ServiceDepartamentos";

const service = new ServiceDepartamentos();
export default {
  name: "InsertarDepartamento",
  data() {
    return {
      departamento: {
        numero: 0,
        nombre: "",
        localidad: "",
      },
    };
  },
  methods: {
    insertarDepartamento() {
      this.departamento.numero = parseInt(this.departamento.numero);
      service.postDepartamento(this.departamento).then((result) => {
        console.log(result);
        this.$router.push("/departamentos");
      });
    },
  },
};
</script>

<style>
</style>