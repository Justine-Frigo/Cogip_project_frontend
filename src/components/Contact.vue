<template>
    <div>
        <h3>{{contact.name}}</h3>
        <p>Contact: {{contact.name}}</p>
        <p>Phone: {{contact.phone}}</p>
        <p>Mail: {{contact.email}}</p>
        <p>Company: {{contact.company}}</p>
        <img :src="contact.img" alt="contact">
    </div>
  </template>
  
  <script>
  export default {
    name: 'Contact',

    props: {
      contact: {
        type: [Array, Object],
        required: true
      }
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