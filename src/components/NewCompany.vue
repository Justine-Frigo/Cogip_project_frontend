<template>
    <div class="max-w-lg mx-auto p-4 bg-white shadow-md rounded mt-10">
      <h2 class="text-xl font-bold mb-4 border-b">New company</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="name" class="block text-gray-700"></label>
          <input type="text" v-model="name" id="name" placeholder="Name" class="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
        </div>
        <div class="mb-4">
          <label for="tva" class="block text-gray-700"></label>
          <input type="text" v-model="tva" id="tva" placeholder="TVA" class="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required/>
        </div>
        <div class="mb-4">
          <label for="country" class="block text-gray-700"></label>
          <input type="text" v-model="country" id="country" placeholder="Country" class="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required/>
        </div>
        <div>
          <button type="submit" class="w-full bg-[#9698D6] text-white py-2 px-4 rounded-md hover:bg-[#8588d4]">Save</button>
        </div>
      </form>
    </div>
  </template>
  <script>
    export default {
      name: 'NewCompany',
      data() {
        return {
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