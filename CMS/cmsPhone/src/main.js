import Vue from 'vue'
import 'lib-flexible/flexible.js'
import Layout from './components/Layout'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { Layout },
  template: '<Layout/>'
})
