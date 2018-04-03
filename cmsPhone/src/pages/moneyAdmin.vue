<template>
	<div class="moneyAdmin-continer">
		<div class="select-box">
			<v-selection :selections="chooseTypes"></v-selection>
			<v-selection :selections="chooseMoneyTypes"></v-selection>
			<button class="checkBtn" type="">查询</button>
		</div>
		<div class="list-box">
			<div class="list-content">
				<div class="list-title-box">
					<h3 class="list-title" v-for="(item,index) in checkTitleList">{{item}}</h3>
				</div>
				<div class="list-value-box">
					<div class="list-value" v-for="(item,index) in monAdmList">
						<ul class="clearFloat">
							<li class="list-item">{{item.name}}</li>
							<li class="list-item">{{item.flowType}}</li>
							<li class="list-item">{{item.moneyType}}</li>
							<li class="list-item">{{item.flowBeformonery}}</li>
							<li class="list-item">{{item.flowmonery}}</li>
							<li class="list-item">{{item.flowAftermonery}}</li>
							<li class="list-item">{{item.note}}</li>
						</ul>
					</div>
				</div>
			</div>
	  </div>
	</div>
</template>

<script>
import VSelection from '../components/base/selection'
export default {
	components:{
		VSelection
	},
	data () {
	    return {
	    	chooseTypes:[
	    		{
		          label: '类型',
		          value: 0
		        },
		        {
		          label: '收款',
		          value: 1
		        },
		        {
		          label: '付款',
		          value: 2
		        },
	    	],
	    	chooseMoneyTypes:[
	    		{
		          label: '资金类型',
		          value: 0
		        },
		        {
		          label: 'D0资金',
		          value: 1
		        },
		        {
		          label: 'T1资金',
		          value: 2
		        },
		        {
		          label: 'T0资金',
		          value: 3
		        }
	    	],
	    	monAdmList:[
	    		{
		          name: '960178541',
		          flowType: '收款' ,
		          moneyType: 'T1余额',
		          flowBeformonery: '3412',
		          flowmonery: '300',
		          flowAftermonery: '3112',
		          note: 'T1余额'
		        },
		        {
		          name: '960178541',
		          flowType: '收款' ,
		          moneyType: 'T1余额',
		          flowBeformonery: '3412',
		          flowmonery: '300',
		          flowAftermonery: '3112',
		          note: 'T1余额'
		        },
		        {
		          name: '960178541',
		          flowType: '收款' ,
		          moneyType: 'T1余额',
		          flowBeformonery: '3412',
		          flowmonery: '300',
		          flowAftermonery: '3112',
		          note: 'T1余额'
		        },
		         {
		          name: '960178541',
		          flowType: '收款' ,
		          moneyType: 'T1余额',
		          flowBeformonery: '3412',
		          flowmonery: '300',
		          flowAftermonery: '3112',
		          note: 'T1余额'
		        },
		         {
		          name: '960178541',
		          flowType: '收款' ,
		          moneyType: 'T1余额',
		          flowBeformonery: '3412',
		          flowmonery: '300',
		          flowAftermonery: '3112',
		          note: 'T1余额'
		        }
	    	],
	    	checkTitleList:[
	    		"账户名称",
	    		"流动类型",
	    		"资金类型",
	    		"流动前资金",
	    		"流动资金",
	    		"流动后资金",
	    		"备注"
	    	]
		} 
	}
}
</script>

<style scoped>
	.moneyAdmin-continer{padding: 10px;}
	.select-box{
		background: #F0F0F0;
		padding: 20px;
	}
	
	
</style>