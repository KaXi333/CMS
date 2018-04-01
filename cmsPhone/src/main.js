import Vue from 'vue'
import 'lib-flexible/flexible.js'
import './assets/iconfont/iconfont.css'
import Layout from './components/Layout'
import VueRouter from 'vue-router'
import IndexPage from './pages/index'
import countInforPage from './pages/countInformation'
import moneyAdminPage from './pages/moneyAdmin'

Vue.use(VueRouter)
let router = new VueRouter({
	mode:'history',
	routes:[
		{
			path:'/',
			component:IndexPage
		},
		{
			path:'/countInforPage',
			component:countInforPage
		},
		{
			path:'/moneyAdminPage',
			component:moneyAdminPage
		}
	]
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})