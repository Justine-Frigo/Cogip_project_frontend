<template>
  <div class="p-8"> 
    <h3 class="text-6xl font-extrabold mb-4">All companies</h3>
    <table class="min-w-full bg-white border border-gray-300">
      <thead class="bg-yellow-300">
        <tr>
          <th class="py-2 px-4 border-b border-gray-300 text-left">Name</th>
          <th class="py-2 px-4 border-b border-gray-300 text-left">TVA</th>
          <th class="py-2 px-4 border-b border-gray-300 text-left">Country</th>
          <th class="py-2 px-4 border-b border-gray-300 text-left">Type</th>
          <th class="py-2 px-4 border-b border-gray-300 text-left">Created at</th>
        </tr>
      </thead>
      <tbody>
        <tr class="odd:bg-white even:bg-gray-100" v-for="(company, index) in allCompanies" :key="index">
          <td class="py-2 px-4 border-b border-gray-300 text-left">{{company.name}}</td>
          <td class="py-2 px-4 border-b border-gray-300 text-left">{{company.tva}}</td>
          <td class="py-2 px-4 border-b border-gray-300 text-left">{{company.country}}</td>
          <td class="py-2 px-4 border-b border-gray-300 text-left">{{company.type}}</td>
          <td class="py-2 px-4 border-b border-gray-300 text-left">{{company.created_at}}</td>
        </tr>
        
      </tbody>
    </table></div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'AllCompanies',
  data() {
    return {
      allCompanies: null,
    }
  },
  computed: {},
  async mounted() {
    this.allCompanies = await this.getAllCompanies()
  },
  methods: {
    async getAllCompanies(){
      try{
        const response = await axios.get("../../mock/companies.json");
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