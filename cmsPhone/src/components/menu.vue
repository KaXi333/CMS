<template>
	<transition name="menu">
	   <div class="sidemenu-box" >
		   <div @click="chooseMeunBtn(index)"  v-for="(menu,index) in menuList">
	        <h3 @click="goPathTo(menu.list!='',menu.title,menu.path)" class="sidemenu-title" :class="{chooMenuList:index===nowIndex}">{{menu.title}}<i v-if="menu.list!=''" class="iconfont" :class="[index===nowIndex?'icon-xiaosanjiaoup':'icon-sanjiao']"></i></h3>
	        <transition name="menuList">
		        <ul v-show="index===nowIndex">
		        	    <router-link :key="item.path" :to="{path:item.path}" tag="li" class="sidemenu-list" v-for="item in menu.list" @click.native="goPath(item.name)">{{item.name}}</router-link>
		        </ul>
	        </transition>
	      </div>
	   </div>
  </transition>
</template>

<script>
export default {
	methods:{
		chooseMeunBtn(index){
			this.nowIndex=index
		},
		goPathTo(state,tabCont,pathlink){
			if(!state){
				this.$emit('on-goPath',tabCont)
				this.$router.push({path:pathlink})
			}
		},
		goPath(tabCont){
			this.$emit('on-goPath',tabCont)
		}
	},
	data () {
	    return {
	    	nowIndex:0,
	    	menuList:[
	    		{
	    			title:"后台首页",
	    			path:"/",
	    			list:[
	    			]
	    		},
	    		{
	    			title:"我的面板",
	    			list:[
		    			{
			              name: '账户信息',
			              path:"countInforPage"
			            },
			            {
			              name: '修改密码',
			              path:"changePwPage"
			            },
			            {
			              name: '资金管理',
			              path:"moneyAdminPage"
			            }
	    			]
	    		},
	    		{
	    			title:"公告信息",
	    			path:"/",
	    			list:[
	    			]
	    		},
	    		{
	    			title:"银行卡管理",
	    			list:[
		    			{
			              name: '添加银行卡',
			              path:"bankCardPage"
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
	    		},
	    		{
	    			title:"订单管理",
	    			list:[
		    			{
			              name: '订单查询'
			            },
			            {
			              name: '汇总查询'
			            }
	    			]
	    		},
	    		{
	    			title:"管理员",
	    			list:[
		    			{
			              name: '新增管理员'
			            },
			            {
			              name: '管理员列表'
			            }
	    			]
	    		},
	    		{
	    			title:"结算管理",
	    			list:[
		    			{
			              name: '申请结算'
			            },
			            {
			              name: '批量申请'
			            },
			            {
			              name: '结算查询'
			            }
	    			]
	    		},
	    		{
	    			title:"安全中心",
	    			list:[
	    			]
	    		}
	    	]	
	    }
	}  
}
</script>

<style scoped>
	.icon-sanjiao,.icon-xiaosanjiaoup{
		float: right;
		margin-right: 20px;
		font-size:50px;
	}
	.sidemenu-box{
		width: 66%;
		background: #393D49;
		font-size: 30px;
		line-height: 80px;
		color:#c2c2c2;
		position: fixed;
		top:100px;
		right: 0;
		height:100%;
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
	.chooMenuList{
		background: #009688;
	}
	.menu-enter-active {
	  transition: all 0.5s ease;
	}
	.menu-leave-active {
	  transition: all 0.5s ease;
	}
	.menu-enter {
	  transform: translateX(66%);
	}
	.menu-leave-to {
	  transform: translateX(100%);
	}
	.menuList-enter-active {
	  transition: all 0.7s ease;
	}
	.menuList-enter {
	  transform: translateX(300px);
	}

</style>