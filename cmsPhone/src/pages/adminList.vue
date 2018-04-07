<template>
	<div class="bankCardList-continer">
		<div class="bankCardCheck-box">
			<div class="check-input-value"><input type="text" placeholder="请输入名称"></div>
			<v-selection :selections="Types"></v-selection>
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
							  <button class="editBtn">授权</button>
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
	    	Types:[
	    		{
		          label: '状态',
		          value: 0
		        },
		        {
		          label: '微信H5',
		          value: 1
		        },
		        {
		          label: '网银支付',
		          value: 2
		        },
	    	],
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
	    		"编号",
	    		"名称",
	    		"邮箱",
	    		"状态",
	    		"操作"
	    	]
		} 
	}
}
</script>

<style scoped>
	.check-value{
		margin-right: 25px;
		background: #fff;
	}
	.check-value input{
	    width: 230px;
	    font-size: 24px;
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
	.list-content{width: 1675px;}
	li:nth-child(2){
		width: 370px;
	}
	li:nth-child(3){
		width: 510px;
	}
	li:last-child{
		width: 340px;
	}
	h3:nth-child(2){
		width: 370px;
	}
	h3:nth-child(3){
		width: 510px;
	}
	h3:last-child{
		width: 340px;
	}
</style>