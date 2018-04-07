<template>
  <div style="height:100%">
      <div class="head-title">管理系统</div>
        <div :style="{height: fullHeight}" class="bodyConent" :class="[ifAddClassLeft?'addClassLeft':'delClassLeft']">
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
      <!-- <div class="app-foot">©CopyRight 2016-2018 Version: 1.2.0</div> -->
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
      fullHeight: document.documentElement.clientHeight-50+'px',
      isShowMenuList:false,
      ifAddClassLeft:false,
      tabCont:"后台首页"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
 .bodyConent{
 }
 .app-content{
 }
</style>
