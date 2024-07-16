<template>
  <div>
    <SearchBar/>
    <AllCompanies/>
  </div>
</template>

<script>
import AllCompanies from '@/components/AllCompanies.vue';
import SearchBar from '@/components/SearchBar.vue';

  export default {
    name: 'CompaniesView',
    components:{
      AllCompanies,
      SearchBar,

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