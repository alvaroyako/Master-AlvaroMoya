<template>
  <div class="container">
      <h1>Nuevo personaje</h1>
      <form method="post" v-on:submit.prevent="insertarPersonaje">
          <label>Nombre: </label>
          <input class="form-control" type="text" v-model="nombre"/>

          <label>Imagen: </label>
          <input class="form-control" type="text" v-model="imagen"/>

          <label>Serie: </label>
          <select class="form-control" v-model="serie">
              <option v-for="(serie, index) in series" :key="index" :value="serie.idSerie">{{serie.nombre}}</option>
          </select>

          <button class="btn btn-success mt-4">Insertar personaje</button>

      </form>
  </div>
</template>

<script>
import SeriesService from "./../services/SeriesService";

const service = new SeriesService();
export default {
    name:"NuevoPersonaje",
    data(){
        return{
            nombre:"",
            imagen:"",
            serie:"",
            personaje:{},
            series:[]
        };
    },
    mounted(){
        this.cargarSeries();
    },
    methods:{
        cargarSeries(){
        service.cargarSeries().then((result) => {
        this.series = result;
        console.log(result);
      });
        },

        insertarPersonaje(){
            this.personaje={
               idPersonaje:0,
               nombre: this.nombre,
               imagen: this.imagen,
               idSerie: this.serie 
            };
            service.insertarPersonaje(this.personaje).then((result) => {
            console.log(result);
            });
            this.$router.push('/serie/'+this.serie)
        }
    },
}
</script>

<style>

</style>