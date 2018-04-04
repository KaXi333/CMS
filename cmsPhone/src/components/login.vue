<template>
	<div class="changePass-continer">
		<div class="changePass-border">
			<div class="changePass-box">
				<h3 class="changePass-name">用户名</h3>
				<div class="input-value"><input v-model="usernameModel" type="email" placeholder="邮箱"></div>
				<span class="g-form-error">{{userNameerrorText}}</span>
			</div>
			<div class="changePass-box">
				<h3 class="changePass-name">密码</h3>
				<div class="input-value"><input v-model="passwordModel" type="password" placeholder="密码"></div>
				<span class="g-form-error">{{passworderrorText}}</span>
			</div>
			<div class="changePass-btn changePass-box">
				<button class="changePass-tab changePass-tab-bc" @click="loginFn">登录</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
	    return {
	    	usernameModel:'',
        passwordModel:'',
        userNameerrorText:'',
        passworderrorText:'',
        userInformation:[
	        {
	        	userName:"960178541@qq.com",
		        password:"123456"
	        } 
        ]
		} 
	},
	methods:{
		loginFn(){
			//console.log(localStorage.getItem('userName'))
			if(this.usernameModel!=this.userInformation[0].userName){
				this.passworderrorText=''
				this.userNameerrorText='电子邮箱不正确'
			}else if(this.passwordModel!=this.userInformation[0].password){
				this.userNameerrorText=''
				this.passworderrorText='密码错误'
			}else{
				//localStorage.setItem('userName',this.usernameModel)
				//localStorage.setItem('password',this.passwordModel)
				this.$emit('on-change')
			}
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
		width: 350px;
		border: none;
		display: block;
	}
	.changePass-tab{
		width: 376px;
	}
	.changePass-border{
		padding:0 20px;
		padding-top: 150px;
	}
	.changePass-box{
		margin-bottom: 65px;
	}
	.changePass-name{
		padding: 5px 0;
	  width: 100px ;
		float: left;
		height: 60px;
		line-height: 60px;
		font-size: 30px;
		margin-right: 40px;
		text-align: right;
	}
	.changePass-btn{
		padding-left: 140px;
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