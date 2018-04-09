<template>
	<div class="login-continer">
		<div class="login-bc"></div>
		<div class="login-border">
			<h1>
				<strong>登录商户</strong>
				<em>Management System</em>
			</h1>
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
			<div class="changePass-box">
				<div class="login-input-value">
					<div class="yzm-box">
						<i class="iconfont icon-mima"></i>
						<input class="yzm-input" type="text" placeholder="验证码">
					</div>
					<div class="code" @click="refreshCode">
						<identify :identifyCode="identifyCode" :contentWidth="contentWidth" :contentHeight="contentHeight"></identify>
					</div>
				</div>
				<span class="g-form-error"></span>
			</div>
			<div class="login-box">
				<button class="login-btn changePass-tab-bc" @click="loginFn">立即登录</button>
			</div>
			<div><span>English</span>|<span>中文</span></div>
			<div class="footer"><p>© 2016-2017 版权所有</p></div>
		</div>
	</div>
</template>

<script>
import identify from '../components/identify'
export default {
	components:{
		identify
	},
	data () {
	    return {
	    	usernameModel:'',
        passwordModel:'',
        userNameerrorText:'',
        passworderrorText:'',
        identifyCodes:"1234567890",
        identifyCode:'',
        contentWidth:120,
        contentHeight:40,
        userInformation:[
	        {
	        	userName:"960178541@qq.com",
		        password:"123456"
	        } 
        ]
		} 
	},
	mounted(){
		this.identifyCode="",
		this.makeCode(this.identifyCodes,4)
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
		},
		randomNum(min, max) {
		return Math.floor(Math.random() * (max - min) + min)
		},
		refreshCode(){
			this.identifyCode="",
			this.makeCode(this.identifyCodes,4)
		},
		makeCode(o, l) {
			for (let i = 0; i < l; i++) {
				this.identifyCode += this.identifyCodes[
				this.randomNum(0, this.identifyCodes.length)
				];
			}
			console.log(this.identifyCode)
		}
	}
}
</script>

<style scoped>
	.login-continer{
		
	}
	.login-bc{
		background: rgb(20, 20, 20);
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
  	font-size: 34px;
  	margin-left: 10px;
  	color: #006030;
  }
	.login-input-value{
		border-radius: 10px;
		padding: 5px;
		float: none;
		width: 600px;
		margin: auto;
		background: #45bda6;
		height:70px;
	}
	.login-input-value input{
		border: none;
		height:70px;
    padding-left: 16px;
    width: 450px;
    outline: none;
    background: #45bda6;
    line-height: 60px;
    font-size: 26px;
    color:#fff;
	}
	.changePass-tab{
		width: 376px;
	}
	.login-border{
		padding:0 20px;
		padding-top: 30%;
	}
	.login-border h1{
		font-size: 34px;
    font-weight: bold;
    text-align: center;
    color: #45bda6;
    text-shadow: 0 0 1px #0e947a;
    margin-bottom: 50px;
	}
	.login-border h1 strong{
		display: block;
		font-size: 50px;
		margin-bottom: 10px;
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
	.yzm-input{
		width: 250px !important;
	}
	.yzm-box{
		width: 350px;
		float: left;
	}
	.code{
		float:right;
		height:100%;
		width: 250px;
	}
	.s-canvas{
		width: 250px;
	}
	.login-box{
		width: 80%;
		margin:auto;
	}
	.login-btn{
		width: 100%;
		font-size: 32px;
		height:80px;
		color:#fff;
		border-radius: 10px;
		border: none;
		background: #FF5722;
	}
	.footer p{
		color: #53c6b0;
    font-size: 30px;
    text-align: center;
    margin: 50px 0;
	}
	input::-webkit-input-placeholder {  
　　color:#fff;font-size:28px;
　}
	
</style>