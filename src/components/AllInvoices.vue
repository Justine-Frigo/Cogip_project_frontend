<template>
 <div class="p-8" v-if="allInvoices">
    <h3 class="text-6xl font-extrabold mb-20 relative z-50 ">All invoices</h3>
    <!-- <img class="absolute bottom-[311px] left-44" src="../assets/img/Rectangle 19.svg" alt="rectangle"> -->
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
        <tr class="odd:bg-white even:bg-gray-100" v-for="(invoice, index) in allInvoices.data" :key="index">
          <td class="py-2 px-4 border-b border-gray-300 text-left">{{ invoice.ref}}</td>
          <td class="py-2 px-4 border-b border-gray-300 text-left">{{ invoice.price }} €</td>
          <td class="py-2 px-4 border-b border-gray-300 text-left">{{ invoice.id_company }}</td>
          <td class="py-2 px-4 border-b border-gray-300 text-left">{{ invoice.created_at }}</td>
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
  name: 'AllInvoices',
  components:{
    Pagination,
  },
  data() {
    return {
      allInvoices: null,
      currentPage: null,
      totalPages: null,
    }
  },
  computed: {},
  async mounted() {
    this.allInvoices = await this.getAllInvoices()
    console.log(this.allInvoices)
    this.currentPage = this.allInvoices.current_page
    this.totalPages = this.allInvoices.total_pages
  },
  methods: {
    async getAllInvoices(){
      try{
        const response = await axios.get("http://cogip_project.test/invoices");
        return response.data
      } catch(error){
        console.error(error)
      }
    },
    async handlePageSelected(value) {
      try {
        const response = await axios.get("http://cogip_project.test/invoices", {
          params: {
            page: value
          }
        });
        this.allInvoices = response.data
        this.currentPage = this.allInvoices.current_page
        this.totalPages = this.allInvoices.total_pages

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