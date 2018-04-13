<template>
	<div class="bankCardList-continer">
		<div class="bankCardCheck-box">
			<div class="card-input-value"><input type="text" placeholder="请输入账户名"></div>
			<div class="card-input-value"><input type="text" placeholder="请输入户名"></div>
			<button class="checkBtn" type="">查询</button>
		</div>
		<div class="list-box">
			<div class="list-content">
				<div class="list-title-box">
					<h3 class="list-title" v-for="(item,index) in bankTitles">{{item}}</h3>
				</div>
				<div class="list-value-box">
					<div class="list-value" v-for="(item,index) in bankCardLists">
						<ul class="clearFloat">
							<li class="list-item">{{item.name}}</li>
							<li class="list-item">{{item.bankAccount}}</li>
							<li class="list-item">{{item.network}}</li>
							<li class="list-item">{{item.note}}</li>
							<li class="list-item">
								<button class="editBtn">编辑</button>
								<button class="delBtn">删除</button>
							</li>
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
	    	bankCardLists:[
    		  {
	          name: '吴尊林',
	          bankAccount: '6217007200050257412' ,
	          network: '中国建设银行股份有限公司深圳盐田支行',
	          note: '支付'
	        },
	        {
	          name: '谷磊',
	          bankAccount: '6217007200050257412' ,
	          network: '上海浦东发展银行股份有限公司广州分行',
	          note: '支付'
	        },
	        {
	          name: '周杰伦',
	          bankAccount: '6217007200050257412' ,
	          network: '中国平安银行股份有限公司台湾高雄支行',
	          note: '支付'
	        },
	        {
	          name: 'Jay',
	          bankAccount: '6217007200050257412' ,
	          network: '中国工商银行股份有限公司深圳龙华支行',
	          note: '支付'
	        }
	    	],
	    	bankTitles:[
	    		"账户名",
	    		"银行账户",
	    		"开户网点",
	    		"备注",
	    		"操作"
	    	]
		} 
	}
}
</script>

<style scoped>
	.card-input-value{
		margin-right: 25px;
		background: #fff;
		float:left;
	    height: 60px;
	    line-height: 60px;
	    font-size: 26px;
	}
	.card-input-value input{
	    width: 230px;
	    font-size: 24px;
	    height: 60px;
	    padding-left: 16px;
	    outline: none;
	    border: none;
	    background: #fff;
	    line-height: 60px;
	  }
	.bankCardList-continer{
		padding:20px 15px;
	}
	.bankCardCheck-box{
		background: #F0F0F0;
		padding: 20px 20px;
	}
	.list-item button{
		width: 80px;
		height:50px;
		line-height: 50px;
		border: none;
	    color:#fff;
	    font-size: 26px;
	    line-height: 50px;
	}
	.editBtn{
		margin-right: 15px;
		background: #009688;
	}
	.delBtn{
		background: #FF5809;
	}
	li:nth-child(2){
		width: 370px;
	}
	li:nth-child(3){
		width: 510px;
	}
	li:last-child{
		width: 240px;
	}
	h3:nth-child(2){
		width: 370px;
	}
	h3:nth-child(3){
		width: 510px;
	}
	h3:last-child{
		width: 240px;
	}
</style>