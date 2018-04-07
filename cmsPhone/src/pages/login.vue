<template>
	<div class="login-continer">
		<div class="login-bc"></div>
		<div class="login-border">
			<div class="changePass-box">
				<div class="login-input-value">
					<i class="iconfont icon-dengluyemianyonghuming"></i>
					<input v-model="usernameModel" type="email" placeholder="邮箱">
				</div>
				<span class="g-form-error">{{userNameerrorText}}</span>
			</div>
			<div class="changePass-box">
				<div class="login-input-value">
				<i class="iconfont icon-mima"></i>
				<input v-model="passwordModel" type="password" placeholder="密码">
				</div>
				<span class="g-form-error">{{passworderrorText}}</span>
			</div>
			<div class="login-box">
				<button class="login-btn changePass-tab-bc" @click="loginFn">登录</button>
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
				this.$router.push({path:"indexPage"})
			}
		}
	}
}
</script>

<style scoped>
	.login-continer{
		
	}
	.login-bc{
		background: rgb(50,53,66);
		width: 100%;
		height:100%;
		position: fixed;
		z-index: -10;
	}
  .g-form-error{
  	line-height: 60px;
  	color:#FF0000;
  	font-size: 20px;
  	margin-left: 10px;
  	width: 500px;
		margin: auto;
		display: block;
		height:60px;
  }
  .icon-dengluyemianyonghuming,.icon-mima{
  	font-size: 30px;
  	margin-left: 10px;
  }
	.login-input-value{
		border-radius: 10px;
		padding: 5px;
		float: none;
		width: 500px;
		margin: auto;
		background: #fff;
		height:70px;
	}
	.login-input-value input{
		border: none;
		height:70px;
    padding-left: 16px;
    width: 400px;
    outline: none;
    background: #fff;
    line-height: 60px;
    font-size: 26px;
	}
	.changePass-tab{
		width: 376px;
	}
	.login-border{
		padding:0 20px;
		padding-top: 380px;
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
	.login-box{
		width: 500px;
		margin:auto;
	}
	.login-btn{
		width: 100%;
		font-size: 30px;
		height:80px;
		border-radius: 10px;
		border: none;
	}
	
</style>