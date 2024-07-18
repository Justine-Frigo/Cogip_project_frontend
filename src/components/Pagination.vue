<template>
    <div class="w-max border-2 flex flex-row gap-2">
        <button 
        class="rounded-lg p-4" 
        :class="page === data.currentPage ? 'bg-sky-200' : 'bg-slate-100'" 
        v-for="(page, index) in data.totalPages"
        @click="handleButtonClick(index + 1)"
        >
        {{ index + 1 }}
    </button>
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    emits: ['page-selected'],

    props:{
        data:{
            type:[Object, Array],
            required: true,
        }
    },

    data() {
        return {
        }
    },
    computed: {},
    mounted() { },
    methods: {
        handleButtonClick(value) {
            this.$emit('page-selected', value)
        }
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>