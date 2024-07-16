<template>
 <div class="p-8">
    <h3 class="text-6xl font-extrabold mb-4 ">All invoices</h3>
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
        <tr class="odd:bg-white even:bg-gray-100">
          <td class="py-2 px-4 border-b border-gray-300">F20220915-001</td>
          <td class="py-2 px-4 border-b border-gray-300">15/09/2022</td>
          <td class="py-2 px-4 border-b border-gray-300">Jouet Jean-Michel</td>
          <td class="py-2 px-4 border-b border-gray-300">25/09/2020</td>
        </tr>
        <tr class="odd:bg-white even:bg-gray-100">
          <td class="py-2 px-4 border-b border-gray-300">F20220915-002</td>
          <td class="py-2 px-4 border-b border-gray-300">15/09/2022</td>
          <td class="py-2 px-4 border-b border-gray-300">Dunder Mifflin</td>
          <td class="py-2 px-4 border-b border-gray-300">25/09/2020</td>
        </tr>
        <tr class="odd:bg-white even:bg-gray-100">
          <td class="py-2 px-4 border-b border-gray-300">F20220915-003</td>
          <td class="py-2 px-4 border-b border-gray-300">15/09/2022</td>
          <td class="py-2 px-4 border-b border-gray-300">Pierre Cailloux</td>
          <td class="py-2 px-4 border-b border-gray-300">25/09/2020</td>
        </tr>
        <tr class="odd:bg-white even:bg-gray-100">
          <td class="py-2 px-4 border-b border-gray-300">F20220915-004</td>
          <td class="py-2 px-4 border-b border-gray-300">15/09/2022</td>
          <td class="py-2 px-4 border-b border-gray-300">Pier Pipper</td>
          <td class="py-2 px-4 border-b border-gray-300">25/09/2020</td>
        </tr>
        <tr class="odd:bg-white even:bg-gray-100">
          <td class="py-2 px-4 border-b border-gray-300">F20220915-005</td>
          <td class="py-2 px-4 border-b border-gray-300">15/09/2022</td>
          <td class="py-2 px-4 border-b border-gray-300">Raviga</td>
          <td class="py-2 px-4 border-b border-gray-300">25/09/2020</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'AllInvoices',
    data() {
      return {}
    },
    computed: {},
    mounted() {},
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>