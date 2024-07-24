<template>
  <div class="grid grid-cols-2 gap-x-9">
    <Statistics />
    <DashboardLastInvoices />
    <DashboardLastContacts/>
    <DashboardLastCompanies/>
  </div>
</template>

<script>
import DashboardLastInvoices from '@/components/DashboardLastInvoices.vue';
import Statistics from '@/components/Statistics.vue';
import DashboardLastContacts from '@/components/DashboardLastContacts.vue';
import DashboardLastCompanies from '@/components/DashboardLastCompanies.vue';
export default {
  name: 'DashboardView',
  components: {
    Statistics,
    DashboardLastInvoices,
    DashboardLastContacts,
    DashboardLastCompanies,
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