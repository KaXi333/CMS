<template>
	<div class="rec-pay-continer">
		<check-list :listTitleslots="receiptTitles" :listslots="bankCardLists" :tilteslots="bankTitles" :showTitle="showTitles"></check-list>
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
	          name: '微信H5通道2',
	          state: '正常' ,
	          rate: '2018-03-17 00:00:00'
	        },
	        {
	          name: '微信H5通道2',
	          state: '正常' ,
	          rate: '2018-03-17 00:00:00' 
	        },
	        {
	          name: '微信H5通道2',
	          state: '正常' ,
	          rate: '2018-03-17 00:00:00'
	        },
	        {
	          name: '微信H5通道2',
	          state: '正常' ,
	          rate: '2018-03-17 00:00:00' 
	        },
	        {
	          name: '微信H5通道2',
	          state: '正常' ,
	          rate: '2018-03-17 00:00:00'
	        },
	        {
	          name: '微信H5通道2',
	          state: '正常微信H5通道2微信H5通道' ,
	          rate: '2018-03-17 00:00:00'
	        }
	    	],
	    	receiptTitles:{
	    		name:"名称",
	    		state:"状态",
	    		rate:"费率(%)"
	    	},
	    	bankTitles:[
	    		"序号",
	    		"标题"
	    	],
	    	showTitles:[
	    		"name",
	    		"rate"
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