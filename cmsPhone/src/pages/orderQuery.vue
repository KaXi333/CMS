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
						<h4 class="list-title" v-for="(item,index) in bankTitles">{{item}}</h4>
					</div>
					<mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" ref="loadmore">
				    <div class="list-value-box" >
							<div class="list-value" v-for="(item,index) in bankCardLists">
								<ul @click="checkDetailBtn(index)" class="clearFloat">
									<li class="list-item list-item-num">{{index+1}}</li>
									<li class="list-item list-item-tit">
										<span>{{item.rate}}</span>
										<span class="list-item-time">{{'('+item.name+')'}}</span>
										<i class="iconfont" :class="[index===nowIndex?'icon-xiaosanjiaoup':'icon-sanjiao']"></i>
									</li>
								</ul>
								<transition name="orderList">
								<div v-show="index===nowIndex" class="list-item-detail-box">
									<div class="list-item-detail clearFloat">
										<p class="list-item-name">创建时间</p>
										<p class="list-item-value">{{item.name}}</p>
									</div>
									<div class="list-item-detail clearFloat">
										<p class="list-item-name">商户名称</p>
										<p class="list-item-value">{{item.state}}</p>
									</div>
									<div class="list-item-detail clearFloat">
										<p class="list-item-name">平台订单号</p>
										<p class="list-item-value">{{item.rate}}</p>
									</div>
									<div class="list-item-detail clearFloat">
										<p class="list-item-name">商户订单号</p>
										<p class="list-item-value">{{item.minSum}}</p>
									</div>
									<div class="list-item-detail clearFloat">
										<p class="list-item-name">交易金额</p>
										<p class="list-item-value">{{item.maxSum}}</p>
									</div>
									<div class="list-item-detail clearFloat">
										<p class="list-item-name">手续费</p>
										<p class="list-item-value">{{item.md5Key}}</p>
									</div>
									<div class="list-item-detail clearFloat">
										<p class="list-item-name">类型</p>
										<p class="list-item-value">{{item.signTime}}</p>
									</div>
									<div class="list-item-detail clearFloat">
										<p class="list-item-name">状态</p>
										<p class="list-item-value">{{item.expireTime}}</p>
									</div>
									<div class="list-item-detail clearFloat">
										<p class="list-item-name">付款时间</p>
										<p class="list-item-value">{{item.payTime}}</p>
									</div>
								</div>
							</transition>
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
		//点击展开详情
		checkDetailBtn(index){
			if(this.nowIndex===index){
				this.nowIndex=''
			}else{
				this.nowIndex=index
			}
		},
		//监听下拉状态
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
	    	nowIndex:'',
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
	    		"序号",
	    		"平台订单号+日期"
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
	/*查询结果列表详情动画*/
	.orderList-enter-active {
	  transition: all 0.7s ease;
	}
	.orderList-enter {
	  transform: translateX(600px);
	}
	/*查询页面样式*/
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
	.lotNotice{
		margin: 30px 0;
		padding:0 15px;
	}
	/*查询页面详情样式*/
	.icon-xiaosanjiaoup,.icon-sanjiao{
    line-height: 80px;
    color:#009688;
    margin-right: 10px;
    font-size: 60px;
    float: right;
  }
	

</style>