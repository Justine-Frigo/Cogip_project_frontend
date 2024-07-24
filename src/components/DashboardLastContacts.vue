<template>
    <div class=" bg-slate-50 p-6 mt-8 rounded-lg shadow h-max">
        <h3 class="text-lg font-bold mb-6 border-b pb-6">Last Contacts</h3>
        <table class="min-w-full">
            <thead>
                <tr class="*:text-left">
                    <th>
                        Name
                    </th>
                    <th>
                        Phone
                    </th>
                    <th>
                        Email
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(contact, index) in dashboardLastContacts" :key="index" class="h-12">
                    <td>
                        {{ contact.name }}
                    </td>
                    <td>
                        {{ contact.phone }}

                    </td>
                    <td>
                        {{ contact.email }}

                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'DashboardLastContacts',
    data() {
        return {
            dashboardLastContacts: null,
        }
    },
    computed: {},
    async mounted() {
        this.dashboardLastContacts = await this.getDashboardLastContacts()
    },
    methods: {
        async getDashboardLastContacts() {
            try {
                const response = await axios.get("http://cogip_project.test/contacts", {
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