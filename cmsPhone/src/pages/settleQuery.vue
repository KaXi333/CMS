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
						<h3 class="list-title" v-for="(item,index) in bankTitles">{{item}}</h3>
					</div>
					<div class="list-value-box">
						<div class="list-value" v-for="(item,index) in bankCardLists">
							<ul class="clearFloat">
								<li class="list-item">{{item.name}}</li>
								<li class="list-item">{{item.state}}</li>
								<li class="list-item">{{item.rate}}</li>
								<li class="list-item">{{item.minSum}}</li>
								<li class="list-item">{{item.maxSum}}</li>
								<li class="list-item">{{item.md5Key}}</li>
								<li class="list-item">{{item.signTime}}</li>
								<li class="list-item">{{item.expireTime}}</li>
								<li class="list-item">{{item.payTime}}</li>
								<li class="list-item">{{item.checkTime}}</li>
								<li class="list-item">{{item.endTime}}</li>
								<li class="list-item">{{item.zhPlace}}</li>
								<li class="list-item">{{item.khwg}}</li>
								<li class="list-item">{{item.jystate}}</li>
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
	    	bankCardLists:[
    		  {
	          name: '2018-04-04 15:35:31',
	          state: '2018030723045530877' ,
	          rate: '吴遵林',
	          minSum: '6217007200050257412',
	          maxSum: 'D0结算' ,
	          md5Key: '1:00' ,
	          signTime: '1:00' ,
	          expireTime: '审核未通过',
	          payTime: '2019-03-17 00:00:00',
	          checkTime: '2018-03-07 23:05:34',
	          endTime: '2018-03-07 23:05:34',
	          zhPlace: '广东省/深圳市',
	          khwg: '中国建设银行股份有限公司深圳盐田支行',
	          jystate: '成功', 
	        },
	        {
	          name: '2018-04-04 15:35:31',
	          state: '2018030723045530877' ,
	          rate: '吴遵林',
	          minSum: '6217007200050257412',
	          maxSum: 'D0结算' ,
	          md5Key: '1:00' ,
	          signTime: '1:00' ,
	          expireTime: '审核未通过',
	          payTime: '2019-03-17 00:00:00',
	          checkTime: '2018-03-07 23:05:34',
	          endTime: '2018-03-07 23:05:34',
	          zhPlace: '广东省/深圳市',
	          khwg: '中国建设银行股份有限公司深圳盐田支行',
	          jystate: '成功', 
	        }
	    	],
	    	bankTitles:[
	    		"提交时间",
	    		"交易号",
	    		"银行账户名",
	    		"银行账户",
	    		"结算类型",
	    		"金额",
	    		"手续费",
	    		"审核状态",
	    		"商户交易号",
	    		"审核时间",
	    		"完成时间",
	    		"账户所在地",
	    		"开户网关",
	    		"交易状态"
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
		width: 3875px;
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
		width: 300px;
	}
	li:nth-child(2){
		width: 330px;
	}
	li:nth-child(4){
		width: 330px;
	}
	li:nth-child(9){
		width: 400px;
	}
	li:nth-child(10){
		width: 300px;
	}
	li:nth-child(11){
		width: 300px;
	}
	li:nth-child(13){
		width: 500px;
	}
	h3:nth-child(1){
		width: 300px;
	}
	h3:nth-child(2){
		width: 330px;
	}
	h3:nth-child(4){
		width: 330px;
	}
	h3:nth-child(9){
		width: 400px;
	}
	h3:nth-child(10){
		width: 300px;
	}
	h3:nth-child(11){
		width: 300px;
	}
	h3:nth-child(13){
		width: 500px;
	}

</style>