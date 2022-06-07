
<template>
  <router-view/>

  <FooterMusic v-show="$store.state.isFooterMusic">

  </FooterMusic>
  <tab-bar>
    <tab-item icon="home" text="发现" path="/index"></tab-item>
    <tab-item icon="compass" text="播客" path="/shop"></tab-item>

    <tab-item icon="file-alt" text="我的" path="/infoUser"></tab-item>
    <tab-item icon="user" text="关注" path="/mine"></tab-item>
    <tab-item icon="compass" text="其他" path="/my"></tab-item>
  </tab-bar>

</template>

<script>
import tabBar from '@/components/tabbar/TabBar'
import tabItem from '@/components/tabbar/TabItem'
import FooterMusic from "@/components/footermusic/FooterMusic";
export default {
  name: "App",
  components:{
    tabBar,
    tabItem,
    FooterMusic
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>