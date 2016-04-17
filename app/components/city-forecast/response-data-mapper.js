function mapForecastResponse(respData) {  
  return {
    cityName: respData.city.name,
    days: respData.list.map(mapOneDay)
  }; 
}

function mapOneDay(day) {
  return {
    date: new Date(day.dt * 1000),
    iconCode: day.weather[0].icon,
    description: day.weather[0].description,
    humidity: day.humidity,
    temperature: {
      morning: toCelsius(day.temp.morn), 
      day: toCelsius(day.temp.day),
      evening: toCelsius(day.temp.eve),
      night: toCelsius(day.temp.night)
    }
  };
}

function toCelsius(temp) {
  return Math.round(temp - 273.15);
}

export default { mapForecastResponse };
