var React = require('react')
var Helper = require('../utils/Helper')
var Header = require('./Header')
var Link = require('react-router-dom').Link


class Interval extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      weather: null
    }
  };

  componentWillMount(props) {
    this.setState({ weather: this.props.location.state.data})
  };


  render() {
    var data = this.state.weather
    var formatted = Helper.parseDate(data.dt)
    var temp = Math.round(Helper.parseTemp(data.main.temp))
    var min = Math.round(Helper.parseTemp(data.main.temp_min))
    var weatherData = data.weather[0]
    let icon = weatherData.icon
    return(
      <div>
        <Header />
          <div className='main-details-container'>
            <h1>Additional Weather Details for {formatted}</h1>
              <div className="details-box">
                  <img
                    className="weather-img"
                    src={'../app/images/weather-icons/' + icon + '.svg'} alt="Weather"
                  />
                  <p id="detail-header">In Depth Weather Details </p>
                  <p>Conditions: {weatherData.main} Skies</p>
                  <p>Max Temp: {temp}</p>
                  <p>Min Temp: {min}</p>
                  <p>Humidity: {data.main.humidity}</p>
                  <p>Wind Speed: {data.wind.speed} mph</p>
                  <button onClick={this.props.history.goBack}>
                    Go Back To Summary
                  </button>
              </div>
          </div>
      </div>
    )
  }
}






module.exports = Interval
