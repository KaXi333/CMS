<template>
	<div class="selection-component">
		<div class="selection-show" @click="toggleDrop">
        	<span :class="{chooClasscolor:0===nowIndex}" class="selection-value">{{selections[nowIndex].label}}</span>
            <i class="iconfont icon-sanjiao"></i>
      	</div>
      	<div class="selection-list" v-if="isDrop">
	        <ul>
	          <li @click="chooseSelection(index)" v-for="(item,index) in selections">{{item.label}}</li>
	        </ul>
        </div>
	</div>
</template>

<script>
export default {
	props:{
		selections:{
			type:Array,
			default:[{
				label:'test',
				value:0
			}]
		}
	},
	data () {
	    return {
	    	isDrop:false,
	    	nowIndex:0
		} 
	},
	methods:{
		toggleDrop(){
			this.isDrop=!this.isDrop
			this.popupVisible = true
		},
		chooseSelection(index){
			this.nowIndex=index
			this.isDrop=false
			this.$emit('on-change',this.nowIndex)
		}
	}
}
</script>

<style scoped>
	.selection-component {
		position: relative;
  	display: inline-block;
  	margin-right: 10px;
	}
	.icon-sanjiao{font-size: 50px;float: right}
	.selection-show {
		display: inline-block;
		position: relative;
		padding-left: 10px;
	    border: 1px solid #E0E0E0;
	    cursor: pointer;
	    height: 59px;
	    line-height: 59px;
	    background: #fff;
	    min-width: 170px;
	    font-size: 26px;
	}
	.selection-list {
		display: inline-block;
		position: absolute;
		left:0;
		top:60px;
	    width: 100%;
	    background: #fff;
	    border-top: 1px solid #e3e3e3;
	    border-bottom: 1px solid #e3e3e3;
	    z-index: 5;
	}
	.selection-list li {
	  padding: 0 10px;
	  height:60px;
	  line-height: 60px;
	  border-left: 1px solid #e3e3e3;
	  border-right: 1px solid #e3e3e3;
	  cursor: pointer;
	  background: #fff;
	  white-space: nowrap;
	  overflow: hidden;
	  text-overflow: ellipsis;
	  font-size: 26px;
	}
	.selection-list li:hover {
	  background: #e3e3e3;
	}
	li:first-child
	{
	 color:#AAAAAA;
	}
	.chooClasscolor{color:#AAAAAA;}
</style>