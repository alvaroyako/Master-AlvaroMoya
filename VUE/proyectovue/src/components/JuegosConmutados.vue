<template>
  <div>
    <h1>Propiedades conmutadas</h1>
    <ul>
      <li v-for="juego in juegos" :key="juego">
        {{ juego | mayusculas }}
        {{ juego | mayusculasParametro(" Juegazo") }}
      </li>
    </ul>
    <hr />
    <ul>
      <li v-for="j in juegosRojos" :key="j" v-html="j">
        {{ j }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "JuegosConmutados",

  filters: {
    mayusculas(dato) {
      return dato.toUpperCase();
    },
    mayusculasParametro(dato, descripcion) {
      return dato.toUpperCase() + descripcion;
    },
  },

  computed: {
    juegosRojos() {
      var datos = [];
      for (var i = 0; i < this.juegos.length; i++) {
        var juego = this.juegos[i];
        juego = "<span style='color:red'>" + juego + "</span>";
        datos.push(juego);
      }
      return datos;
    },
  },

  data() {
    return {
      juegos: ["Parchis", "Cartas", "Oca", "Pilla pilla"],
    };
  },
};
</script>