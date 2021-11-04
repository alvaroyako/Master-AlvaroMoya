<template>
  <div>
    <h1>{{ deporte }}</h1>
    <button @click="seleccionarFavorito(deporte)">Seleccionar Favorito</button>
  </div>
</template>

<script>
export default {
  name: "Deporte",
  props: ["deporte"],

  methods: {
    seleccionarFavorito(depor) {
      this.$emit("seleccionarFavoritoParent", depor);
    },
  },
};
</script>






