<template>
  <div v-if="person">
    <div class="bg-gray-200 w-2/12 rounded-xl flex justify-between gap-10">
      <img class="w-36 h-36 rounded-full" :src="person.img" alt="contact">
      <div class="flex flex-col justify-center">
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
<style></style>