<template>
	<div class="moneyAdmin-continer">
		<div class="select-box">
			<v-selection :selections="chooseTypes"></v-selection>
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
		          label: '收款',
		          value: 0
		        },
		        {
		          label: '付款',
		          value: 1
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

</style>