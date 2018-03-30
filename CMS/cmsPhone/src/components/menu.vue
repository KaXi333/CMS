<template>
	<transition name="menu">
	   <div class="sidemenu-box" >
		   <div @click="chooseMeunBtn(index)"  v-for="(menu,index) in menuList">
	        <h3 class="sidemenu-title">{{menu.title}}</h3>
	        <ul>
	        	    <li class="sidemenu-list" v-for="item in menu.list"><a>{{item.name}}</a></li>
	        </ul>
	      </div>
	   </div>
  </transition>
</template>

<script>
export default {
	methods:{
		chooseMeunBtn(index){
			this.hasActive=true
		}
	},
	data () {
	    return {
	    	hasActive:false,
	    	menuList:[
	    		{
	    			title:"后台首页",
	    			list:[
	    			]
	    		},
	    		{
	    			title:"我的面板",
	    			list:[
		    			{
			              name: '账户信息'
			            },
			            {
			              name: '修改密码'
			            },
			            {
			              name: '资金管理'
			            }
	    			]
	    		},
	    		{
	    			title:"公告信息",
	    			list:[
	    			]
	    		},
	    		{
	    			title:"银行卡管理",
	    			list:[
		    			{
			              name: '添加银行卡'
			            },
			            {
			              name: '银行卡列表'
			            }
	    			]
	    		},
	    		{
	    			title:"业务管理",
	    			list:[
		    			{
			              name: '收款业务'
			            },
			            {
			              name: '贷款业务'
			            }
	    			]
	    		}
	    	]	
	    }
	}  
}
</script>

<style scoped>
	.sidemenu-box{
		width: 66%;
		background: #393D49;
		font-size: 30px;
		line-height: 80px;
		color:#c2c2c2;
		position: fixed;
		top:100px;
		right: 0;
	}
	.sidemenu-title{
		height:80px;
		padding-left:50px;
	}
	.sidemenu-list{
		height:80px;
		background: #23262E;
		padding-left: 90px;
	}
	.menu-enter-active {
	  transition: all .5s ease;
	}
	.menu-leave-active {
	  transition: all .3s ease;
	}
	.menu-enter {
	  transform: translateX(66%);
	}
	.menu-leave-to {
	  transform: translateX(66%);
	}

</style>