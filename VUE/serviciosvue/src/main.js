import Vue from 'vue'
import App from './App.vue'
import Coche from './components/Coche.vue'
import EmpleadosDetalle from './components/EmpleadosDetalle.vue'
import EmpleadosOficio from './components/EmpleadosOficio.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes=[
  {path: "/coches", component: Coche},
  {path: "/empleadosdetalle", component: EmpleadosDetalle},
  {path: "/empleadosoficio", component: EmpleadosOficio},
]

const router=new VueRouter({
  routes,
  mode:"history"
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')