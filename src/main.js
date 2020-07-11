import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vClickOutside from 'v-click-outside'
import VueScrollTo from 'vue-scrollto'
import '@/assets/style/bootstrap.scss'
import '@/assets/style/style.scss'
import VueMeta from 'vue-meta'

Vue.use(VueMeta)
Vue.use(vClickOutside)
Vue.use(VueScrollTo)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
