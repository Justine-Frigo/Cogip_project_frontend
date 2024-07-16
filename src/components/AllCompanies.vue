<template>
  <div class="p-8"> 
    <h3 class="text-6xl font-extrabold mb-4">All companies</h3>
    <table class="min-w-full bg-white border border-gray-300">
      <thead class="bg-yellow-300">
        <tr>
          <th class="py-2 px-4 border-b border-gray-300 text-left">Name</th>
          <th class="py-2 px-4 border-b border-gray-300 text-left">TVA</th>
          <th class="py-2 px-4 border-b border-gray-300 text-left">Country</th>
          <th class="py-2 px-4 border-b border-gray-300 text-left">Type</th>
          <th class="py-2 px-4 border-b border-gray-300 text-left">Created at</th>
        </tr>
      </thead>
      <tbody>
        <tr class="odd:bg-white even:bg-gray-100">
          <td class="py-2 px-4 border-b border-gray-300">Raviga</td>
          <td class="py-2 px-4 border-b border-gray-300">US456 654 321</td>
          <td class="py-2 px-4 border-b border-gray-300">United States</td>
          <td class="py-2 px-4 border-b border-gray-300">Supplier</td>
          <td class="py-2 px-4 border-b border-gray-300">25/09/2020</td>
        </tr>
        <tr class="odd:bg-white even:bg-gray-100">
          <td class="py-2 px-4 border-b border-gray-300">Dunder Mifflin</td>
          <td class="py-2 px-4 border-b border-gray-300">US676 787 767</td>
          <td class="py-2 px-4 border-b border-gray-300">United States</td>
          <td class="py-2 px-4 border-b border-gray-300">Client</td>
          <td class="py-2 px-4 border-b border-gray-300">25/09/2020</td>
        </tr>
        <tr class="odd:bg-white even:bg-gray-100">
          <td class="py-2 px-4 border-b border-gray-300">Pierre Cailloux</td>
          <td class="py-2 px-4 border-b border-gray-300">FR 676 676 676</td>
          <td class="py-2 px-4 border-b border-gray-300">France</td>
          <td class="py-2 px-4 border-b border-gray-300">Supplier</td>
          <td class="py-2 px-4 border-b border-gray-300">25/09/2020</td>
        </tr>
        <tr class="odd:bg-white even:bg-gray-100">
          <td class="py-2 px-4 border-b border-gray-300">Belgalol</td>
          <td class="py-2 px-4 border-b border-gray-300">BE0987 876 787</td>
          <td class="py-2 px-4 border-b border-gray-300">Belgium</td>
          <td class="py-2 px-4 border-b border-gray-300">Supplier</td>
          <td class="py-2 px-4 border-b border-gray-300">25/09/2020</td>
        </tr>
        <tr class="odd:bg-white even:bg-gray-100">
          <td class="py-2 px-4 border-b border-gray-300">Jouet Jean-Michel</td>
          <td class="py-2 px-4 border-b border-gray-300">FR 787 776 999</td>
          <td class="py-2 px-4 border-b border-gray-300">France</td>
          <td class="py-2 px-4 border-b border-gray-300">Client</td>
          <td class="py-2 px-4 border-b border-gray-300">25/09/2020</td>
        </tr>
      </tbody>
    </table></div>
</template>

<script>
  export default {
    name: 'AllCompanies',
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