<template>
    <div> 
        <NewInvoice/>
  
    </div>
  </template>
  
  <script>
import NewInvoice from '@/components/NewInvoice.vue';

  export default {
    name: 'DashboardInvoices',
    components:{
        NewInvoice,
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