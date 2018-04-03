<template>
	<div class="changePass-continer">
		<div class="changePass-border">
			<div class="changePass-box">
				<h3 class="changePass-name">名称</h3>
				<div class="input-value"><input type="password" placeholder="请输入名称"></div>
			</div>
			<div class="changePass-box">
				<h3 class="changePass-name">邮箱</h3>
				<div class="input-value"><input type="password" placeholder="请输入邮箱"></div>
			</div>
			<div class="changePass-box">
				<h3 class="changePass-name">密码</h3>
				<div class="input-value"><input type="password" placeholder="请输入密码"></div>
			</div>
			<div class="changePass-box">
				<h3 class="changePass-name">确认密码</h3>
				<div class="input-value"><input type="password" placeholder="请输入确认密码"></div>
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