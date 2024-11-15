import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import Hourly from '../views/HourlyView.vue';
import Forecast from '../views/ForecastView.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/hourly', name: 'Hourly', component: Hourly },
  { path: '/forecast', name: 'Forecast', component: Forecast },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
