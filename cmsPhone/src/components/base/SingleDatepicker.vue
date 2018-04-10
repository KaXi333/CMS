<template>
	<div class="Datepicker-component">
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
</template>

<script>
export default {
	data () {
	    return {
	    	pickerDateVisible:null,//开始日期值
	    	dateStartValue:this.formatDate(new Date()),//设置默认日期
		} 
	},
	methods:{
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
	}
}
</script>

<style scoped>
</style>