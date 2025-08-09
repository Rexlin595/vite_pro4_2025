<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <!-- 導覽列現在只剩下一個回到主目錄的連結 -->
      <RouterLink to="/" class="home-link">🏠 主目錄</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style>
/* 為了讓深色主題應用到整個頁面，我們將樣式從 scoped 改為全域 */
body {
  /* 與 HomeView.vue 的背景色 (bg-gray-900) 保持一致 */
  background-color: #111827;
}

header {
  line-height: 1.5;
  padding: 1rem 0;
  /* 與 HomeView.vue 卡片和 App.vue 其他元件的邊框顏色一致 */
  border-bottom: 1px solid #374151;
  /* 與 HomeView.vue 卡片的背景色 (bg-gray-800) 一致 */
  background-color: #000000;
}

nav {
  width: 100%;
  font-size: 1.1rem; /* 稍微放大字體 */
  text-align: center;
}

/* 移除舊的 a 標籤樣式，改用新的 home-link 樣式 */
.home-link {
  padding: 0.5rem 1.5rem;
  text-decoration: none;
  /* 在深色背景下清晰的淺灰色文字 */
  color: #d1d5db;
  transition: all 0.3s;
  border-radius: 8px;
}

.home-link:hover {
  background-color: #374151; /* 滑鼠懸停時的背景色 */
  color: #fff;
}

/* 當前 active 的連結樣式 */
.home-link.router-link-exact-active {
  color: #34d399; /* 鮮明的綠色，用於高亮 */
  font-weight: bold;
}

main {
  /* main 的樣式維持不變 */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: calc(100vh - 80px); /* 根據 header 高度微調 */
  padding-top: 2rem;
}
</style>
