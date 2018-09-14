var axios = require('axios')

module.exports = {
  getCurrentWeather: function(city) {
    return axios.get("http://api.openweathermap.org/data/2.5/weather?q="+ city + "&type=accurate&APPID=#{process.env.API_KEY}")
      .then(function(response) {
        return response.data
      })
  },
  getFiveDayForecast: function(city) {
    return axios.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&type=accurate&APPID=#{process.env.API_KEY}&cnt=5")
      .then(function(response) {
        console.log(response)
      })
  }
}
