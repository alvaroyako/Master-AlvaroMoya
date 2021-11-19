<template>
  <div class="container text-center">
      <h1>Realizar apuestas</h1>

    <div class="text-center" style="display: table;width: 30rem;margin: 0 auto;">
        <form method="post" v-on:submit.prevent="realizarApuesta">
            <label>Usuario: </label>
            <input class="form-control" type="text" v-model="usuario">

            <label>Real Madrid: </label>
            <input class="form-control" type="number" v-model="rm">

            <label>Atletico de Madrid: </label>
            <input class="form-control" type="number" v-model="am">

            <label>Fecha: </label>
            <input class="form-control" type="date" v-model="fecha">

            <button class="btn btn-primary mt-5">Apostar</button>
        </form>
    </div>
  </div>
</template>

<script>
import ChampionsService from "./../services/ChampionsService";
const service = new ChampionsService();
export default {
name:"RealizarApuesta",
methods:{
    realizarApuesta(){
        var usuario=this.usuario;
        var resultado=this.rm+"-"+this.am;
        var fecha=this.fecha;
        var apuesta={
            idApuesta:0,
            usuario:usuario,
            resultado:resultado,
            fecha:fecha
        }
        service.realizarApuestas(apuesta).then(result => {
            console.log(result);
            this.$router.push("/listaapuestas")
            }); 
        
    },
},
data(){
    return{
        id:0,
        usuario:"",
        rm:"",
        am:"",
        fecha:""
    };
    
},
}
</script>

<style>

</style>