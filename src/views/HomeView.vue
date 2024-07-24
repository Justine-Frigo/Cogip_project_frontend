<template>
  <main>
    <LastInvoices/>
    <div class="flex justify-end"><img src="../assets/img/black notebook and green arm.png" alt="notebook"></div>
    <LastContacts/>
    <router-link :to="{ name: 'ShowContact' }" class="flex justify-center text-2xl hover:underline">Show Contact</router-link>
    <img src="../assets/img/bulb.png" alt="bulb">
    <LastCompanies/>
 
    <div class="flex justify-between mt-32 mb-24"><div class="flex items-center"><h2 class="text-9xl font-extrabold">WORK BETTER IN YOUR COMPANY</h2></div>
    <img src="../assets/img/yellow_rectangle_comments.png" alt="comments"></div>
  </main>
</template>
<script>
import LastContacts from '@/components/LastContacts.vue';
import LastInvoices from '@/components/LastInvoices.vue';
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