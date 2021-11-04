import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import TablaMultiplicar from './components/Routing/TablaMultiplicar.vue'
import Home from './components/Routing/Home.vue';
import Deportes from './components/Routing/Deportes.vue';
import Numeros from './components/Routing/Numeros.vue';
import Comics from './components/Routing/Comics.vue';
import NumeroDoble from './components/Routing/NumeroDoble.vue';
import NumerosAleatorios from './components/Routing/NumerosAleatorios.vue'
import NumeroTriple from './components/Routing/NumeroTriple.vue';


Vue.config.productionTip = false

Vue.use(VueRouter);

const routes=[
{path: "/deportes", component:Deportes},
{path: "/numerodoble/:numero", component:NumeroDoble},
{path: "/aleatorios", component:NumerosAleatorios},
{path: "/triple/:numero", component:NumeroTriple},
{path: "/comics", component:Comics},
{path: "/numeros", component:Numeros},
{path: "/tabla", component:TablaMultiplicar},
{path:"/",component:Home}
]

const router=new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
