import axios from 'axios';

const baseUrl = 'http://api.openweathermap.org/data/2.5'
const apiKey = 'bbf3cb94a461d39608480a705a670cfc';

function getCurrentWeatherForCity(cityName) {
  const url = `${baseUrl}/weather?q=${cityName}&APPID=${apiKey}`;
  return axios.get(url);
}

function getFiveDayForecast(cityName) {
  const url = `${baseUrl}/forecast/daily?q=${cityName}&APPID=${apiKey}&cnt=5`;
  return axios.get(url);
}

export default { getCurrentWeatherForCity, getFiveDayForecast };
