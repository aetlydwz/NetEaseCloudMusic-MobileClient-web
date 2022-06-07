import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Swipe, SwipeItem } from 'vant';
import { Button } from 'vant';
import {Popup } from 'vant'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faArrowLeft,faBars,faHome,faCompass,faFileAlt,faUser,faPause,faPlay,faStepBackward,faStepForward
    ,faSearch,faCalendar,faCalendarDay,faHeadphones,faBook,faGamepad,faBullseye,faLayerGroup,faHeartbeat
    ,faBarChart

}  from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faArrowLeft,faBars,faHome,faCompass,faFileAlt,faUser,faPause,faPlay,faStepBackward
    ,faStepForward,faSearch,faCalendar,faCalendarDay,faHeadphones,faBook,faGamepad,faBullseye
    ,faLayerGroup,faHeartbeat,faBarChart
)

import './assets/style/css/ reset.css'

let app = createApp(App);//注册全局组件
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(Swipe).use(Popup).use(SwipeItem);
app.use(store).use(Button).use(router).mount('#app')
