<template>
  <div class="container text-center">

      
      
    <div class="card mt-5 text-center" style="width: 45rem;display: table;margin: 0 auto;" v-if="equipo" >
        <div class="card-header">
            {{equipo.nombre}}
        </div>
        <img class="card-img-top" style="width: 100px; height: 150px;" :src="equipo.imagen" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">Champions: {{equipo.champions}}</h5>
            <p class="card-text">{{equipo.descripcion}}</p>
            <router-link class="btn btn-primary" :to="'/jugadores/' + equipo.idEquipo">Jugadores</router-link>
            <router-link to="/home" class="btn btn-danger">Volver</router-link>
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
name:"DetallesEquipo",
data(){
    return{
        equipo:null,
        idequipo:0
    };
},
methods:{
    cargarDetallesEquipo(){
        service.cargarDetallesEquipo(this.idequipo).then((result) => {
        this.equipo = result;
      });
    }
},
mounted(){
    this.idequipo=this.$route.params.idequipo
    this.cargarDetallesEquipo()
},
watch: {
    "$route.params.idequipo"(nextVal, prevVal) {
      if (nextVal != prevVal) {
        this.idequipo = this.$route.params.idequipo;
        this.cargarDetallesEquipo();
      }
    },
  },
}
</script>

<style>

</style>