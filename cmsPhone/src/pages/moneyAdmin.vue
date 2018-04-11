<template>
	<div class="moneyAdmin-continer">
		<div class="input-box">
				<h2 class="input-name">流动类型</h2>
				<picker :slots="chooseTypes"></picker>
			</div>
			<div class="input-box">
				<h2 class="input-name">资金类型</h2>
				<picker :slots="chooseMoneyTypes"></picker>	
			</div>
			<div class="checkBtn-box">
				<button class="checkBtn longCheckBtn" type="">查询</button>
			</div>
		<div class="list-box">
			<div class="list-content">
				<div class="list-title-box">
					<h3 class="list-title" v-for="(item,index) in checkTitleList">{{item}}</h3>
				</div>
				<div class="list-value-box">
					<div class="list-value" v-for="(item,index) in monAdmList">
						<ul class="clearFloat">
							<li class="list-item">{{item.time}}</li>
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
import picker from '../components/base/picker'
export default {
	components:{
		picker
	},
	data () {
	    return {
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
	    	monAdmList:[
	    		{
	    				time:'2018-04-03 17:19:55',
		          name: '960178541',
		          flowType: '收款' ,
		          moneyType: 'T1余额',
		          flowBeformonery: '3412',
		          flowmonery: '300',
		          flowAftermonery: '3112',
		          note: 'T1余额'
		        },
		        {
		        	time:'2018-04-03 17:19:55',
		          name: '960178541',
		          flowType: '收款' ,
		          moneyType: 'T1余额',
		          flowBeformonery: '3412',
		          flowmonery: '300',
		          flowAftermonery: '3112',
		          note: 'T1余额'
		        },
		        {
		        	time:'2018-04-03 17:19:55',
		          name: '960178541',
		          flowType: '收款' ,
		          moneyType: 'T1余额',
		          flowBeformonery: '3412',
		          flowmonery: '300',
		          flowAftermonery: '3112',
		          note: 'T1余额'
		        },
		         {
		         	time:'2018-04-03 17:19:55',
		          name: '960178541',
		          flowType: '收款' ,
		          moneyType: 'T1余额',
		          flowBeformonery: '3412',
		          flowmonery: '300',
		          flowAftermonery: '3112',
		          note: 'T1余额'
		        },
		         {
		         	time:'2018-04-03 17:19:55',
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
	    		"流动时间",
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
	.moneyAdmin-continer{
		padding:0 30px;
	}
	.list-content {
    width: 1708px; 
	}
	li:nth-child(1){
		width: 300px;
	}
	h3:nth-child(1){
		width: 300px;
	}
	
	
</style>