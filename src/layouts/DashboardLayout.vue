<template>
    <header>
        <div>
            <nav class="flex flex-col w-2/12 min-h-full">
                <img class="w-40 h-40 rounded-full" src="../assets/img/contact1.svg" alt="contact">
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