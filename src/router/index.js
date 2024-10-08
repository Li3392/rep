import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import HomePage from '@/views/Home/HomePage.vue'
import SlieHomp from '@/views/Home/SlieHomp.vue'
import WwwCom from '@/views/WwwCom.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/slieHomp',
      name: 'slieHomp',
      component:SlieHomp
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path:'/homeview',
      name:'homeview',
      component:HomeView
    },{
      path:'/wwwcom',
      name:'wwwcom',
      component:WwwCom
    }
  ]
})

export default router
