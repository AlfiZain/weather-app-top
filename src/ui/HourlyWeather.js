import { loadIcon } from '../utils/loadIcon.js';

export async function renderHourlyWeather(container, data) {
  const secondHeader = document.createElement('h2');
  secondHeader.textContent = "Today's Forecast";

  const hourlyContainer = document.createElement('div');
  hourlyContainer.className = 'hourly';

  const promises = data.map(async (hour) => {
    const div = document.createElement('div');
    div.className = 'hour';

    const weatherIcon = await loadIcon(hour.icon);

    div.innerHTML = `
      <p>${hour.datetime.slice(0, 5)}</p>
      <div class="weather-icon small">${weatherIcon}</div>
      <p>${Math.round(hour.temp)}°C</p>
    `;

    return div;
  });

  const elements = await Promise.all(promises);

  const fragment = document.createDocumentFragment();

  elements.forEach((el) => fragment.append(el));
  hourlyContainer.append(fragment);
  container.append(secondHeader, hourlyContainer);
}
