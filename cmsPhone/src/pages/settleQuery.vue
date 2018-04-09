<template>
	<div class="oderQuery-continer">
		<transition name="oderQuery">
		<div class="oderQuery-box" v-show="!orderListShowContral">
			<div class="input-box">
				<h2 class="input-name">交易号</h2>
				<div class="input-value"><input type="text" placeholder="请输入交易号"></div>
			</div>
			<div class="input-box">
				<h2 class="input-name">商户交易号</h2>
				<div class="input-value"><input type="text" placeholder="请输入商户交易号"></div>
			</div>
			<div class="input-box">
				<h2 class="input-name">商户名称</h2>
				<div class="input-value"><input type="text" placeholder="请输入商户名称"></div>
			</div>
			<div class="input-box">
				<h2 class="input-name">日期</h2>
				<datepicker></datepicker>
			</div>
			<div class="input-box">
				  <h2 class="input-name">审核状态</h2>
					<picker :slots="examinelots"></picker>
			</div>
			<div class="input-box">
				  <h2 class="input-name">交易状态</h2>
					<picker :slots="tradeStateslots"></picker>
			</div>
			<div class="checkBtn-box">
				<button @click="orderCheckListBtn" class="checkBtn longCheckBtn" type="">查询</button>
			</div>
		</div>
		</transition>
		<transition name="oderList">
		<div class="orderCheckList" v-if="orderListShowContral">
			<div class="lotNotice">
				<button @click="orderListBackBtn" class="checkBtn" type="">返回</button>
				<button class="checkBtn" type="">导出</button>
			</div>
			<div class="list-box">
				<div class="list-content">
					<div class="list-title-box">
					  <h3 class="list-title"><input type="checkbox" class="input-checkbox"></h3>
						<h3 class="list-title" v-for="(item,index) in bankTitles">{{item}}</h3>
					</div>
					<div class="list-value-box">
						<div class="list-value" v-for="(item,index) in bankCardLists">
							<ul class="clearFloat">
							  <li class="list-item"><input v-model='checkboxModel' type="checkbox" class="input-checkbox"></li>
								<li class="list-item">{{item.name}}</li>
								<li class="list-item">{{item.state}}</li>
								<li class="list-item">{{item.rate}}</li>
								<li class="list-item">{{item.minSum}}</li>
								<li class="list-item">{{item.maxSum}}</li>
								<li class="list-item">{{item.md5Key}}</li>
								<li class="list-item">{{item.signTime}}</li>
								<li class="list-item">{{item.expireTime}}</li>
								<li class="list-item">{{item.payTime}}</li>
								<li class="list-item"><button class="detailBtn">详情</button></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		</transition>
	</div>
</template>

