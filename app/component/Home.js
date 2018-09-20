var React = require('react');
var Header = require('./Header');
var PropTypes = require('prop-types');
var axios = require('axios')
var config = require('../../apiKeys')
var ReactRouter = require('react-router-dom')
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var Forecast = require('./Forecast');
var Redirect = ReactRouter.Redirect;

const styles = {
  marginLeft: "20px",
  fontSize: "32px",
  color: "white"
};

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: null,
      state: null,
      weatherData: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(e) {
    e.preventDefault();
    let input = e.target.value.split(' ,');
    this.setState(function() {
      return {
        city: input
      }
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    city = this.state.city

    function getCurrentWeather(city) {
      return axios.get("http://api.openweathermap.org/data/2.5/weather?q="+ city + `&type=accurate&APPID=${config.apiKey}`)
        .then(function(response) {
          return(response.data)
        })
      };
    function getFiveDayForecast(city) {
      return axios.get("http://api.openweathermap.org/data/2.5/forecast?q=" + city + `,us&mode=XML&APPID=${config.apiKey}&cnt=5`)
        .then(function(response) {
          return(response.data)
        })
      };
    axios.all([getCurrentWeather(city), getFiveDayForecast(city)])
      .then(axios.spread((currentWeatherResponse, fiveDayResponse) => {
        this.setState({ weatherData: [...this.state.weatherData, currentWeatherResponse] })
        this.setState({ weatherData: [...this.state.weatherData, fiveDayResponse]})
      }))
      .then(() => {
        this.props.history.push({
          pathname: '/forecast',
          search: `?forecast?city=${this.state.city}`,
          state: {
              data: this.state.weatherData}
        })
      });
    };

  render() {

    return(
        <div className="home">
          <Header data={this.props}/>
          <div className="main">
            <p style={styles}>Enter a City</p>
            <form className="column" onSubmit={this.handleSubmit}>
              <input
                id="location"
                placeholder="City"
                type="text"
                autoComplete="off"
                onChange={this.handleChange}/>
              <button
                className="button"
                type="submit"
                >
                Get Weather
              </button>
            </form>
          </div>
        </div>
    )
  }
};


module.exports = Home
