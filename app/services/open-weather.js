import axios from 'axios';

const baseUrl = 'http://api.openweathermap.org/data/2.5'
const apiKey = 'bbf3cb94a461d39608480a705a670cfc';

function getFiveDayForecast(cityName) {
  const url = `${baseUrl}/forecast/daily?q=${cityName}&type=accurate&APPID=${apiKey}&cnt=5`;
  return axios.get(url);
}

export default { getFiveDayForecast };
