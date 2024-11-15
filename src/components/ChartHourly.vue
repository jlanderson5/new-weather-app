<template>
  <div>
    <canvas id="hourly-chart"></canvas>
  </div>
</template>

<script>
import { Chart } from 'chart.js/auto';

export default {
  props: ['data'], // Receiving the hourly data as a prop
  mounted() {
    const ctx = document.getElementById('hourly-chart'); // Get the canvas element
    new Chart(ctx, {
      type: 'line', // Line chart for hourly data
      data: {
        labels: this.data.map((entry) => entry.time), // X-axis labels (timestamps)
        datasets: [
          {
            label: 'Temperature (°C)',
            data: this.data.map((entry) => entry.temperature), // Y-axis data (temperature)
            borderColor: 'blue', // Line color
            fill: false, // No fill under the line
          },
          {
            label: 'Precipitation (mm)',
            data: this.data.map((entry) => entry.precipitation), // Y-axis data (precipitation)
            borderColor: 'green', // Line color
            fill: false, // No fill under the line
          },
        ],
      },
    });
  },
};
</script>

<style>
canvas {
  max-width: 100%; /* Ensure the chart resizes correctly */
}
</style>
