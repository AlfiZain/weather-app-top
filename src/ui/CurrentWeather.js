import { loadIcon } from '../utils/loadIcon.js';

export async function renderCurrentWeather(container, data) {
  const current = data.currentConditions;

  const weatherIcon = await loadIcon(current.icon);

  container.innerHTML = `
    <h1 id="location" class="location">${data.resolvedAddress}</h1>

    <div class="weather-icon large">${weatherIcon}</div>

    <div id="currentWeather" class="current-weather">
        <p class="temp" id="temp">${Math.round(current.temp)}°C</p>
        <p class="condition" id="condition">${current.conditions}</p>
    </div>

    <div id="weatherDetails" class="details">
        <p>Feels like: <span id="feelslike">${Math.round(current.feelslike)}</span>°C</p>
        <p>Humidity: <span id="humidity">${current.humidity}</span>%</p>
        <p>Wind: <span id="wind">${current.windspeed}</span> mph</p>
    </div>
  `;
}
