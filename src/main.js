import Vue from 'vue';
import App from './App.vue';

import VueRouter from "./router";
import router from './router'

import VueYoutube from "vue-youtube";
import store from "./store";

Vue.use(VueYoutube);

Vue.config.productionTip = false
new Vue({
  VueRouter,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

