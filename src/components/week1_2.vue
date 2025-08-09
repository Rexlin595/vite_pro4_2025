<script setup>
import { ref } from 'vue'
const students = ref([
  { id: 's001', name: '洧杰', score: 90 },
  { id: 's002', name: '小花', score: 85 },
  { id: 's003', name: '阿明', score: 78 },
  { id: 's004', name: '佩佩', score: 92 },
])
</script>

<template>
  <div class="p-6">
    <h2 class="text-xl font-bold mb-4">👨🎓 學生名單</h2>
    <ul>
      <li v-for="student in students" :key="student.id" class="mb-2 p-2 border rounded">
        <p>🆔 學號：{{ student.id }}</p>
        <p>📛 姓名：{{ student.name }}</p>
        <p>📈 分數：{{ student.score }}</p>
      </li>
    </ul>
  </div>
</template>
