<template>
    <div> 
      <NewContact />

    </div>
  </template>
  
  <script>
import NewContact from '@/components/NewContact.vue';

  export default {
    name: 'DashboardContacts',
    components: {
      NewContact,
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