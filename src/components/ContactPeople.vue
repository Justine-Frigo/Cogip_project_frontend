<template>
  <div v-if="person" class="flex justify-center items-center bg-white p-4 rounded-lg shadow-md m-auto w-1/4 mb-10">
    <div>
      <img class="w-40 h-40 rounded-full" :src="person.id%2 === 0 ? '../src/assets/img/contact2.jpg': '../src/assets/img/contact1.svg'" alt="contact">
      <div class="flex flex-col justify-center ml-4">
        <p class="text-2xl font-bold">{{person.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPeople',

  props: {
    person: {
      type: [Object, Array],
      required: true,
    }
  },

  data() {
    return {}
  },
  computed: {
  
  },
  mounted() { },
  methods: {
    resolveImagePath(imgPath) {
      return require(`${imgPath}`);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>