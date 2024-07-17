<template>
    <header>
        <div>
        <h2 class="text-3xl font-extrabold">Dashboard</h2>
        <h3>Welcome back Henry!</h3>
        <p>You can here add an invoice, a company or some contacts</p>
        <img src="../assets/img/Rectangle 22.png" alt="rectangle">
        <img src="../assets/img/illustr.png" alt="illustr"></div>
              
        <div>
            <nav>
                <img src="../assets/img/contact1.svg" alt="contact">
                <h3>Henry George</h3>
                <img src="../assets/img/line.svg" alt="line">
                <router-link :to="{ name: 'Dashboard' }">Dashboard</router-link>
                <router-link :to="{ name: 'Invoices' }">Invoices</router-link>
                <router-link :to="{ name: 'Companies' }">Companies</router-link>
                <router-link :to="{ name: 'Contacts' }">Contacts</router-link>
               
            </nav>
        </div>


        <router-view></router-view>

    </header>
</template>

<script>
export default {
    name: 'DashboardLayout.vue',
    data() {
        return {}
    },
    computed: {},
    mounted() { },
    methods: {}
}
</script>