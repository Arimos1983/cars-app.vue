import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Cars from './components/AppCars'
import AddCars from './components/AppAddCars'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {path:'/', redirect: '/cars' },
  {path: '/cars', component: Cars, name: 'cars'},
  {path: '/add', component: AddCars},
  {path: '/edit/:id', component: AddCars, name: 'edit'}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
