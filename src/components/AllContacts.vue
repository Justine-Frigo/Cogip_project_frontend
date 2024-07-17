<template>
  <div class="p-8">
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
        <tr class="odd:bg-white even:bg-gray-100" v-for="(contact, index) in allContacts" :key="index">
        <td class="py-2 px-4 border-b border-gray-300 text-left">{{contact.name}}</td>
        <td class="py-2 px-4 border-b border-gray-300 text-left">{{ contact.phone }}</td>
        <td class="py-2 px-4 border-b border-gray-300 text-left">{{ contact.mail }}</td>
        <td class="py-2 px-4 border-b border-gray-300 text-left">{{ contact.company }}</td>
        <td class="py-2 px-4 border-b border-gray-300 text-left">{{ contact.created_at }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'AllContacts',
  data() {
    return {
      allContacts: null,
    }
  },
  computed: {},
  async mounted() {
    this.allContacts = await this.getAllContacts()
  },
  methods: {
    async getAllContacts(){
      try{
        const response = await axios.get("../../mock/contacts.json");
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