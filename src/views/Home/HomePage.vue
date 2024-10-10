<template>
  <div class="bg-gray-100 h-screen flex justify-center items-center">
    <div class="flex flex-col md:flex-row justify-around items-center w-full p-8 bg-white shadow-lg rounded-lg">
      <div class="w-full md:w-1/3 mb-6 md:mb-0">
        <img
          src="@/assets/images/appm3V1L6Y3C3podIGShCo686dXRRY4i.png"
          alt="图像描述"
          class="w-full h-auto rounded-lg shadow-md"
        >
      </div>

      <div class="w-full md:w-2/3 text-center space-y-6">
        <p class="text-2xl font-semibold text-gray-800">登入即刻创造你的应用</p>
        <div class="flex flex-col space-y-4">
          <input
            type="text"
            v-model="user.username"
            placeholder="账号"
            class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          >
          <input
            type="password"
            v-model="user.password"
            placeholder="密码"
            class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          >
        </div>

        <div class="flex items-center justify-center space-x-2">
          <input type="checkbox" v-model="agree" class="form-checkbox h-4 w-4 text-green-500">
          <label class="text-gray-600 text-sm">我已经阅读并同意</label>
        </div>

        <button
          class="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-300"
          @click="login"
          :disabled="loading"
        >
          {{ loading ? "登录中..." : "登录" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const username = ref('');
    const password = ref('');
    const agree = ref(false);
    const loading = ref(false);
    const user = {
      username: '189218005@qq.com',
      password: '5ifmhu8693',
    };
    const login = async () => {
      if (!user.username.value || !user.password.value) {
        alert("请填写完整的账号和密码");
        return;
      }
      if (!agree.value) {
        alert("请同意条款");
        return;
      }

      loading.value = true; // 设置加载状态
      try {
        const params = new URLSearchParams();
        params.append('grant_type', 'password');
        params.append('username', username.value);
        params.append('password', password.value);
        params.append('client_id', '2ce3d7d1366f0ee5119b396a5fef7d02472395823ca73970fe8166a79e3b66e7'); // 请替换为您的客户端ID
        params.append('client_secret', '19e0fef7378e117e3e44990b9506f2cf0c596ff00e78bea3a95f6e35fb161bdb'); // 请替换为您的客户端Secret
        params.append('scope', 'user_info projects pull_requests issues notes keys hook groups gists enterprises');
        
        console.log("请求参数:", params.toString());
        
        const response = await axios.post('https://gitee.com/oauth/token', params, {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });
        
        const token = response.data.access_token;
        localStorage.setItem('oauth_token', token);
        console.log("登录成功，获取到了访问令牌！");
        
        // 登录成功后跳转到主页（示例）
        router.push('/slieHomp');
      } catch (error) {
        const errorMessage = error.response ? error.response.data.error_description : error.message;
        console.log("登录失败: " + errorMessage);
      } finally {
        loading.value = false; // 不论成功或失败，都要恢复按钮状态
      }
    };

    return {
      username,
      password,
      agree,
      loading,
      login,
    };
  }
};
</script>

<style scoped>
/* 在这里添加样式 */
</style>
