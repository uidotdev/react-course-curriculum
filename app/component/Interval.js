const React = require('react');
const Helper = require('../utils/Helper');


class Interval extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: null,
    };
  }

  componentWillMount() {
    this.setState({ weather: this.props.location.state.data });
  }


  render() {
    const data = this.state.weather;
    const formatted = Helper.parseDate(data.dt);
    const temp = Math.round(Helper.parseTemp(data.main.temp));
    const min = Math.round(Helper.parseTemp(data.main.temp_min));
    const weatherData = data.weather[0];
    const { icon } = weatherData;
    return (
      <div>
        <div className="main-details-container">
          <h1>
            Additional Weather Details for {formatted}
          </h1>
          <div className="details-box">
            <img
              className="weather-img"
              src={`../app/images/weather-icons/${icon}.svg`}
              alt="Weather"
            />
            <p id="detail-header">In Depth Weather Details </p>
            <p>
              Conditions:
              {weatherData.main}
              {' '}
              Skies
            </p>
            <p>
              Max Temp:
              {temp}
            </p>
            <p>
              Min Temp:
              {min}
            </p>
            <p>
              Humidity:
              {data.main.humidity}
            </p>
            <p>
              Wind Speed:
              {data.wind.speed}
              {' '}
              mph
            </p>
            <button onClick={this.props.history.goBack}>
                  Go Back To Summary
            </button>
          </div>
        </div>
      </div>
    );
  }
}


module.exports = Interval;
