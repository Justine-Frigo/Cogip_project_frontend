<template>
  <div>   <input class="border-solid border-2 border-slate-400 rounded-lg p-3 relative left-[1000px] top-32"
      type="text" 
      v-model="searchQuery" 
      placeholder="Search"
    /></div>
</template>

<script>
  export default {
    name: 'SearchBar',
    data() {
      return {
        searchQuery: '',
      }
    },
    computed: {},
    mounted() {},
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>