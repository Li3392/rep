<template>
  <div class="drawer">
    <h2>个人中心</h2>
    <p>用户信息展示</p>
    <button @click="close">关闭</button>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['close']);
const close = () => {
  emit('close');
}
</script>

<style scoped>
.drawer {
  position: fixed;
  top: 0;
  left: -10;
  width: 300px;
  height: 100%;
  background: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
  z-index: 1000;
}
</style>