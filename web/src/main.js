import Vue from 'vue'
import App from './App.vue'
import './style.scss'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Card from './components/Card.vue'
import ListCard from './components/Listcard.vue'
import './style.scss'
import './assets/iconfont/iconfont.css'
import 'swiper/swiper-bundle.css'
Vue.component('m-card',Card)
Vue.component('m-list-card',ListCard)
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
