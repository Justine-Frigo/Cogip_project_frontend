<template>
  <div class="p-8">
    <h3 class="text-5xl font-extrabold mb-4 ">Last invoices</h3>
    <table class="min-w-full bg-white border border-gray-300">
      <thead class="bg-yellow-300">
        <tr>
          <th class="py-2 px-4 border-b border-gray-300 text-left">Reference</th>
          <th class="py-2 px-4 border-b border-gray-300 text-left">Price</th>
          <th class="py-2 px-4 border-b border-gray-300 text-left">Company</th>
          <th class="py-2 px-4 border-b border-gray-300 text-left">Created at</th>
        </tr>
      </thead>
      <tbody>
        <tr class="odd:bg-white even:bg-gray-100" v-for="(invoice, index) in invoices" :key="index">
          <td class="py-2 px-4 border-b border-gray-300 text-left">{{ invoice.ref}}</td>
          <td class="py-2 px-4 border-b border-gray-300 text-left">{{ invoice.price }} €</td>
          <td class="py-2 px-4 border-b border-gray-300 text-left">{{ invoice.id_company }}</td>
          <td class="py-2 px-4 border-b border-gray-300 text-left">{{ invoice.created_at }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LastInvoices',
  data() {
    return {
      invoices: null,
    }
  },
  computed: {},
  async mounted() {
    this.invoices = await this.getLastInvoices()
  },
  methods: {
    async getLastInvoices(){
      try{
        const response = await axios.get("http://cogip_project.test/invoices", {
          params:{
            limit: 5,
          }
        });
        return response.data.data
      } catch(error){
        console.error(error)
      }
    }
  }
}
</script>

<style>
</style>

