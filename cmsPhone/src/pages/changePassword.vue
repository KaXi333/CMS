<template>
	<div class="changePass-continer">
		<div class="changePass-select">
			<button class="button-tab button-tab-bc">修改登录密码</button>
			<button class="button-tab">修改支付密码</button>
		</div>
		<div class="changePass-border">
			<div class="input-box">
				<h3 class="input-name">登录密码</h3>
				<div class="input-value"><input type="password" placeholder="请输入旧登录密码"></div>
				<!-- <span class="g-form-error">旧密码不正确</span> -->
			</div>
			<div class="input-box">
				<h3 class="input-name">新登录密码</h3>
				<div class="input-value"><input type="password" placeholder="请输入新登录密码"></div>
				<!-- <span class="g-form-error">两次输入密码不一致</span> -->
			</div>
			<div class="input-box">
				<h3 class="input-name">确认新密码</h3>
				<div class="input-value"><input type="password" placeholder="请输入确认新登录密码"></div>
			</div>
			<div class="commit-btn commit-box">
				<button class="button-tab button-tab-bc" >立即提交</button>
			<button class="button-tab">重置</button>
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
	.changePass-border{
		padding:0 15px;
	}

</style>