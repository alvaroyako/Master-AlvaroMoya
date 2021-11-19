<template>
  <nav
    class="navbar navbar-expand-md navbar-dark bg-dark"
    aria-label="Fourth navbar example"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Menu</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarsExample04"
        aria-controls="navbarsExample04"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample04">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link to="/home" class="nav-link">Home</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/listaapuestas" class="nav-link">Apuestas</router-link>
          </li>

          

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="dropdown04"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >Equipos</a
            >
            <ul class="dropdown-menu" aria-labelledby="dropdown04">
              <li v-for="(equipo, index) in equipos" :key="index">
                <router-link :to="'/detallesequipo/' + equipo.idEquipo">{{
                  equipo.nombre
                }}</router-link>
              </li>
            </ul>
          </li>

          <form method="post" v-on:submit.prevent="buscarJugador"  class="form-inline my-2 my-md-0 input-group" >
                <input class="form-control" type="text" placeholder="Buscar" v-model="nombre" >
                <button class="btn btn-outline-info" style="float: right;">Buscar</button>
          </form>
          
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import ChampionsService from "./../services/ChampionsService";
const service = new ChampionsService();

export default {
  name: "Menu",
  data(){
      return{
        nombre:"",
        equipos:[]
      };
  },
  methods:{
      buscarJugador(){
        this.$router.push('/busqueda/'+this.nombre)
      },

      cargarEquipos(){
        service.cargarEquipos().then((result) => {
        this.equipos = result;
      });
      },
  },
  mounted(){
    this.cargarEquipos()
  }
  
  
};
</script>