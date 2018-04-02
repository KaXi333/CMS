<template>
	<div class="moneyAdmin-continer">
		<div class="select-box">
			<v-selection :selections="chooseTypes"></v-selection>
			<v-selection :selections="chooseMoneyTypes"></v-selection>
			<button class="checkBtn" type="">查询</button>
		</div>
		<div class="moneyAdmin-box">
			<div class="moneyAdmin-content">
				<div class="moneyAdmin-title-box">
					<h3 class="moneyAdmin-title">账户名称</h3>
					<h3 class="moneyAdmin-title">流动类型</h3>
					<h3 class="moneyAdmin-title">资金类型</h3>
					<h3 class="moneyAdmin-title">流动前资金</h3>
					<h3 class="moneyAdmin-title">流动资金</h3>
					<h3 class="moneyAdmin-title">流动后资金</h3>
					<h3 class="moneyAdmin-title">备注</h3>
				</div>
				<div class="moneyAdmin-value-box">
					<div class="moneyAdmin-value" v-for="(item,index) in monAdmList">
						<ul class="clearFloat">
							<li class="moneyAdmin-item">{{item.name}}</li>
							<li class="moneyAdmin-item">{{item.flowType}}</li>
							<li class="moneyAdmin-item">{{item.moneyType}}</li>
							<li class="moneyAdmin-item">{{item.flowBeformonery}}</li>
							<li class="moneyAdmin-item">{{item.flowmonery}}</li>
							<li class="moneyAdmin-item">{{item.flowAftermonery}}</li>
							<li class="moneyAdmin-item">{{item.note}}</li>
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
	.checkBtn{
		height:60px;
		border: none;
		width: 120px;
		background: #009688;
		color:#fff;
	}
	.moneyAdmin-box{
		width: 100%;
		overflow:hidden;
		overflow-x:auto;
	}
	.moneyAdmin-content{
		border:1px solid #E0E0E0;
		margin-top: 50px;
		width: 1407px;
		
	}
	.moneyAdmin-title-box{
		background: #F0F0F0;
		height:80px;
		line-height: 80px;
	}
	.moneyAdmin-title,.moneyAdmin-item{
		width: 200px;
		float:left;
		height:80px;
		line-height: 80px;
		text-align: center;
		border-right: 1px solid #E0E0E0
	}
	.clearFloat:after{
		display: block;
		visibility: hidden;
		clear: both;
		height:0;
		content: ".";
	}
	.clearFloat{
		zoom:1;
	}
	
</style>