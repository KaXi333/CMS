<template>
	<div class="contInform-continer">
		<div class="contInform-box" v-for="contInfList in contInformList">
			<h3 class="contInform-title">{{contInfList.title}}</h3>
			<div class="contInfDetail">
				<ul>
					<li class="contInform-list" v-for="item in contInfList.list ">
						<span class="contInform-namer">{{item.name+' :'}}</span>
						<span class="contInform-value">
							<span :class="{countActive:contInfList.title==='资金信息'}">{{item.value}}</span>
							<span v-if="contInfList.title==='资金信息'">(单位：RMB)</span>
						</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
	    return {
	    	contInformList:[
	    		{
	    			title:"账户信息",
	    			list:[
		    			    {
			              name: '商户编号',
			              value:"1"
			            },
			            {
			              name: '名称',
			              value:"960178541"
			            },
			            {
			              name: '邮箱',
			              value:"960178541@qq.com"
			            },{
			              name: '登录IP',
			              value:"116.30.214.215"
			            },
			            {
			              name: '登录时间',
			              value:"2018-04-02 12:49:17"
			            },
			            {
			              name: '上次登录IP',
			              value:"116.30.213.121"
			            },
			            {
			              name: '上次登录时间',
			              value:"2018-04-02 10:14:27"
			            }
	    			]
	    		},
	    		{
	    			title:"资金信息",
	    			list:[
		    			    {
			              name: 'D0余额',
			              value:"5,269.19"
			            },
			            {
			              name: 'T1余额',
			              value:"3,413.68"
			            },
			            {
			              name: 'T1可用余额',
			              value:"3,413.68"
			            },{
			              name: 'T0余额',
			              value:"0.00"
			            }
	    			]
	    		}
	    	]
		}
	} 
}
</script>
<style scoped>
	.contInform-continer{padding: 20px;background: #F0F0F0}
	.contInform-box{background: #fff;border: 1px solid #E0E0E0;border-radius: 10px;}
	.contInform-title{
		height: 90px;
		line-height: 90px;
		font-size: 32px;
		border-bottom: 1px solid  #E0E0E0;
		margin-bottom: 20px;
		padding-left: 20px;
	}
	.contInfDetail{
		margin:20px;
		border: 1px solid #E0E0E0;
	}
	.contInform-list{
		border-bottom: 1px solid #E0E0E0;
		text-align: center;
	}
	.contInform-list span{
		line-height: 60px;
		font-size: 28px;
		padding-left: 20px;
	}
	.contInform-namer{
		border-right: 1px solid #E0E0E0;
		display: block;
		float: left;
		width: 250px;
		color:#8E8E8E;
	}
	.countActive{
		color:red;
		font-weight: bold;
	}
	li:last-child
	{
	 border-bottom: none;
	}
</style>