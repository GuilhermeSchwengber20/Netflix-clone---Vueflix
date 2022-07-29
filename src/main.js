import Vue from 'vue';
import App from './App.vue';

import VueRouter from "./router";
import router from './router'

import store from "./store";



Vue.config.productionTip = false
new Vue({
  VueRouter,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

