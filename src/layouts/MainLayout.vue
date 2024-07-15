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
  <footer>
    <img src="../assets/img/line_footer.png" alt="yellow line">
    <img src="../assets/img/logo_COGIP.svg" alt="logo cogip">
    <p><img src="../assets/img/localisation.png" alt="localisation">Square des Martyrs, 6000 Charleroi</p>
    <p><img src="../assets/img/phone.png" alt="phone">(123)456-7890</p>
    <p><img src="../assets/img/fax.png" alt="fax">(123)456-7890</p>
    <p>Social Media <img src="../assets/img/Facebook.png" alt="facebook"><img src="../assets/img/Twitter.png" alt="twitter"><img src="../assets/img/LinkedIn.png" alt="linkedin"><img src="../assets/img/Youtube.png" alt="youtube"><img src="../assets/img/Instagram.png" alt="Instagram"><img src="../assets/img/GooglePlus.png" alt="GooglePlus"><img src="../assets/img/Pinterest.png" alt="Pinterest"><img src="../assets/img/RSS.png" alt="RSS"></p>
    <img src="../assets/img/Separation.png" alt="séparation">
    <nav class="*:uppercase">
      <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'Invoices' }">Invoices</router-link>
        <router-link :to="{ name: 'Companies' }">Companies</router-link>
        <router-link :to="{ name: 'Contacts' }">Contacts</router-link>
      <a href="#">PRIVACY POLICY</a>
    </nav>
  <p>Copyright &copy; 2022 COGIP Inc.</p>
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
