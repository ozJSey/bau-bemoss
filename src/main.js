import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueGlide from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css';
import VuePageTransition from 'vue-page-transition'
Vue.use(VuePageTransition)
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
import './selectedIcons';
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueGlide)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')