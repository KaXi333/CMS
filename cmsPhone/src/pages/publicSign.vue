<template>
	<div class="oderQuery-continer">
		<div class="lotNotice"><button class="checkBtn" type="">标记为已读</button></div>
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
							<li class="list-item"><button class="detailBtn">查看</button></li>
						</ul>
					</div>
				</div>
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
		checkedAll(){
			if(this.checked){
				this.checkboxModel=[];
			}else{
				this.checkboxModel=true;
			}
		}
	},
	data () {
	    return {
	    	checked:false,
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
	          rate: '1'
	        },
	        {
	          name: 'D0结算',
	          state: '正常' ,
	          rate: '2'
	        },
	        {
	          name: 'T1结算',
	          state: '正常' ,
	          rate: '1'
	        },
	        {
	          name: 'T1结算',
	          state: '正常' ,
	          rate: '1'
	        },
	        {
	          name: 'T0结算',
	          state: '正常' ,
	          rate: '2'
	        }
	    	],
	    	bankTitles:[
	    		"标题",
	    		"状态",
	    		"发布时间",
	    		"操作"
	    	]
		} 
	}
}
</script>

<style scoped>
	.oderQuery-continer{
		padding: 0 15px;
	}
	.oderQuery-box{
		background: #F0F0F0;
		padding: 20px 20px;
		zoom:1;
	}
	.oderQuery-box:after{
		display: block;
	    visibility: hidden;
	    clear: both;
	    height:0;
	    content: ".";
	}
	.input-value{
		margin-right: 30px;
		margin-bottom: 30px;
	}
	.input-value input{
		width: 280px;
	}
	.checkBtn{
		margin-right: 10px;
		width: 180px;
	}
	.lotNotice{
		margin: 30px 0;
	}
	.list-content{
		width: 900px;
		margin-top: 0;
	}
	.input-checkbox{

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