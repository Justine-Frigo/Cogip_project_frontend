<template>
  <div>
    <Company/>
    <div class="flex justify-center"><img src="../assets/img/line.svg" alt="line"></div>
    <ContactPeople/>
    <img src="../assets/img/black notebook and green arm.png" alt="notebook">
    <img src="../assets/img/line.svg" alt="line">
    <LastInvoices/>

  </div>
</template>

<script>
import Company from '@/components/Company.vue';
import ContactPeople from '@/components/ContactPeople.vue';
import LastInvoices from '@/components/LastInvoices.vue';


  export default {
    name: 'ShowCompanyView',
    components:{
      Company,
      ContactPeople,
      LastInvoices,
      
    },
    data() {
      return {}
    },
    computed: {},
    mounted() {},
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>