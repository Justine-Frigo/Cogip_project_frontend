<template>
  <div v-if="!loading && companyData">
    <Company v-if="companyData" :companyData="companyData" />
    <div class="flex justify-center"><img src="../assets/img/line.svg" alt="line"></div>
    <h2 class="text-5xl font-extrabold mt-14 ml-28 mb-10">Contact people</h2>

    <ContactPeople v-for="(contact, index) in contacts" :person="contact" :key="index"/>
    <div class="flex justify-end"><img src="../assets/img/black notebook and green arm.png" alt="notebook"></div>
    <div class="flex justify-center"><img src="../assets/img/line.svg" alt="line"></div>
  <LastInvoices/>
  </div>
  <div v-else-if="!companyData">
    No company found !
  </div>
</template>

<script>
import Company from '@/components/Company.vue';
import ContactPeople from '@/components/ContactPeople.vue';
import LastInvoices from '@/components/LastInvoices.vue';
import axios from 'axios';

export default {
  name: 'ShowCompanyView',
  components: {
    Company,
    ContactPeople,
    LastInvoices,

  },
  data() {
    return {
      companyData: null,
      loading: true,
      contacts: [],
    }
  },
  async mounted() {
    try {
      this.companyData = await this.getCompanyData();
      this.getContacts()
    } catch (error) {
      console.error(error);
    } finally {
      this.loading = false;
    }
  },
  methods: {
    async getCompanyData() {
      try {
        const response = await axios.get(`http://Cogip_project.test/companies/${this.$route.params.id}`);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getContacts(){
      try{
        const response1 = await axios.get("http://Cogip_project.test/contacts/11");
        this.contacts.push(response1.data);
        const response2 = await axios.get("http://Cogip_project.test/contacts/12");
        this.contacts.push(response2.data);
      } catch (error){
        console.error(error);
      }
    } 
  }
 
}
</script>

<style scoped></style>
