<template>
  <div class="max-w-lg mx-auto p-4 bg-white shadow-md rounded mt-10">
    <h2 class="text-xl font-bold mb-4 border-b">New invoice</h2>
    <form @submit.prevent="createInvoice">
      <div class="mb-4">
        <label for="reference" class="block text-gray-700"></label>
        <input type="text" v-model="reference" id="reference" placeholder="Reference"
          class="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required />
      </div>
      <div class="mb-4">
        <label for="price" class="block text-gray-700"></label>
        <input type="text" v-model="price" id="price" placeholder="Price"
          class="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required />
      </div>
      <div class="mb-4">
        <label for="company" class="block text-gray-700"></label>
        <input type="text" v-model="companyId" id="company" placeholder="Company id"
          class="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required />
      </div>
      <div>
        <button class="w-full bg-[#9698D6] text-white py-2 px-4 rounded-md hover:bg-[#8588d4]">Save</button>
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
  name: 'NewInvoice',
  data() {
    return {
      reference: null,
      price: null,
      companyId: null,
      authStore: useAuthStore(),
      successMessage: null,
    }
  },
  computed: {},
  mounted() { },
  methods: {
    async createInvoice() {
      const config = {
        headers: { Authorization: `Bearer ${this.authStore.token}` }
      };
      try {
        const response = await axios.post('http://cogip_project.test/jwt/invoices', {
          ref: this.reference,
          price: this.price,
          id_company: this.companyId,
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
