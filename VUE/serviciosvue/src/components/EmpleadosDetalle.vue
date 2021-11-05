<template>
  <div>
    <h1>Empleados detalle api</h1>

    <label>Seleccione un empleado</label>
    <form method="post" v-on:submit.prevent="mostrarDetalleEmpleado">
      <select class="form-control" v-model="idempleado">
        <option
          v-for="(emp, index) in empleados"
          :key="index"
          :value="emp.idEmpleado"
        >
          {{ emp.apellido }}
        </option>
      </select>
      <button class="btn btn-success">Mostrar Detalles</button>
    </form>

    <table class="table table-bordered mt-5" v-if="empleado">
      <thead>
        <tr>
          <th>Oficio</th>
          <th>Salario</th>
          <th>Departamento</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ empleado.oficio }}</td>
          <td>{{ empleado.salario }}</td>
          <td>{{ empleado.departamento }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import { Global } from "./Global";
export default {
  name: "EmpleadosDetalle",
  mounted() {
    this.cargarEmpleados();
  },
  methods: {
    cargarEmpleados() {
      var request = "/api/Empleados";
      var url = Global.urlempleados + request;
      axios.get(url).then((res) => {
        this.empleados = res.data;
      });
    },
    mostrarDetalleEmpleado() {
      var request = "/api/Empleados/" + this.idempleado;
      var url = Global.urlempleados + request;
      axios.get(url).then((res) => {
        this.empleado = res.data;
      });
    },
  },
  data() {
    return {
      empleados: [],
      empleado: null,
      idempleado: 0,
    };
  },
};
</script>