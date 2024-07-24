<template>
    <div> 
      <NewCompany/>
  
    </div>
  </template>
  
  <script>
import NewCompany from '@/components/NewCompany.vue';

  export default {
    name: 'DashboardCompanies',
    components: {
      NewCompany,
    },
    data() {
      return {}
    },
    computed: {},
    mounted() { },
    methods: {}
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style></style>