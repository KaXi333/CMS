import Vue from 'vue'
import 'lib-flexible/flexible.js'
import './assets/iconfont/iconfont.css'
import Layout from './components/Layout'
import VueRouter from 'vue-router'
import IndexPage from './pages/index'
import countInforPage from './pages/countInformation'
import moneyAdminPage from './pages/moneyAdmin'
import publicSignPage from './pages/publicSign'
import changePwPage from './pages/changePassword'
import bankCardPage from './pages/bankCard'
import bankCardListPage from './pages/bankCardList'
import receiptPage from './pages/receipt'
import payPage from './pages/pay'
import orderQueryPage from './pages/orderQuery'
import orderQuerySumPage from './pages/orderQuerySum'
import addAdminPage from './pages/addAdmin'
import adminListPage from './pages/adminList'

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
			path:'/changePwPage',
			component:changePwPage
		},
		{
			path:'/moneyAdminPage',
			component:moneyAdminPage
		},
		{
			path:'/publicSignPage',
			component:publicSignPage
		},
		{
			path:'/bankCardPage',
			component:bankCardPage
		},
		{
			path:'/bankCardListPage',
			component:bankCardListPage
		},
		{
			path:'/receiptPage',
			component:receiptPage
		},
		{
			path:'/payPage',
			component:payPage
		},
		{
			path:'/orderQueryPage',
			component:orderQueryPage
		},
		{
			path:'/orderQuerySumPage',
			component:orderQuerySumPage
		},
		{
			path:'/addAdminPage',
			component:addAdminPage
		},
		{
			path:'/adminListPage',
			component:adminListPage
		},
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
