import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import DetalleSerie from './components/DetalleSerie.vue'
import Home from './components/Home.vue'
import Personajes from './components/Personajes.vue'
import NuevoPersonaje from './components/NuevoPersonaje.vue'
import ModificarPersonaje from './components/ModificarPersonaje.vue'


Vue.config.productionTip = false
Vue.use(VueRouter);

const routes=[
  {path: "/serie/:idserie", component: DetalleSerie},
  {path: "/personajes/:idserie", component: Personajes},
  {path: "/nuevopj", component: NuevoPersonaje},
  {path: "/modificarpj", component: ModificarPersonaje},
  {path: "/home", component: Home},
  {path: "/", component: Home},

]

const router=new VueRouter({
  routes,
  mode:"history"
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
