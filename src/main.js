import Vue from 'vue';
import App from './App.vue';

import VueRouter from "./router";
import router from './router'

import store from "./store";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


library.add(faHatWizard);
Vue.component('font-awesome-icon', FontAwesomeIcon);


Vue.config.productionTip = false
new Vue({
  VueRouter,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

