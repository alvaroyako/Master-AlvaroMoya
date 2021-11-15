import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import DetalleSerie from './components/DetalleSerie.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes=[
  {path: "/serie/:idserie", component: DetalleSerie},
]

const router=new VueRouter({
  routes,
  mode:"history"
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
