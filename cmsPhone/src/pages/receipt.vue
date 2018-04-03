<template>
	<div class="rec-pay-continer">
		<h1 class="rec-pay-title">支付产品</h1>
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
	data () {
	    return {
	    	bankCardLists:[
    		  {
	          name: '支付宝H5',
	          state: '正常' ,
	          rate: '2.2%',
	          minSum: '0.01',
	          maxSum: '3000:00' ,
	          md5Key: '7a3febe0-3fcc-3a28-bdab-c29438888d12' ,
	          signTime: '2018-03-17 00:00:00' ,
	          expireTime: '2019-03-17 00:00:00' 
	        },
	        {
	          name: 'QQH5支付',
	          state: '正常' ,
	          rate: '2.2%',
	          minSum: '0.01',
	          maxSum: '1000:00' ,
	          md5Key: '7a3febe0-3fcc-3a28-bdab-c29438888d12' ,
	          signTime: '2018-03-17 00:00:00' ,
	          expireTime: '2019-03-17 00:00:00' 
	        },
	        {
	          name: '网银支付',
	          state: '正常' ,
	          rate: '0.4%',
	          minSum: '0.01',
	          maxSum: '8700:00' ,
	          md5Key: '7a3febe0-3fcc-3a28-bdab-c29438888d12' ,
	          signTime: '2018-03-17 00:00:00' ,
	          expireTime: '2019-03-17 00:00:00' 
	        },
	        {
	          name: '微信扫码支付',
	          state: '正常' ,
	          rate: '1%',
	          minSum: '0.01',
	          maxSum: '4500:00' ,
	          md5Key: '7a3febe0-3fcc-3a28-bdab-c29438888d12' ,
	          signTime: '2018-03-17 00:00:00' ,
	          expireTime: '2019-03-17 00:00:00' 
	        },
	        {
	          name: '微信H5支付',
	          state: '正常' ,
	          rate: '0.4%',
	          minSum: '0.01',
	          maxSum: '8700:00' ,
	          md5Key: '7a3febe0-3fcc-3a28-bdab-c29438888d12' ,
	          signTime: '2018-03-17 00:00:00' ,
	          expireTime: '2019-03-17 00:00:00' 
	        },
	        {
	          name: '微信H5通道2',
	          state: '正常' ,
	          rate: '1%',
	          minSum: '0.01',
	          maxSum: '4500:00' ,
	          md5Key: '7a3febe0-3fcc-3a28-bdab-c29438888d12' ,
	          signTime: '2018-03-17 00:00:00' ,
	          expireTime: '2019-03-17 00:00:00' 
	        }
	    	],
	    	bankTitles:[
	    		"名称",
	    		"状态",
	    		"费率(%)",
	    		"单笔最小交易金额",
	    		"单笔最大交易金额",
	    		"md5秘钥",
	    		"签约时间",
	    		"到期时间"
	    	]
		} 
	}
}
</script>

<style scoped>
	.rec-pay-continer{
		padding:0 15px;
	}
	.rec-pay-title{
		height: 90px;
		line-height: 90px;
		font-size: 32px;
		border-bottom: 1px solid  #E0E0E0;
		padding-left: 20px;
	}
	.list-content{width: 2099px;}
	li:nth-child(2){
		width: 120px;
	}
	li:nth-child(3){
		width: 120px;
	}
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
	h3:nth-child(2){
		width: 120px;
	}
	h3:nth-child(3){
		width: 120px;
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