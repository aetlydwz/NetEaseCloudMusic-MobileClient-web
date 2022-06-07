<template>
  <ul class="wrapper">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
.wrapper{
  display: flex;
  justify-content: space-around;
  align-content: center;
  position: fixed;
  bottom: 0px;
  left: 0px;
  border-top:1px solid #F0F0F0;
  width: 100%;
  padding: 1vw;
  height: 10vw;
  background-color: white;
}
</style>