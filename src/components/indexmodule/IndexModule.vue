<template>
  <div class="indexModule" :style="{backgroundColor:bgColor}">
    <div class="top">
      <div>
        <slot name="left"></slot>
      </div>
      <div>
        <slot name="right"></slot>
      </div>
    </div>
    <div class="bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: "IndexModule",
  props:{
    bgColor:{
      type:String,
      default:'#fff',
    },
    btnVal:{
      type:String,
      default:null,
    }
  },
  methods:{
  },
}
</script>

<style scoped>
  .indexModule{
    border-radius: 5%;
    width: 100vw;
    margin: 1vw 0;
    border: 1px #999999 solid;
    /*border: none;*/
    box-sizing: border-box;
  }
  .top{
    display: flex;
    justify-content: space-between;
  }
  .top div:nth-child(1){
    margin: 3vw;
  }
  .top div:nth-child(2){
    margin: 3vw;
  }
  .bottom{}
</style>