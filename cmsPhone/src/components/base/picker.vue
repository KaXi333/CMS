<template>
	<div class="picker-component">
		<div class="input-value" @click="handleClick">
			<input v-model="chooseValue" type="text" placeholder="请选择交易状态">
			<i class="iconfont icon-qianjin"></i>
		</div>
		<mt-popup v-model="popupVisible" position="bottom" popup-transition="popup-fade">
			<div class="picker-toolbar">  
	      <span class="mint-select-cancel" @click="mintCancelBtn">取消</span>  
	      <span class="mint-select-confirm" @click="mintConfirmBtn">确定</span>  
	    </div>  
			<mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
		</mt-popup>
	</div>
</template>

<script>
export default {
	props:{
		slots:{
			type:Array,
			default:[{
				flex:1,
				values:[]
			}]
		}
	},
	data () {
	    return {
	    	chooseValue:"",//picker选择值
	    	popupVisible:false,//控制picker显示隐藏
		} 
	},
	methods:{
		onValuesChange(picker, values) { 
				this.chooseValue = values[0]
	      console.log(picker) 
	      console.log(values) 
	  },
	  handleClick(){
	  	this.popupVisible=true
	  },
	  mintCancelBtn(){
	  	this.popupVisible=false
	  },
	  mintConfirmBtn(){
	  	this.popupVisible=false
	  },
	}
}
</script>

<style scoped>
	
</style>