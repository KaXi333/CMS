<template>
	<div class="bankCard-continer">
		<div class="bankCard-input-border">
			<div class="input-box">
				<h3 class="input-name">账户</h3>
				<div class="input-value disableda-ctive"><input v-model="accountValue" disabled="disabled" type="text"></div>
			</div>
			<div class="input-box">
				<h3 class="input-name">扫码余额</h3>
				<div class="input-value disableda-ctive"><input v-model="scanMoneyValue" disabled="disabled" type="text"></div>
			</div>
			<div class="input-box">
				<h3 class="input-name">H5余额</h3>
				<div class="input-value disableda-ctive"><input v-model="H5MoneyValue" disabled="disabled" type="text"></div>
			</div>
			<div class="input-box">
				<h3 class="input-name">网银余额</h3>
				<div class="input-value disableda-ctive"><input v-model="onlineMoneyValue" disabled="disabled" type="text"></div>
			</div>
			<div class="input-box">
				  <h3 class="input-name">选择类型</h3>
					<div class="input-value" @click="handleClick"><input v-model="value" type="text" placeholder="选择结算类型"><i class="iconfont icon-qianjin"></i></div>
					<mt-popup v-model="popupVisible" position="bottom" popup-transition="popup-fade">
						<div class="picker-toolbar">  
	            <span class="mint-select-cancel" @click="mintCancelBtn">取消</span>  
	            <span class="mint-select-confirm" @click="mintConfirmBtn">确定</span>  
	          </div>  
						<mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
					</mt-popup>
			</div>
			<div class="input-box">
				  <h3 class="input-name">选择银行卡</h3>
					<div class="input-value" @click="handleBankClick"><input v-model="Bankvalue" type="text" placeholder="选择银行卡"><i class="iconfont icon-qianjin"></i></div>
					<mt-popup v-model="popupBankVisible" position="bottom" popup-transition="popup-fade">
						<div class="picker-toolbar">  
	            <span class="mint-select-cancel" @click="mintBankCancelBtn">取消</span>  
	            <span class="mint-select-confirm" @click="mintBankConfirmBtn">确定</span>  
	          </div>  
						<mt-picker :slots="bankslots" @change="onValuesBankChange"></mt-picker>
					</mt-popup>
			</div>
			<div class="input-box">
				<h3 class="input-name">金额</h3>
				<div class="input-value">
					<input type="text" placeholder="输入结算金额">
				</div>
			</div>
			<div class="input-box">
				<h3 class="input-name">备注</h3>
				<div class="input-value"><input type="text" placeholder="输入备注，比如：付款"></div>
			</div>
			<div class="input-box">
				<h3 class="input-name">支付密码</h3>
				<div class="input-value"><input type="text" placeholder="输入支付密码"></div>
			</div>
			<div class="commit-btn commit-box">
				<button class="button-tab button-tab-bc">立即申请</button>
			</div>
		</div>
	</div>
</template>

<script>
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
	  onValuesBankChange(picker, values) { 
				this.Bankvalue = values[0]
	      console.log(picker) 
	      console.log(values) 
	  },
	  handleBankClick(){
	  	this.popupBankVisible=true
	  },
	  mintBankCancelBtn(){
	  	this.popupBankVisible=false
	  },
	  mintBankConfirmBtn(){
	  	this.popupBankVisible=false
	  }
	},
	data () {
	    return {
	    	accountValue:"1770963469",
	    	scanMoneyValue:"5269.19",
	    	H5MoneyValue:"3416.63",
	    	onlineMoneyValue:"0.00",
	    	popupVisible:false,
	    	popupBankVisible:false,
	    	value:"",
	    	Bankvalue:"",
	    	slots:[
	    		{
	    			flex: 1,
	    			values: ['T0结算', 'D0结算', 'T1结算'],
	    			textAlign:"center"
	    		}
	    	],
	    	bankslots:[
	    		{
	    			flex: 1,
	    			values: ['吴遵林-6217007200050257412-中国建设银行股份有限公司深圳盐田支行', '谷磊-6217921005336725-上海浦东发展银行股份有限公司广州分行', '吴遵林-6217007200050257413-中国工商银行股份有限公司北京万国城支行'],
	    			textAlign:"center"
	    		}
	    	]         	
		} 
	}
}
</script>

<style scoped>
	
	.bankCard-input-border{
		padding:0 30px;
	}
	.commit-btn{
		padding-left: 250px;
		padding-top: 60px;
	}
	.disableda-ctive{
		background: rgb(235, 235, 228);
	}

</style>