<template>
  <div class="text-center mt-5" >
    <table class="table table-bordered" style="display: table;width: 50rem;margin: 0 auto;">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Imagen</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(jugador, index) in jugadores" :key="index">
                <td>{{jugador.nombre}}</td>
                <td><img :src=jugador.imagen alt=""></td>
                
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import ChampionsService from "./../services/ChampionsService";
const service = new ChampionsService();

export default {
name:"Busqueda",
data(){
    return{
        nombre:"",
        jugadores:[]
    };
},
mounted(){
    this.cargarJugadores()
},
methods:{
    cargarJugadores(){
      var nombre=this.$route.params.nombre
      service.buscarJugador(nombre).then((result) => {
        this.jugadores = result;
      });
    },
},
watch: {
    "$route.params.nombre"(nextVal, prevVal) {
      if (nextVal != prevVal) {
        this.nombre = this.$route.params.nombre;
        this.cargarJugadores();
      }
    },
  },
}

</script>

<style>

</style>