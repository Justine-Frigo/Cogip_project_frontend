<template>
    <div class=" bg-slate-50 p-6 mt-8 rounded-lg shadow h-max">
        <h3 class="text-lg font-bold mb-6 border-b pb-6">Last invoices</h3>
        <table class="min-w-full">
            <thead>
                <tr class="*:text-left">
                    <th>
                       Reference
                    </th>
                    <th>
                        Price
                    </th>
                    <th>
                        Company
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(invoice, index) in dashboardLastInvoices" :key="index" class="h-12">
                    <td>
                        {{ invoice.ref }}
                    </td>
                    <td>
                        {{ invoice.price }}

                    </td>
                    <td>
                        {{ invoice.id_company }}

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
                const response = await axios.get("http://cogip_project.test/invoices", {
                    params:{
                        limit: 5,
                    }
                });
                return response.data.data
            } catch (error) {
                console.error(error)
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>