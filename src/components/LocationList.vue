<template>
    <div>
      <h2>Saved Locations</h2>
      <ul>
        <li v-for="(location, index) in locations" :key="index">
          {{ location }}
          <button @click="removeLocation(index)">Remove</button>
          <button @click="viewLocation(location)">View</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: ['locations'], // Receive the saved locations as a prop
    methods: {
      removeLocation(index) {
        this.$emit('remove', index); // Emit the remove event
      },
      viewLocation(location) {
        this.$emit('view', location); // Emit the view event
      },
    },
  };
  </script>
  
  <style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin: 5px 0;
  }
  
  button {
    margin-left: 10px;
  }
  </style>