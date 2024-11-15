<template>
    <div>
      <h2>{{ weather.name }}</h2>
      <p>Temperature: {{ weather.main.temp }}°C</p>
      <p>Conditions: {{ weather.weather[0].description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ['weather'],
  };
  </script>
  