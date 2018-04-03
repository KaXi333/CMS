<template>
	<div class="changePass-continer">
		<div class="changePass-border">
			<div class="changePass-box">
				<h3 class="changePass-name">账户名</h3>
				<div class="input-value"><input type="text" placeholder="输入银行账户名"></div>
			</div>
			<div class="changePass-box">
				<h3 class="changePass-name">银行账户</h3>
				<div class="input-value"><input type="text" placeholder="输入银行账户"></div>
			</div>
			<div class="changePass-box">
				<h3 class="changePass-name">开户行</h3>
					<v-selection :selections="chooseTypes"></v-selection>
			</div>
			<div class="changePass-box">
				<h3 class="changePass-name">开户所在地</h3>
				<v-selection :selections="chooseLocal"></v-selection>
				<v-selection :selections="chooseCity"></v-selection>
			</div>
			<div class="changePass-box">
				<h3 class="changePass-name">开户网点</h3>
				<div class="input-value">
					<input type="text" placeholder="选择开户网点">
				</div>
			</div>
			<div class="changePass-box">
				<h3 class="changePass-name">备注</h3>
				<div class="input-value"><input type="text" placeholder="输入备注，比如：结算银行卡"></div>
			</div>
			<div class="changePass-btn changePass-box">
				<button class="changePass-tab changePass-tab-bc">立即提交</button>
			<button class="changePass-tab">重置</button>
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
		          label: '选择开户行',
		          value: 0
		        },
		        {
		          label: '中国工商银行',
		          value: 1
		        },
		        {
		          label: '中国农业银行',
		          value: 2
		        },
		        {
		          label: '中国银行',
		          value: 3
		        },
		        {
		          label: '中国建设银行',
		          value: 4
		        }
	    	],
	    	chooseLocal:[
	    		{
		          label: '选择省份',
		          value: 0
		        },
		        {
		          label: '北京市',
		          value: 1
		        },
		        {
		          label: '上海市',
		          value: 2
		        },
		        {
		          label: '广东省',
		          value: 3
		        },
		        {
		          label: '湖南省',
		          value: 4
		        },
		        {
		          label: '江苏省',
		          value: 5
		        },
		        {
		          label: '安徽省',
		          value: 6
		        }
	    	],
	    	chooseCity:[
	    		{
		          label: '选择城市',
		          value: 0
		        },
		        {
		          label: '深圳市',
		          value: 1
		        },
		        {
		          label: '广州市',
		          value: 2
		        },
		        {
		          label: '佛山省',
		          value: 3
		        },
		        {
		          label: '东莞省',
		          value: 4
		        },
		        {
		          label: '中山省',
		          value: 5
		        }
	    	]
		} 
	}
}
</script>

<style scoped>
	
	.changePass-border{
		padding:0 30px;
		padding-top: 60px;
	}
	.changePass-box{
		margin-bottom: 65px;
	}
	.changePass-name{
		width: 170px;
		float: left;
		height: 60px;
		line-height: 60px;
		font-size: 30px;
		margin-right: 40px;
		text-align: right;
	}
	.changePass-btn{
		padding-left: 210px;
	}
	.changePass-box:after{
		display: block;
		visibility: hidden;
		clear: both;
		height:0;
		content: ".";
	}
	.changePass-box{
		zoom:1;
	}

</style>