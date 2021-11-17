<template>
  <div class="container text-center">
    <div class="card mt-5" style="width: 18rem; margin: 0 auto">
      <img :src="serie.imagen" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{{serie.nombre}}</h5>
        <p class="card-text">
          Puntuacion: {{serie.puntuacion}}
        </p>
        <hr>
        <router-link :to="'/personajes/'+this.id" class="btn btn-primary">Personajes</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import SeriesService from "./../services/SeriesService";

const service = new SeriesService();
export default {
  name: "DetalleSerie",
  mounted() {
    this.id = this.$route.params.idserie;
    this.cargarDetalles();
  },
  data() {
    return {
      id: 0,
      serie: {},
    };
  },
  methods: {
    cargarDetalles() {
      service.detallesSerie(this.id).then((result) => {
        this.serie = result;
        console.log(result);
      });
    },
  },
  watch: {
    "$route.params.idserie"(nextVal, prevVal) {
      if (nextVal != prevVal) {
        this.id = this.$route.params.idserie;
        this.cargarDetalles();
      }
    },
  },
};
</script>

<style>
</style>