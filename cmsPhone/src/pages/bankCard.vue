<template>
	<div class="changePass-continer">
		<div class="changePass-border">
			<div class="changePass-box">
				<h3 class="changePass-name">账户名</h3>
				<div class="changePass-value"><input type="text" placeholder="输入银行账户名"></div>
			</div>
			<div class="changePass-box">
				<h3 class="changePass-name">银行账户</h3>
				<div class="changePass-value"><input type="text" placeholder="输入银行账户"></div>
			</div>
			<div class="changePass-box">
				<h3 class="changePass-name">开户行</h3>
				<div class="changePass-value"></div>
			</div>
			<div class="changePass-box">
				<h3 class="changePass-name">开户所在地</h3>
				<div class="changePass-value"></div>
			</div>
			<div class="changePass-box">
				<h3 class="changePass-name">开户网点</h3>
				<div class="changePass-value"></div>
			</div>
			<div class="changePass-box">
				<h3 class="changePass-name">备注</h3>
				<div class="changePass-value"></div>
			</div>
			<div class="changePass-btn changePass-box">
				<button class="changePass-tab changePass-tab-bc">立即提交</button>
			<button class="changePass-tab">重置</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
	    return {
	    	
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
	}
	.changePass-value{
		float:left;
		height: 60px;
		line-height: 60px;
		font-size: 30px;
	}
	.changePass-value input{
		height: 60px;
		padding-left: 16px;
		width: 400px;
		outline: none;
	}
	.changePass-btn{
		padding-left: 210px;
		padding-top: 30px;
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