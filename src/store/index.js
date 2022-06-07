import { createStore } from 'vuex'

export default createStore({
  state: {
    playList:[{
      al:{
        id: 73820920,
        name: "A Time For Everything",
        pic: 109951163593249700,
        picUrl: "https://p2.music.126.net/8cAOlNPJfRFvcgRb5lzZxQ==/109951163593249700.jpg",
        pic_str: "109951163593249700"
      },
      id: 1845434968
    }],
    playListIndex:0,
    isbtnShow:true,
    detailShow:false,
    isLogin:false,
    isFooterMusic:true,
    token:"",
    uid:null,
  },
  getters: {
  },
  mutations: {
    updateIsbtnShow(state,value){
        state.isbtnShow = value
    },
    updatePlayList(state,value){
      state.playList=value
      console.log(state.playList);
    },
    updatePlayListIndex(state,value){
      state.playListIndex = value
    },
    updateDetailShow(state){
      state.detailShow=!state.detailShow
    },
    pushPlayList(state,value){
      state.playList.push(value)
    },
    updateIsLogin(state,value){
      state.isLogin=true
      localStorage.setItem('token',state.token)
      localStorage.setItem('WYuid',state.uid)
    },
    updateToken(state,value){
      state.token=value
    }
  },
  actions: {
  },
  modules: {
  }
})
