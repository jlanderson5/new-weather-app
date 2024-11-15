<template>
    <div>
      <h1>5-Day Weather Forecast</h1>
      <table v-if="forecastData">
        <thead>
          <tr>
            <th>Date</th>
            <th>Conditions</th>
            <th>High (°C)</th>
            <th>Low (°C)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="day in forecastData" :key="day.date">
            <td>{{ day.date }}</td>
            <td>{{ day.conditions }}</td>
            <td>{{ day.high }}</td>
            <td>{{ day.low }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        forecastData: null,
      };
    },
    async mounted() {
      try {
        const API_KEY = '5c0cdf1c6d1cfa4d0ee6bf43d39d6dbc';
        const city = 'New York'; // Replace with dynamic input
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast`,
          {
            params: {
              q: city,
              appid: API_KEY,
              units: 'metric',
            },
          }
        );
  
        // Group data by day and calculate high/low temperatures
        const grouped = {};
        response.data.list.forEach((entry) => {
          const date = entry.dt_txt.split(' ')[0];
          if (!grouped[date]) {
            grouped[date] = {
              high: entry.main.temp,
              low: entry.main.temp,
              conditions: entry.weather[0].description,
            };
          } else {
            grouped[date].high = Math.max(grouped[date].high, entry.main.temp);
            grouped[date].low = Math.min(grouped[date].low, entry.main.temp);
          }
        });
  
        this.forecastData = Object.keys(grouped).slice(0, 5).map((date) => ({
          date,
          ...grouped[date],
        }));
      } catch (error) {
        console.error('Error fetching 5-day forecast:', error);
      }
    },
  };
  </script>
  