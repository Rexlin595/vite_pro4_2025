import { createRouter, createWebHistory } from 'vue-router'

// 引入所有需要的元件
import HomeView from '../components/HomeView.vue' // 引入新的主目錄頁面
import DrinkMenu from '../components/DrinkMenu.vue'
import BMI from '../components/BMI.vue'
import Computed from '../components/computed.vue'
import Week1 from '../components/week1_1.vue'
import Week2 from '../components/week1_2.vue'
import Week1_hw_tc from '../components/week1_hw_tc.vue'

const routes = [
  {
    path: '/', // 根路徑現在指向主目錄
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/drink-menu', // 將飲品菜單的路徑改為 /drink-menu
    name: 'DrinkMenu',
    component: DrinkMenu,
  },
  {
    path: '/bmi',
    name: 'BMI',
    component: BMI,
  },
  {
    path: '/computed',
    name: 'Computed',
    component: Computed,
  },
  {
    path: '/week1',
    name: 'Week1',
    component: Week1,
  },
  {
    path: '/week2',
    name: 'Week2',
    component: Week2,
  },
  {
    path: '/week1_hw_tc',
    name: 'Week1_hw_tc',
    component: Week1_hw_tc,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
