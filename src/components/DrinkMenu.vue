<template>
  <div class="drink-menu-container">
    <h1>飲品庫存管理</h1>
    <table>
      <thead>
        <tr>
          <th scope="col">品項</th>
          <th scope="col">描述</th>
          <th scope="col">價格</th>
          <th scope="col">庫存</th>
          <th scope="col">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in drinks" :key="item.id">
          <td>
            <input
              v-if="editingItemId === item.id"
              type="text"
              v-model="tempItemName"
              @keyup.enter="confirmEdit(item)"
              @keyup.esc="cancelEdit()"
            />
            <span v-else>{{ item.name }}</span>
          </td>

          <td>
            <small>{{ item.description }}</small>
          </td>

          <td>${{ item.price }}</td>

          <td class="stock-control">
            <button class="btn-decrease" @click="decreaseStock(item)">-</button>
            <span>{{ item.stock }}</span>
            <button class="btn-increase" @click="increaseStock(item)">+</button>
          </td>

          <td>
            <button v-if="editingItemId === item.id" class="btn-confirm" @click="confirmEdit(item)">
              確認
            </button>
            <button v-else class="btn-edit" @click="startEdit(item)">編輯</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// ref 用於創建響應式資料
// 1. 飲品資料陣列
const drinks = ref([
  { id: 1, name: '珍珠奶茶', description: '香濃奶茶搭配QQ珍珠', price: 50, stock: 20 },
  { id: 2, name: '冬瓜檸檬', description: '清新冬瓜配上新鮮檸檬', price: 45, stock: 18 },
  { id: 3, name: '翡翠檸檬', description: '綠茶與檸檬的完美結合', price: 55, stock: 34 },
  { id: 4, name: '四季春茶', description: '香醇四季春茶，回甘無比', price: 45, stock: 10 },
  { id: 5, name: '阿薩姆奶茶', description: '阿薩姆紅茶搭配香醇鮮奶', price: 50, stock: 25 },
  { id: 6, name: '檸檬冰茶', description: '檸檬與冰茶的清新組合', price: 45, stock: 20 },
  { id: 7, name: '芒果綠茶', description: '芒果與綠茶的獨特風味', price: 55, stock: 18 },
  { id: 8, name: '抹茶拿鐵', description: '抹茶與鮮奶的絕配', price: 60, stock: 20 },
])

// 2. 追蹤正在編輯的項目 ID，null 表示沒有項目正在被編輯
const editingItemId = ref(null)
// 3. 暫存正在編輯的品項名稱
const tempItemName = ref('')

// --- 方法 ---

// 增加庫存
const increaseStock = (item) => {
  item.stock++
}

// 減少庫存，並確保不低於 0
const decreaseStock = (item) => {
  if (item.stock > 0) {
    item.stock--
  }
}

// 開始編輯模式
const startEdit = (item) => {
  // 設置正在編輯的項目 ID
  editingItemId.value = item.id
  // 將目前的品項名稱存入暫存變數，以顯示在輸入框中
  tempItemName.value = item.name
}

// 確認編輯
const confirmEdit = (item) => {
  if (tempItemName.value.trim() === '') {
    alert('品項名稱不能為空！')
    return
  }
  // 更新對應項目的名稱
  item.name = tempItemName.value
  // 退出編輯模式
  cancelEdit()
}

// 取消編輯
const cancelEdit = () => {
  editingItemId.value = null
  tempItemName.value = ''
}
</script>

<style scoped>
/* scoped 屬性確保這些樣式只會應用於此元件 */
.drink-menu-container {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  width: 90%;
  max-width: 1200px;
  margin: 2rem auto;
}

h1 {
  text-align: center;
  color: #e5e7eb; /* 淺灰色文字 */
  margin-bottom: 2rem;
}

table {
  width: 100%;
  border-collapse: collapse;
  background-color: #1f2937; /* 深灰色背景 (gray-800) */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  overflow: hidden; /* 確保圓角效果 */
}

th,
td {
  border: 1px solid #374151; /* 深灰色邊框 (gray-700) */
  padding: 14px 18px;
  text-align: center;
  color: #d1d5db; /* 淺灰色文字 (gray-300) */
  vertical-align: middle;
}

td:first-child {
  color: #ffffff; /* 品項名稱使用白色，更突出 */
  font-weight: 500;
}

th {
  background-color: #374151; /* 標題使用更深的灰色 (gray-700) */
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 1px;
}

tr {
  background-color: #1f2937; /* 單數行背景 (gray-800) */
}

tr:nth-child(even) {
  background-color: #283342; /* 雙數行使用稍微不同的深灰 */
}

tr:hover {
  background-color: #4b5563; /* 滑鼠懸停時的顏色 (gray-600) */
}

button {
  color: white;
  border: none;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 0;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.3s ease;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.btn-decrease {
  background-color: #dc2626;
} /* red-600 */
.btn-decrease:hover {
  background-color: #b91c1c;
} /* red-700 */

.btn-increase {
  background-color: #16a34a;
} /* green-600 */
.btn-increase:hover {
  background-color: #15803d;
} /* green-700 */

.btn-edit {
  background-color: #8b5cf6;
} /* violet-500 */
.btn-edit:hover {
  background-color: #7c3aed;
} /* violet-600 */

.btn-confirm {
  background-color: #2563eb;
} /* blue-600 */
.btn-confirm:hover {
  background-color: #1d4ed8;
} /* blue-700 */

td.stock-control {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 8px 15px;
  border: 1px solid transparent; /* 移除庫存控制格的邊框 */
  border-bottom: 1px solid #374151;
}

.stock-control span {
  display: inline-block;
  width: 30px;
  text-align: center;
  font-weight: bold;
  font-size: 1.1rem;
  color: #ffffff;
}

td input[type='text'] {
  width: 95%;
  padding: 8px;
  border-radius: 4px;
  background-color: #4b5563; /* gray-600 */
  border: 1px solid #6b7280; /* gray-500 */
  color: #ffffff;
  outline: none;
}
td input[type='text']:focus {
  border-color: #8b5cf6; /* violet-500 */
  box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.4);
}
</style>
