import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import CountryStats from '@/views/CountryPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/country/:code',
    name: 'CountryStats',
    component: CountryStats,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
