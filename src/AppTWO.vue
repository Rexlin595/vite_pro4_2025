<script setup>
import { ref } from 'vue'

const message = ref('Hello from App2!')

</script>

<template>
  <div>
    <h1>{{ message }}</h1>
    <p>This is a simple Vue.js application.</p>
    <img alt="Vue logo" src="./assets/logo.svg" width="125" height="125" />
  </div>
</template>

<style>
h1 {
  color: blue;
}
</style>
