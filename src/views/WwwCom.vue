<template>
  <div class="flex flex-col justify-center items-center text-xs gap-4">
    <div>欢迎使用代码仓库</div>
    <div class="w-2/3">
      代码仓库用于托管基于 GIT 或 SVN 管理的代码库。通过 Review
      合并请求来审查代码变更,版本发布可以用来标记、发布代码版本。
    </div>
    <div class="flex justify-center items-center">
      <div class="flex flex-col justify-center items-center text-xs">
        <img src="../assets/images/1.svg" alt="" />
        <div>创建代码仓库</div>
        <div class="text-gray-400">浏览、编辑代码以及查看代码提交记录</div>
      </div>
      <div><Icon icon="mynaui:arrow-right" /></div>
      <div class="flex flex-col justify-center items-center text-xs">
        <img src="../assets/images/2.svg" alt="" />
        <div>合并请求</div>
        <div class="text-gray-400">发起合并请求并遂请协作者Review 变更内容</div>
      </div>
      <div><Icon icon="mynaui:arrow-right" /></div>
      <div class="flex flex-col justify-center items-center text-xs">
        <img src="../assets/images/3.svg" alt="" />
        <div>代码版本</div>
        <div class="text-gray-400">发布、标记代码版本</div>
      </div>
    </div>
    <div>
      <button @click="create" class="text-white bg-black w-52 h-10 rounded-xl">创建代码仓库</button>
    </div>
  </div>
</template>
<script setup>
import { Icon } from '@iconify/vue'
import axios from 'axios'

let create = async () => {
  let access_token = await localStorage.getItem('access_token')
  axios.post('https://gitee.com/api/v5/user/repos', {
    access_token: access_token
  })
}
</script>
