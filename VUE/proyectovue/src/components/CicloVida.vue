<template>
  <div>
    <h1>Ejemplo ciclo vida Hooks</h1>
    <button @click="cambiarSaludo()">Cambiar saludo</button>
    <h2 style="color: blue">{{ saludo }}</h2>
  </div>
</template>

<script>
export default {
  name: "CicloVida",
  methods: {
    cambiarSaludo() {
      this.saludo = "He cambiado";
    },
  },
  data() {
    return {
      saludo: "Hola Hooks",
    };
  },
  mounted() {
    console.log("Componente montado");
  },
  created() {
    console.log("Componente creado");
  },
  destroyed() {
    console.log("Cmponente eliminado");
  },
  updated() {
    console.log("Dibujo modificado en Template");
  },
};
</script>