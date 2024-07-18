<template>
    <div class="grid grid-cols-2 gap-x-9">
      <Statistics/>
    </div>
  </template>
  
  <script>
  import Statistics from '@/components/Statistics.vue'; 
    export default {
      name: 'DashboardView',
      components:{
        Statistics,
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