<template>
  {{ authStore.token }}
  <div id="app" class="flex items-center justify-center">
    <div class="w-full max-w-md">
      <form @submit.prevent="handleSubmitLogin" class="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email" type="email" v-model="email" placeholder="Enter your email">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password" type="password" v-model="password" placeholder="Enter your password">
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-yellow-300 hover:bg-yellow-400 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '../stores/authStore';
export default {
  name: 'LoginForm',
  data() {
    return {
      email: null,
      password: null,
      authStore: useAuthStore()
    }
  },
  computed: {},
  mounted() { },

  methods: {
    async handleSubmitLogin() {
      const authStore = useAuthStore(); // Instanciation correcte du store
      try {
        await authStore.login({ email: this.email, password: this.password });
      } catch (error) {
        console.error(error)
      }
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>