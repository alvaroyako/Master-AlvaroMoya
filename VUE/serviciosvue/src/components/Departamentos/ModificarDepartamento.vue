<template>
  <div>
    <h1>Modificar Departamento</h1>
    <div style="width: 500px; margin: 0 auto" v-if="departamento">
      <form method="post" v-on:submit.prevent="updateDepartamento()">
        <div class="form-group">
          <label for="">Numero</label>
          <input
            type="text"
            class="form-control"
            v-model="departamento.numero"
            disabled
          />
        </div>

        <div class="form-group">
          <label for="">Nombre</label>
          <input
            type="text"
            class="form-control"
            v-model="departamento.nombre"
          />
        </div>

        <div class="form-group">
          <label for="">Localidad</label>
          <input
            type="text"
            class="form-control"
            v-model="departamento.localidad"
          />
        </div>
        <button class="btn btn bg-success">Modificar</button>
      </form>
    </div>
  </div>
</template>

<script>
import ServiceDepartamentos from "./../../services/ServiceDepartamentos";

const service = new ServiceDepartamentos();
export default {
  name: "ModificarDepartamento",
  mounted() {
    this.id = this.$route.params.iddepartamento;
    this.buscarDepartamento();
  },
  methods: {
    buscarDepartamento() {
      service.buscarDepartamento(this.id).then((result) => {
        this.departamento = result;
      });
    },

    updateDepartamento() {
      this.departamento.numero = parseInt(this.departamento.numero);
      service.updateDepartamento(this.departamento).then((result) => {
        console.log(result);
        this.$router.push("/departamentos");
      });
    },
  },
  data() {
    return {
      departamento: null,
      id: 0,
    };
  },
};
</script>

<style>
</style>