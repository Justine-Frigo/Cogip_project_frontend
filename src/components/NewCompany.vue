<template>
    <div class="max-w-lg mx-auto p-4 bg-white shadow-md rounded mt-10">
      <h2 class="text-xl font-bold mb-4 border-b">New company</h2>
      <form @submit.prevent="createCompany">
        <div class="mb-4">
          <label for="name" class="block text-gray-700"></label>
          <input type="text" v-model="name" id="name" placeholder="Name" class="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
        </div>
        <div class="mb-4">
          <label for="type" class="block text-gray-700"></label>
          <select type="text" v-model="type_id" id="type" placeholder="Type" class="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
            <option :value="null" hidden>Pick your type</option>
            <option :value="1">Supplier</option>
            <option :value="2">Customer</option>
          </select>

        </div>
        <div class="mb-4">
          <label for="tva" class="block text-gray-700"></label>
          <input type="text" v-model="tva" id="tva" placeholder="TVA" class="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required/>
        </div>
        <div class="mb-4">
          <label for="country" class="block text-gray-700"></label>
          <input type="text" v-model="country" id="country" placeholder="Country" class="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required/>
        </div>
        <div>
          <button type="submit" class="w-full bg-[#9698D6] text-white py-2 px-4 rounded-md hover:bg-[#8588d4]">Save</button>
        </div>
        <div class="text-emerald-600" v-if="successMessage">
            {{ successMessage.message }}
          </div>
      </form>
    </div>
  </template>
<script>
import axios from 'axios';
import { useAuthStore } from '../stores/authStore';
export default {
  name: 'NewCompany',
  data() {
    return {
      name: null,
      tva: null,
      country: null,
      type_id: null,
      authStore: useAuthStore(),
      successMessage: null,
    }
  },
  computed: {},
  mounted() { },
  methods: {
    async createCompany() {
      const config = {
        headers: { Authorization: `Bearer ${this.authStore.token}` }
      };
      try {
        const response = await axios.post('http://cogip_project.test/jwt/companies', {
          name: this.name,
          tva: this.tva,
          country: this.country,
          type_id: this.type_id,
        }, config)
        console.log(response.data)
        this.successMessage = response.data
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
  
 