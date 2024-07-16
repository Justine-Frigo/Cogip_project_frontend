<template>
  <main>
    <LastInvoices/>
    <LastContacts/>
    <LastCompanies/>
    <img src="../assets/img/black notebook and green arm.png" alt="notebook">
    <img src="../assets/img/bulb.png" alt="bulb">
    <h2>WORK BETTER IN YOUR COMPANY</h2>
    <img src="../assets/img/yellow_rectangle_comments.png" alt="comments">
  </main>
</template>
<script>
import LastContacts from '@/components/LastContacts.vue';
import LastInvoices from '../components/LastInvoices.vue';
import LastCompanies from '@/components/LastCompanies.vue';

export default {
  name: 'HomeView.vue',
  components: {
    LastInvoices,
    LastContacts,
    LastCompanies

  },
  data() {
    return {}
  },
  computed: {},
  mounted() { },
  methods: {}
}
</script>