const React = require('react');
const axios = require('axios');
const config = require('../../apiKeys');

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: null,
      weatherData: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const input = e.target.value.split(' ,');
    this.setState(() => ({
      city: input,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    let city = this.state.city;
    const emptyArray = []


    function getCurrentWeather(city) {
      return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&type=accurate&APPID=${config.apiKey}`)
        .then(response => (response.data));
    }

    function getFiveDayForecast(city) {
      return axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city},us&mode=XML&APPID=${config.apiKey}&cnt=5`)
        .then(response => (response.data));
    }
    axios.all([getCurrentWeather(city), getFiveDayForecast(city)])
      .then(axios.spread((currentWeatherResponse, fiveDayResponse) => {
        this.setState({weatherData: emptyArray});
        this.setState({ weatherData: [...this.state.weatherData, currentWeatherResponse] });
        this.setState({ weatherData: [...this.state.weatherData, fiveDayResponse] });
      }))
      .then(() => {
        this.props.history.push({
          pathname: '/forecast',
          search: `?forecast?city=${this.state.city}`,
          state: { data: this.state.weatherData },
        });
      });
  }

  render() {
    return (
      <div className="header-style">
        <p className="header-content-style"> Weather React App! </p>
        <div className="search-header">
          <form className="header-form" onSubmit={this.handleSubmit}>
            <input
              className="header-input-form"
              id="location"
              placeholder="City & State"
              type="text"
              autoComplete="off"
              onChange={this.handleChange}
            />
            <button
              className="header-bar-button"
              type="submit"
            >
              Get Weather
            </button>
          </form>
        </div>
      </div>
    );
  }
}


module.exports = Header;
