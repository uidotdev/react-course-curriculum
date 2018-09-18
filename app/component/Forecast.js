var React = require('react')
var Header = require('./Header')
var Helper = require('../utils/Helper')

const headerStyles = {
  fontSize: "40px",
  display: "flex",
  justifyContent: "center",
  color: "darkblue"
}

function WeatherContainer (props) {
  console.log(props.data)
  var date = props.data.dt
  var kelvin = props.data.main.temp
  var formatted = Helper.parseDate(date)
  var temp = Math.round(Helper.parseTemp(kelvin))
  let icon = props.data.weather[0].icon

  return (
    <div className="weather-container" onClick={this.handleClick}>
      <p>
        <img
          className="weather"
          src={'./app/images/weather-icons/' + icon + '.svg'} alt="Weather"
        />
      </p>
      <p> {formatted} </p>
      <p> {temp} Degrees Celsius </p>
    </div>
  )
}

class Forecast extends React.Component {
  render() {
    let weatherData = this.props.history.location.state.data
    let fiveDay = this.props.history.location.state.data[1];
    console.log(fiveDay);
    return(
      <div>
        <Header />
          <div>
            <h1 style={headerStyles}>Forecast by 3 Hour Intervals in  {weatherData[0].name}</h1>
          </div>
          <div className="weather-by-day">
            {fiveDay.list.map( p => <WeatherContainer key={p.id} data={p} />)}
          </div>
      </div>
    )
  };






}


module.exports = Forecast;
