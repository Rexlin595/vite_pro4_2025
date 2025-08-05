<script setup>
// 1. 移除預設元件的 import
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'

// 2. 加入 DrinkMenu 元件的 import
import DrinkMenu from './components/DrinkMenu.vue'
</script>

<template>
  <main>
    <DrinkMenu />
  </main>
</template>

<style scoped>
/* 4. 清理掉舊的樣式，換上簡單的置中排版樣式 */
main {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding-top: 5rem; /* 讓表格離頂部有一點距離 */
  background-color: #f0f2f5; /* 換個柔和的背景色 */
}
</style>
