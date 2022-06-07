<template>
  <div class="FooterMusic">
    <div class="footerleft" @click="updateDetailShow">
      <img :src="playList[playListIndex].al.picUrl" alt=""/>
      <div>
        <p>{{playList[playListIndex].al.name.substring(0,10)}}</p>
      </div>
    </div>
    <div class="footerright">
<!--         <p @click="play" v-if="isbtnShow">播放</p>-->
      <font-awesome-icon style="color:#000;" class="boticon" @click="play" v-if="isbtnShow" :icon="['fas', 'play']"/>
      <font-awesome-icon style="color:#000;" class="boticon" @click="play" v-else :icon="['fas', 'pause']"/>
<!--         <p @click="play" v-else>暂停</p>-->
    </div>
      <audio ref="audio" :src="'https://music.163.com/song/media/outer/url?id='+this.playList[this.playListIndex].id+'.mp3'"/>
    <van-popup v-model:show="detailShow" position="right" :style="{ height: '100%',width:'100%' }" >
      <MusicDetail :musicList="playList[playListIndex]" :play="play" :isbtnShow="isbtnShow"/>
    </van-popup>
  </div>
</template>

<script>
import MusicDetail from "@/components/MusicDetail";
import{mapState,mapMutations} from 'vuex'
export default {
  name: "FooterMusic",
  components:{
    MusicDetail
  },
  computed:{
    ...mapState(["playList","playListIndex",'isbtnShow','detailShow'])
  },
  methods:{
    play(){
      if(this.$refs.audio.paused){
        this.$refs.audio.play();
        this.updateIsbtnShow(false)
      }else {
        this.$refs.audio.pause();
        this.updateIsbtnShow(true)
      }
    },
      ...mapMutations(['updateIsbtnShow','updateDetailShow']),
  },
  watch:{
    playListIndex(){
      console.log("playListIndex改变")
      this.$refs.audio.autoplay=true;
      if(this.$refs.audio.paused){
        this.updateIsbtnShow(false)
      }
    },
    playList(){
      if(this.isbtnShow){
        this.$refs.audio.autoplay=true;
        this.updateIsbtnShow(false)
      }
    }
  },
  mounted(){
  }
}
</script>

<style scoped>
  .FooterMusic{
    display: flex;
    width: 100vw;
    height: 15vw;
    background: white;
    position: fixed;
    bottom: 12vw;
    border-top: 1px solid #999;
    flex: 0;
    flex-wrap: nowrap;
  }
  .footerleft{
    width: 70vw;
    height: 100%;
    display: flex;
  }
  .footerleft img{
    width: 12vw;
    height: 12vw;
    border-radius: 50%;
    margin: 1vw;
  }
  .footerleft p{
    position: fixed;
    margin-left: 5vw;
    font-size: 20px ;
    margin-top: 5vw;
    flex-wrap: nowrap;
  }
  .footerright{
    position: absolute;
    display: flex;
    height: 15vw;
    width: 20vw;
    right: 0;
    line-height: 16vw;
  }
  .boticon{
    position: absolute;
    font-size: 20px;
    top: 5vw;
    right: 8vw;
  }
</style>