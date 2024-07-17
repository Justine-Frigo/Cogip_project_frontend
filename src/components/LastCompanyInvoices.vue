<template>
    <div class="p-8">
        <h3 class="text-5xl font-extrabold mb-20 ">Last invoices</h3>
        <table class="min-w-full bg-white border border-gray-300">
            <thead class="bg-yellow-300">
                <tr>
                    <th class="py-2 px-4 border-b border-gray-300 text-left">Invoice number</th>
                    <th class="py-2 px-4 border-b border-gray-300 text-left">Dates due</th>
                    <th class="py-2 px-4 border-b border-gray-300 text-left">Company</th>
                    <th class="py-2 px-4 border-b border-gray-300 text-left">Created at</th>
                </tr>
            </thead>
            <tbody>
                <tr class="odd:bg-white even:bg-gray-100" v-for="(invoice, index) in invoices" :key="index">
                    <td class="py-2 px-4 border-b border-gray-300 text-left">{{ invoice.invoice_number }}</td>
                    <td class="py-2 px-4 border-b border-gray-300 text-left">{{ invoice.due_date }}</td>
                    <td class="py-2 px-4 border-b border-gray-300 text-left">{{ invoice.company }}</td>
                    <td class="py-2 px-4 border-b border-gray-300 text-left">{{ invoice.created_at }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'LastCompanyInvoices',

    props: {
        invoices: {
            type: [Object, Array],
            required: true
        }
    },

    data() {
        return {
        }
    },
    computed: {},
    async mounted() {
    },
    methods: {

    }
}
</script>

<style></style>