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
				<div class="input-value"><input v-model="dateStartValue" @click="openDatePicker" class="date-input" type="text" placeholder="选择起始日期">至&nbsp&nbsp&nbsp<input v-model="dateEndValue" @click="openEndDatePicker" class="date-input" type="text" placeholder="选择结束日期"><i class="iconfont icon-qianjin"></i></div>
				<mt-datetime-picker
			    ref="pickerStart"
			    type="date"
			    @confirm="handleDateConfirm"
			    v-model="pickerDateVisible"
			    year-format="{value} 年"
				  month-format="{value} 月"
				  date-format="{value} 日">
			  </mt-datetime-picker>
			  <mt-datetime-picker
			    ref="pickerEnd"
			    type="date"
			    @confirm="handleEndDateConfirm"
			    v-model="pickerEndDateVisible"
			    year-format="{value} 年"
				  month-format="{value} 月"
				  date-format="{value} 日">
			  </mt-datetime-picker>
			</div>
			<div class="input-box">
				  <h2 class="input-name">支付方式</h2>
					<div class="input-value" @click="handlePayClick"><input v-model="Payvalue" type="text" placeholder="请选择支付方式"><i class="iconfont icon-qianjin"></i></div>
					<mt-popup v-model="popupPayVisible" position="bottom" popup-transition="popup-fade">
						<div class="picker-toolbar">  
	            <span class="mint-select-cancel" @click="mintPayCancelBtn">取消</span>  
	            <span class="mint-select-confirm" @click="mintPayConfirmBtn">确定</span>  
	          </div>  
						<mt-picker :slots="Payslots" @change="onValuesPayChange"></mt-picker>
					</mt-popup>
			</div>
			<div class="input-box">
				  <h2 class="input-name">支付状态</h2>
					<div class="input-value" @click="handlePayStateClick"><input v-model="PayStatevalue" type="text" placeholder="请选择支付方式"><i class="iconfont icon-qianjin"></i></div>
					<mt-popup v-model="popupPayStateVisible" position="bottom" popup-transition="popup-fade">
						<div class="picker-toolbar">  
	            <span class="mint-select-cancel" @click="mintPayStateCancelBtn">取消</span>  
	            <span class="mint-select-confirm" @click="mintPayStateConfirmBtn">确定</span>  
	          </div>  
						<mt-picker :slots="PayStateslots" @change="onValuesPayStateChange"></mt-picker>
					</mt-popup>
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
				<button class="checkBtn" type="" style="width:80px;">批量通知</button>
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
import { formatDate } from '../../static/js/util.js'
export default {
	methods:{
		//checkbox全选反选
		
		//支付方法select框
		onValuesPayChange(picker, values) { 
				this.Payvalue = values[0]
	      console.log(picker) 
	      console.log(values) 
	  },
	  handlePayClick(){
	  	this.popupPayVisible=true
	  },
	  mintPayCancelBtn(){
	  	this.popupPayVisible=false
	  },
	  mintPayConfirmBtn(){
	  	this.popupPayVisible=false
	  },
	  //支付状态select框
	  onValuesPayStateChange(picker, values) { 
				this.PayStatevalue = values[0]
	      console.log(picker) 
	      console.log(values) 
	  },
	  handlePayStateClick(){
	  	this.popupPayStateVisible=true
	  },
	  mintPayStateCancelBtn(){
	  	this.popupPayStateVisible=false
	  },
	  mintPayStateConfirmBtn(){
	  	this.popupPayStateVisible=false
	  },
	  //开始日期选择
	  openDatePicker() {
        this.$refs.pickerStart.open();
    },
	  handleDateConfirm(){
	  	this.dateStartValue=this.formatDate(this.$refs.pickerStart.value)
	  	console.log(this.dateStartValue)
	  },
	  //结束日期选择
	   openEndDatePicker() {
        this.$refs.pickerEnd.open();
    },
    handleEndDateConfirm(){
	  	this.dateEndValue=this.formatDate(this.$refs.pickerEnd.value)
	  	console.log(this.dateEndValue)
	  },
	  formatDate(date){
		   const y = date.getFullYear()
		   let m = date.getMonth() + 1
		   m = m < 10 ? '0' + m : m
		   let d = date.getDate()
		   d = d < 10 ? ('0' + d) : d
		   return y + ' ' + m + ' ' + d
		},
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
	    	Payvalue:"",//支付方式选择值
	    	PayStatevalue:"",//支付状态选择值
	    	popupPayVisible:false,//控制支付方式select显示隐藏
	    	popupPayStateVisible:false,//控制支付状态select显示隐藏
	    	pickerDateVisible:null,//开始日期值
	    	pickerEndDateVisible:null,//结束日期值
	    	dateStartValue:this.formatDate(new Date()),//设置默认起始日期
	    	dateEndValue:this.formatDate(new Date()),//设置默认结束日期
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
	    		"创建时间",
	    		"商户名称",
	    		"平台订单号",
	    		"商户订单号",
	    		"交易金额",
	    		"手续费",
	    		"类型",
	    		"状态",
	    		"付款时间",
	    		"操作"
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