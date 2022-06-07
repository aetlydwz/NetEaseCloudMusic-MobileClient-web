<template>
  <NavBar bg-color="#eaeaea">
    <template v-slot:left>
      <font-awesome-icon style="color:#000;font-size: 25px" @click="this.$router.go(-1  )" :icon="['fas', 'arrow-left']"/>
    </template>
  </NavBar>
  <div id="SonList">
    <ul id="ul1">
      <li v-for="itme in resdata">
        <router-link :to="{path:'/SonList',query:{id:itme.id}}" >
        <img class="listimg" :src="itme.picUrl"><p class="listname">{{ itme.name }}</p>
        <span id="ListSpan">{{((itme.playCount)/10000).toFixed(1)}}万</span>
        </router-link>
      </li>
    </ul>
  </div>
  <div style="height: 27vw">

  </div>
</template>

<script>
import NavBar from "@/components/navbar/NavBar";
import axios from "axios";
export default {
  name: "SonList",
  components:{
    NavBar
  },
  data(){
    return{
      resdata:null,
      indexModuleText1:"/personalized?limit=50"
    }
  },
  methods:{
    getdata(){
      axios.get('https://netease-cloud-music-api-theta-snowy-23.vercel.app'+this.indexModuleText1).then((res) =>{
        this.resdata = res.data.result
      })
    }
  },
  mounted() {
    this.getdata()
  }
}
</script>

<style scoped>
 body{
   background-color: #eaeaea;
 }
 #ul1{
   display:flex;
   width: 100vw;
   flex-wrap: wrap;
 }
 #ul1 > li{
   position: relative;
   margin-left: 3vw;
 }
 #ul1 > li > a{
   color: #999999;
 }
 .listimg{
   background-color: red;
   width: 30vw;
   height: 30vw;
   border-radius: 10%;
 }
 .listname{
   width: 30vw;
   font-size: 13px;
   height: 10vw;
 }
 #ListSpan{
   position: absolute;
   color: white;
   top: 1vw;
   font-size: 13px;
   z-index: 1;
 }
</style>