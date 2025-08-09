// src/main.js

import { createApp } from 'vue'
import App from './App.vue'

// 1. 引入我們建立的 router
import router from './router'

import './assets/main.css'

const app = createApp(App)

// 2. 在掛載 App 之前，告訴 Vue 要使用 router
app.use(router)

app.mount('#app')
