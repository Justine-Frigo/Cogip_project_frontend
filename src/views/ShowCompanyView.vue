<template>
  <div v-if="!loading">
    <Company v-if="companyData" :companyData="companyData[0].info" />
    <div class="flex justify-center"><img src="../assets/img/line.svg" alt="line"></div>
    <h2 class="text-6xl font-extrabold mt-14 ml-28">Contact people</h2>

    <ContactPeople v-for="(contact, index) in companyData[0].contacts" :person="contact" :key="index"/>
    <img src="../assets/img/black notebook and green arm.png" alt="notebook">
    <img src="../assets/img/line.svg" alt="line">
    <LastCompanyInvoices :invoices="companyData[0].lastInvoices"/>
  </div>
</template>

<script>
import Company from '@/components/Company.vue';
import ContactPeople from '@/components/ContactPeople.vue';
import LastCompanyInvoices from '@/components/LastCompanyInvoices.vue';
import axios from 'axios';

export default {
  name: 'ShowCompanyView',
  components: {
    Company,
    ContactPeople,
    LastCompanyInvoices,
  },
  data() {
    return {
      companyData: null,
      loading: true
    }
  },
  async mounted() {
    try {
      this.companyData = await this.getCompanyData();
    } catch (error) {
      console.error(error);
    } finally {
      this.loading = false;
    }
  },
  methods: {
    async getCompanyData() {
      try {
        const response = await axios.get('../../mock/piedPipper.json');
        return response.data;
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>

<style scoped></style>
