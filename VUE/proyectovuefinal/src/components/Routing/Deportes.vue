
<template>
  <div>
    <h1>Comunicacion Padre Hijo</h1>
    <ul>
      <li v-for="depor in deportes" :key="depor">
        <Deporte
          :deporte="depor"
          v-on:seleccionarFavoritoParent="seleccionarFavoritoParent"
        />
      </li>
    </ul>
    <h2>
      El favorito es <span style="color: red">{{ favorito }}</span>
    </h2>
  </div>
</template>

<script>
import Deporte from "./Deporte.vue";
export default {
  name: "Deportes",
  methods: {
    seleccionarFavoritoParent(depor) {
      this.favorito = depor;
    },
  },
  components: {
    Deporte,
  },
  data() {
    return {
      deportes: ["Canicas", "Curling", "Surf", "Padel", "Futbol"],
      favorito: "",
    };
  },
};
</script>