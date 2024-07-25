<template>
    <div class=" bg-slate-50 p-6 mt-8 rounded-lg shadow h-max">
        <h3 class="text-lg font-bold mb-6 border-b pb-6">Last Companies</h3>
        <table class="min-w-full">
            <thead>
                <tr class="*:text-left">
                    <th>
                        Name
                    </th>
                    <th>
                        TVA
                    </th>
                    <th>
                        Country
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(company, index) in dashboardLastCompanies" :key="index" class="h-12">
                    <td>
                        {{ company.name }}
                    </td>
                    <td>
                        {{ company.tva }}

                    </td>
                    <td>
                        {{ company.country }}

                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'DashboardLastCompanies',
    data() {
        return {
            dashboardLastCompanies: null,
        }
    },
    computed: {},
    async mounted() {
        this.dashboardLastCompanies = await this.getDashboardLastCompanies()
    },
    methods: {
        async getDashboardLastCompanies() {
            try {
                const response = await axios.get("http://cogip_project.test/companies", {
                    params:{
                        limit: 5,
                    }
                });
                return response.data.data;
            } catch (error) {
                console.error(error)
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>