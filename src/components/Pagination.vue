<template>
    <div class="flex justify-center items-center gap-2 mt-10">
      <button 
        class="border border-slate-300 rounded-lg p-2 bg-slate-100 disabled:opacity-50" 
        :disabled="data.currentPage === 1" 
        @click="handleButtonClick(data.currentPage - 1)">
        &lt;
      </button>
      <button 
        v-for="page in pagesToShow" 
        :key="page" 
        class=" border border-slate-300 rounded-lg p-2" 
        :class="page === data.currentPage ? 'bg-yellow-300' : 'bg-slate-100'" 
        @click="handleButtonClick(page)">
        {{ page }}
      </button>
      <button 
        class="border border-slate-300 rounded-lg p-2 bg-slate-100 disabled:opacity-50" 
        :disabled="data.currentPage === data.totalPages" 
        @click="handleButtonClick(data.currentPage + 1)">
        &gt;
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Pagination',
    emits: ['page-selected'],
    props: {
      data: {
        type: Object,
        required: true,
      }
    },
    computed: {
      pagesToShow() {
        const pages = [];
        const { currentPage, totalPages } = this.data;
  
        if (totalPages <= 5) {
          for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
          }
        } else {
          if (currentPage <= 3) {
            pages.push(1, 2, 3, 4, '...', totalPages);
          } else if (currentPage >= totalPages - 2) {
            pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
          } else {
            pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
          }
        }
  
        return pages;
      }
    },
    methods: {
      handleButtonClick(page) {
        if (page === '...') return;
        this.$emit('page-selected', page);
      }
    }
  }
  </script>
  