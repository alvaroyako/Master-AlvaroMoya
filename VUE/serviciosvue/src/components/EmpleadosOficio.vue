<template>
  <div>
    <h1>Oficios</h1>
    <label>Seleccione un oficio</label>
    <form method="post">
      <select
        class="form-control"
        @change="cargarEmpleados"
        v-model="oficioselect"
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
import axios from "axios";
import { Global } from "./Global";
export default {
  name: "EmpleadosOficio",
  mounted() {
    this.cargarOficios();
  },
  methods: {
    cargarOficios() {
      var request = "api/Empleados/oficios";
      var url = Global.urlempleados + request;
      axios.get(url).then((res) => {
        this.oficios = res.data;
      });
    },
    cargarEmpleados() {
      var request = "api/Empleados/EmpleadosOficio/" + this.oficioselect;
      var url = Global.urlempleados + request;
      axios.get(url).then((res) => {
        this.empleados = res.data;
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
};
</script>