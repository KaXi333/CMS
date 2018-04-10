<template>
	<div class="changePass-continer">
		<div class="changePass-border">
			<div class="input-box">
				<h3 class="input-name">名称</h3>
				<div class="input-value"><input v-model="userModel" type="text" placeholder="请输入名称"></div>
			</div>
			<div class="input-box">
				<h3 class="input-name">邮箱</h3>
				<div class="input-value"><input v-model="usernameModel" type="email" placeholder="请输入邮箱"></div>
			</div>
			<div class="input-box">
				<h3 class="input-name">密码</h3>
				<div class="input-value"><input v-model="userpasswordModel" type="password" placeholder="请输入密码"></div>
			</div>
			<div class="input-box">
				<h3 class="input-name">确认密码</h3>
				<div class="input-value"><input v-model="conuserpasswordModel" type="password" placeholder="请输入确认密码"></div>
			</div>
			<div class="commit-btn commit-box">
				<button class="button-tab button-tab-bc" @click="addAdmin">立即提交</button>
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
	},
	methods:{
	}
}
</script>

<style scoped>
	.changePass-border{
		padding:0 30px;
	}

</style>