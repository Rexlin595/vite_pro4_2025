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
      <RouterLink to="/week_hw_tc">Week_hw_tc</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  padding: 1rem 0;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
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
  border-left: 1px solid var(--color-border);
  text-decoration: none;
  color: #2c3e50;
  transition: color 0.3s;
}

nav a:first-of-type {
  border: 0;
}

/* 這個樣式會應用在當前 active 的連結上 */
nav a.router-link-exact-active {
  color: hsla(160, 100%, 37%, 1);
  font-weight: bold;
}

main {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: calc(100vh - 100px); /* 減去 header 的高度 */
  padding-top: 2rem;
  background-color: #f0f2f5;
}
</style>
