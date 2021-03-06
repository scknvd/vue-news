import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import filters from './filters'

Vue.config.productionTip = false

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

// get
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
