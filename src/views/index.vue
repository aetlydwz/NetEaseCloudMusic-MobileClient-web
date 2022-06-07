<template>
  <div id="sidebar">

  </div>
  <NavBar bgColor="#fff" >
    <template v-slot:left>
      <font-awesome-icon style="color:#000;" :icon="['fas', 'bars']"/>
<!--      <font-awesome-icon style="color:#000;" :icon="['fas', 'arrow-left']"/>-->
    </template>
    <template v-slot:center>
      <router-link to="/search">
        <div id="searchBtn">搜索歌曲</div>
      </router-link>
    </template>
    <template v-slot:right>
    </template>
  </NavBar>

  <div id="div0">
    <div id="div0Img"><SwpierTop/></div>
    <div id="uldiv">
      <ul>
<!--        faCalendar-->
        <li><font-awesome-icon style="color:black;font-size: 13vw;margin: 2vw" :icon="['fas', 'calendar-day']"/><p>每日推荐</p></li>
        <li><font-awesome-icon style="color:black;font-size: 13vw;margin: 2vw" :icon="['fas', 'headphones']"/><p>私人FM</p></li>
        <li><font-awesome-icon style="color:black;font-size: 13vw;margin: 2vw" :icon="['fas', 'bar-chart']"/><p>歌单</p></li>
        <li><font-awesome-icon style="color:black;font-size: 13vw;margin: 2vw" :icon="['fas', 'heartbeat']"/><p>排行榜</p></li>
        <li><font-awesome-icon style="color:black;font-size: 13vw;margin: 2vw" :icon="['fas', 'layer-group']"/><p>直播</p></li>
        <li><font-awesome-icon style="color:black;font-size: 13vw;margin: 2vw" :icon="['fas', 'bullseye']"/><p>数字专辑</p></li>
        <li><font-awesome-icon style="color:black;font-size: 13vw;margin: 2vw" :icon="['fas', 'book']"/><p>有声书</p></li>
        <li><font-awesome-icon style="color:black;font-size: 13vw;margin: 2vw" :icon="['fas', 'calendar']"/><p>关注新歌</p></li>
        <li><font-awesome-icon style="color:black;font-size: 13vw;margin: 2vw" :icon="['fas', 'home']"/><p>歌房</p></li>
        <li><font-awesome-icon style="color:black;font-size: 13vw;margin: 2vw" :icon="['fas', 'gamepad']"/><p>游戏专区</p></li>
      </ul>
    </div>
  </div>

  <index-module1 text="/personalized">
    <template v-slot:left>
      <div id="module1-p"><p>推荐歌单</p></div>
    </template>
    <template v-slot:right>
      <div id="module1-btn"><router-link to="/MoSonList"><button>更多</button></router-link></div>
    </template>
    <template v-slot:bottom>
      <div id="indexModule1">
        <ul id="ul1">
          <li v-for="itme in resdata">
            <router-link :to="{path:'/SonList',query:{id:itme.id}}" >
              <img class="ul1img" :src="itme.picUrl"><p class="ul1p">{{ itme.name.substring(0,15) }}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </template>
  </index-module1>

  <index-module2 >
  <template v-slot:left>
    <button id="module2btn1">游戏世界中的音乐</button>
  </template>
  <template v-slot:right>
    <button id="module2btn2">更多</button>
  </template>
  <template v-slot:bottom>
    <div id="indexModule2"  >
<!--      @scroll="module2Scrool($event)"-->
      <ul class="module2-ul1">
        <li>
          <div>
            <img>
            <div class="indexModule2-2">
              <p>name1</p>
              <p>-&nbsp;author</p>
              <button>▶</button>
            </div>
          </div>
        </li>

        <li>
          <div>
            <img>
            <div class="indexModule2-2">
              <p>name</p>
              <p>-&nbsp;author</p>
              <button>▶</button>
            </div>
          </div>
        </li>

        <li>
          <div>
            <img>
            <div class="indexModule2-2">
              <p>name</p>
              <p>-&nbsp;author</p>
              <button>▶</button>
            </div>
          </div>
        </li>
      </ul>
      <ul class="module2-ul1">
        <li>
          <div>
            <img>
            <div class="indexModule2-2">
              <p>name2</p>
              <p>-&nbsp;author</p>
              <button>▶</button>
            </div>
          </div>
        </li>

        <li>
          <div>
            <img>
            <div class="indexModule2-2">
              <p>name</p>
              <p>-&nbsp;author</p>
              <button>▶</button>
            </div>
          </div>
        </li>

        <li>
          <div>
            <img>
            <div class="indexModule2-2">
              <p>name</p>
              <p>-&nbsp;author</p>
              <button>▶</button>
            </div>
          </div>
        </li>
      </ul>
      <ul class="module2-ul1">
        <li>
          <div>
            <img>
            <div class="indexModule2-2">
              <p>name3</p>
              <p>-&nbsp;author</p>
              <button>▶</button>
            </div>
          </div>
        </li>

        <li>
          <div>
            <img>
            <div class="indexModule2-2">
              <p>name</p>
              <p>-&nbsp;author</p>
              <button>▶</button>
            </div>
          </div>
        </li>

        <li>
          <div>
            <img>
            <div class="indexModule2-2">
              <p>name</p>
              <p>-&nbsp;author</p>
              <button>▶</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </template>
  </index-module2>

  <index-module3 >
    <template v-slot:left>
      <p>热门话题</p>
    </template>
    <template v-slot:right>
      <button>更多</button>
    </template>
    <template v-slot:bottom>
      <div id="indexModule3">
        <ul id="indexModule3-ul">
          <li><img><p>text</p></li>
          <li><img><p>text</p></li>
          <li><img><p>text</p></li>
          <li><img><p>text</p></li>
          <li><img><p>text</p></li>
          <li><img><p>text</p></li>
        </ul>
      </div>
    </template>
  </index-module3>
  <div class="bottom">

  </div>
