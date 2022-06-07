<template>
  <div class="login">
    <div class="longinTop">欢迎登录</div>
    <div class="loginContent">
      <input type="text" name="phone" class="phone" placeholder="请输入手机号" v-model="phone">
      <input type="password" name="password" class="password" placeholder="请输入密码" v-model="password">
      <button class="btn" @click="getLogin">登录</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data(){
    return{
      phone:null,
      password:null,
      data:null,
      code:null,
      errmsg:null,
      token:null,
    }
  },
  methods:{
    getLogin(){
      axios.get('https://netease-cloud-music-api-theta-snowy-23.vercel.app/login/cellphone?phone='+this.phone+'&password='+this.password).then((res) =>{
        this.data = res.data
        this.code = res.data.code
        this.token = res.data.token
        console.log(this.data)
        console.log(this.code)
        if (this.code ==200){
          this.$store.state.uid = res.data.account.id
          this.$store.commit('updateToken',this.token)
          this.$store.commit('updateIsLogin',true)
          this.$router.push('/infoUser')
        }else{
          alert("手机号或者密码错误")
          this.password = ""
        }
      }).catch((err)=>{
        console.log(err)
        this.errmsg = err.response.data.message
        alert(err.response.data.message)
      })
    },
  }
}
</script>

<style scoped>
.login{
  background-color: skyblue;
  height: 100vh;
}
.longinTop{
  position: relative;
  top: 20vw;
  font-size: 25px;
  font-weight: 1000;
}
.phone{
  margin-top: 30vw;
  width: 60vw;
  height: 10vw;
}
.password{
  margin-top: 10vw;
  width: 60vw;
  height: 10vw;
}
.btn{
  position: absolute;
  top: 50vh;
  left: 50vw;
  width: 30vw;
  height: 10vw;
  transform: translateX(-50%);
  background-color: white;
  border-radius: 20px;
}

</style>