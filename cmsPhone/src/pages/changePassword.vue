<template>
	<div class="changePass-continer">
		<div class="changePass-select">
			<button class="changePass-tab changePass-tab-bc">修改登录密码</button>
			<button class="changePass-tab">修改支付密码</button>
		</div>
		<div class="changePass-border">
			<div class="changePass-box">
				<h3 class="changePass-name">录密码</h3>
				<div class="input-value"><input type="password" placeholder="请输入旧登录密码"></div>
				<span class="g-form-error">旧密码不正确</span>
			</div>
			<div class="changePass-box">
				<h3 class="changePass-name">新登录密码</h3>
				<div class="input-value"><input type="password" placeholder="请输入新登录密码"></div>
				<span class="g-form-error">两次输入密码不一致</span>
			</div>
			<div class="changePass-box">
				<h3 class="changePass-name">确认新密码</h3>
				<div class="input-value"><input type="password" placeholder="请输入确认新登录密码"></div>
			</div>
			<div class="changePass-btn changePass-box">
				<button class="changePass-tab changePass-tab-bc" >立即提交</button>
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
	.g-form-error{
	  	line-height: 65px;
	  	color:#FF0000;
	  	font-size: 20px;
	  	margin-left: 10px;
	 }
	.input-value{
		border: 1px solid #009688;
		padding: 5px;
	}
	.input-value input{
		width: 280px;
		border: none;
		display: block;
	}
	.changePass-border{
		padding:0 15px;
		padding-top: 60px;
	}
	.changePass-box{
		margin-bottom: 65px;
	}
	.changePass-name{
		padding: 5px 0;
	   width: 160px ;
		float: left;
		height: 60px;
		line-height: 60px;
		font-size: 26px;
		margin-right: 20px;
		text-align: right;
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