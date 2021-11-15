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
            <router-link to="/serie" class="nav-link">Ejemplo</router-link>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="dropdown04"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >Series</a
            >
            <ul class="dropdown-menu" aria-labelledby="dropdown04">
              <li v-for="(serie, index) in series" :key="index">
                <router-link :to="'/serie/' + serie.idSerie">{{
                  serie.nombre
                }}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import SeriesService from "./../services/SeriesService";

const service = new SeriesService();
export default {
  name: "Menu",
  data() {
    return {
      series: [],
    };
  },
  mounted() {
    this.cargarSeries();
  },
  methods: {
    cargarSeries() {
      service.cargarSeries().then((result) => {
        this.series = result;
        console.log(result);
      });
    },
  },
};
</script>