<template>
  <div>
    <div v-if="peliculas">
      <div
        class="card mb-5"
        style="width: 18rem; display: table; margin: 0 auto"
        v-for="(pelicula, index) in peliculas"
        :key="index"
      >
        <img class="card-img-top" :src="pelicula.foto" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{{ pelicula.titulo }}</h5>
          <p class="card-text">{{ pelicula.argumento }}</p>
          <!-- <app-detallepeliculas
          [pelicula]="pelicula"
          [index]="i"
          (seleccionarDetallePadre)="seleccionarDetallePadre($event)"
        >
        </app-detallepeliculas> -->
        </div>
      </div>
    </div>

    <div v-else>
      <h1 class="text-danger">Loading...</h1>
    </div>
  </div>
</template>

<script>
import PeliculasService from "./../services/PeliculasService";
const service = new PeliculasService();

export default {
  name: "Peliculas",
  data() {
    return {
      peliculas: null,
      idgenero: 0,
      idnacionalidad: 0,
      titulo: "",
    };
  },
  methods: {
    getPeliculaGenero(idgenero) {
      service.getPeliculaGenero(idgenero).then((result) => {
        this.peliculas = result;
        console.log(this.peliculas);
      });
    },

    getPeliculaNacionalidad(idnacionalidad) {
      service.getPeliculaNacionalidad(idnacionalidad).then((result) => {
        this.peliculas = result;
      });
    },
  },
  mounted() {
    if (this.$route.params.genero) {
      this.idgenero = this.$route.params.genero;
      this.getPeliculaGenero(this.idgenero);
    } else if (this.$route.params.nacionalidad) {
      this.idnacionalidad = this.$route.params.nacionalidad;
      this.getPeliculaNacionalidad(this.idnacionalidad);
    }
  },
  watch: {
    "$route.params.genero"(nextVal, prevVal) {
      if (nextVal != prevVal) {
        this.idgenero = this.$route.params.genero;
        this.getPeliculaGenero(this.idgenero);
      }
    },
    "$route.params.nacionalidad"(nextVal, prevVal) {
      if (nextVal != prevVal) {
        this.idnacionalidad = this.$route.params.nacionalidad;
        this.getPeliculaNacionalidad(this.nacionalidad);
      }
    },
  },
};
</script>

<style>
</style>