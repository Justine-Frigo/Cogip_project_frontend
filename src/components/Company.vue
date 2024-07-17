<template>
  <div class="ml-28" v-if="companyData">
    <h3 class="uppercase text-5xl font-extrabold mb-14 relative z-50">
      {{ companyData.name }}
    </h3>
    <img class="absolute bottom-[400px] left-36" src="../assets/img/Rectangle 19.svg" alt="rectangle">
    <div class="mb-14">
      <p><span class="font-extrabold">Name</span>: {{ companyData.name }}</p>
      <p><span class="font-extrabold">TVA</span>: {{ companyData.tva }}</p>
      <p><span class="font-extrabold">Country</span>: {{ companyData.country }}</p>
      <p><span class="font-extrabold">Type</span>: {{companyData.type}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Company',
  props: {
    companyData: {
      type: [Object, Array],
      required: true
    }
  }
}
</script>

<style scoped></style>
