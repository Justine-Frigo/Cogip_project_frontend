<template>
  <div id="app" class="flex items-center justify-center">
    <div class="w-full max-w-md">
      <form class="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="handleSumbitRegister">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="firstname">
            First Name
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text" v-model="firstname" placeholder="Enter your first name" required> 
      
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="lastname">
            Last Name
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="text" v-model="lastname" placeholder="Enter your last name" required>
      
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" v-model="email" placeholder="Enter your email" required>
       

        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" v-model="password" placeholder="Enter your password" required>
       

        </div>
        <div class="flex items-center justify-between">
          <button class="bg-yellow-300 hover:bg-yellow-400 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Sign up
          </button>
          <div class="text-emerald-600" v-if="successMessage">
            {{ successMessage.message }}
          </div>
        </div>
      </form>
    </div>
  </div>
 </template>
 
 <script>
 import axios from 'axios';

   export default {
     name: 'SignupForm',
     data() {
       return {
        firstname: null,
        lastname: null,
        email: null,
        password: null,
        successMessage: null,
       }
     },
     computed: {},
     mounted() {},
     
     methods: {
        async handleSumbitRegister() {
          try {
            const response = await axios.post(`http://cogip_project.test/register`, {
              firstname: this.firstname,
              lastname: this.lastname,
              email: this.email,
              password: this.password
            })

            console.log(response.data)
            this.successMessage = response.data
          } catch (error) {
            console.error(error)
          }
        }
     }
   }
 </script>
 
 <!-- Add "scoped" attribute to limit CSS to this component only -->
 <style>
 
 </style>