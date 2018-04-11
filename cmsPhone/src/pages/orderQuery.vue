<template>
	<div class="oderQuery-continer">
		<transition name="oderQuery">
		<div class="oderQuery-box" v-show="!orderListShowContral">
			<div class="input-box">
				<h2 class="input-name">平台订单号</h2>
				<div class="input-value"><input type="text" placeholder="请输入平台订单号"></div>
			</div>
			<div class="input-box">
				<h2 class="input-name">订单号</h2>
				<div class="input-value"><input type="text" placeholder="请输入订单号"></div>
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
				  <h2 class="input-name">支付方式</h2>
					<picker :slots="Payslots"></picker>
			</div>
			<div class="input-box">
				  <h2 class="input-name">支付状态</h2>
					<picker :slots="PayStateslots"></picker>
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
					<mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" ref="loadmore">
				    <div class="list-value-box" :style="{height:listH}" >
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
									<li class="list-item">{{item.payTime}}</li></li>
								</ul>
							</div>
						</div>
				  </mt-loadmore>
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
		},
		handleBottomChange(status) {
      this.bottomStatus = status
      console.log(this.bottomStatus)
    },
    loadBottom() {
		  // 加载更多数据
		  setTimeout(() => {
         let lastValue = this.bankCardLists[this.bankCardLists.length - 1];
         if (this.bankCardLists.length < 40) {
           for (let i = 1; i <= 10; i++) {
             this.bankCardLists.push(lastValue);
           }
         } else {
           this.allLoaded = true;
         }
         console.log(this.bankCardLists)
         this.$refs.loadmore.onBottomLoaded();
       }, 1500);
		}
	},
	data () {
	    return {
	    	bottomStatus: '',
	    	listH:'',
	    	orderListShowContral:false,//控制订单查询页列表的显示隐藏
	    	Payslots:[
	    		{
	    			flex: 1,
	    			values: ['微信H5支付', '网银支付', 'QQ扫码支付', 'QQH5支付','支付宝H5','微信扫码支付'],
	    			textAlign:"center"
	    		}
	    	] ,
	    	PayStateslots:[
	    		{
	    			flex: 1,
	    			values: ['未支付', '已支付', '退款中', '已退款'],
	    			textAlign:"center"
	    		}
	    	] ,
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
	    		"创建时间",
	    		"商户名称",
	    		"平台订单号",
	    		"商户订单号",
	    		"交易金额",
	    		"手续费",
	    		"类型",
	    		"状态",
	    		"付款时间"
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
		width: 2490px;
		margin-top: 0;
		border:none;
	}
	.list-value-box{
		height:900px;
		overflow: scroll;
	}
	li:nth-child(1){
		width: 300px;
	}
	li:nth-child(2){
		width: 200px;
	}
	li:nth-child(3){
		width: 350px;
	}
	li:nth-child(4){
		width: 530px;
	}
	li:nth-child(9){
		width: 300px;
		border-right:none;
	}
	h3:nth-child(1){
		width: 300px;
	}
	h3:nth-child(2){
		width: 200px;
	}
	h3:nth-child(3){
		width: 350px;
	}
	h3:nth-child(4){
		width: 530px;
	}
	h3:nth-child(9){
		width: 300px;
		border-right:none;
	}

</style>