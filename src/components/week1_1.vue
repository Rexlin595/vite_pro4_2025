<script setup>
import { ref } from 'vue'

const inputValue = ref(3)
function showValue() {
  alert(`你輸入的是：${inputValue.value}`)
}
</script>
<template>
  <input v-bind:value="inputValue" type="text" />
  <p>{{ inputValue }}</p>
  <p>{{ inputValue }}</p>
  <p>{{ inputValue }}</p>
  <p>{{ inputValue }}</p>
  <p>{{ inputValue }}</p>
  <button v-on:click="showValue">顯示輸入值</button>
  <p>目前輸入：{{ inputValue }}</p>
</template>

<style>
body {
  font-family: sans-serif;
}
</style>
