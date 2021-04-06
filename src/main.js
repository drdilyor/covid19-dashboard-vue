import Vue from 'vue'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import moment from 'moment'

import router from './router'

Vue.config.productionTip = false
// Vue.use(BootstrapVue)

// https://stackoverflow.com/a/47219162/13449712
Vue.filter('number', v => new Intl.NumberFormat('en-US').format(v))
Vue.filter('date', function(date) {
  if (!date) return ''
  return moment(date).format('MMM, D, YYYY, h:mm:ss a')
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
