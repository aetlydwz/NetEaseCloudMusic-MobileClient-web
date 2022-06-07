import { createRouter, createWebHashHistory } from 'vue-router'
import indexView from '../views/index.vue'
import store from "@/store/index.js";

const routes = [
  {
    path: '/',
    redirect:"/index"
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import(/* webpackChunkName: "about" */ '../views/index')
  },
  {
    path: '/search',
    name:'search',
    component: () => import('../views/searchDetail.vue')
  },
  {
    path: '/MoSonList',
    name:'MoSonList',
    component:() => import('../components/sonlist/MoSonList.vue')
  },
  {
    path:'/SonList',
    name:'SonList',
    component:() => import('../components/sonlist/SonList.vue')
  },
  {
    path:'/infoUser',
    name:'InfoUser',
    beforeEnter:(to,from,next)=>{
        if(store.state.isLogin ||store.state.token ||localStorage.getItem('token')){
          next()
        }else{
          next('/login')
        }
    },
    component:() => import('../views/infoUser.vue')
  },
  {
    path:'/login',
    name:'Login',
    component:() => import('../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
  router.beforeEach((to,form)=>{
    if(to.path=='/login'){
      store.state.isFooterMusic=false
    }else{
      store.state.isFooterMusic=true
    }
  })
export default router
