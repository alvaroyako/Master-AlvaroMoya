<template>
  <div>
      <h1>Personajes</h1>
      <router-link class="btn btn-danger" :to="'/serie/' + this.id">Volver</router-link>
      <table class="table table-bordered">
          <thead>
              <tr>
                  <th>Personaje</th>
                  <th>Imagen</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(personaje, index) in personajes" :key="index">
                  <td>{{personaje.nombre}}</td>
                  <td><img style="width:420px;height:300px" :src="personaje.imagen" alt="Card image cap" /></td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
import SeriesService from "./../services/SeriesService";

const service = new SeriesService();
export default {
    name:"Personajes",
    mounted() {
    this.id = this.$route.params.idserie;
    this.cargarPersonajes();
    console.log(this.personajes)
  },
    data(){
        return{
            id:0,
            personajes:[]
        };
    },
    methods:{
    cargarPersonajes() {
      service.personajesSerie(this.id).then((result) => {
        this.personajes = result;
        console.log(result);
      });
    },
    },
}
</script>

<style>
</style>