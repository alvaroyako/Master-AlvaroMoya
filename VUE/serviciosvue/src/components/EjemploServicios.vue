<template>
  <div>
    <h1>Ejemplo servicios con api</h1>
    <h2 class="text-primary">{{ saludo }}</h2>
    <h2 class="text-danger" v-if="empleado">{{ empleado.apellido }}</h2>
    <h2 class="text-danger" v-else>No tenemos empleado</h2>
  </div>
</template>

<script>
import ServiceEjemplo from "./../services/ServiceEjemplo";
const service = new ServiceEjemplo();

export default {
  name: "EjemploServicios",
  data() {
    return {
      saludo: "",
      empleado: null,
    };
  },
  mounted() {
    this.saludo = service.getSaludo("Alumno");

    service.getPromesa.then((result) => {
      this.saludo = result;
    });

    service.getEmpleado(7839).then((result) => {
      this.empleado = result;
    });
  },
};
</script>