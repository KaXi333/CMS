import Vue from 'vue'
import i18n from './i18n'
import 'lib-flexible/flexible.js'
import './assets/iconfont/iconfont.css'
import 'mint-ui/lib/style.css'
import App from './components/App'
import loginPage from './pages/login'
import LayoutPage from './components/Layout'
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
import applyClearPage from './pages/applyClear'
import settleQueryPage from './pages/settleQuery'

Vue.use(VueRouter)
let router = new VueRouter({
	mode:'history',
	routes:[
		{
			path:'/login',
			component:loginPage
		},
		{
			path:'/',
			component:LayoutPage,
			redirect: '/IndexPage',
			children:[
				{
					path:'/IndexPage',
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
				{
					path:'/applyClearPage',
					component:applyClearPage
				},
				{
					path:'/settleQueryPage',
					component:settleQueryPage
				}
			]
		}
	]
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n:i18n,
  components: { App },
  template: '<App/>'
})
