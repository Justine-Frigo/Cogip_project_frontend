<template>
  <header class="bg-yellow-300 min-h-72 flex flex-col">
    <div class="flex flex-row justify-around flex-1 items-center mt-12">
      <nav class="flex flex-row gap-14 *:text-2xl font-semibold w-7/12">
        <img src="../assets/img/logo_COGIP.svg" alt="logo Cogip">
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'Invoices' }">Invoices</router-link>
        <router-link :to="{ name: 'Companies' }">Companies</router-link>
        <router-link :to="{ name: 'Contacts' }">Contacts</router-link>
      </nav>
      <div class="text-2xl font-semibold flex flex-row justify-around w-2/12">
        <router-link :to="{ name: 'Signup' }">Sign up</router-link>
        <router-link :to="{ name: 'Login' }">Login</router-link>
      </div>
    </div>
    <img class="w-11/12 -mb-4 m-auto" src="../assets/img/Rectangle 10.png" alt="rectangle">
  </header>
  <router-view class="mt-20"></router-view>
  <footer class="bg-white py-10">
    <div class="flex justify-center"><img class="mt-10" src="../assets/img/line_footer.png" alt="yellow line"></div>
    <div class="flex flex-col items-center mt-6">
      <img src="../assets/img/logo_COGIP.svg" alt="logo cogip" class="mb-4">
      <p class="flex items-center mb-2"><img class="mr-2" src="../assets/img/localisation.png" alt="localisation">Square des Martyrs, 6000 Charleroi</p>
      <p class="flex items-center mb-2"><img class="mr-2" src="../assets/img/phone.png" alt="phone">(123)456-7890</p>
      <p class="flex items-center mb-4"><img class="mr-2" src="../assets/img/fax.png" alt="fax">(123)456-7890</p>
      <div class="flex items-center mb-4">
        <span class="mr-2">Social Media</span>
        <img class="mx-1" src="../assets/img/Facebook.png" alt="facebook">
        <img class="mx-1" src="../assets/img/Twitter.png" alt="twitter">
        <img class="mx-1" src="../assets/img/LinkedIn.png" alt="linkedin">
        <img class="mx-1" src="../assets/img/Youtube.png" alt="youtube">
        <img class="mx-1" src="../assets/img/Instagram.png" alt="Instagram">
        <img class="mx-1" src="../assets/img/GooglePlus.png" alt="GooglePlus">
        <img class="mx-1" src="../assets/img/Pinterest.png" alt="Pinterest">
        <img class="mx-1" src="../assets/img/RSS.png" alt="RSS">
      </div>
      <img src="../assets/img/Separation.png" alt="séparation" class="mb-4">
      <nav class="uppercase flex flex-wrap justify-center gap-6 mb-4">
        <router-link :to="{ name: 'Home' }" class="hover:underline">Home</router-link>
        <router-link :to="{ name: 'Invoices' }" class="hover:underline">Invoices</router-link>
        <router-link :to="{ name: 'Companies' }" class="hover:underline">Companies</router-link>
        <router-link :to="{ name: 'Contacts' }" class="hover:underline">Contacts</router-link>
        <a href="#" class="hover:underline">PRIVACY POLICY</a>
      </nav>
      <p class="text-sm">&copy; 2022 COGIP Inc.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MainLayout.vue',
  data() {
    return {}
  },
  computed: {},
  mounted() { },
  methods: {}
}
</script>

