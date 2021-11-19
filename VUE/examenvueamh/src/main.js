import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Peliculas from './components/Peliculas.vue'



Vue.config.productionTip = false
Vue.use(VueRouter);

const routes=[
  {path: "/home", component: Home},
  {path: "/", component: Home},
  { path: "/peliculas/genero/:genero", component: Peliculas },
  { path: "/peliculas/nacionalidad/:nacionalidad", component: Peliculas}
    ,
  { path: "/peliculas/buscar/:titulo", component: Peliculas }

]

const router=new VueRouter({
  routes,
  mode:"history"
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')