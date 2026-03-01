const API_URL =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
const API_KEY = 'JWBBJ7YWYHQBTLULNJLJ287XB';
const UNIT_GROUP = 'metric';

export async function fetchTodayWeather(location) {
  const url = new URL(`${API_URL}${location}/today`);
  url.searchParams.set('unitGroup', UNIT_GROUP);
  url.searchParams.set('key', API_KEY);

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    displayError(error);
  }
}
