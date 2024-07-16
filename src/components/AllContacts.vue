<template>
  <div class="p-8">
    <h3 class="text-6xl font-extrabold mb-4">All contacts</h3>
    <table class="min-w-full bg-white border border-gray-300">
      <thead class="bg-yellow-300">
        <tr>
          <th class="py-2 px-4 border-b border-gray-300 text-left">Name</th>
          <th class="py-2 px-4 border-b border-gray-300 text-left">Phone</th>
          <th class="py-2 px-4 border-b border-gray-300 text-left">Mail</th>
          <th class="py-2 px-4 border-b border-gray-300 text-left">Company</th>
          <th class="py-2 px-4 border-b border-gray-300 text-left">Created at</th>
        </tr>
      </thead>
      <tbody>
        <tr class="odd:bg-white even:bg-gray-100">
          <td class="py-2 px-4 border-b border-gray-300">Peter Gregory</td>
          <td class="py-2 px-4 border-b border-gray-300">555-4567</td>
          <td class="py-2 px-4 border-b border-gray-300">peter.gregory@raviga.com</td>
          <td class="py-2 px-4 border-b border-gray-300">Raviga</td>
          <td class="py-2 px-4 border-b border-gray-300">25/09/2020</td>
        </tr>
        <tr class="odd:bg-white even:bg-gray-100">
          <td class="py-2 px-4 border-b border-gray-300">Cameron How</td>
          <td class="py-2 px-4 border-b border-gray-300">555-8765</td>
          <td class="py-2 px-4 border-b border-gray-300">cam.how@mutiny.net</td>
          <td class="py-2 px-4 border-b border-gray-300">Mutiny</td>
          <td class="py-2 px-4 border-b border-gray-300">25/09/2020</td>
        </tr>
        <tr class="odd:bg-white even:bg-gray-100">
          <td class="py-2 px-4 border-b border-gray-300">Gavin Belson</td>
          <td class="py-2 px-4 border-b border-gray-300">555-6354</td>
          <td class="py-2 px-4 border-b border-gray-300">gavin@hooli.com</td>
          <td class="py-2 px-4 border-b border-gray-300">Hooli</td>
          <td class="py-2 px-4 border-b border-gray-300">25/09/2020</td>
        </tr>
        <tr class="odd:bg-white even:bg-gray-100">
          <td class="py-2 px-4 border-b border-gray-300">Jian Yang</td>
          <td class="py-2 px-4 border-b border-gray-300">555-8765</td>
          <td class="py-2 px-4 border-b border-gray-300">jian.yan@phoque.off</td>
          <td class="py-2 px-4 border-b border-gray-300">Phoque Off</td>
          <td class="py-2 px-4 border-b border-gray-300">25/09/2020</td>
        </tr>
        <tr class="odd:bg-white even:bg-gray-100">
          <td class="py-2 px-4 border-b border-gray-300">Bertram Gilfoyle</td>
          <td class="py-2 px-4 border-b border-gray-300">555-5434</td>
          <td class="py-2 px-4 border-b border-gray-300">gilfoy@piedpiper.com</td>
          <td class="py-2 px-4 border-b border-gray-300">Pied Pipper</td>
          <td class="py-2 px-4 border-b border-gray-300">25/09/2020</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'AllContacts',
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