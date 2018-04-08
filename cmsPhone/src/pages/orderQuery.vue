<template>
	<div class="oderQuery-continer">
		<div class="oderQuery-box" v-show="true">
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
			    ref="picker"
			    type="date"
			    @confirm="handleDateConfirm"
			    v-model="pickerDateVisible"
			    year-format="{value} 年"
				  month-format="{value} 月"
				  date-format="{value} 日">
			  </mt-datetime-picker>
			  <!-- <mt-datetime-picker
			    ref="picker"
			    type="date"
			    @confirm="handleEndDateConfirm"
			    v-model="pickerEndDateVisible"
			    year-format="{value} 年"
				  month-format="{value} 月"
				  date-format="{value} 日">
			  </mt-datetime-picker> -->
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
			<!-- <div class="check-input-value"><input type="text" placeholder="请输入交易号"></div>
			<div class="check-input-value"><input type="text" placeholder="请输入商户交易号"></div>
			<div class="check-input-value"><input type="text" placeholder="请输入商户名称"></div>
			<div class="check-input-value"><input type="text" placeholder="请输入日期"></div> -->
			<!-- <v-selection :selections="payTypes"></v-selection>
			<v-selection :selections="stateTypes"></v-selection> -->
			<div class="checkBtn-box">
				<button class="checkBtn" type="">查询</button>
				<button class="checkBtn" type="">导出</button>
			</div>
		</div>
		<div class="orderCheckList" v-if="false">
			<div class="lotNotice"><button class="checkBtn" type="" style="width:80px;">批量通知</button></div>
			<div class="list-box">
				<div class="list-content">
					<div class="list-title-box">
					  <h3 class="list-title"><input @click="checkedAll" v-model='checked' type="checkbox" class="input-checkbox"></h3>
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
								<li class="list-item"><button class="detailBtn">详情</button></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import VSelection from '../components/base/selection'
import { formatDate } from '../../static/js/util.js'
export default {
	components:{
		VSelection
	},
	methods:{
		//checkbox全选反选
		checkedAll(){
			if(this.checked){
				this.checkboxModel=[];
			}else{
				this.checkboxModel=true;
			}
		},
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
        this.$refs.picker.open();
    },
	  handleDateConfirm(){
	  	this.dateStartValue=this.formatDate(this.pickerDateVisible)
	  	console.log(this.dateStartValue)
	  },
	  //结束日期选择
	   openEndDatePicker() {
        this.$refs.picker.open();
    },
    handleEndDateConfirm(){
	  	this.dateEndValue=this.formatDate(this.$refs.picker.value)
	  	console.log(this.dateEndValue)
	  },
	  formatDate(date){
		   const y = date.getFullYear()
		   let m = date.getMonth() + 1
		   m = m < 10 ? '0' + m : m
		   let d = date.getDate()
		   d = d < 10 ? ('0' + d) : d
		   return y + ' ' + m + ' ' + d
		}
	},
	data () {
	    return {
	    	Payvalue:"",
	    	PayStatevalue:"",
	    	popupPayVisible:false,
	    	popupPayStateVisible:false,
	    	pickerDateVisible:null,
	    	pickerEndDateVisible:null,
	    	dateStartValue:this.formatDate(new Date()),
	    	dateEndValue:this.formatDate(new Date()),
	    	checked:false,
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
	    	payTypes:[
	    		{
		          label: '全部方式',
		          value: 0
		        },
		        {
		          label: '微信H5',
		          value: 1
		        },
		        {
		          label: '网银支付',
		          value: 2
		        },
	    	],
	    	stateTypes:[
	    		{
		          label: '全部状态',
		          value: 0
		        },
		        {
		          label: '未支付',
		          value: 1
		        },
		        {
		          label: '已支付',
		          value: 2
		        },
		        {
		          label: '退款中',
		          value: 2
		        },
		        {
		          label: '已退款',
		          value: 2
		        },
	    	],
	    	bankCardLists:[
    		  {
	          name: 'T0结算',
	          state: '正常' ,
	          rate: '1',
	          minSum: '0.01',
	          maxSum: '3000:00' ,
	          md5Key: '1:00' ,
	          signTime: '2018-03-17 00:00:00' ,
	          expireTime: '2019-03-17 00:00:00' 
	        },
	        {
	          name: 'D0结算',
	          state: '正常' ,
	          rate: '2',
	          minSum: '100:00',
	          maxSum: '1000:00' ,
	          md5Key: '0.02' ,
	          signTime: '2018-03-17 00:00:00' ,
	          expireTime: '2019-03-17 00:00:00' 
	        },
	        {
	          name: 'T1结算',
	          state: '正常' ,
	          rate: '1',
	          minSum: '30:00',
	          maxSum: '8700:00' ,
	          md5Key: '0.50' ,
	          signTime: '2018-03-17 00:00:00' ,
	          expireTime: '2019-03-17 00:00:00' 
	        },
	        {
	          name: 'T1结算',
	          state: '正常' ,
	          rate: '1',
	          minSum: '1:00',
	          maxSum: '4500:00' ,
	          md5Key: '0.05' ,
	          signTime: '2018-03-17 00:00:00' ,
	          expireTime: '2019-03-17 00:00:00' 
	        },
	        {
	          name: 'T0结算',
	          state: '正常' ,
	          rate: '2',
	          minSum: '260:00',
	          maxSum: '8700:00' ,
	          md5Key: '0.80' ,
	          signTime: '2018-03-17 00:00:00' ,
	          expireTime: '2019-03-17 00:00:00' 
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
	    		"操作"
	    	]
		} 
	}
}
</script>

<style scoped>
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
	.checkBtn-box{
		border-top: 1px solid #E0E0E0;
		padding-left: 190px;
		padding-top: 60px;
	}
	.checkBtn{
		margin-right: 50px;
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
		width: 2099px;
		margin-top: 0;
	}
	.detailBtn{
		width: 80px;
		height:50px;
		line-height: 50px;
		border: none;
		color:#fff;
		background: #009688;
	}
	li:nth-child(1){
		width: 80px;
	}
	li:nth-child(2){
		width: 120px;
	}
	li:nth-child(3){
		width: 200px;
	}
	li:nth-child(4){
		width: 250px;
	}
	li:nth-child(8){
		width: 300px;
	}
	li:nth-child(9){
		width: 300px;
	}
	h3:nth-child(1){
		width: 80px;
	}
	h3:nth-child(2){
		width: 120px;
	}
	h3:nth-child(3){
		width: 200px;
	}
	h3:nth-child(4){
		width: 250px;
	}
	h3:nth-child(8){
		width: 300px;
	}
	h3:nth-child(9){
		width: 300px;
	}

</style>