</template>

<script>
import SwpierTop from "@/components/swpiertop/SwpierTop";
import NavBar from "@/components/navbar/NavBar";
import indexModule1 from "@/components/indexmodule/IndexModule";
import indexModule2 from "@/components/indexmodule/IndexModule";
import indexModule3 from "@/components/indexmodule/IndexModule";
import axios from "axios";
export default {
  name: "index",
  components: {
    NavBar,
    indexModule1,
    indexModule2,
    indexModule3,
    SwpierTop
  },
  data(){
    return{
      resdata:null,
      indexModuleText1:"/personalized?limit=10"
    }
  },
  methods:{
    getdata(){
      axios.get('https://netease-cloud-music-api-theta-snowy-23.vercel.app'+this.indexModuleText1).then((res) =>{
        this.resdata = res.data.result
      })
    },
    module2Scrool(e){
      if(e.target.scrollLeft == 375)
      console.log(e.target.scrollLeft)
    }
  },
  mounted() {
    this.getdata()
  }
}
</script>

<style scoped>
/*此页面滚动条样式*/
::-webkit-scrollbar {
  height: 0px;
}

/*NavBar*/
  #searchBtn{
    height: 8vw;
    width: 70vw;
    background-color: #eaeaea;
    border-radius: 20px;
    color: black;
  }

  /*div0*/
  #div0{
    width: 100vw;
    height: 34vh;
    border-bottom: 1px solid gray;
    background-color: white;
  }
  #div0Img{
    margin: 0 4vw 3vw 4vw;
    height: 20vh;
    width: 90vw;
    border-radius: 2%;
    overflow: hidden;
  }
  #uldiv{
    display: flex;
    /*width: 100vw;*/
    overflow: scroll;
  }
  #uldiv > ul{
    display: flex;
    list-style: none;
  }
  #uldiv > ul > li{
    font-size: 12px;
    overflow: auto;
  }

/*  index-module--1*/
  #module1-p{
    font-size: 20px;
    font-weight: 1000;
  }
  #module1-btn a{
    color: black;
    text-decoration: none;
    background-color: white;
}
  #module1-btn button{
    width: 15vw;
    height: 8vw;
    border: 1px black solid;
    background: none;
    border-radius: 20px;
  }
  #ul1{
    display:flex;
    width: 100vw;
    overflow: scroll;
  }
  #ul1 > li{
    margin-left: 3vw;
  }
  .ul1img{
    background-color: red;
    width: 26vw;
    height: 26vw;
    border-radius: 10%;
  }
  .ul1p{
    color: #999999;
    font-size: 12px;
    height: 10vw;
  }
/*  index-module--2*/


  #indexModule2{
    display: flex;
    overflow: scroll;
  }
  #module2btn1{
    background: none;
    border: none;
    font-size: 20px;
    font-weight: 1000;
  }
  #module2btn2{
    width: 15vw;
    height: 8vw;
    border: 1px black solid;
    background: none;
    border-radius: 20px;
  }
  .module2-ul1 > li > div{
    width: 90vw;
    display: flex;
  }
  .module2-ul1 > li > div > img{
    height: 15vw;
    width: 15vw;
    background-color: red;
    margin: 0vw 4vw 1vw 4vw;
  }
  .indexModule2-2{
    position: relative;
    display: flex;
    border-bottom: 1px solid black;
    width: 60vw;
  }
  .indexModule2-2 p:nth-child(1){
    font-size: 25px;
    line-height: 15vw;
  }
  .indexModule2-2 p:nth-child(2){
    margin-left: 2vw;
    font-size: 16px;
    line-height: 15vw;
  }
  .indexModule2-2 button{
      height: 8vw;
      width: 8vw;
      /*margin-top: 3vw;*/
      position: absolute;
      right: -8vw  ;
      top: 4vw;
  }

/*  index-module--3*/
  #indexModule3-ul{
    display:flex;
    width: 100vw;
    overflow: scroll;
  }
  #indexModule3-ul > li{
    margin-left: 3vw;
  }
  #indexModule3-ul > li > img{
    background-color: red;
    width: 26vw;
    height: 26vw;
  }
/* 底部 */
 .bottom{
   width: 100%;
   height: 27vw;
 }
</style>