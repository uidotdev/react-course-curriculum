const React = require('react');
const { Link } = require('react-router-dom');
const Helper = require('../utils/Helper');

const headerStyles = {
  fontSize: '40px',
  display: 'flex',
  justifyContent: 'center',
  color: 'darkblue',
};

function WeatherContainer(props) {
  const date = props.data.dt;
  const kelvin = props.data.main.temp;
  const formatted = Helper.parseDate(date);
  const temp = Math.round(Helper.parseTemp(kelvin));
  const icon = props.data.weather[0].icon;
  const data = props.data;

  return (
    <div className="weather-container">
      <p>
        <img
          className="weather"
          src={`./app/images/weather-icons/${icon}.svg`}
          alt="Weather"
        />
      </p>
      <p>
        {' '}
        {formatted}
        {' '}
      </p>
      <p>
        {' '}
        {temp}
        {' '}
Degrees Celsius
        {' '}
      </p>
      <Link to={{
        pathname: `detail/${date}`,
        state: {
          data,
        },
      }}
      >
        Get More Details
      </Link>
    </div>
  );
}

class Forecast extends React.Component {
  render() {
    console.log(this.props.history.location.state.data)
    const weatherData = this.props.history.location.state.data;
    const fiveDay = this.props.location.state.data[1].list;

    return (
      <div>
        <div>
          <h1 style={headerStyles}>
            Forecast by 3 Hour Intervals in {weatherData[0].name}
          </h1>
        </div>
        <div className="weather-by-day">
          {fiveDay.map(info => <WeatherContainer key={info.dt} data={info} history={this.props.history} />)}
        </div>
      </div>
    );
  }
}


module.exports = Forecast;
