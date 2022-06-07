<template>
  <van-swipe :autoplay="3000" lazy-render>
    <van-swipe-item v-for="image in state.images" :key="image">
      <img :src="image.pic" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import axios from "axios";
import {reactive,onMounted} from "vue";

export default {
  setup() {
    const state = reactive({
      images:[
      'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
      'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
    ]});
    onMounted(() =>{
      axios.get('https://netease-cloud-music-api-theta-snowy-23.vercel.app/banner?type=2').then((res) =>{
        state.images = res.data.banners
      }).catch((err) => {
        console.log(err)
      })
    })
    return { state };
  },
};
</script>

<style scoped>
  img{
    height: 20vh;
    width: 90vw;
    border-radius: 2%;
  }
</style>