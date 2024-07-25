<template>
    <div class="flex">
      <!-- Sidebar -->
      <aside class="w-64 bg-white border-r border-gray-200 flex flex-col justify-between h-screen">
        <div class="flex-1">
        <div class="flex flex-col items-center py-6 border-b">
          <!-- Profile Picture -->
          <img src="../assets/img/contact1.svg" alt="profile" class="w-20 h-20 rounded-full">
          <h3 class="mt-4 text-xl font-semibold">Henry George</h3>
        </div>
        <!-- Navigation Links -->
        <nav class="mt-6">
          <ul class="space-y-2">
         <li>
              <router-link :to="{ name: 'DashboardHome' }" class="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-200">
                Dashboard
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'DashboardInvoices' }" class="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-200">
                Invoices
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'DashboardCompanies' }" class="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-200">
                Companies
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'DashboardContacts' }" class="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-200">
                Contacts
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Home' }" class="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-200">
                Home
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
        <!-- Logout -->
        <div class="flex items-center justify-center py-6 border-t">
          <button class="flex items-center text-gray-700 hover:text-gray-900">
            <img src="../assets/img/contact1.svg" alt="logout" class="w-6 h-6">
            <span class="ml-2">Logout</span>
          </button>
        </div>
      </aside>
      <!-- Main Content -->
      
      <main class="flex-1 p-6 bg-gray-100">
      <h2 class="text-4xl font-extrabold mb-20">Dashboard</h2>
      <div class="relative bg-[#9698D6] p-20 rounded-lg flex items-center">
        <div>
          <h2 class="text-4xl font-bold text-white">Welcome back Henry!</h2>
          <p class="mt-2 text-white">You can here add an invoice, a company or some contacts</p>
        </div>
        <div class="relative flex-1">
          <img src="../assets/img/illustr.png" alt="illustration" class="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
        </div>
      </div>
      <router-view></router-view>
    </main>
  </div>
  </template>
  
  <script>
  export default {
    name: 'DashboardLayout',
  }
  </script>
  
  <style>

  </style>
  

