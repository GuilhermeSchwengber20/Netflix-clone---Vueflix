import Vue from 'vue';
import App from './App.vue';

import VueRouter from "./router";
import router from './router'

import VueYoutube from "vue-youtube";
import store from "./store";
import Toasted from "vue-toasted";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHatWizard, faShirt, faTicket, faUserCircle, faBell, faMagnifyingGlass, faCheck, faTrash, faCirclePlay, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHatWizard, faShirt, faTicket, faUserCircle, faBell, faMagnifyingGlass, faCheck, faTrash, faCirclePlay, faCircleInfo);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VueYoutube);
Vue.use(Toasted);

Vue.config.productionTip = false
new Vue({
  VueRouter,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

