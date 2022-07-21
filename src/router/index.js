import Vue from 'vue'
import VueRouter from 'vue-router'
import Preloader from '../pages/Preloader.vue'
import Main from '../pages/Main.vue'
import Detail from '../pages/Detail.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PreloaderVue',
    component: Preloader,
  },
  {
    path: '/Main',
    name: 'MainVue',
    component: Main
    
  },
  {
    path:'/Detail/:id',
    name: 'DetailVue',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
