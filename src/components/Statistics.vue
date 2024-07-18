<template>
    <div class=" bg-slate-50 p-6 mt-8 rounded-lg shadow h-max">
        <h3 class="text-lg font-bold mb-6">Statistics</h3>
        <div class="flex flex-row justify-around py-8">
        <div
            class="size-20 rounded-full bg-[#4D4CAC] flex justify-center items-center p-4 text-sm text-center font-medium text-slate-50">
            245 invoices
        </div>
        <div
            class="size-20 rounded-full bg-[#9698D6] flex justify-center items-center p-4 text-sm text-center font-medium text-slate-50">
            245 Contacts
        </div>

        <div
            class="size-20 rounded-full bg-[#FF808B] flex justify-center items-center p-4 text-sm text-center font-medium text-slate-50">
            245 Companies
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'Statistics',
    data() {
        return {
        }
    },
    computed: {},
    mounted() { },
    methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>