import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CategoriesEdit from '../views/CategoriesEdit.vue'
import CategoriesList from '../views/Categorieslist.vue'
import ItemEdit from '../views/ItemsEdit.vue'
import ItemList from '../views/Itemslist.vue'
import HeroesEdit from '../views/HeroesEdit.vue'
import HeroesList from '../views/Heroeslist.vue'

Vue.use(VueRouter)

const routes = [
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
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
