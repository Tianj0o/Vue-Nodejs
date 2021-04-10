import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
Vue.config.productionTip = false
import './style.css'
import http from './http'
Vue.prototype.$http =http
Vue.mixin({
  methods:{
    getAuthheaders(){
      return {
        Authorization:`Bearer ${localStorage.token || ''}`
      }
    }
  }
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

