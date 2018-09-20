var React = require('react')
var Header = require('./Header')
var Helper = require('../utils/Helper')
var Interval = require('./Interval')
var withRouter = require("react-router-dom")
var Redirect = require('react-router-dom').Redirect
var Link = require('react-router-dom').Link

const headerStyles = {
  fontSize: "40px",
  display: "flex",
  justifyContent: "center",
  color: "darkblue"
}

function WeatherContainer (props) {
  var date = props.data.dt
  var kelvin = props.data.main.temp
  var formatted = Helper.parseDate(date)
  var temp = Math.round(Helper.parseTemp(kelvin))
  let icon = props.data.weather[0].icon
  let data = props.data

  // handleClick = function() {
  //   props.history.push({
  //     pathname: `/detail/${date}`,
  //     state: {
  //       data: props
  //     }
  //   });
  // };
  //
  // this.handleClick = this.handleClick.bind(this);

  return (
    <div className="weather-container">
      <p>
        <img
          className="weather"
          src={'./app/images/weather-icons/' + icon + '.svg'} alt="Weather"
        />
      </p>
      <p> {formatted} </p>
      <p> {temp} Degrees Celsius </p>
        <Link to={{
          pathname: `detail/${date}`,
          state: {
            data: data
          }
        }} >
          Get More Details
        </Link>
    </div>
  )
}

class Forecast extends React.Component {
  render() {
    // console.log(this.props.history)
    let weatherData = this.props.history.location.state.data
    let fiveDay = this.props.history.location.state.data[1];

    return(
      <div>
        <Header data={this.props}/>
          <div>
            <h1 style={headerStyles}>Forecast by 3 Hour Intervals in  {weatherData[0].name}</h1>
          </div>
          <div className="weather-by-day">
            {fiveDay.list.map( info  => <WeatherContainer key={info.dt} data={info} history={this.props.history}/>)}
          </div>
      </div>
    )
  };






}


module.exports = Forecast;
