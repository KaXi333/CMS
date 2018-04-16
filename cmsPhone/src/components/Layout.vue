<template>
  <div style="height:100%">
      <div ref="menuTitleHeight" class="head-title">管理系统</div>
        <div :style="{height:bodyConentH}" class="bodyConent" :class="[ifAddClassLeft?'addClassLeft':'delClassLeft']">
          <div class="menu-box">
            <h2 class="menu-title">{{tabCont}}</h2>
            <p class="menu-button" @click="hasMenuBtn"><i class="iconfont icon-caidan"></i></p>
          </div>
          <div class="app-content">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </div>
        </div>
      <my-menu v-show="isShowMenuList" @on-goPath="goPathShow"></my-menu>
      <div class="change-lang-btn">
        <span @click="enLang">English</span>|<span @click="cnLang">中文</span>
      </div>
  </div>
</template>

<script>
import menu from './menu'
export default {
  components:{
    myMenu:menu
  },
  methods:{
    //设置成英文
    enLang(){
      this.$i18n.locale='en'
    },
    //设置成中文
    cnLang(){
      this.$i18n.locale='cn'
    },
    //菜单点击事件
    hasMenuBtn(){
      this.isShowMenuList=!this.isShowMenuList
      this.ifAddClassLeft=!this.ifAddClassLeft
    },
    //页面跳转
    goPathShow(tab){
      this.isShowMenuList=!this.isShowMenuList
      this.ifAddClassLeft=!this.ifAddClassLeft
      if(tab==="退出"){
        this.tabCon=''
        localStorage.clear()
      }else{
        localStorage.tabCont=tab
        this.tabCont=localStorage.tabCont
      } 
    }
  },
  data () {
    return {
      bodyConentH:'',
      isShowMenuList:false,
      ifAddClassLeft:false,
      tabCont:localStorage.tabCont
    }
  },
  created(){
    console.log(1)
  },
  mounted(){
    let windowH=document.documentElement.clientHeight
    let topH = this.$refs.menuTitleHeight.offsetHeight
    this.bodyConentH=windowH-topH+'px'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
 .change-lang-btn{
  position: fixed;
  right:0;
  top:0;
  width: 250px;
  height:100px;
  color: #45bda6;
  font-size: 30px;
  text-align: center;
  line-height: 100px;
 }
 .change-lang-btn span{
    margin:0 20px;
  }
</style>
