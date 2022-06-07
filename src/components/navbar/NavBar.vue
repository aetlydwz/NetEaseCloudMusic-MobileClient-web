<template>
  <div class="nav" :style="{backgroundColor:bgColor}">

    <div class="left" @click="left">
      <slot name="left"></slot>
    </div>

    <div class="center" @click="center">
      <slot name="center"></slot>
    </div>

    <div class="right" @click="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props:{
    bgColor:{
      type:String,
      default:"#ff0000"
    }
  },
  methods:{
      left(){
        this.$emit("left");
      },
      right(){
        this.$emit("right")
      },
    center(){
      this.$emit("center")
    }
  }
}
</script>

<style scoped>

.nav{
  display: flex;
  height: 8vw;
  padding: 1vw 2vw;
  line-height: 8vw;
  color: #fff;
  justify-content: space-between;
  align-content: center;
}
</style>