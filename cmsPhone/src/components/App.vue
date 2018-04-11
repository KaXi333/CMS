<template>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</template>

<script>
import Vue from 'vue'
import { Picker,Popup,DatetimePicker,Checklist,Loadmore  } from 'mint-ui';
Vue.component(Picker.name, Picker);
Vue.component(Popup.name, Popup);
Vue.component(DatetimePicker.name, DatetimePicker)
Vue.component(Checklist.name, Checklist)
Vue.component(Loadmore.name, Loadmore)
Vue.prototype.tabCont = '后台首页'
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
   html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,button,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,input,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
}
html,body{
    height:100%;
}
li{list-style: none;}
  .changePass-select{
    padding:30px 0 30px 30px;
    height:80px;
    border-bottom: 1px solid #F0F0F0
  }
  /*按钮button样式*/
  .button-tab{
    font-size: 28px;
    line-height: 80px;
    float:left;
    margin-right: 30px;
    padding: 0 25px;
    background: #E0E0E0;
    color:#4F4F4F;
    min-width: 130px;
    border-radius: 8px;
  }
  .button-tab-bc{
    background:#009688;
    color:#fff; 
  }
  .checkBtn-box{
    border-top: 1px solid #E0E0E0;
    padding-top: 60px;
  }
  .checkBtn{
    height:60px;
    border: none;
    width: 120px;
    background: #009688;
    color:#fff;
    font-size: 28px;
    line-height: 60px;
    border-radius: 5px;
  }
  .longCheckBtn{
    width: 100%;
    height:70px;
    font-size: 34px;
  }

  /*表单input样式*/
  .input-box{
		border-top: 1px solid #E0E0E0;
		padding: 5px 0;
		height:90px;
	}
	.input-name{
		width: 170px;
		float: left;
		line-height: 90px;
		font-size: 30px;
		margin-right: 30px;
	}
	.input-value{
		float:left;
		height: 90px; 
		width: 480px;
		line-height: 90px;
    	font-size: 28px;
	}
	.input-value input {
      width:430px; 
	    height: 90px; 
	    line-height: 90px;
	    outline: none;
	    border: none;
	}
	/*提交重置button样式*/
	.commit-btn{
		padding-left: 180px;
		padding-top:100px;
		border-top: 1px solid #E0E0E0;
	}
	.commit-box:after{
		display: block;
		visibility: hidden;
		clear: both;
		height:0;
		content: ".";
	}
	.commit-box{
		zoom:1;
	}
	/*查询表单input样式*/
	.check-input-value{
		margin-right: 25px;
		background: #fff;
		float:left;
	    height: 60px;
	    line-height: 60px;
	    font-size: 26px;
	}
	.check-input-value input{
	    width: 230px;
	    font-size: 24px;
	    height: 60px;
	    padding-left: 16px;
	    outline: none;
	    border: none;
	    background: #fff;
	    line-height: 60px;
	}
  /*mint-ui picker、popup样式*/
  .mint-popup-bottom {
    width: 100%;
  }
  .picker-toolbar{
    height:70px;
    line-height: 70px;
    font-size: 30px;
    color:#26a2ff;
    border-bottom: 1px solid #d0d0d0
  }
  .mint-select-cancel,.mint-select-confirm{
    float: left;
    text-align: center;
    display: inline-block;
    width: 50%;
  }
  .mint-select-confirm{
    float:right;
  }
  .mint-datetime-cancel,.mint-datetime-confirm{
    line-height: 70px;
    font-size: 30px;
  }
  .icon-qianjin{
    float: right;
    line-height: 100px;
    font-size: 40px;
    color: #BEBEBE;
    height:100%;
  }
  
	
  .list-box{
    width: 100%;
    overflow:hidden;
    overflow-x:auto;
  }
  .list-content{
    border:1px solid #E0E0E0;
    margin-top: 50px;
    
  }
  .list-title-box{
    background: #F0F0F0;
    height:80px;
    line-height: 80px;
  }
  .list-title,.list-item{
    width: 200px;
    float:left;
    height:80px;
    line-height: 80px;
    text-align: center;
    border-right: 1px solid #E0E0E0;
    font-size: 26px;
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



  .icon-caidan{
    font-size:70px;
    float: right;
    color:#009688;
  }
  .head-title{
    width: 100%;
    height:100px;
    background: #23262E;
    color:#fff;
    font-size: 36px;
    text-align: center;
    line-height: 100px;
  }
  .bodyConent{
    width: 100%;
  }
  .menu-box{
    padding: 0 20px;
    height:100px;
    line-height: 100px;
    border-bottom: 6px solid #009688
  }
  .menu-title{
    float:left;
    font-size: 36px;
    color:#009688;
    font-weight: bold;
  }
  .menu-button{
    float: right;
    font-size: 32px;
    font-weight: bold;
  }
  .app-foot{
    height: 80px;
    width: 100%;
    position: fixed;
    bottom:0;
    line-height: 80px;
    text-align: center;
    background: #393D49;
    color: #DDDDDD;
  }
  .addClassLeft{
    transform: translateX(-66%);
    transition: all 0.5s ease
  }
  .delClassLeft{
    transform: translateX(0);
    transition: all 0.6s ease
  }
</style>
