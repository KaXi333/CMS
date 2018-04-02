<template>
	<div class="changePass-continer">
		<div class="changePass-select">
			<button class="changePass-tab changePass-tab-bc">修改登录密码</button>
			<button class="changePass-tab">修改支付密码</button>
		</div>
		<div class="changePass-border">
			<div class="changePass-box">
				<h3 class="changePass-name">旧登录密码</h3>
				<div class="changePass-value"><input type="password" placeholder="请输入旧登录密码"></div>
			</div>
			<div class="changePass-box">
				<h3 class="changePass-name">新登录密码</h3>
				<div class="changePass-value"><input type="password" placeholder="请输入新登录密码"></div>
			</div>
			<div class="changePass-box">
				<h3 class="changePass-name">确认新密码</h3>
				<div class="changePass-value"><input type="password" placeholder="请输入确认新登录密码"></div>
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