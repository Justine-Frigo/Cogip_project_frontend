<template>
  <div>
    <Company/>
    <img src="../assets/img/line.svg" alt="line">
   
  </div>
</template>

<script>
import Company from '@/components/Company.vue';


  export default {
    name: 'ShowCompanyView',
    components:{
      Company,
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