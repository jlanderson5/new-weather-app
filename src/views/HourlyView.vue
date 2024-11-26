<template>
  <div>
    <SearchBar @search="fetchWeather" />
    <h1>Hourly Weather Forecast</h1>
    <chart-hourly v-if="hourlyData" :data="hourlyData" />
  </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue';
import ChartHourly from '../components/ChartHourly.vue';
import axios from 'axios';

export default {
  components: { SearchBar, ChartHourly },
  data() {
    return {
      hourlyData: null, // Store hourly weather data
    };
  },
  methods: {
    async fetchWeather(city) {
      try {
        const API_KEY = 'ed57883fd55ff80c481683537b82903d'; // Replace with your API key

        // Fetch hourly forecast data
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
          params: {
            q: city,
            appid: API_KEY,
            units: 'imperial', // Temperature in Fahrenheit
          },
        });

        // Process data: extract hourly weather for the current day
        const hourly = response.data.list.slice(0, 8).map((entry) => ({
          time: entry.dt_txt, // Time of the forecast
          temperature: entry.main.temp, // Temperature
          precipitation: entry.rain?.['3h'] || 0, // Precipitation (fallback to 0 if no rain data)
        }));

        this.hourlyData = hourly; // Assign processed data to the component's state
      } catch (error) {
        console.error('Error fetching hourly weather:', error);
      }
    },
  },
};
</script>

<style scoped>
.hourly-container {
  text-align: center;
  color: white;
  padding: 20px;
}

.chart-container {
  margin: 0 auto;
  max-width: 800px;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px;
  border-radius: 10px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}
</style>
