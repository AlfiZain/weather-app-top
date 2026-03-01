import { fetchTodayWeather } from './api/weatherApi.js';
import { renderError } from './ui/Error.js';
import { renderLoading } from './ui/Loading.js';
import { renderCurrentWeather } from './ui/CurrentWeather.js';
import { renderHourlyWeather } from './ui/HourlyWeather.js';
import './styles/main.css';

const searchBox = document.getElementById('searchBox');
const cardContent = document.querySelector('.card-content');

async function loadWeather(location) {
  renderLoading(cardContent);

  try {
    const data = await fetchTodayWeather(location);

    renderCurrentWeather(cardContent, data);
    renderHourlyWeather(cardContent, data.days[0].hours);
  } catch (error) {
    renderError(cardContent, error);
  }
}

searchBox.addEventListener('submit', (e) => {
  e.preventDefault();

  const city = searchBox.city.value.trim();

  if (!city) return;

  loadWeather(city);
});
