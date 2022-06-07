<template>
  <li @click="onJump" :class="{'active':this.$route.fullPath==this.path}">
    <font-awesome-icon :icon="['fas', icon]"/>
    <span v-text="text"></span>
  </li>

</template>

<script>
export default {
  name: "TabItem",
  props:{
    icon:{
      type:String,
      default:""
    },
    text:{
      type:String,
      default:""
    },
    path:{
      type:String,
      default:""
    },

  },
  methods:{
    onJump(){
      //如果是否当前的路由等于this.path
      //不是 调用push方法
      if(this.$route.fullPath==this.path){
        return;
      }
      this.$router.push({"path":this.path})
    }
  }
}
</script>

<style scoped>
li {
  display: flex;
  flex-direction: column;
  color: #999;
}

li > span {
  margin-top: 2px;
}

.active{
  color: red;
}

</style>