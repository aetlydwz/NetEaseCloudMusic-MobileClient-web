<template>
  <NavBar bg-color="#fff">
    <template v-slot:left>
      <font-awesome-icon style="color:#000;margin: 1vw;  font-size: 30px" :icon="['fas', 'bars']"/>
    </template>
    <template v-slot:right>
      <font-awesome-icon style="color:#000; margin: 1vw;font-size: 30px" :icon="['fas', 'search']"/>
    </template>
  </NavBar>
  <div id="user">
    <div class="userTop">
      <img class="userImg" :src="userImg">
      <div class="userTop1">
        <p>{{username}}</p>
        <p><span>{{follows}} 关注</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>{{followeds}} 粉丝</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>LV:{{userlv}}</span></p>
      </div>
    </div>
    <div class="userBody">
      <div>
        <font-awesome-icon style="font-size: 40px" :icon="['fas', 'calendar-day']"/>
        <p>最近播放</p>
      </div>
      <div>
        <font-awesome-icon  style="font-size: 40px" :icon="['fas', 'home']"/>
        <p>本地下载</p>
      </div>
      <div>
        <font-awesome-icon style="font-size: 40px" :icon="['fas', 'bullseye']"/>
        <p>云盘</p>
      </div>
      <div>
        <font-awesome-icon style="font-size: 40px" :icon="['fas', 'book']"/>
        <p>已购</p>
      </div>
      <div>
        <font-awesome-icon style="font-size: 40px" :icon="['fas', 'layer-group']"/>
        <p>我的好友</p>
      </div>
      <div>
        <font-awesome-icon style="font-size: 40px" :icon="['fas', 'heartbeat']"/>
        <p>收藏和点赞</p>
      </div>
      <div>
        <font-awesome-icon style="font-size: 40px" :icon="['fas', 'headphones']"/>
        <p>我的播客</p>
      </div>
      <div>
        <font-awesome-icon style="font-size: 40px" :icon="['fas', 'gamepad']"/>
        <p>音乐罐子</p>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/navbar/NavBar";
import axios from "axios";

export default {
  name: "infoUser",
  components:{
    NavBar
  },
  data(){
    return{
      // uid:this.$store.state.uid,
      uid:localStorage.getItem('WYuid'),
      resdata:null,
      userImg:null,
      username:null,
      followeds:null,
      follows:null,
      userlv:null,
    }
  },
  mounted() {
    console.log(this.uid);
    this.getUser()
  },
  methods:{
    ///user/detail?uid=32953014
    getUser(){
      axios.get('https://netease-cloud-music-api-theta-snowy-23.vercel.app/user/detail?uid='+this.uid).then((res) =>{
        this.resdata = res.data
        this.userImg = res.data.profile.avatarUrl
        this.username = res.data.profile.nickname
        this.followeds = res.data.profile.followeds
        this.follows = res.data.profile.follows
        this.userlv = res.data.userPoint.balance
        console.log(this.resdata)
      })
    },
  }
}
</script>

<style scoped>
.userImg{
  height: 25vw;
  width: 25vw;
  object-fit: cover;
  justify-content: center;
  align-items: center;
  margin-top: 0vw;
  border-radius: 50%;
}
.userTop1{
  position: relative;
  height: 25vw;
  width: 90vw;
  margin: 0 auto;
  border: 1px silver solid;
  border-radius: 10px;
  top: -10vw;
  z-index: -1;
}
.userTop1 p:nth-child(1){
  position: relative;
  top: 9vw;
  font-size: 25px;
  font-weight: 900;
}
.userTop1 p:nth-child(2){
  position: relative;
  top: 9vw;
  margin: 1vw;
  color: #b7b7b7;
}

/* userBody */
.userBody{
  position: relative;
  height: 40vw;
  width: 90vw;
  margin: 1vw auto;
  border: 1px silver solid;
  border-radius: 10px;
  top: -10vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
}
.userBody div {
  height: 18vw;
  width: 22vw;
}
.userBody > div > p{
  margin-top: 1vw;
  font-size: 13px;
  color: #999999;
}
</style>