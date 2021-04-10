import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CategoriesEdit from '../views/CategoriesEdit.vue'
import CategoriesList from '../views/Categorieslist.vue'
import ItemEdit from '../views/ItemsEdit.vue'
import ItemList from '../views/Itemslist.vue'
import HeroesEdit from '../views/HeroesEdit.vue'
import HeroesList from '../views/Heroeslist.vue'
import ArticlesEdit from '../views/ArticlesEdit.vue'
import ArticlesList from '../views/Articleslist.vue'
import AdsEdit from '../views/AdsEdit.vue'
import AdsList from '../views/Adslist.vue'
import AdminUserEdit from '../views/AdminUserEdit.vue'
import AdminUserList from '../views/AdminUserlist.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {path:'/login',name:'login',component:Login,meta:{isPublic:true}},
  {
    path: '/',
    name: 'Main',
    component: Main,
    children:[
      {path:'/categories/create',component:CategoriesEdit },
      {path:'/categories/list',component:CategoriesList },
      {path:'/categories/edit/:id',component:CategoriesEdit,props:true }, 
      {path:'/items/create',component:ItemEdit },
      {path:'/items/list',component:ItemList },
      {path:'/items/edit/:id',component:ItemEdit,props:true }, 
      {path:'/heroes/create',component:HeroesEdit },
      {path:'/heroes/list',component:HeroesList },
      {path:'/heroes/edit/:id',component:HeroesEdit,props:true }, 
      {path:'/articles/create',component:ArticlesEdit },
      {path:'/articles/list',component:ArticlesList },
      {path:'/articles/edit/:id',component:ArticlesEdit,props:true }, 
      {path:'/ads/create',component:AdsEdit },
      {path:'/ads/list',component:AdsList },
      {path:'/ads/edit/:id',component:AdsEdit,props:true }, 
      {path:'/admin_user/create',component:AdminUserEdit },
      {path:'/admin_user/list',component:AdminUserList },
      {path:'/admin_user/edit/:id',component:AdminUserEdit,props:true }, 
    ]
  },
]


const router = new VueRouter({
  routes
})
router.beforeEach((to,from,next)=>{
  if(!to.meta.isPublic&&!localStorage.token){
    return next('/login')
}
next()})
export default router
