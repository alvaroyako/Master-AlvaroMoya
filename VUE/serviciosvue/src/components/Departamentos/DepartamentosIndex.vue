<template>
  <div class="container text-center">
    <h1>Departamentos</h1>
    <table
      class="table table-danger table-bordered"
      v-if="departamentos.length > 0"
    >
      <thead>
        <tr>
          <th>Numero</th>
          <th>Nombre</th>
          <th>Localidad</th>
          <th>Detalles</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(dept, index) in departamentos" :key="index">
          <td>{{ dept.numero }}</td>
          <td>{{ dept.nombre }}</td>
          <td>{{ dept.localidad }}</td>
          <td>
            <router-link
              :to="
                '/detallesdepartamento/' +
                dept.numero +
                '/' +
                dept.nombre +
                '/' +
                dept.localidad
              "
              class="btn btn-primary"
              >Detalles</router-link
            >

            <router-link
              :to="'/modificardepartamento/' + dept.numero"
              class="btn btn-warning"
              >Modificar</router-link
            >

            <router-link
              :to="'/eliminardepartamento/' + dept.numero"
              class="btn btn-danger"
              >Eliminar</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>

    <router-link to="/insertardepartamento" class="btn btn-primary"
      >Insertar departamento</router-link
    >
  </div>
</template>

<script>
import ServiceDepartamentos from "./../../services/ServiceDepartamentos";

const service = new ServiceDepartamentos();

export default {
  name: "DepartamentosIndex",
  mounted() {
    this.cargarDepartamentos();
  },
  methods: {
    cargarDepartamentos() {
      service.getDepartamentos().then((result) => {
        this.departamentos = result;
      });
    },
  },
  data() {
    return {
      departamentos: [],
    };
  },
};
</script>