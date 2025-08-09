<template>
  <div class="container mt-4">
    <h2 class="mb-4 text-center">飲品菜單</h2>
    <div class="table-responsive">
      <table class="table table-hover table-bordered align-middle">
        <thead class="table-dark">
          <tr>
            <th scope="col" class="text-center">品項</th>
            <th scope="col">描述</th>
            <th scope="col" class="text-center">價格</th>
            <th scope="col" class="text-center" style="width: 150px">庫存</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in drinks" :key="item.id">
            <td class="fw-bold text-center">{{ item.name }}</td>
            <td>
              <small>{{ item.description }}</small>
            </td>
            <td class="text-center">${{ item.price }}</td>
            <td>
              <div class="d-flex justify-content-center align-items-center">
                <button
                  class="btn btn-sm btn-outline-danger"
                  @click="handleDrinkStock(item.id, item.stock - 1)"
                  :disabled="item.stock < 1"
                >
                  -
                </button>
                <span class="mx-2 stock-display">{{ item.stock }}</span>
                <button
                  class="btn btn-sm btn-outline-success"
                  @click="handleDrinkStock(item.id, item.stock + 1)"
                >
                  +
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const data = [
  {
    id: 1,
    name: '珍珠奶茶',
    description: '香濃奶茶搭配QQ珍珠',
    price: 50,
    stock: 20,
  },
  {
    id: 2,
    name: '冬瓜檸檬',
    description: '清新冬瓜配上新鮮檸檬',
    price: 45,
    stock: 15,
  },
  {
    id: 3,
    name: '翡翠檸檬',
    description: '綠茶與檸檬的完美結合',
    price: 55,
    stock: 30,
  },
  {
    id: 4,
    name: '四季春茶',
    description: '香醇四季春茶，回甘無比',
    price: 45,
    stock: 10,
  },
  {
    id: 5,
    name: '阿薩姆奶茶',
    description: '阿薩姆紅茶搭配香醇鮮奶',
    price: 50,
    stock: 25,
  },
  {
    id: 6,
    name: '檸檬冰茶',
    description: '檸檬與冰茶的清新組合',
    price: 45,
    stock: 20,
  },
  {
    id: 7,
    name: '芒果綠茶',
    description: '芒果與綠茶的獨特風味',
    price: 55,
    stock: 18,
  },
  {
    id: 8,
    name: '抹茶拿鐵',
    description: '抹茶與鮮奶的絕配',
    price: 60,
    stock: 20,
  },
]

const drinks = ref(data)

function handleDrinkStock(id, stock) {
  // 確保庫存不會變成負數
  if (stock < 0) return

  drinks.value = drinks.value.map((item) => {
    if (item.id === id) {
      item.stock = stock
    }
    return item
  })
}
</script>

<style scoped>
/* scoped 樣式只會作用在這個元件內，不會影響到其他元件 */
.container {
  max-width: 800px;
}

.table {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.stock-display {
  display: inline-block;
  width: 40px;
  text-align: center;
  font-weight: bold;
  font-size: 1.1rem;
}

.btn {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  line-height: 1;
  padding: 0;
}
</style>
