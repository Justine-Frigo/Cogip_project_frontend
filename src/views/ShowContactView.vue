<template>
  <div v-if="!loading && contact">
    <Contact :contact="contact"/>
  </div>
</template>

<script>
import Contact from '@/components/Contact.vue';
import axios from 'axios';

export default {
  name: 'ShowContactView',
  components: {
    Contact,
  },
  data() {
    return {
      contact: null,
      loading: false,
    }
  },
  computed: {},
  async mounted() {
    this.loading = true;
    this.contact = await this.getContact();
    this.loading = false;
  },
  methods: {
    async getContact() {
      try {
        const response = await axios.get('../../mock/piedPipper.json');
        return response.data[0].contacts[0]
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>