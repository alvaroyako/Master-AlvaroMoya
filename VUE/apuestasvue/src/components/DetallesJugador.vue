<template>
  <div class="container text-center">
      <h1>Detalles jugador</h1>

    <div class="card mt-5 text-center" style="width: 45rem;display: table;margin: 0 auto;" v-if="jugador">
        <div class="card-header">
            {{jugador.nombre}}
        </div>
        <img class="card-img-top" style="width: 100px; height: 150px;" :src="jugador.imagen" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">Posicion: {{jugador.posicion}}</h5>
            <p class="card-text">Fecha Nacimiento: {{jugador.fechaNacimiento}}</p>
            <p class="card-text">Pais: {{jugador.pais}}</p>
            <router-link :to="'/jugadores/'+jugador.idEquipo" class="btn btn-success">Jugadores</router-link> 
        </div>
    </div>

    <div v-else>
        <h1 class="text-danger">Loading...</h1>
    </div>

  </div>
</template>

<script>
import ChampionsService from "./../services/ChampionsService";
const service = new ChampionsService();
export default {
name:"DetallesJugador",
methods:{
    cargarJugador(){
        service.cargarJugador(this.$route.params.idjugador).then((result) => {
        this.jugador = result;
      });
    }
},
mounted(){
    this.idJugador=this.$route.params.idjugador
    this.cargarJugador()
},
data(){
    return{
        idJugador:0,
        jugador:null
    }
}

}
</script>

<style>

</style>