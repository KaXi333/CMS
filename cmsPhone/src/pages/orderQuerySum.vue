<template>
	<div class="oderQuery-continer">
		<div class="oderQuery-box">
			<v-selection :selections="payTypes"></v-selection>
			<v-selection :selections="stateTypes"></v-selection>
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
							<li class="list-item">{{item.state}}</li>
							<li class="list-item">{{item.rate}}</li>
							<li class="list-item">{{item.minSum}}</li>
							<li class="list-item">{{item.maxSum}}</li>
							<li class="list-item">{{item.md5Key}}</li>
							<li class="list-item">{{item.signTime}}</li>
							<li class="list-item">{{item.expireTime}}</li>
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
	methods:{
		checkedAll(){
			if(this.checked){
				this.checkboxModel=[];
			}else{
				this.checkboxModel=true;
			}
		}
	},
	data () {
	    return {
	    	payTypes:[
	    		{
		          label: '全部方式',
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
	    	stateTypes:[
	    		{
		          label: '全部状态',
		          value: 0
		        },
		        {
		          label: '未支付',
		          value: 1
		        },
		        {
		          label: '已支付',
		          value: 2
		        },
		        {
		          label: '退款中',
		          value: 2
		        },
		        {
		          label: '已退款',
		          value: 2
		        },
	    	],
	    	bankCardLists:[
    		  {
	          name: 'T0结算',
	          state: '正常' ,
	          rate: '1',
	          minSum: '0.01',
	          maxSum: '3000:00' ,
	          md5Key: '1:00' ,
	          signTime: '2018-03-17 00:00:00' ,
	          expireTime: '2019-03-17 00:00:00' 
	        },
	        {
	          name: 'D0结算',
	          state: '正常' ,
	          rate: '2',
	          minSum: '100:00',
	          maxSum: '1000:00' ,
	          md5Key: '0.02' ,
	          signTime: '2018-03-17 00:00:00' ,
	          expireTime: '2019-03-17 00:00:00' 
	        },
	        {
	          name: 'T1结算',
	          state: '正常' ,
	          rate: '1',
	          minSum: '30:00',
	          maxSum: '8700:00' ,
	          md5Key: '0.50' ,
	          signTime: '2018-03-17 00:00:00' ,
	          expireTime: '2019-03-17 00:00:00' 
	        },
	        {
	          name: 'T1结算',
	          state: '正常' ,
	          rate: '1',
	          minSum: '1:00',
	          maxSum: '4500:00' ,
	          md5Key: '0.05' ,
	          signTime: '2018-03-17 00:00:00' ,
	          expireTime: '2019-03-17 00:00:00' 
	        },
	        {
	          name: 'T0结算',
	          state: '正常' ,
	          rate: '2',
	          minSum: '260:00',
	          maxSum: '8700:00' ,
	          md5Key: '0.80' ,
	          signTime: '2018-03-17 00:00:00' ,
	          expireTime: '2019-03-17 00:00:00' 
	        }
	    	],
	    	bankTitles:[
	    		"创建时间",
	    		"商户名称",
	    		"平台订单号",
	    		"商户订单号",
	    		"交易金额",
	    		"手续费",
	    		"类型",
	    		"状态",
	    		"操作"
	    	]
		} 
	}
}
</script>

<style scoped>
	.oderQuery-continer{
		padding:20px 15px;
	}
	.oderQuery-box{
		background: #F0F0F0;
		padding: 20px 20px;
		zoom:1;
	}
	.oderQuery-box:after{
		display: block;
	    visibility: hidden;
	    clear: both;
	    height:0;
	    content: ".";
	}
	.input-value{
		margin-right: 30px;
		margin-bottom: 30px;
	}
	.input-value input{
		width: 280px;
	}
	.checkBtn{
		margin-right: 10px;
	}
	.lotNotice{
		margin: 30px 0;
	}
	.list-content{
		width: 2099px;
		margin-top: 50px;
	}
	.input-checkbox{

	}
	.detailBtn{
		width: 80px;
		height:50px;
		line-height: 50px;
		border: none;
		color:#fff;
		background: #009688;
	}
	.list-content{width: 2499px;}
	li:nth-child(4){
		width: 250px;
	}
	li:nth-child(5){
		width: 250px;
	}
	li:nth-child(6){
		width: 550px;
	}
	li:nth-child(7){
		width: 300px;
	}
	li:last-child{
		width: 300px;
	}
	h3:nth-child(4){
		width: 250px;
	}
	h3:nth-child(5){
		width: 250px;
	}
	h3:nth-child(6){
		width: 550px;
	}
	h3:nth-child(7){
		width: 300px;
	}
	h3:last-child{
		width: 300px;
	}

</style>