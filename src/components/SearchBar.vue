<template>
    <div>
      <input v-model="city" @keyup.enter="search" placeholder="Enter a city" />
      <button @click="search">Search</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        city: '',
      };
    },
    methods: {
      search() {
        this.$emit('search', this.city);
      },
    },
  };
  </script>
  