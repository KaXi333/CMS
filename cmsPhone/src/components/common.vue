<template>
  
</template>

<script>
import menu from './menu'
export default {
  components:{
    myMenu:menu
  },
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
del, dfn, em, img, ins, kbd, q, s, samp,
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
li{list-style: none;}
  .changePass-select{
    padding:30px 0 30px 30px;
    height:80px;
    border-bottom: 1px solid #F0F0F0
  }
  .changePass-tab{
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
  .changePass-tab-bc{
    background:#009688;
    color:#fff; 
  }
  .checkBtn{
    height:60px;
    border: none;
    width: 120px;
    background: #009688;
    color:#fff;
    font-size: 28px;
    line-height: 60px;
  }
  .input-value{
    float:left;
    height: 60px;
    line-height: 60px;
    font-size: 26px;
    
  }
  .input-value input{
    height: 60px;
    padding-left: 16px;
    width: 400px;
    outline: none;
    border: none;
    background: #fff;
    line-height: 60px;
    font-size: 26px;
    border: 1px solid #E0E0E0;
  }
  

  .list-box{
    width: 100%;
    overflow:hidden;
    overflow-x:auto;
  }
  .list-content{
    border:1px solid #E0E0E0;
    margin-top: 50px;
    width: 1407px;
    
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
    color:#7F7F7F;
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
