<template>
	<div class="moneyAdmin-continer">
		<transition name="oderQuery">
		<div class="oderQuery-box" v-show="!orderListShowContral">
			<div class="input-box">
				<h2 class="input-name">流动类型</h2>
				<picker :slots="chooseTypes"></picker>
			</div>
			<div class="input-box">
				<h2 class="input-name">资金类型</h2>
				<picker :slots="chooseMoneyTypes"></picker>	
			</div>
			<div class="checkBtn-box">
				<button @click="orderCheckListBtn" class="checkBtn longCheckBtn" type="">查询</button>
			</div>
		</div>
		</transition>	
		<transition name="oderList">
		<div class="orderCheckList" v-if="orderListShowContral">
			<div class="lotNotice">
				<button @click="orderListBackBtn" class="checkBtn" type="">返回</button>
			</div>
			<check-list :listTitleslots="listTitle" :listslots="bankCardLists" :tilteslots="bankTitles"></check-list>
		</div>
		</transition>
	</div>
</template>

<script>
import picker from '../components/base/picker'
import checkList from '../components/checkList'
export default {
	components:{
		picker,
		checkList
	},
	methods:{
		//订单查询按钮
		orderCheckListBtn(){
			this.orderListShowContral=!this.orderListShowContral
		},
		//返回按钮
		orderListBackBtn(){
			this.orderListShowContral=!this.orderListShowContral
		}
	},
	data () {
	    return {
	    	orderListShowContral:false,//控制订单查询页列表的显示隐藏
	    	chooseTypes:[
	        {
	    			flex: 1,
	    			values: ['收款', '付款'],
	    			textAlign:"center"
	    		}
	    	],
	    	chooseMoneyTypes:[
	        {
	    			flex: 1,
	    			values: ['D0资金', 'T1资金','T0资金'],
	    			textAlign:"center"
	    		}
	    	],
	    	listTitle:{
		    		name: '创建时间',
	          state: '商户名称' ,
	          rate: '平台订单号',
	          minSum: '商户订单号',
	          maxSum: '交易金额' ,
	          md5Key: '手续费' ,
	          signTime: '类型' ,
	          expireTime: '状态',
	          payTime: '付款时间'
        },
	    	bankCardLists:[
    		  {
	          name: '2018-04-04 15:35:31',
	          state: '1770963469' ,
	          rate: 'jjl_201804041535311090',
	          minSum: '343c9d561c317c7662621f9e1c30e004',
	          maxSum: '3000:00' ,
	          md5Key: '1:00' ,
	          signTime: '微信扫码支付' ,
	          expireTime: '未支付',
	          payTime: '2019-03-17 00:00:00'
	        },
	        {
	          name: '2018-04-04 15:35:31',
	          state: '1770963469' ,
	          rate: 'jjl_201804041535311090',
	          minSum: '343c9d561c317c7662621f9e1c30e004',
	          maxSum: '1000:00' ,
	          md5Key: '0.02' ,
	          signTime: '微信扫码支付' ,
	          expireTime: '未支付',
	          payTime: '2019-03-17 00:00:00' 
	        },
	        {
	          name: '2018-04-04 15:35:31',
	          state: '1770963469' ,
	          rate: 'jjl_201804041535311090',
	          minSum: '343c9d561c317c7662621f9e1c30e004',
	          maxSum: '8700:00' ,
	          md5Key: '0.50' ,
	          signTime: '微信扫码支付' ,
	          expireTime: '未支付',
	          payTime: '2019-03-17 00:00:00' 
	        },
	        {
	          name: '2018-04-04 15:35:31',
	          state: '1770963469' ,
	          rate: 'jjl_201804041535311090',
	          minSum: '343c9d561c317c7662621f9e1c30e004',
	          maxSum: '4500:00' ,
	          md5Key: '0.05' ,
	          signTime: '微信扫码支付' ,
	          expireTime: '未支付',
	          payTime: '2019-03-17 00:00:00' 
	        },
	        {
	          name: '2018-04-04 15:35:31',
	          state: '1770963469' ,
	          rate: 'jjl_201804041535311090',
	          minSum: '343c9d561c317c7662621f9e1c30e004',
	          maxSum: '8700:00' ,
	          md5Key: '0.80' ,
	          signTime: '微信扫码支付' ,
	          expireTime: '未支付' ,
	          payTime: '2019-03-17 00:00:00' 
	        },
	        {
	          name: '2018-04-04 15:35:31',
	          state: '1770963469' ,
	          rate: 'jjl_201804041535311090',
	          minSum: '343c9d561c317c7662621f9e1c30e004',
	          maxSum: '8700:00' ,
	          md5Key: '0.80' ,
	          signTime: '微信扫码支付' ,
	          expireTime: '未支付' ,
	          payTime: '2019-03-17 00:00:00' 
	        },
	        {
	          name: '2018-04-04 15:35:31',
	          state: '1770963469' ,
	          rate: 'jjl_201804041535311090',
	          minSum: '343c9d561c317c7662621f9e1c30e004',
	          maxSum: '8700:00' ,
	          md5Key: '0.80' ,
	          signTime: '微信扫码支付' ,
	          expireTime: '未支付' ,
	          payTime: '2019-03-17 00:00:00' 
	        },
	        {
	          name: '2018-04-04 15:35:31',
	          state: '1770963469' ,
	          rate: 'jjl_201804041535311090',
	          minSum: '343c9d561c317c7662621f9e1c30e004',
	          maxSum: '8700:00' ,
	          md5Key: '0.80' ,
	          signTime: '微信扫码支付' ,
	          expireTime: '未支付' ,
	          payTime: '2019-03-17 00:00:00' 
	        },
	        {
	          name: '2018-04-04 15:35:31',
	          state: '1770963469' ,
	          rate: 'jjl_201804041535311090',
	          minSum: '343c9d561c317c7662621f9e1c30e004',
	          maxSum: '8700:00' ,
	          md5Key: '0.80' ,
	          signTime: '微信扫码支付' ,
	          expireTime: '未支付' ,
	          payTime: '2019-03-17 00:00:00' 
	        },
	        {
	          name: '2018-04-04 15:35:31',
	          state: '1770963469' ,
	          rate: 'jjl_201804041535311090',
	          minSum: '343c9d561c317c7662621f9e1c30e004',
	          maxSum: '8700:00' ,
	          md5Key: '0.80' ,
	          signTime: '微信扫码支付' ,
	          expireTime: '未支付' ,
	          payTime: '2019-03-17 00:00:00' 
	        },
	        {
	          name: '2018-04-04 15:35:31',
	          state: '1770963469' ,
	          rate: 'jjl_201804041535311090',
	          minSum: '343c9d561c317c7662621f9e1c30e004',
	          maxSum: '8700:00' ,
	          md5Key: '0.80' ,
	          signTime: '微信扫码支付' ,
	          expireTime: '未支付' ,
	          payTime: '2019-03-17 00:00:00' 
	        },
	        {
	          name: '2018-04-04 15:35:31',
	          state: '1770963469' ,
	          rate: 'jjl_201804041535311090',
	          minSum: '343c9d561c317c7662621f9e1c30e004',
	          maxSum: '8700:00' ,
	          md5Key: '0.80' ,
	          signTime: '微信扫码支付' ,
	          expireTime: '未支付' ,
	          payTime: '2019-03-17 00:00:00' 
	        }
	    	],
	    	bankTitles:[
	    		"序号",
	    		"平台订单号+日期"
	    	]
		} 
	}
}
</script>

<style scoped>
	
</style>