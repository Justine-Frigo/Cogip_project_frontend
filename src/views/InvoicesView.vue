<template>
  <div>
    <SearchBar/>
    <AllInvoices/>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import AllInvoices from '@/components/AllInvoices.vue';

  export default {
    name: 'InvoicesView',
    components:{
      AllInvoices,
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