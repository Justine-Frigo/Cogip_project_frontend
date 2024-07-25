<template>
  <div class="p-8" v-if="allCompanies"> 
    <h3 class="text-6xl font-extrabold mb-20 relative z-50 ">All companies</h3>
    <!-- <img class="absolute bottom-[302px] left-44" src="../assets/img/Rectangle 19.svg" alt="rectangle"> -->
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
        <tr class="odd:bg-white even:bg-gray-100" v-for="(company, index) in allCompanies.data" :key="index">
          <td class="py-2 px-4 border-b border-gray-300 text-left hover:underline"><router-link :to="{name: 'ShowCompany', params: {id: company.id}}">{{company.name}}</router-link></td>
          <td class="py-2 px-4 border-b border-gray-300 text-left">{{company.tva}}</td>
          <td class="py-2 px-4 border-b border-gray-300 text-left">{{company.country}}</td>
          <td class="py-2 px-4 border-b border-gray-300 text-left">{{company.type_id}}</td>
          <td class="py-2 px-4 border-b border-gray-300 text-left">{{company.created_at}}</td>
        </tr>
        
      </tbody>
    </table>
    <Pagination :data="{ currentPage: currentPage, totalPages: totalPages }" @page-selected="handlePageSelected" />
    </div>
</template>

<script>
import axios from 'axios';
import Pagination from './Pagination.vue';
export default {
  name: 'AllCompanies',
  components: {
    Pagination,
  },
  data() {
    return {
      allCompanies: null,
      currentPage: null,
      totalPages: null,
    }
  },
  computed: {},
  async mounted() {
    this.allCompanies = await this.getAllCompanies()
    this.currentPage = this.allCompanies.current_page
    this.totalPages = this.allCompanies.total_pages
  },
  methods: {
    async getAllCompanies(){
      try{
        const response = await axios.get("http://cogip_project.test/companies");
        return response.data
      } catch(error){
        console.error(error)
      }
    },
    async handlePageSelected(value) {
      try {
        const response = await axios.get("http://cogip_project.test/companies", {
          params: {
            page: value
          }
        });
        this.allCompanies = response.data
        this.currentPage = this.allCompanies.current_page
        this.totalPages = this.allCompanies.total_pages

      } catch (error){
        console.error(error)
      }
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>