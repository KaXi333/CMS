<template>
	<div class="bankCard-continer">
		<div class="bankCard-input-border">
			<div class="input-box">
				<h3 class="input-name">账户名</h3>
				<div class="input-value"><input type="text" placeholder="输入银行账户名"></div>
			</div>
			<div class="input-box">
				<h3 class="input-name">银行账户</h3>
				<div class="input-value"><input type="text" placeholder="输入银行账户"></div>
			</div>
			<div class="input-box">
				  <h3 class="input-name">开户行</h3>
					<div class="input-value" @click="handleClick"><input v-model="value" type="text" placeholder="请选择开户行"><i class="iconfont icon-qianjin"></i></div>
					<mt-popup v-model="popupVisible" position="bottom" popup-transition="popup-fade">
						<div class="picker-toolbar">  
	            <span class="mint-select-cancel" @click="mintCancelBtn">取消</span>  
	            <span class="mint-select-confirm" @click="mintConfirmBtn">确定</span>  
	          </div>  
						<mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
					</mt-popup>
			</div>
			<div class="input-box">
				<h3 class="input-name">开户所在地</h3>
				<!-- <v-selection :selections="chooseLocal"></v-selection>
				<v-selection :selections="chooseCity"></v-selection> -->
				<div class="input-value" @click="handleCityClick()"><input v-model="cityvalue" type="text" placeholder="请选择省市">
					<i class="iconfont icon-qianjin"></i>
				</div>
				<mt-popup v-model="popupCityVisible" position="bottom" popup-transition="popup-fade">
						<div class="picker-toolbar">  
	            <span class="mint-select-cancel" @click="mintCityCancelBtn">取消</span>  
	            <span class="mint-select-confirm" @click="mintCityConfirmBtn">确定</span>  
	          </div>  
						<mt-picker :slots="slotsCity" @change="onValuesCityChange"></mt-picker>
					</mt-popup>
			</div>
			<div class="input-box">
				<h3 class="input-name">开户网点</h3>
				<div class="input-value">
					<input type="text" placeholder="选择开户网点">
				</div>
			</div>
			<div class="input-box">
				<h3 class="input-name">备注</h3>
				<div class="input-value"><input type="text" placeholder="输入备注，比如：结算银行卡"></div>
			</div>
			<div class="commit-btn commit-box">
				<button class="button-tab button-tab-bc">立即提交</button>
			<button class="button-tab">重置</button>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import { Picker,Popup } from 'mint-ui';
Vue.component(Picker.name, Picker);
Vue.component(Popup.name, Popup);
import VSelection from '../components/base/selection'
export default {
	components:{
		VSelection
	},
	methods:{
		onValuesChange(picker, values) { 
				this.value = values[0]
	      console.log(picker) 
	      console.log(values) 
	  },
	  handleClick(){
	  	this.popupVisible = true
	  },
	  mintCancelBtn(){
	  	this.popupVisible = false
	  },
	  mintConfirmBtn(){
	  	this.popupVisible = false
	  },
	  onValuesCityChange(picker, values) { 
				this.cityvalue = values[0]+' - '+values[1]
	      console.log(picker) 
	      console.log(values) 
	  },
	  handleCityClick(){
	  	this.popupCityVisible=true
	  },
	  mintCityCancelBtn(){
	  	this.popupCityVisible=false
	  },
	  mintCityConfirmBtn(){
	  	this.popupCityVisible=false
	  }
	},
	data () {
	    return {
	    	popupVisible:false,
	    	popupCityVisible:false,
	    	value:"",
	    	cityvalue:"",
	    	slots:[
	    		{
	    			flex: 1,
	    			values: ['中国工商银行', '中国农业银行', '中国银行', '中国建设银行'],
	    			textAlign:"center"
	    		}
	    	] ,
	    	slotsCity:[
	    		{ 
	         flex: 1, 
	         values: ['北京市', '上海市', '广东省', '湖南省', '江苏省'], 
	         className: 'slotsCity1', 
	         textAlign: 'center' 
	        }, { 
	         divider: true, 
	         content: '-', 
	         className: 'slotsCity2' 
	        }, { 
	         flex: 1, 
	         values: ['深圳市', '广州市', '佛山市', '东莞市', '中山市', '韶关市'], 
	         className: 'slotsCity3', 
	         textAlign: 'center' 
	        } 
	    	], 
	    	chooseLocal:[
	    		{
		          label: '选择省份',
		          value: 0
		        },
		        {
		          label: '北京市',
		          value: 1
		        },
		        {
		          label: '上海市',
		          value: 2
		        },
		        {
		          label: '广东省',
		          value: 3
		        },
		        {
		          label: '湖南省',
		          value: 4
		        },
		        {
		          label: '江苏省',
		          value: 5
		        },
		        {
		          label: '安徽省',
		          value: 6
		        }
	    	],
	    	chooseCity:[
	    		{
		          label: '选择城市',
		          value: 0
		        },
		        {
		          label: '深圳市',
		          value: 1
		        },
		        {
		          label: '广州市',
		          value: 2
		        },
		        {
		          label: '佛山省',
		          value: 3
		        },
		        {
		          label: '东莞省',
		          value: 4
		        },
		        {
		          label: '中山省',
		          value: 5
		        }
	    	]
		} 
	}
}
</script>

<style scoped>
	
	.bankCard-input-border{
		padding:0 30px;
		padding-top: 30px;
	}
	.input-box{
		border-top: 1px solid #E0E0E0;
		padding: 5px 0;
		height:100px;
	}
	.input-name{
		width: 170px;
		float: left;
		line-height: 100px;
		font-size: 30px;
		margin-right: 30px;
	}
	.input-value{
		height: 100px; 
		width: 480px;
	}
	.input-value input {
	    height: 100px; 
	    line-height: 100px; 
	}
	
	
	.mint-popup-bottom {
		width: 100%;
	}
	.picker-toolbar{
		height:70px;
		line-height: 70px;
		padding: 0 30px;
		font-size: 30px;
	}
	.mint-select-cancel{
		float: left;
	}
	.mint-select-confirm{
		float:right;
	}
	.icon-qianjin{
		float: right;
		line-height: 100px;
		font-size: 40px;
		color: #BEBEBE;
		height:100%;
	}

</style>