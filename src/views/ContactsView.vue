<template>
  <div>
    <SearchBar/>
    <AllContacts/>
  </div>
</template>

<script>
import AllContacts from '@/components/AllContacts.vue';
import SearchBar from '@/components/SearchBar.vue';

  export default {
    name: 'ContactsView',
    components:{
      SearchBar,
      AllContacts,
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