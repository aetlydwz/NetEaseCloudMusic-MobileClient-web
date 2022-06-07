<template>
  <div id="SonMain">
    <img  :src="sonlistimg" alt="" id="SonMainImg">
    <font-awesome-icon @click="$router.go(-1)" id="backicon" :icon="['fas', 'arrow-left']"/>
    <div id="SoMain0" >
      <div id="Sondiv0">
        <img :src="sonlistimg">
        <div id="Sondiv0-1">
          <p>{{sonlistname}}</p>
          <p>作者&nbsp;:&nbsp;{{ar}}</p>
          <p>类别&nbsp;:&nbsp;{{tags}}</p>
          <p>{{description}}</p>
        </div>
      </div>
      <div id="Sondiv1">
        <div>
          <p>收藏</p>
        </div>
        <div>
          <p>评论</p>
        </div>
        <div>
          <p>分享</p>
        </div>
      </div>
    </div>
    <div id="Sondiv2">
      <div id="Sondiv2-1">
        <img>
        <p>播放全部</p>
        <span>({{trackCount}})</span>
      </div>
        <ul>
          <li v-for="(item,i) in son">
            <div id="Sondiv2-2" @click="playMusic(i)">
              <p>{{i+1}}</p>
              <div id="Sondiv2-2P">
                <p>{{item.name.substring(0,10)}}</p>
                <p>{{item.ar[0].name}}</p>
              </div>
              <button>播放</button>
            </div>
          </li>
        </ul>
    </div>
  </div>

  <div style="height: 12vw">

  </div>
</template>

<script>
import axios from "axios";
import {useRoute} from 'vue-router'
import {mapMutations} from "vuex";
export default {
  name: "Son",
  components:{
  },
  data(){
    return{
      sonListId:null,
      resdata:null,
      son:null,
      ar:null,
      sonlist:null,
      sonlistimg:null,
      sonlistname:null,
      description:null,
      tags:null,
      trackCount:null,
      sonar:null,
    }
  },
  methods:{
    getdata(){
        axios.get('https://netease-cloud-music-api-theta-snowy-23.vercel.app/playlist/track/all?id='+this.sonListId+'&limit=10&offset=1').then((res) =>{
        this.resdata = res.data
        this.son = res.data.songs
        console.log(this.resdata)
        console.log(this.son)
      })
    },
    getsonlist(){
      axios.get('https://netease-cloud-music-api-theta-snowy-23.vercel.app/playlist/detail?id='+this.sonListId).then((res) =>{
        this.sonlist = res.data.playlist
        this.sonlistimg = res.data.playlist.coverImgUrl
        console.log(res.data.playlist)
        this.sonlistname = res.data.playlist.name
        this.ar = res.data.playlist.creator.nickname
        this.trackCount = res.data.playlist.trackCount
        if(res.data.playlist.description==""){
          this.description = '作者什么都没写'
        }else {
          this.description = res.data.playlist.description
        }
        if(this.description.length > 100){
            this.description = this.description.substring(0,100)+'......';
        }

        this.tags = res.data.playlist.tags
      })
    },
    playMusic(i){
        this.updatePlayList(this.son)
      this.updatePlayListIndex(i)
    },
    ...mapMutations(['updatePlayList','updatePlayListIndex'])
  },
  created() {
    this.sonListId = useRoute().query.id
  },
  mounted() {
    this.getdata()
    this.getsonlist()
  }
}
</script>

<style scoped>
/*div0*/
  #SonMain{
    width: 100vw;
  }
#SoMain0{

}

#backicon{
  font-size: 24px;
  color: black;
  margin-top: 2vw;
  margin-left: -90vw;
}
#SonMainImg{
  height: 60vw;
  width: 100vw;
  position: absolute;
  object-fit: cover;
  top: 0px;
  left: 0px;
  z-index: -1;
  filter: blur(20px);
}
  #Sondiv0{
    display: flex;
  }
    #Sondiv0 img{
    width: 30vw;
    height: 30vw;
    margin: 5vw;
      border-radius: 10px;
  }
    #Sondiv0 p:nth-child(1){
      margin-top: 5vw;
      color: white;
      font-size: 20px;
      flex-wrap: wrap;
      font-weight: 1000;
      text-align: left;
    }
    #Sondiv0 p:nth-child(2){
      color: white;
      font-size: 15px;
      text-align: left;
      margin-top: 1vw;
    }
    #Sondiv0 p:nth-child(3){
      color: #eaeaea;
      font-size: 10px;
      text-align: left;
      margin-top: 1vw;
    }
    #Sondiv0 p:nth-child(4){
      color: #eaeaea;
      font-size: 10px;
      text-align: left;
      margin-top: 1vw;
    }

/*div1*/
  #Sondiv1{
    display: flex;
    width: 70vw;
    margin: 0 auto;
    justify-content: center;
    align-content: center;
    background-color: white;
    opacity: 0.5;
    height: 10vw;
    border-radius:20px;
  }
  #Sondiv1 div{
    width: 20vw;
    height: 6vw;
    margin: auto 0;
  }
  #Sondiv1 div:nth-child(2){
    border-right: 1px #b7b7b7 solid;
    border-left: 1px #b7b7b7 solid;
  }
  #Sondiv1 p{
    line-height: 7vw;
  }

/*  div2*/
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