<template>
  <div class="container mx-auto p-4 md:p-8 bg-gray-50 min-h-screen">
    <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div class="p-6 md:p-8">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
          👨‍🎓 學生名單與成績
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-center">
          <div class="bg-blue-100 text-blue-800 p-4 rounded-lg">
            <p class="text-lg font-semibold">平均分數</p>
            <p class="text-3xl font-bold">{{ averageScore }}</p>
          </div>
          <div class="bg-green-100 text-green-800 p-4 rounded-lg">
            <p class="text-lg font-semibold">最高分數</p>
            <p class="text-3xl font-bold">{{ highestScore }}</p>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="min-w-full text-left text-sm font-light">
            <thead class="border-b bg-gray-800 text-white font-medium">
              <tr>
                <th scope="col" class="px-6 py-4">學號</th>
                <th scope="col" class="px-6 py-4">姓名</th>
                <th scope="col" class="px-6 py-4 text-center">分數</th>
                <th scope="col" class="px-6 py-4 text-center">評級</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="student in students"
                :key="student.id"
                class="border-b transition duration-300 ease-in-out hover:bg-gray-100"
              >
                <td class="whitespace-nowrap px-6 py-4 font-mono">{{ student.id }}</td>
                <td class="whitespace-nowrap px-6 py-4 font-medium">{{ student.name }}</td>
                <td class="whitespace-nowrap px-6 py-4 text-center">
                  <span
                    :class="getScoreClass(student.score)"
                    class="px-3 py-1 text-base font-bold rounded-full"
                  >
                    {{ student.score }}
                  </span>
                </td>
                <td class="whitespace-nowrap px-6 py-4 text-center text-2xl">
                  {{ getGradeEmoji(student.score) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const students = ref([
  { id: 's001', name: '洧杰', score: 90 },
  { id: 's002', name: '小花', score: 85 },
  { id: 's003', name: '阿明', score: 78 },
  { id: 's004', name: '佩佩', score: 92 },
  { id: 's005', name: '志強', score: 65 },
  { id: 's006', name: '美玲', score: 58 },
])

// 計算平均分數
const averageScore = computed(() => {
  if (students.value.length === 0) return 0
  const total = students.value.reduce((acc, student) => acc + student.score, 0)
  return (total / students.value.length).toFixed(1) // 取到小數點後一位
})

// 計算最高分數
const highestScore = computed(() => {
  if (students.value.length === 0) return 0
  return Math.max(...students.value.map((s) => s.score))
})

// 根據分數回傳對應的 CSS class
function getScoreClass(score) {
  if (score >= 90) return 'bg-green-200 text-green-800'
  if (score >= 80) return 'bg-blue-200 text-blue-800'
  if (score >= 70) return 'bg-yellow-200 text-yellow-800'
  if (score >= 60) return 'bg-orange-200 text-orange-800'
  return 'bg-red-200 text-red-800'
}

// 根據分數回傳對應的表情符號
function getGradeEmoji(score) {
  if (score >= 90) return '🏆'
  if (score >= 80) return '👍'
  if (score >= 60) return '✅'
  return '😥'
}
</script>

<style scoped>
/* 這裡可以放一些無法用 Tailwind 輕鬆實現的自訂樣式，但此範例中我們主要使用 Tailwind */
</style>
