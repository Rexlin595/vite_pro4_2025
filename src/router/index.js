import { createRouter, createWebHistory } from 'vue-router'

// 引入您要當作頁面的元件
import DrinkMenu from '../components/DrinkMenu.vue'
import BMI from '../components/BMI.vue'
import Computed from '../components/Computed.vue'
import Week1 from '../components/week1_1.vue'
import Week2 from '../components/week1_2.vue'
import Week_hw_tc from '../components/week_hw_tc.vue'

// 定義路由規則 (Routes)
// 每個路由規則都是一個物件，包含 path, name, และ component
const routes = [
  {
    path: '/', // 網址路徑
    name: 'DrinkMenu', // 路由名稱 (可選，但建議使用)
    component: DrinkMenu, // 對應的元件
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
    path: '/week_hw_tc',
    name: 'Week_hw_tc',
    component: Week_hw_tc,
  },
]

// 建立 Router 實例
const router = createRouter({
  history: createWebHistory(),
  routes, // 將我們定義的路由規則陣列放入
})

// 將 Router 實例匯出
export default router
