<template>
  <div v-if="!loading && contact">
    <Contact :contact="contact" />
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
    try {
      this.contact = await this.getContactData();
      // this.getContacts()
    } catch (error) {
      console.error(error);
    } finally {
      this.loading = false;
    }
  },
  methods: {
    async getContactData() {
      try {
        const response = await axios.get(`http://Cogip_project.test/contacts/${this.$route.params.id}`);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    },
    //   async getContacts(){
    //     try{
    //       const response1 = await axios.get("http://Cogip_project.test/contacts/11");
    //       this.contacts.push(response1.data);
    //       const response2 = await axios.get("http://Cogip_project.test/contacts/12");
    //       this.contacts.push(response2.data);
    //     } catch (error){
    //       console.error(error);
    //     }
    //   } 
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>