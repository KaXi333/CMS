<template>
	<div class="bankCardList-continer">
		<transition name="oderQuery">
		<div class="bankCardCheck-box" v-show="!orderListShowContral">
			<div class="input-box">
				<h2 class="input-name">平台订单号</h2>
				<div class="input-value"><input type="text" placeholder="请输入账户名"></div>
			</div>
			<div class="input-box">
				<h2 class="input-name">订单号</h2>
				<div class="input-value"><input type="text" placeholder="请输入账户"></div>
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
			<check-list :listTitleslots="listTitle" :listslots="bankCardLists" :tilteslots="bankTitles" :showTitle="showTitles"></check-list>
		</div>
		</transition>
	</div>
</template>

<script>
import checkList from '../components/checkList'
export default {
	components:{
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
	    	orderListShowContral:'',
	    	bankCardLists:[
    		  {
	          name: '陈冠希',
	          bankAccount: '5625007205632255841' ,
	          network: '中国建设银行股份有限公司深圳南山支行',
	          note: '支付'
	        },
	        {
	          name: '杜兰特',
	          bankAccount: '5625007205632255841' ,
	          network: '上海浦东发展银行股份有限公司广州分行',
	          note: '支付'
	        },
	        {
	          name: '科比',
	          bankAccount: '5625007205632255841' ,
	          network: '中国平安银行股份有限公司深圳罗湖支行',
	          note: '支付'
	        },
	        {
	          name: 'Jay',
	          bankAccount: '5625007205632255841' ,
	          network: '中国工商银行股份有限公司深圳龙华支行',
	          note: '支付'
	        }
	    	],
	    	bankTitles:[
	    		"序号",
	    		"姓名+银行账户"
	    	],
	    	showTitles:[
	    		"name",
	    		"bankAccount"
	    	],
        listTitle:{
		    		name: '账户名',
	          bankAccount: '银行账户' ,
	          network: '开户网点',
	          note: '备注'
        }
		} 
	}
}
</script>

<style scoped>
	.bankCardCheck-box{
		padding: 0 30px;
	}
	/*.editBtn{
		margin-right: 15px;
		background: #009688;
	}
	.delBtn{
		background: #FF5809;
	}*/
</style>