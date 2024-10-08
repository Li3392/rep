<template>
  <div class="flex h-screen bg-gray-100">
    <!-- 侧边栏 -->
    <div class="w-1/12 flex flex-col text-xs h-full justify-center items-center gap-2 border-r border-gray-300 bg-white shadow-md">
      <button class="py-2 px-4 flex flex-col items-center hover:bg-gray-200 rounded">
        <span class="material-icons mb-1 text-gray-500">dashboard</span> 工作台
      </button>
      <button class="py-2 px-4 flex flex-col items-center hover:bg-gray-200 rounded">
        <span class="material-icons mb-1 text-gray-500">folder</span> 项目
      </button>
      <button class="py-2 px-4 flex flex-col items-center hover:bg-gray-200 rounded">
        <span class="material-icons mb-1 text-gray-500">lightbulb</span> AI
      </button>
      <button class="py-2 px-4 flex flex-col items-center hover:bg-gray-200 rounded">
        <span class="material-icons mb-1 text-gray-500">list</span> 事项
      </button>
      <button class="py-2 px-4 flex flex-col items-center hover:bg-gray-200 rounded">
        <span class="material-icons mb-1 text-gray-500">code</span> 代码
      </button>
      <button class="py-2 px-4 flex flex-col items-center hover:bg-gray-200 rounded">
        <span class="material-icons mb-1 text-gray-500">apps</span> 制品
      </button>
      <button class="py-2 px-4 flex flex-col items-center hover:bg-gray-200 rounded">
        <span class="material-icons mb-1 text-gray-500">visibility</span> 洞察
      </button>
      <button class="py-2 px-4 flex flex-col items-center hover:bg-gray-200 rounded">
        <span class="material-icons mb-1 text-gray-500">library_books</span> 知识
      </button>
      <button class="py-2 px-4 flex flex-col items-center hover:bg-gray-200 rounded">
        <span class="material-icons mb-1 text-gray-500">settings</span> 自动化
      </button>
    </div>

    <!-- 主体内容 -->
    <div class="w-11/12 p-4">
      <div class="border-b border-gray-300 pb-2">
        <h2 class="text-lg font-semibold">代码仓库</h2>
      </div>
      <div class="flex justify-between text-xs mt-2">
        <div class="flex gap-4">
          <button @click="about" class="py-1 px-2 flex items-center hover:bg-gray-300 rounded">
            <span class="material-icons mr-1">history</span> 最近访问
          </button>
          <button @click="Wcom" class="py-1 px-2 flex items-center hover:bg-gray-300 rounded">
            <span class="material-icons mr-1">folder_open</span> 全部仓库
          </button>
          <button @click="Home" class="py-1 px-2 flex items-center hover:bg-gray-300 rounded">
            <span class="material-icons mr-1">public</span> 开源仓库
          </button>
        </div>
        <div>
          <button @click="rep" class="py-1 px-4 bg-blue-500 text-white rounded flex items-center hover:bg-blue-600">
            <span class="material-icons mr-1">add</span> 创建代码仓库
          </button>
        </div>
      </div>
      <component :is="com" class="mt-4"></component>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'
import WwwCom from '@/views/WwwCom.vue'
import RepoPip from '@/views/Repone/RepoPip.vue';

let com = ref(AboutView)
let about = () => {
  com.value = AboutView
}
let Home = () => {
  com.value = HomeView
}
let Wcom = () => {
  com.value = WwwCom
}
let rep = () => {
  com.value = RepoPip
}
</script>
