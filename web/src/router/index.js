import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Home from '../views/Home.vue'
import Article from '../views/Article.vue'
import Hero from '../views/Hero.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children:[
      {path:'/',name:'carrousel',component:Home},
      {path:'/articles/:id',name:'articles',component:Article,props:true}
    ], 
  },
  {
    path:'/heros/:id' , name:'hero' ,component:Hero ,props:true
  },
]

const router = new VueRouter({
  routes
})

export default router
