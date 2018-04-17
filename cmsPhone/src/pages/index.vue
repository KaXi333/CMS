<template>
	<div class="trade-chart-box">
		<div class="trade-content">
			<div class="trade-list">
				<div class="trade-list-box">
					<i class="iconfont icon-dingdan"></i>
					<div class="trade-detail">
						<span class="trade-num">0</span>
						<h3 class="trade-title">{{$t("index.daytrading")}}</h3>
					</div>
				</div>
				<div class="trade-list-box">
					<i class="iconfont icon-dingdan"></i>
					<div class="trade-detail">
						<span class="trade-num">2</span>
						<h3 class="trade-title">{{$t("index.weektrading")}}</h3>
					</div>
				</div>
				<div class="trade-list-box">
					<i class="iconfont icon-dingdan"></i>
					<div class="trade-detail">
						<span class="trade-num">38</span>
						<h3 class="trade-title">{{$t("index.monthtrading")}}</h3>
					</div>
				</div>
			</div>
			<div class="trade-list">
				<div class="trade-list-box">
					<i class="iconfont icon-jiaoyi"></i>
					<div class="trade-detail">
						<span class="trade-num">0</span>
						<h3 class="trade-title">{{$t("index.dayamount")}}</h3>
					</div>
				</div>
				<div class="trade-list-box">
					<i class="iconfont icon-jiaoyi"></i>
					<div class="trade-detail">
						<span class="trade-num">2</span>
						<h3 class="trade-title">{{$t("index.weekamount")}}</h3>
					</div>
				</div>
				<div class="trade-list-box">
					<i class="iconfont icon-jiaoyi"></i>
					<div class="trade-detail">
						<span class="trade-num">38</span>
						<h3 class="trade-title">{{$t("index.monthamount")}}</h3>
					</div>
				</div>
			</div>
		</div>
		<div class="trade-tate">近期交易</div>
		<div class="charts">
	      <div id="myChart" :style="{width: '375px', height: '300px'}"></div>
	    </div>
	</div>
</template>

<script>
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入折线图组件
require('echarts/lib/chart/line')
// 引入提示框和legend组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/legend')
export default {
	data () {
	    return {
	    	
		} 
	},
	mounted(){
	    myChart.style.width = window.screen.width*0.98+'px'
	    this.drawLine();
  	},
  	methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          tooltip: {
              trigger: 'axis'
          },
          legend: {
              data:['微信扫码','微信H5','微信H52','QQ扫码','B2C网银','QQ手机H5','支付宝H5']
          },
          grid: {
              left: '2%',
              right: '9%',
              bottom: '3%',
              containLabel: true
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['2018-3-21','2018-3-22','2018-3-23','2018-3-24']
          },
          yAxis: {
              type: 'value'
          },
          series: [
              {
                  name:'微信扫码',
                  type:'line',
                  stack: '总量',
                  data:[120, 132, 101, 134, 90, 230, 210]
              },
              {
                  name:'微信H5',
                  type:'line',
                  stack: '总量',
                  data:[220, 182, 191, 234, 290, 330, 310]
              },
              {
                  name:'微信H52',
                  type:'line',
                  stack: '总量',
                  data:[150, 232, 201, 154, 190, 330, 410]
              },
              {
                  name:'QQ扫码',
                  type:'line',
                  stack: '总量',
                  data:[320, 332, 301, 334, 390, 330, 320]
              },
              {
                  name:'B2C网银',
                  type:'line',
                  stack: '总量',
                  data:[820, 932, 901, 934, 1290, 1330, 1320]
              },
              {
                  name:'QQ手机H5',
                  type:'line',
                  stack: '总量',
                  data:[360, 500, 361, 534, 190, 630, 420]
              },
              {
                  name:'支付宝H5',
                  type:'line',
                  stack: '总量',
                  data:[820, 632, 501, 734, 1290, 930, 1120]
              }
          ]
        });
    }
  }   
}
</script>

<style scoped>
	.icon-dingdan,.icon-jiaoyi{
		font-size: 50px;
		width: 70px;
		float: left;
		color:#fff;
		background: #0072E3;
		line-height: 70px;
		text-align: center;
	}
	.icon-jiaoyi{
		background: #F75000;
	}
	.trade-chart-box{
		padding:0 10px;
	}
	.trade-content{background: #FCFCFC}
	.trade-list{
    	display: flex;
    	justify-content: center;
    	height:70px;
    	margin-top:40px;
	}
	.trade-list-box{
		flex: 1;
    	display: flex;
    	justify-content: space-around;
	}
	.trade-detail{
    	display: flex;
    	flex-direction:column;
    	justify-content: space-around;
    	text-align: center;
    	color:#7B7B7B;
	}
	.trade-num{
		font-size:20px;
	}
	.trade-title{
		font-size:16px;
	}
	.trade-tate{
		width: 100%;
		height:100px;
		border-bottom: 1px solid #E0E0E0;
		line-height:100px;
		font-size: 30px;
	}

</style>