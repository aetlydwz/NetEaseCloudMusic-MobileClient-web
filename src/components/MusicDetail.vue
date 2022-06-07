<template>
  <img :src="musicList.al.picUrl" alt="" class="bgimg">
  <div class="detailTop">
    <div class="detailTopLeft">
      <font-awesome-icon style="color:#000;" id="fhicon" @click="updateDetailShow" :icon="['fas', 'arrow-left']"/>
      <div class="detailTopCen">
        <p>{{musicList.al.name}}</p>
        <span v-for="item in musicList.ar" :key="item">
            {{item.name}}
        </span>
      </div>
    </div>
    <div class="detailTopRight">

    </div>
  </div>
  <div class="detailBody">
    <img :src="musicList.al.picUrl" class="arImg" :class="{img_ar_active:!isbtnShow,img_ar_paues:isbtnShow}">
  </div>
  <div class="detailFooter">
    <div class="detailFooter1">
      <font-awesome-icon style="color:#000;" @click="goPlay(-1)" class="boticon1"  :icon="['fa', 'step-backward']"/>
    </div>
    <div class="detailFooter2">
      <font-awesome-icon style="color:#000;" class="boticon" @click="play" v-if="isbtnShow" :icon="['fas', 'play']"/>
      <font-awesome-icon style="color:#000;" class="boticon" @click="play" v-else :icon="['fas', 'pause']"/>
    </div>
    <div class="detailFooter3">
      <font-awesome-icon style="color:#000;" @click="goPlay(1)" class="boticon2" :icon="['fa', 'step-forward']"/>
    </div>
  </div>
</template>

<script>
import {mapMutations,mapState} from "vuex";

export default {
  name: "MusicDetail",
  props:['musicList','isbtnShow','play'],
  computed:{
    ...mapState(['playListIndex','playList'])
  },
  methods:{
    ...mapMutations(['updateIsbtnShow','updateDetailShow','updatePlayListIndex']),
    goPlay(num){
      let index = this.playListIndex+num
      if(index<0){
        index = this.playList.length-1
      }else if(index==this.playList.length){
        index = 0
      }
      this.updatePlayListIndex(index)
    }
  }
}
</script>

<style scoped>
  .detailTopLeft{
    display: flex;
    height: 10vw;
  }
  #fhicon{
    font-size: 30px;
    margin: 5vw;
  }
  .detailTopCen{
    width: 100%;
    position: absolute;
    top: 15vw;
    margin: 0 auto ;
    font-size: 20px;
    color: white;
  }
  .bgimg{
    width: 100vw;
    height: 100vh;
    transform: translateX(-50%);
    position: absolute;
    z-index: -1;
    filter: blur(50px);
    /*justify-content: center;*/
    /*align-content: center;*/
    object-fit: cover;
  }
  .detailBody{
    height: 60vh;
    width: 100vw;
  }
  .arImg{
    height: 60vw;
    width: 60vw;
    margin-top: 20vh;
    border-radius: 50%;
    animation: rotate_ar 10s linear infinite;
  }
  .img_ar_active{
    animation-play-state: running;
  }
  .img_ar_paues {
    animation-play-state: paused;
  }
  @keyframes rotate_ar {
    0%{
      transform: rotateZ(0deg);
    }
    100%{
      transform: rotateZ(360deg);
    }
  }
  .detailFooter{
    position: absolute;
    bottom: 20vh;
    width: 100vw;
    display: flex;
    justify-content: center;
  }
  .boticon1{
    font-size: 20px;
    margin-right: 15vw;
    margin-top: 4vw;
  }
  .boticon2{
    font-size: 20px;
    margin-left: 15vw;
    margin-top: 4vw;
  }
  .boticon{
    font-size: 50px;
  }
</style>