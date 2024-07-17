<template>
  <div class="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-6 relative w-3/5 m-auto">
      <div class="flex-grow">
          <h3 class="text-5xl font-extrabold mb-2 relative z-50">{{ contact.name }}</h3>
          <img class="absolute bottom-[130px] left-28" src="../assets/img/Rectangle 19.svg" alt="rectangle">
          <div class="mt-4 text-gray-700">
              <p><strong>Contact:</strong> {{ contact.name }}</p>
              <p><strong>Phone:</strong> {{ contact.phone }}</p>
              <p><strong>Mail:</strong> {{ contact.email }}</p>
              <p><strong>Company:</strong> {{ contact.company }}</p>
          </div>
      </div>
      <div class="flex-shrink-0">
          <img class="w-40 h-40 rounded-full" :src="contact.img" alt="contact">
      </div>
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