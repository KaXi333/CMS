<template>
	<div class="selection-component">
		<div class="selection-show" @click="toggleDrop">
        	<span class="selection-value">{{selections[nowIndex].label}}</span>
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
		},
		chooseSelection(index){
			this.nowIndex=index
			this.isDrop=false
			this.$emit('on-change',this,nowIndex)
		}
	}
}
</script>

<style scoped>
	.selection-component {
		position: relative;
  		display: inline-block;
	}
	.icon-sanjiao{font-size: 50px;float: right}
	.selection-show {
		display: inline-block;
		position: relative;
		padding: 0 20px 0 10px;
	    border: 1px solid #e3e3e3;
	    cursor: pointer;
	    height: 49px;
	    line-height: 49px;
	    text-align: center;
	    background: #fff;
	}
	.selection-list {
		display: inline-block;
		position: absolute;
		left:0;
		top:50px;
	    width: 100%;
	    background: #fff;
	    border-top: 1px solid #e3e3e3;
	    border-bottom: 1px solid #e3e3e3;
	    z-index: 5;
	}
	.selection-list li {
	  padding: 5px 15px 5px 10px;
	  border-left: 1px solid #e3e3e3;
	  border-right: 1px solid #e3e3e3;
	  cursor: pointer;
	  background: #fff;
	  white-space: nowrap;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	.selection-list li:hover {
	  background: #e3e3e3;
	}
</style>