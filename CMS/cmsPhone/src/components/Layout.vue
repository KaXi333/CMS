<template>
  <div>
    <div class="head-title">管理系统</div>
    <transition name="bodyBox">
      <div class="bodyConent">
        <div class="menu-box">
          <h2 class="menu-title">后台首页</h2>
          <p class="menu-button" @click="hasMenuBtn">菜单</p>
        </div>
      </div>
    </transition>
    <div class="app-foot">©CopyRight 2016-2018 Version: 1.2.0</div>
    <my-menu v-show="isShowMenuList"></my-menu>
  </div>
</template>

<script>
import menu from './menu'
export default {
  components:{
    myMenu:menu
  },
  methods:{
    hasMenuBtn(){
      this.isShowMenuList=!this.isShowMenuList
    }
  },
  data () {
    return {
      isShowMenuList:false
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
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
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
    position: fixed;
    top:100px;
    left:0;
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
    font-size: 36px;
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
  .bodyBox-enter-active {
    animation: bodyBox-in .5s;
  }
  .bodyBox-leave-active {
    animation: bodyBox-in .5s reverse
  }
  @keyframes bodyBox-in {
    0% {
      transform: left(0);
    }
    100% {
      transform: left(-66%);
    }
  }
</style>
