<template>
  <nav
    class="navbar navbar-expand-md navbar-dark bg-dark"
    aria-label="Fourth navbar example"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Menu</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarsExample04"
        aria-controls="navbarsExample04"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample04">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link to="/home" class="nav-link">Home</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/home" class="nav-link">Modificar</router-link>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="dropdown04"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >Generos</a
            >
            <ul class="dropdown-menu" aria-labelledby="dropdown04">
              <li v-for="(genero, index) in generos" :key="index">
                <router-link :to="'/peliculas/genero/' + genero.idGenero">{{
                  genero.nombre
                }}</router-link>
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="dropdown04"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >Nacionalidades</a
            >
            <ul class="dropdown-menu" aria-labelledby="dropdown04">
              <li v-for="(nacionalidad, index) in nacionalidades" :key="index">
                <router-link
                  :to="'/peliculas/nacionalidad/' + nacionalidad.idNacionalidad"
                  >{{ nacionalidad.nombre }}
                  <img
                    :src="nacionalidad.bander"
                    style="width: 50px; height: 50px"
                    alt=""
                /></router-link>
              </li>
            </ul>
          </li>

          <form
            method="post"
            v-on:submit.prevent="buscarPelicula"
            class="form-inline my-2 my-md-0 input-group"
          >
            <input
              class="form-control"
              type="text"
              placeholder="Buscar"
              v-model="titulo"
            />
            <button class="btn btn-outline-info" style="float: right">
              Buscar
            </button>
          </form>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import PeliculasService from "./../services/PeliculasService";
const service = new PeliculasService();

export default {
  name: "Menu",
  data() {
    return {
      titulo: "",
      generos: [],
      nacionalidades: [],
    };
  },
  methods: {
    buscarJugador() {
      this.$router.push("/peliculas/buscar/" + this.titulo);
    },

    cargarGeneros() {
      service.getGeneros().then((result) => {
        this.generos = result;
      });
    },

    cargarNacionalidades() {
      service.getNacionalidad().then((result) => {
        this.nacionalidades = result;
      });
    },
  },
  mounted() {
    this.cargarGeneros();
    this.cargarNacionalidades();
  },
};
</script>