<template>
  <div class="container text-center">

      <h1>Apuestas</h1>

        <div class="text-center" v-if=" apuestas">
            <router-link :to="'/realizarapuesta'" class="btn btn-danger mb-4">Realizar apuesta</router-link>
            <h1 class="text-danger">Local: Real Madrid, Visitante: Atletico de Madrid</h1>
            <table class=" table table-bordered table-info" style="display: table;width: 50rem;margin: 0 auto;">
                <thead>
                    <tr>
                        <th>Usuario</th>
                        <th>Resultado</th>
                        <th>Fecha</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(apuesta, index) in apuestas" :key="index">
                        <td>{{apuesta.usuario}}</td>
                        <td>{{apuesta.resultado}}</td>
                        <td>{{apuesta.fecha}}</td>
                        <td><button class="btn btn-danger" @click="borrarApuesta(apuesta.idApuesta)">Borrar Apuesta</button></td>
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
import Swal from 'sweetalert2'
export default {
name:"ListaApuestas",
data(){
    return{
        id:"",
        apuestas:null
    };
},
methods:{
    cargarApuestas(){
        service.cargarApuestas().then((result) => {
        this.apuestas = result;
      });
    },

    borrarApuesta(id){
        Swal.fire({
        title: 'Seguro?',
        text: "No podras deshacer esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Dale!'
        }).then((result) => {
        if (result.isConfirmed) {  
        service.borrarApuesta(id).then((result) => {
        this.cargarApuestas()
        console.log(result)
        
        });
        
        Swal.fire(
        'Borrado!',
        'Apuesta borrada.',
        'success'
        )
        
        
    }
    
})
    
    }
},
mounted(){
    this.cargarApuestas()
},

}
</script>

<style>

</style>