<template>
  <div class="container mx-auto p-4 md:p-8">
    <div class="text-center mb-12">
      <h1 class="text-4xl md:text-5xl font-bold text-white">Vue 專案展示</h1>
      <p class="text-lg text-gray-400 mt-4">點擊下方卡片查看各個獨立頁面範例</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- 飲品菜單 -->
      <RouterLink to="/drink-menu" class="card-link">
        <div class="card">
          <div class="card-icon bg-green-500">🥤</div>
          <h3 class="card-title">飲品菜單</h3>
          <!-- ↓↓↓ 更新了這裡的描述 ↓↓↓ -->
          <p class="card-description">整合深色主題的庫存管理表格，可即時編輯品項與數量。</p>
        </div>
      </RouterLink>

      <!-- BMI 計算機 -->
      <RouterLink to="/bmi" class="card-link">
        <div class="card">
          <div class="card-icon bg-blue-500">⚖️</div>
          <h3 class="card-title">BMI 計算機</h3>
          <p class="card-description">一個互動式的 BMI 計算器，根據輸入即時反應。</p>
        </div>
      </RouterLink>

      <!-- Computed 範例 -->
      <RouterLink to="/computed" class="card-link">
        <div class="card">
          <div class="card-icon bg-purple-500">⚙️</div>
          <h3 class="card-title">Computed 範例</h3>
          <p class="card-description">展示 Vue 的 computed 屬性如何簡化模板邏輯。</p>
        </div>
      </RouterLink>

      <!-- Week 1 -->
      <RouterLink to="/week1" class="card-link">
        <div class="card">
          <div class="card-icon bg-yellow-500">1️⃣</div>
          <h3 class="card-title">Week 1</h3>
          <p class="card-description">第一週的練習或筆記內容展示頁面。</p>
        </div>
      </RouterLink>

      <!-- Week 2 -->
      <RouterLink to="/week2" class="card-link">
        <div class="card">
          <div class="card-icon bg-red-500">2️⃣</div>
          <h3 class="card-title">Week 2</h3>
          <p class="card-description">第二週的練習或筆記內容展示頁面。</p>
        </div>
      </RouterLink>

      <!-- Week1 作業 -->
      <RouterLink to="/week1_hw_tc" class="card-link">
        <div class="card">
          <div class="card-icon bg-indigo-500">🎓</div>
          <h3 class="card-title">學生名單 (作業)</h3>
          <p class="card-description">使用 Tailwind CSS 設計的深色模式成績單表格。</p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.card-link {
  text-decoration: none;
}

.card {
  @apply bg-gray-800 rounded-xl p-6 text-center transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.card-icon {
  @apply w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 shadow-lg;
}

.card-title {
  @apply text-xl font-bold text-white mb-2;
}

.card-description {
  @apply text-gray-400 text-sm;
}
</style>
