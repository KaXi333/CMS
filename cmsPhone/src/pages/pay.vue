<template>
	<div class="rec-pay-continer">
		<h1 class="rec-pay-title">提现产品</h1>
		<check-list :listTitleslots="receiptTitles" :listslots="bankCardLists" :tilteslots="bankTitles"></check-list>
	</div>
</template>

<script>
import checkList from '../components/checkList'
export default {
	components:{
		checkList
	},
	data () {
	    return {
	    	bankCardLists:[
    		  {
	          name: 'T0结算',
	          state: '正常' ,
	          rate: '1',
	          minSum: '0.01',
	          maxSum: '3000:00' ,
	          md5Key: '7a3febe0-3fcc-3a28-bdab-c29438888d12' ,
	          signTime: '2018-03-17 00:00:00' ,
	          expireTime: '2019-03-17 00:00:00' 
	        },
	        {
	          name: 'D0结算',
	          state: '正常' ,
	          rate: '2',
	          minSum: '100:00',
	          maxSum: '1000:00' ,
	          md5Key: '7a3febe0-3fcc-3a28-bdab-c29438888d12' ,
	          signTime: '2018-03-17 00:00:00' ,
	          expireTime: '2019-03-17 00:00:00' 
	        },
	        {
	          name: 'T1结算',
	          state: '正常' ,
	          rate: '1',
	          minSum: '30:00',
	          maxSum: '8700:00' ,
	          md5Key: '7a3febe0-3fcc-3a28-bdab-c29438888d12' ,
	          signTime: '2018-03-17 00:00:00' ,
	          expireTime: '2019-03-17 00:00:00' 
	        },
	        {
	          name: 'T1结算',
	          state: '正常' ,
	          rate: '1',
	          minSum: '1:00',
	          maxSum: '4500:00' ,
	          md5Key: '7a3febe0-3fcc-3a28-bdab-c29438888d12' ,
	          signTime: '2018-03-17 00:00:00' ,
	          expireTime: '2019-03-17 00:00:00' 
	        },
	        {
	          name: 'T0结算',
	          state: '正常' ,
	          rate: '2',
	          minSum: '260:00',
	          maxSum: '8700:00' ,
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
	    		"银行账户+日期"
	    	]
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