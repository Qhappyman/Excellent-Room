import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupTracking } from './utils/tracking'

Vue.config.productionTip = false

setupTracking(router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
