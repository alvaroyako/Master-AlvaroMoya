import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/navegacion/Home.vue'
import Musica from './components/navegacion/Musica.vue'
import Cine from './components/navegacion/Cine.vue'
import Television from './components/navegacion/Television.vue'
import CicloVida from './components/CicloVida.vue'
import JuegosConmutados from './components/JuegosConmutados.vue'
import Directivas from './components/Directivas.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes=[
{path: "/home", component: Home},
{path: "/ciclovida", component: CicloVida},
{path: "/juegos", component: JuegosConmutados},
{path: "/directivas", component: Directivas},
{path: "/musica", component: Musica},
{path: "/cine", component: Cine},
{path: "/television", component: Television},
{path: "/", component: Home},
]

const router=new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


