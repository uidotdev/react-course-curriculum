function getCurrentWeatherForCity(cityName) {
  return Promise.resolve({ result: 'OK', city: cityName });
}

export default { getCurrentWeatherForCity };