<template>
 <div class="p-8">
    <h3 class="text-6xl font-extrabold mb-4 ">All invoices</h3>
    <table class="min-w-full bg-white border border-gray-300">
      <thead class="bg-yellow-300">
        <tr>
          <th class="py-2 px-4 border-b border-gray-300 text-left">Invoice number</th>
          <th class="py-2 px-4 border-b border-gray-300 text-left">Dates due</th>
          <th class="py-2 px-4 border-b border-gray-300 text-left">Company</th>
          <th class="py-2 px-4 border-b border-gray-300 text-left">Created at</th>
        </tr>
      </thead>
      <tbody>
        <tr class="odd:bg-white even:bg-gray-100" v-for="(invoice, index) in allInvoices" :key="index">
          <td class="py-2 px-4 border-b border-gray-300 text-left">{{ invoice.invoice_number}}</td>
          <td class="py-2 px-4 border-b border-gray-300 text-left">{{ invoice.dates_due }}</td>
          <td class="py-2 px-4 border-b border-gray-300 text-left">{{ invoice.company }}</td>
          <td class="py-2 px-4 border-b border-gray-300 text-left">{{ invoice.created_at }}</td>
        </tr>
     
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AllInvoices',
  data() {
    return {
      allInvoices: null,
    }
  },
  computed: {},
  async mounted() {
    this.allInvoices = await this.getAllInvoices()
  },
  methods: {
    async getAllInvoices(){
      try{
        const response = await axios.get("../../mock/invoices.json");
        return response.data
      } catch(error){
        console.error(error)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>