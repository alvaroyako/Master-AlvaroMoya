import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Busqueda from './components/Busqueda.vue'
import DetallesEquipo from './components/DetallesEquipo.vue'
import Jugadores from './components/Jugadores.vue'
import DetallesJugador from './components/DetallesJugador.vue'
import ListaApuestas from './components/ListaApuestas.vue'
import RealizarApuesta from './components/RealizarApuesta.vue'



Vue.config.productionTip = false
Vue.use(VueRouter);

const routes=[
  {path: "/home", component: Home},
  {path: "/", component: Home},
  {path: "/busqueda/:nombre", component: Busqueda},
  {path: "/detallesequipo/:idequipo", component: DetallesEquipo},
  {path: "/jugadores/:idequipo", component: Jugadores},
  {path: "/detallesjugador/:idjugador", component: DetallesJugador},
  {path: "/listaapuestas", component: ListaApuestas},
  {path: "/realizarapuesta", component: RealizarApuesta},

]

const router=new VueRouter({
  routes,
  mode:"history"
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')