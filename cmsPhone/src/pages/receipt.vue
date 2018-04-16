<template>
	<div class="rec-pay-continer">
		<h1 class="rec-pay-title">支付产品</h1>
		<check-list :listTitleslots="receiptTitles" :listslots="bankCardLists" :tilteslots="bankTitles" :showTitle="showTitles"></check-list>
	</div>
</template>

<script>
import VSelection from '../components/base/selection'
import checkList from '../components/checkList'
export default {
	components:{
		VSelection,
		checkList
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
	    	receiptTitles:{
	    		name:"名称",
	    		state:"状态",
	    		rate:"费率(%)",
	    		minSum:"单笔最小交易金额",
	    		maxSum:"单笔最大交易金额",
	    		md5Key:"md5秘钥",
	    		signTime:"签约时间",
	    		expireTime:"到期时间"
	    	},
	    	bankTitles:[
	    		"序号",
	    		"名称+签约时间"
	    	],
	    	showTitles:[
	    		"state",
	    		"name"
	    	],
		} 
	}
}
</script>

<style scoped>
	.rec-pay-title{
		height: 90px;
		line-height: 90px;
		font-size: 32px;
		border-bottom: 1px solid  #E0E0E0;
		padding-left: 20px;
	}

</style>