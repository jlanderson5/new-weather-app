<template>
  <div class="home-layout">
    <!-- Sidebar -->
    <aside class="sidebar">
      <LocationList
        :locations="savedLocations"
        @remove="removeLocation"
        @view="fetchWeather"
      />
    </aside>

    <!-- Main Content -->
    <main class="main-content">
      <video autoplay muted loop :src="backgroundVideo" class="background-video"></video>
      <SearchBar @search="fetchWeather" />
      <WeatherCard v-if="weather" :weather="weather" />
    </main>
  </div>
</template>


<script>
import SearchBar from '../components/SearchBar.vue';
import WeatherCard from '../components/WeatherCard.vue';
import LocationList from '../components/LocationList.vue';
import axios from 'axios';

// Import video files
import clearVideo from '../assets/clear.mp4';
import cloudyVideo from '../assets/cloudy.mp4';
import rainyVideo from '../assets/rainy.mp4';
import snowVideo from '../assets/snow.mp4';
import thunderstormsVideo from '../assets/thunderstorms.mp4';
import defaultVideo from '../assets/default.mp4';

export default {
  components: { SearchBar, WeatherCard, LocationList },
  data() {
    return {
      weather: null, // Store weather data
      savedLocations: [], // Store saved locations
    };
  },
  computed: {
    backgroundVideo() {
      if (!this.weather) return defaultVideo; // Default video
      const condition = this.weather.weather[0].main.toLowerCase();

      if (condition.includes('clear')) return clearVideo;
      if (condition.includes('clouds')) return cloudyVideo;
      if (condition.includes('rain')) return rainyVideo;
      if (condition.includes('snow')) return snowVideo;
      if (condition.includes('thunderstorm')) return thunderstormsVideo;

      return defaultVideo; // Fallback video
    },
  },
  methods: {
    async fetchWeather(city) {
      try {
        const API_KEY = 'ed57883fd55ff80c481683537b82903d'; // Replace with your OpenWeather API key
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather`,
          {
            params: {
              q: city,
              appid: API_KEY,
              units: 'metric', // Use metric units (Celsius)
            },
          }
        );
        this.weather = response.data; // Save weather data;
        
        // Add city to saved locations if it's not already there
        if (!this.savedLocations.includes(city)) {
          this.savedLocations.push(city);
        }
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    },
    removeLocation(index) {
      this.savedLocations.splice(index, 1); // Remove location from saved locations
    },
  },  
};
</script>

<style scoped>
/* Layout container */
.home-layout {
  display: flex; /* Use flexbox for layout */
  height: 100vh; /* Full viewport height */
  overflow: hidden;
}

/* Sidebar styles */
.sidebar {
  width: 20%; /* Adjust the sidebar width as needed */
  background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent black */
  color: white;
  padding: 20px;
  overflow-y: auto; /* Scroll if content overflows */
}

/* Main content styles */
.main-content {
  flex: 1; /* Take up the remaining space */
  position: relative;
  padding: 20px;
  color: white;
}

/* Style for video background */
.background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the video covers the entire background */
  z-index: -1; /* Places the video behind other content */
}

/* Scrollable saved locations list */
.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar li {
  margin: 10px 0;
  font-size: 18px;
}

.sidebar button {
  margin-left: 10px;
  padding: 5px 10px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.sidebar button:hover {
  background-color: #c0392b;
}
</style>
