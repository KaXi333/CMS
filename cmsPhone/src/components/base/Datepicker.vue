<template>
	<div class="Datepicker-component">
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
</template>

<script>
export default {
	data () {
	    return {
	    	pickerDateVisible:null,//开始日期值
	    	pickerEndDateVisible:null,//结束日期值
	    	dateStartValue:this.formatDate(new Date()),//设置默认起始日期
	    	dateEndValue:this.formatDate(new Date()),//设置默认结束日期
		} 
	},
	methods:{
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
	}
}
</script>

<style scoped>
	.mint-datetime-cancel{
		line-height: 70px;
	}
	.date-input{
		width: 185px;
	}
</style>