<template>
  <NavBar bg-color="#ffffff">
    <template v-slot:left>
      <font-awesome-icon style="color: black;font-size: 22px;margin: 1vw" @click="$router.go(-1)" :icon="['fas', 'arrow-left']"/>
    </template>
    <template v-slot:center>
      <input type="text"
             id="input-search"
             placeholder="周杰伦"
             v-model='searchKey'
      >
    </template>
    <template v-slot:right>
<!--      <button id="bnt-search" @click="enterKey();search();" >搜索</button>-->
      <font-awesome-icon id="bnt-search" @click="enterKey();search();" :icon="['fas', 'search']"/>
    </template>
  </NavBar>
  <div class="searchHistory">
    <p @click="delHistory">删除历史</p>
    <p class="searchHistorySpan"
       v-for="item in keyWorldList"
       :key="item"
       @click="searchHistory(item)"
    >{{item}}</p>
  </div>

  <div id="Sondiv2">
    <div id="Son  div2-1">
<!--      <img>-->
<!--      <p>播放全部</p>-->
    </div>
    <ul>
      <li v-for="(item,i) in searchList">
        <div id="Sondiv2-2" @click="updateIndex(item)">
          <p>{{i+1}}</p>
          <div id="Sondiv2-2P">
            <p>{{item.name.substring(0,10)}}</p>
            <p>{{item.artists[0].name}}</p>
          </div>
          <button>播放</button>
        </div>
      </li>
    </ul>
  </div>
  <div style="height: 27vw">

  </div>
</template>

<script>
import NavBar from "@/components/navbar/NavBar";
import axios from 'axios'
import {mapMutations} from "vuex";

export default {
  name: "search",
  data(){
    return{
      data:null,
      searchList:[],
      keywords:null,
      keyWorldList:[],
      searchKey:""
    }
  },
  components: {NavBar},
  mounted() {
    this.keyWorldList=JSON.parse(localStorage.getItem('keyWorldList') )? JSON.parse(localStorage.getItem("keyWorldList")) :[]
  },
  methods:{
    ...mapMutations(['updateSearchShow']),

    enterKey(){
      if(this.searchKey !=""){
        this.keyWorldList.unshift(this.searchKey)
        this.keyWorldList=[...new Set(this.keyWorldList)]
        if(this.keyWorldList.length>5){
          this.keyWorldList.splice(this.keyWorldList.length-1,1)
        }
        localStorage.setItem("keyWorldList",JSON.stringify(this.keyWorldList))
      }
    },
    delHistory(){
      localStorage.removeItem("keyWorldList")
      this.keyWorldList=[]
    },
    searchHistory(item){
      let text = item
      axios({
        method:'GET',
        url:'https://netease-cloud-music-api-theta-snowy-23.vercel.app/search?keywords='+text,
      }).then((resp) => {
        this.searchList = resp.data.result.songs;
        console.log(this.searchList)
      }).catch((err)=>{
        console.log(err)
      })
    },
    search(){
      let text = this.searchKey
      axios({
        method:'GET',
        url:'https://netease-cloud-music-api-theta-snowy-23.vercel.app/search?keywords='+text,
      }).then((resp) => {
        this.searchList = resp.data.result.songs;
        console.log(this.searchList)
      }).catch((err)=>{
        console.log(err)
      })
         this.searchKey = ""
    },
    updateIndex(item){
      item.al=item.album
      item.al.picUrl=item.album.artist.img1v1Url
      this.$store.commit("pushPlayList",item)
      this.$store.commit("updatePlayListIndex",this.$store.state.playList.length-1)
    }

  }
}
</script>

<style scoped>
  ::-webkit-scrollbar {
    height: 0px;
  }
   #input-search{
     height: 6vw;
     color: black;
   }
   #bnt-search{
     color: black;
     margin:1vw;
     font-size: 22px;
   }
  .searchHistory{
    width: 100vw;
    height: 8vw;
    position: relative;
    display: flex;
    overflow: scroll;
  }
  .searchHistory p:nth-child(1){
    width: 15vw;
    margin: 2vw;
    font-size: 12px;
    height: 5vw;
    min-width: 15vw;
  }
  .searchHistorySpan{
    background-color: #eaeaea;
    border-radius: 10px;
    margin: 1vw;
    line-height: 7vw;
    font-size: 15px;
  }

  /*Sondiv2*/
  #Sondiv2-1{
    margin-top: 5vw;
    display: flex;
  }
  #Sondiv2-1 img{
    width: 8vw;
    height: 8vw;
    background-color: skyblue;
    margin-top: 1vw;
    margin-left: 2vw;
  }
  #Sondiv2-1 p{
    margin-top: 2vw;
    margin-left: 10vw;
    font-size: 18px;
    font-weight: 1000;
  }
  #Sondiv2-1 span{
    margin-top: 4vw;
    color: #999999;
  }

  /*           <div id="Sondiv2-2">
              <p>num</p>
              <div id="Sondiv2-2P">
                <p>name</p>
                <p>name</p>
              </div>
              <span>播放</span>
            </div>*/
  #Sondiv2-2{
    display: flex;
    border-bottom: 1px solid #999999;
  }
  #Sondiv2-2 p{
    height: 15vw;
    width: 15vw;
    line-height: 15vw;
  }
  #Sondiv2-2P{
    height: 15vw;
  }
  #Sondiv2-2P p:nth-child(1){
    height: 10vw;
    width: auto;
    font-size: 20px;
    line-height: 10vw;
    text-align: left;
  }
  #Sondiv2-2P p:nth-child(2){
    height: 5vw;
    width: auto;
    font-size: 12px;
    line-height: 5vw;
    text-align: left;
  }
  #Sondiv2-2 button{
    position: absolute;
    left: 85vw;
    margin-top: 5vw;
    background: none;
    border-radius: 20px;
  }
</style>