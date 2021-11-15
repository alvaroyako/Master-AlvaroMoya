import Vue from 'vue'
import App from './App.vue'
import Coche from './components/Coche.vue'
import EmpleadosDetalle from './components/EmpleadosDetalle.vue'
import EmpleadosOficio from './components/EmpleadosOficio.vue'
import EmpleadosServiciosOficios from './components/EmpleadosServiciosOficios.vue'
import EjemploServicios from './components/EjemploServicios.vue'
import DepartamentosIndex from './components/Departamentos/DepartamentosIndex.vue'
import InsertarDepartamento from './components/Departamentos/InsertarDepartamento.vue'
import EliminarDepartamento from './components/Departamentos/EliminarDepartamento.vue'
import ModificarDepartamento from './components/Departamentos/ModificarDepartamento.vue'
import DetallesDepartamento from './components/Departamentos/DetallesDepartamento.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes=[
  {path: "/coches", component: Coche},
  {path: "/empleadosdetalle", component: EmpleadosDetalle},
  {path: "/departamentos", component: DepartamentosIndex},
  {path: "/insertardepartamento", component: InsertarDepartamento},
  {path: "/eliminardepartamento/:iddepartamento", component: EliminarDepartamento},
  {path: "/modificardepartamento/:iddepartamento", component: ModificarDepartamento},
  {path: "/detallesdepartamento/:iddepartamento/:nombre/:localidad", component: DetallesDepartamento},
  {path: "/empleadosoficio", component: EmpleadosOficio},
  {path: "/empleadosserviciosoficio", component: EmpleadosServiciosOficios},
  {path: "/ejemploservicios", component: EjemploServicios},
]

const router=new VueRouter({
  routes,
  mode:"history"
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
