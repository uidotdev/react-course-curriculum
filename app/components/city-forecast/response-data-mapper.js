function mapForecastResponse(respData) {  
  const mapOneDay = (day) => {
    return {
      date: new Date(day.dt * 1000),
      iconCode: day.weather[0].icon
    };
  };
  
  return {
    cityName: respData.city.name,
    days: respData.list.map(mapOneDay)
  }; 
}

export default { mapForecastResponse };
