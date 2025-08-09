<script setup>
// 現在我們不需要在這裡 import 所有元件了
// vue-router 會根據 URL 自動載入對應的元件
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">飲品菜單</RouterLink>
      <RouterLink to="/bmi">BMI 計算機</RouterLink>
      <RouterLink to="/computed">Computed 範例</RouterLink>
      <RouterLink to="/week1">Week 1</RouterLink>
      <RouterLink to="/week2">Week 2</RouterLink>
      <RouterLink to="/week1_hw_tc">Week1 作業</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style>
/* 為了讓深色主題應用到整個頁面，我們將樣式從 scoped 改為全域 */
/* 如果您只想修改這個元件，可以保留 scoped，但建議全域統一主題 */
body {
  background-color: #111827; /* Tailwind's gray-900 */
}

header {
  line-height: 1.5;
  padding: 1rem 0;
  border-bottom: 1px solid #374151; /* Darker border (gray-700) */
  background-color: #1f2937; /* Dark background (gray-800) */
}

nav {
  width: 100%;
  font-size: 1rem;
  text-align: center;
  margin-top: 1rem;
}

nav a {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-left: 1px solid #4b5563; /* gray-600 */
  text-decoration: none;
  color: #d1d5db; /* Lighter text color for dark background (gray-300) */
  transition: color 0.3s;
}

nav a:first-of-type {
  border: 0;
}

/* 這個樣式會應用在當前 active 的連結上 */
nav a.router-link-exact-active {
  color: #34d399; /* A vibrant color for active link (emerald-400) */
  font-weight: bold;
}

main {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: calc(100vh - 80px); /* 根據 header 高度微調 */
  padding-top: 2rem;
  /* 背景色由 body 控制，這裡不需要再設定 */
}
</style>
