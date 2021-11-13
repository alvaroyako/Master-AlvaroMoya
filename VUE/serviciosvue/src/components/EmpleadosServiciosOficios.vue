<template>
  <div>
    <h1>Oficios</h1>
    <label>Seleccione un oficio</label>
    <form method="post">
      <select
        class="form-control"
        v-model="oficioselect"
        @change="cargarEmpleados"
      >
        <option v-for="(ofi, index) in oficios" :key="index" :value="ofi">
          {{ ofi }}
        </option>
      </select>
    </form>
    <table class="table table-bordered mt-3" v-if="oficioselect">
      <thead>
        <tr>
          <th>Apellido</th>
          <th>Salario</th>
          <th>Departamento</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(emp, index) in empleados" :key="index">
          <td>{{ emp.apellido }}</td>
          <td>{{ emp.salario }}</td>
          <td>{{ emp.departamento }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServicioEmpleados from "./../services/ServicioEmpleados";
const service = new ServicioEmpleados();

export default {
  name: "EmpleadosServiciosOficios",
  methods: {
    cargarEmpleados() {
      service.cargarEmpleados(this.oficioselect).then((result) => {
        this.empleados = result;
      });
    },
  },
  data() {
    return {
      oficios: [],
      empleados: [],
      oficioselect: null,
    };
  },
  mounted() {
    service.cargarOficios().then((result) => {
      this.oficios = result;
    });
  },
};
</script>