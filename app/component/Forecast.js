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
  const { dt } = props.data;
  const { temp } = props.data.main;
  const formatted = Helper.parseDate(dt);
  const fahrenheit = Math.round(Helper.parseTemp(temp));
  const { icon } = props.data.weather[0];
  const { data } = props;

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
        {fahrenheit}
        {' '}
Degrees Celsius
        {' '}
      </p>
      <Link to={{
        pathname: `detail/${dt}`,
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
    const weatherData = this.props.history.location.state.data;
    const fiveDay = weatherData[1].list;

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
