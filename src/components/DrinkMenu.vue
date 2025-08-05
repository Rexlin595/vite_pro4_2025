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

          <td>{{ item.price }}</td>

          <td class="stock-control">
            <button @click="decreaseStock(item)">-</button>
            <span>{{ item.stock }}</span>
            <button @click="increaseStock(item)">+</button>
          </td>

          <td>
            <button v-if="editingItemId === item.id" @click="confirmEdit(item)">確認</button>
            <button v-else @click="startEdit(item)">編輯</button>
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
  width: 80%;
  margin: 2rem auto;
}

h1 {
  text-align: center;
  color: #333;
}

table {
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

th,
td {
  border: 1px solid #ddd;
  padding: 12px 15px;
  text-align: center;
}

th {
  background-color: #4caf50;
  color: white;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #ddd;
}

button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 8px 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 0 4px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}

.stock-control span {
  display: inline-block;
  width: 30px;
  text-align: center;
  font-weight: bold;
}

td input[type='text'] {
  width: 90%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}
</style>
