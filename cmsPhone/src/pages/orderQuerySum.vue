<template>
	<div class="oderQuery-continer">
		<div class="oderQuery-box">
			<div class="input-box">
				<h2 class="input-name">日期</h2>
				<single-datepicker></single-datepicker>
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
import SingleDatepicker from '../components/base/SingleDatepicker'
export default {
	components:{
		picker,
		SingleDatepicker
	},
	methods:{
		checkedAll(){
			if(this.checked){
				this.checkboxModel=[];
			}else{
				this.checkboxModel=true;
			}
		},
	 
	},
	data () {
	    return {
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
	.list-box{
    width: 100%;
  }
  .list-title-box{
    background: #F0F0F0;
    height:80px;
    line-height: 80px;
  }
  .list-title,.list-item{
    float:left;
    height:80px;
    line-height: 80px;
    text-align: center;
    font-size: 26px;
    border-right: 1px solid #E0E0E0
  }
  .list-title{
    font-weight: bold;
  }
  .list-item-time{
    color: #9D9D9D;
  }
  .list-value{
    border-bottom: 1px solid #E0E0E0
  }
  .clearFloat:after{
    display: block;
    visibility: hidden;
    clear: both;
    height:0;
    content: ".";
  }
  .clearFloat{
    zoom:1;
  }
	.oderQuery-box{
		padding: 0 30px;
	}
	.list-content{
		margin-top: 50px;
	}
	.list-title, .list-item{
		width: 248px;
	}
	h3:last-child{
		border-right: none;
	}
	li:last-child{
		border-right: none;
	}

</style>