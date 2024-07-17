<template>
  <div class="p-8" v-if="allContacts">
    <h3 class="text-6xl font-extrabold mb-20 relative z-50 ">All contacts</h3>
    <img class="absolute bottom-[311px] left-44" src="../assets/img/Rectangle 19.svg" alt="rectangle">
    <table class="min-w-full bg-white border border-gray-300">
      <thead class="bg-yellow-300">
        <tr>
          <th class="py-2 px-4 border-b border-gray-300 text-left">Name</th>
          <th class="py-2 px-4 border-b border-gray-300 text-left">Phone</th>
          <th class="py-2 px-4 border-b border-gray-300 text-left">Mail</th>
          <th class="py-2 px-4 border-b border-gray-300 text-left">Company</th>
          <th class="py-2 px-4 border-b border-gray-300 text-left">Created at</th>
        </tr>
      </thead>
      <tbody>
        <tr class="odd:bg-white even:bg-gray-100" v-for="(contact, index) in allContacts.data" :key="index">
          <td class="py-2 px-4 border-b border-gray-300 text-left">{{ contact.name }}</td>
          <td class="py-2 px-4 border-b border-gray-300 text-left">{{ contact.phone }}</td>
          <td class="py-2 px-4 border-b border-gray-300 text-left">{{ contact.email }}</td>
          <td class="py-2 px-4 border-b border-gray-300 text-left">{{ contact.company_id }}</td>
          <td class="py-2 px-4 border-b border-gray-300 text-left">{{ contact.created_at }}</td>
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
  name: 'AllContacts',
  components: {
    Pagination,
  },
  data() {
    return {
      allContacts: null,
      currentPage: null,
      totalPages: null,
    }
  },
  computed: {},
  async mounted() {
    this.allContacts = await this.getAllContacts()
    console.log(this.allContacts)
    this.currentPage = this.allContacts.current_page
    this.totalPages = this.allContacts.total_pages
  },
  methods: {
    async getAllContacts() {
      try {
        const response = await axios.get("http://cogip_project.test/contacts");
        return response.data
      } catch (error) {
        console.error(error)
      }
    },
    async handlePageSelected(value) {
      try {
        const response = await axios.get("http://cogip_project.test/contacts", {
          params: {
            page: value
          }
        });
        this.allContacts = response.data
        this.currentPage = this.allContacts.current_page
        this.totalPages = this.allContacts.total_pages

      } catch (error){
        console.error(error)
      }
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>