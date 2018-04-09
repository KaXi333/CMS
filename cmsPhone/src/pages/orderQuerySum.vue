<template>
	<div class="oderQuery-continer">
		<div class="oderQuery-box">
			<div class="input-box">
				<h2 class="input-name">日期</h2>
				<div class="input-value"><input v-model="dateStartValue" @click="openDatePicker" class="date-input" type="text" placeholder="选择起始日期"><i class="iconfont icon-qianjin"></i></div>
				<mt-datetime-picker
			    ref="pickerStart"
			    type="date"
			    @confirm="handleDateConfirm"
			    v-model="pickerDateVisible"
			    year-format="{value} 年"
				  month-format="{value} 月"
				  date-format="{value} 日">
			  </mt-datetime-picker>
			</div>
			<div class="input-box">
				<h2 class="input-name">支付方式</h2>
				<picker :slots="Payslots"></picker>	
			</div>
			<div class="checkBtn-box">
				<button class="checkBtn longCheckBtn" type="">查询</button>
			</div>
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
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import picker from '../components/base/picker'
export default {
	components:{
		picker
	},
	methods:{
		checkedAll(){
			if(this.checked){
				this.checkboxModel=[];
			}else{
				this.checkboxModel=true;
			}
		},
	  //日期选择
	  openDatePicker() {
        this.$refs.pickerStart.open();
    },
	  handleDateConfirm(){
	  	this.dateStartValue=this.formatDate(this.$refs.pickerStart.value)
	  	console.log(this.dateStartValue)
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
	    	pickerDateVisible:null,//开始日期值
	    	dateStartValue:this.formatDate(new Date()),//设置默认日期
	    	Payslots:[
	    		{
	    			flex: 1,
	    			values: ['微信H5支付', '网银支付', 'QQ扫码支付', 'QQH5支付','支付宝H5','微信扫码支付'],
	    			textAlign:"center"
	    		}
	    	] ,
	    	bankCardLists:[
    		  {
	          name: '0.00',
	          state: '20.00' ,
	          rate: '59'
	        },
	        {
	          name: '52',
	          state: '30.2' ,
	          rate: '2.00' 
	        },
	        {
	          name: '400',
	          state: '56.00' ,
	          rate: '67.00'
	        },
	        {
	          name: '59.36',
	          state: '12.38' ,
	          rate: '1.00'
	        },
	        {
	          name: '569',
	          state: '23.36' ,
	          rate: '20.00' 
	        }
	    	],
	    	bankTitles:[
	    		"总金额",
	    		"总手续费",
	    		"总净额"
	    	]
		} 
	}
}
</script>

<style scoped>
	.oderQuery-continer{
	}
	.oderQuery-box{
		padding: 0 30px;
	}
	.lotNotice{
		margin: 30px 0;
	}
	.list-content{
		margin-top: 50px;
	}
	.list-title, .list-item{
		width: 248px;
	}
	.detailBtn{
		width: 80px;
		height:50px;
		line-height: 50px;
		border: none;
		color:#fff;
		background: #009688;
	}
	h3:last-child{
		border-right: none;
	}
	li:last-child{
		border-right: none;
	}

</style>