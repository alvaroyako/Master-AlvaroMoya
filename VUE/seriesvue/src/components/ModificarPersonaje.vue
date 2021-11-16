<template>
  <div class="container">
    <h1>Modificar personaje</h1>
    <form method="post" v-on:submit.prevent="modificarPersonaje">
        <label>Seleccione una serie: </label>
        <select class="form-control" v-model="serie">
            <option v-for="(serie, index) in series" :key="index" :value="serie.idSerie">{{serie.nombre}}</option>
        </select>

        <label>Seleccione un Personaje: </label>
        <select class="form-control" v-model="personaje">
            <option v-for="(pj, index) in personajes" :key="index" :value="pj.idPersonaje">{{pj.nombre}}</option>
        </select>

        <button class="btn btn-success mt-4">Modificar Personaje</button>
    </form>
  </div>
</template>

<script>
import SeriesService from "./../services/SeriesService";

const service = new SeriesService();
export default {
    name:"ModificarPersonaje",
    mounted(){
        this.cargarSeries();
        this.cargarPersonajes();
    },
    methods:{
        cargarSeries(){
        service.cargarSeries().then((result) => {
        this.series = result;
        console.log(result);
      });
        },

        cargarPersonajes(){
        service.cargarPersonajes().then((result) => {
        this.personajes = result;
        console.log(result);
      });
        },

        modificarPersonaje(){
        service.modificarPersonaje(this.personaje,this.serie).then((result) => {
        console.log(result);
      });
        this.$router.push('/serie/'+this.serie)
        }
    },
    data(){
        return{
            series:[],
            personajes:[],
            serie:0,
            personaje:0,
        };
    },
}
</script>

<style>

</style>