<script>
import picker from '../components/base/picker'
import datepicker from '../components/base/Datepicker'
export default {
	components:{
		picker,
		datepicker
	},
	methods:{
		//订单查询按钮
		orderCheckListBtn(){
			this.orderListShowContral=!this.orderListShowContral
		},
		//返回按钮
		orderListBackBtn(){
			this.orderListShowContral=!this.orderListShowContral
		}
	},
	data () {
	    return {
	    	orderListShowContral:false,//控制订单查询页列表的显示隐藏
	    	//审核状态参数
	    	examinelots:[
	    		{
	    			flex: 1,
	    			values: ['待审核', '审核通过', '审核未通过'],
	    			textAlign:"center"
	    		}
	    	] ,
	    	//交易状态参数
	    	tradeStateslots:[
	    		{
	    			flex: 1,
	    			values: ['进行中', '成功', '失败'],
	    			textAlign:"center"
	    		}
	    	] ,
	    	checkboxModel:["1","2","4"],
	    	checkboxData:[{
		      id:'1',
		      value:'苹果'
		    },{
		      id:'2',
		      value:'荔枝'
		    },{
		      id:'3',
		      value:'香蕉'
		    },{
		      id:'4',
		      value:'火龙果'
		    },{
		      id:'5',
		      value:'西瓜'
		    }],
	    	bankCardLists:[
    		  {
	          name: '2018-04-04 15:35:31',
	          state: '1770963469' ,
	          rate: 'jjl_201804041535311090',
	          minSum: '343c9d561c317c7662621f9e1c30e004',
	          maxSum: '3000:00' ,
	          md5Key: '1:00' ,
	          signTime: '微信扫码支付' ,
	          expireTime: '未支付',
	          payTime: '2019-03-17 00:00:00'
	        },
	        {
	          name: '2018-04-04 15:35:31',
	          state: '1770963469' ,
	          rate: 'jjl_201804041535311090',
	          minSum: '343c9d561c317c7662621f9e1c30e004',
	          maxSum: '1000:00' ,
	          md5Key: '0.02' ,
	          signTime: '微信扫码支付' ,
	          expireTime: '未支付',
	          payTime: '2019-03-17 00:00:00' 
	        },
	        {
	          name: '2018-04-04 15:35:31',
	          state: '1770963469' ,
	          rate: 'jjl_201804041535311090',
	          minSum: '343c9d561c317c7662621f9e1c30e004',
	          maxSum: '8700:00' ,
	          md5Key: '0.50' ,
	          signTime: '微信扫码支付' ,
	          expireTime: '未支付',
	          payTime: '2019-03-17 00:00:00' 
	        },
	        {
	          name: '2018-04-04 15:35:31',
	          state: '1770963469' ,
	          rate: 'jjl_201804041535311090',
	          minSum: '343c9d561c317c7662621f9e1c30e004',
	          maxSum: '4500:00' ,
	          md5Key: '0.05' ,
	          signTime: '微信扫码支付' ,
	          expireTime: '未支付',
	          payTime: '2019-03-17 00:00:00' 
	        },
	        {
	          name: '2018-04-04 15:35:31',
	          state: '1770963469' ,
	          rate: 'jjl_201804041535311090',
	          minSum: '343c9d561c317c7662621f9e1c30e004',
	          maxSum: '8700:00' ,
	          md5Key: '0.80' ,
	          signTime: '微信扫码支付' ,
	          expireTime: '未支付' ,
	          payTime: '2019-03-17 00:00:00' 
	        }
	    	],
	    	bankTitles:[
	    		"提交时间",
	    		"交易号",
	    		"银行账户名",
	    		"银行账户",
	    		"结算类型",
	    		"手续费",
	    		"金额",
	    		"手续费",
	    		"审核状态",
	    		"交易商户号"
	    	]
		} 
	}
}
</script>

<style scoped>
  /*查询展示动画*/
	.oderQuery-enter-active {
	  transition: all 0.5s ease;
	}
	.oderQuery-leave-active {
	  transition: all 0.5s ease;
	}
	.oderQuery-enter {
	  transform: translateX(-100%);
	}
	.oderQuery-leave-to {
	  transform: translateX(-100%);
	}
	/*查询结果列表动画*/
	.oderList-enter-active {
	  transition: all 1s ease;
	}
	.oderList-leave-active {
	  transition: all 0.5s ease;
	}
	.oderList-enter {
	  transform: translateY(2000PX);
	}
	.oderList-leave-to {
	  transform: translateY(1000PX);
	}
	.oderQuery-box{
		padding:0 30px;
		zoom:1;
	}
	.oderQuery-box:after{
		display: block;
	    visibility: hidden;
	    clear: both;
	    height:0;
	    content: ".";
	}
	.check-input-value{
		margin-right: 30px;
		margin-bottom: 30px;
	}
	.check-input-value input{
		width: 280px;
	}
	.checkBtn{
		margin-right: 50px;
	}
	.longCheckBtn{
		margin:0;
	}
	.mint-datetime-cancel{
		line-height: 70px;
	}
	.date-input{
		width: 185px;
	}
	.orderCheckList{
		padding:0 15px;
	}
	.lotNotice{
		margin: 30px 0;
	}
	.list-content{
		width: 2771px;
		margin-top: 0;
	}
	.detailBtn{
		width: 80px;
		height:50px;
		line-height: 50px;
		border: none;
		font-size: 20px;
		color:#fff;
		background: #009688;
	}
	li:nth-child(1){
		width: 80px;
	}
	li:nth-child(2){
		width: 300px;
	}
	li:nth-child(3){
		width: 200px;
	}
	li:nth-child(4){
		width: 350px;
	}
	li:nth-child(5){
		width: 530px;
	}
	li:nth-child(10){
		width: 300px;
	}
	h3:nth-child(1){
		width: 80px;
	}
	h3:nth-child(2){
		width: 300px;
	}
	h3:nth-child(3){
		width: 200px;
	}
	h3:nth-child(4){
		width: 350px;
	}
	h3:nth-child(5){
		width: 530px;
	}
	h3:nth-child(10){
		width: 300px;
	}

</style>