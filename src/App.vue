<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/hourly">Hourly</router-link>
        <router-link to="/forecast">5-Day Forecast</router-link>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<style>
header {
  background-color: #3498db;
  color: white;
  padding: 10px;
  text-align: center;
}

nav a {
  color: white;
  margin: 0 10px;
  text-decoration: none;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}
</style>
