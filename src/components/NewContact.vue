<template>
    <div class="max-w-lg mx-auto p-4 bg-white shadow-md rounded mt-10">
      <h2 class="text-xl font-bold mb-4 border-b">New Contact</h2>
      <form @submit.prevent="createContact">
        <div class="mb-4">
          <label for="name" class="block text-gray-700"></label>
          <input type="text" v-model="name" id="name" placeholder="Name" class="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required/>
        </div>
        <div class="mb-4">
          <label for="company_id" class="block text-gray-700"></label>
          <input type="text" v-model="company_id" id="company" placeholder="Company Id" class="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required/>
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700"></label>
          <input type="text" v-model="email" id="email" placeholder="Email" class="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required/>
        </div>
        <div class="mb-4">
          <label for="phone" class="block text-gray-700"></label>
          <input type="text" v-model="phone" id="phone" placeholder="Phone" class="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required/>
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
  name: 'NewContact',
  data() {
    return {
      name: null,
      company_id: null,
      email: null,
      phone: null,
      authStore: useAuthStore(),
      successMessage: null,
    }
  },
  computed: {},
  mounted() { },
  methods: {
    async createContact() {
      const config = {
        headers: { Authorization: `Bearer ${this.authStore.token}` }
      };
      try {
        const response = await axios.post('http://cogip_project.test/jwt/contacts', {
          name: this.name,
          company_id: this.company_id,
          email: this.email,
          phone: this.phone,
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
  
 