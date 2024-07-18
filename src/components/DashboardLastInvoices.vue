<template>
    <div class=" bg-slate-50 p-6 mt-8 rounded-lg shadow h-max">
        <h3 class="text-lg font-bold mb-6 border-b pb-6">Last invoices</h3>
        <table class="min-w-full">
            <thead>
                <tr class="*:text-left">
                    <th>
                        Invoice Number
                    </th>
                    <th>
                        Dates
                    </th>
                    <th>
                        Company
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(invoice, index) in dashboardLastInvoices" :key="index" class="h-12">
                    <td>
                        {{ invoice.invoice_number }}
                    </td>
                    <td>
                        {{ invoice.dates_due }}

                    </td>
                    <td>
                        {{ invoice.company }}

                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'DashboardLastInvoices',
    data() {
        return {
            dashboardLastInvoices: null,
        }
    },
    computed: {},
    async mounted() {
        this.dashboardLastInvoices = await this.getDashboardLastInvoices()
    },
    methods: {
        async getDashboardLastInvoices() {
            try {
                const response = await axios.get("../../mock/invoices.json");
                return response.data
            } catch (error) {
                console.error(error)
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>