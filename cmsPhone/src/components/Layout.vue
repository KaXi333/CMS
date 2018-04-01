<template>
  <div>
    <div class="head-title">管理系统</div>
      <div class="bodyConent" :class="[ifAddClassLeft?'addClassLeft':'delClassLeft']">
        <div class="menu-box">
          <h2 class="menu-title">{{tabCont}}</h2>
          <p class="menu-button" @click="hasMenuBtn">菜单<i class="iconfont icon-caidan"></i></p>
        </div>
        <div class="app-content">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
      </div>
    <div class="app-foot">©CopyRight 2016-2018 Version: 1.2.0</div>
    <my-menu v-show="isShowMenuList" @on-goPath="goPathShow"></my-menu>
  </div>
</template>

<script>
import menu from './menu'
export default {
  components:{
    myMenu:menu
  },
  methods:{
    //菜单点击事件
    hasMenuBtn(){
      this.isShowMenuList=!this.isShowMenuList
      this.ifAddClassLeft=!this.ifAddClassLeft
    },
    //页面跳转
    goPathShow(tab){
      this.isShowMenuList=!this.isShowMenuList
      this.ifAddClassLeft=!this.ifAddClassLeft
      this.tabCont=tab
    }
  },
  data () {
    return {
      isShowMenuList:false,
      ifAddClassLeft:false,
      tabCont:"后台管理"
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
