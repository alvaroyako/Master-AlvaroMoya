<template>
  <div class="container">
    <h1 class="text-danger">{{ comic.titulo }}</h1>
    <img :src="comic.imagen" />
    <h2 class="text-primary">{{ comic.descripcion }}</h2>
    <!-- :class="{
      rojo: comic.year<=2000,
      verde: comic.year>2000
      }" -->
    <button class="btn btn-info" @click="seleccionarFavorito(comic)">
      Seleccionar Favorito
    </button>
    <button class="btn btn-success" @click="modificarComic(comicindex)">
      Modificar comic
    </button>
    <button class="btn btn-danger" @click="eliminarComic(comicindex)">
      Eliminar comic
    </button>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Comic",
  props: ["comic", "comicindex"],
  methods: {
    seleccionarFavorito(comic) {
      this.$emit("seleccionarFavoritoParent", comic);
    },
    eliminarComic(comicindex) {
      this.$emit("eliminarComicParent", comicindex);
    },
    modificarComic(comicindex) {
      this.$emit("modificarComicParent", comicindex);
    },
  },
};
</script>

<style scoped>
@import "./../../assets/app.css";
</style>