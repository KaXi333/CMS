<template>
		<div class="list-box">
			<div class="list-content">
				<div class="list-title-box">
					<h4 class="list-title" v-for="(item,index) in tilteslots">{{item}}</h4>
				</div>
				<mt-loadmore :autoFill='false' :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" ref="loadmore">
			    <div class="list-value-box" >
						<div class="list-value" v-for="(item,index) in listslots">
							<ul @click="checkDetailBtn(index)" class="clearFloat">
								<li class="list-item list-item-num">{{index+1}}</li>
								<li class="list-item list-item-tit">
									<span>{{item[showTitle[0]]}}</span>
									<span class="list-item-time">{{'('+item[showTitle[1]]+')'}}</span>
									<i class="iconfont" :class="[index===nowIndex?'icon-xiaosanjiaoup':'icon-sanjiao']"></i>
								</li>
							</ul>
							<transition name="orderList">
							<div v-show="index===nowIndex" class="list-item-detail-box">
								<div v-for="(list,index) in item" class="list-item-detail clearFloat">
									<p class="list-item-name">{{listTitleslots[index]}}</p>
									<p class="list-item-value">{{list}}</p>
								</div>
							</div>
						</transition>
						</div>
					</div>
			  </mt-loadmore>
			</div>
		</div>
</template>

<script>
export default {
	props:{
		tilteslots:{
			type:Array,
			default:[{
				flex:1,
				values:[]
			}]
		},
		listslots:{
			type:Array,
			default:[{
				flex:1,
				values:[]
			}]
		},
		showTitle:{
			type:Array,
			default:[{
				flex:1,
				values:[]
			}]
		},
		listTitleslots:{
			type:Object,
			default:[{
				flex:1,
				values:[]
			}]
		}
	},
	data () {
	    return {
	    	nowIndex:'',
	    	bottomStatus: '',
		} 
	},
	methods:{
		//点击展开详情
		checkDetailBtn(index){
			if(this.nowIndex===index){
				this.nowIndex=''
			}else{
				this.nowIndex=index
			}
		},
		//监听下拉状态
		handleBottomChange(status) {
      this.bottomStatus = status
      console.log(this.bottomStatus)
    },
    loadBottom() {
		  // 加载更多数据
		  setTimeout(() => {
         let lastValue = this.listslots[this.listslots.length - 1];
         if (this.listslots.length < 40) {
           for (let i = 1; i <= 10; i++) {
             this.listslots.push(lastValue);
           }
         } else {
           this.allLoaded = true;
         }
         console.log(this.listslots)
         this.$refs.loadmore.onBottomLoaded();
       }, 1500);
		}
	}
}
</script>

<style scoped>
	/*查询列表样式*/
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

  /*查询结果列表样式*/
  .list-item-num{
    width: 100px;
    border-right: 1px solid #E0E0E0;
    color: #009688;
    font-size: 22px;
  }
  .list-item-tit{
    width: 649px;
    font-size: 22px;
  }
  h4:nth-child(1){
    width: 100px;
    border-right: 1px solid #E0E0E0;
    color: #009688;
    font-weight: bold;
  }
  h4:nth-child(2){
    width: 649px;
  }
  .list-item-detail{
    width: 100%;
    font-size: 24px;
    height:61px;
    line-height: 61px;
  }
  .list-item-detail p{
    float: left;
    line-height:61px;
    text-align: center;
  }
  .list-item-name{
    width: 200px;
    background-color: #009688;
    color:#fff;
    border-top: 1px solid #009688;
  }
  .list-item-value{
    width: 550px;
    border-top: 1px solid #E0E0E0;
  }
  .list-value-box{
    height:900px;
    overflow: scroll;
  }
	/*查询页面详情样式*/
	.icon-xiaosanjiaoup,.icon-sanjiao{
    line-height: 80px;
    color:#009688;
    margin-right: 10px;
    font-size: 60px;
    float: right;
  }
</style>