<template>
<div class="container text-center">

  

<div class="text-center mt-5" v-if="jugadores">
    <router-link :to="'/detallesequipo/' +idequipo" class="btn btn-success">Volver</router-link>
    <table class="table table-bordered" style="display: table;width: 50rem;margin: 0 auto;">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Imagen</th>
                <th>Detalles</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(jugador, index) in jugadores" :key="index">
                <td>{{jugador.nombre}}</td>
                <td><img :src="jugador.imagen" alt=""></td>
                <td>Hola</td>
                <td><router-link :to="'/detallesjugador/'+jugador.idJugador" class="btn btn-danger">Detalles</router-link></td>
            </tr>
        </tbody>
    </table>
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
name:"Jugadores",
data(){
    return{
        idequipo:0,
        jugadores:null
    };
},
mounted(){
    this.idequipo=this.$route.params.idequipo
    this.cargarJugadores()
    
},
methods:{
    cargarJugadores(){
        service.cargarJugadores(this.idequipo).then((result) => {
        this.jugadores = result;
        console.log(this.jugadores)
      });
    },
},
}
</script>

<style>

</style>