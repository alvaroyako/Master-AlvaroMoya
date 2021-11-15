<template>
  <div class="container text-center">
    <div class="card mt-5" style="width: 18rem; margin: 0 auto">
      <img :src="serie.imagen" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
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
      serie: null,
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