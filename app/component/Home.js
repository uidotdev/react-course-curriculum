var React = require('react');
var Header = require('./Header');
var PropTypes = require('prop-types');
var axios = require('axios')
var config = require('../../apiKeys')
var ReactRouter = require('react-router-dom')
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link
var Forecast = require('./Forecast')

var Redirect = ReactRouter.Redirect;

const styles = {
  marginLeft: "20px",
  fontSize: "32px",
  color: "white"
}

function parseInput(input) {
  if (input.includes(" ")) {
    let converted = input.split(" ")
    let inserted = converted[0] + "%20" + converted[1]
    return inserted
  } else {
    return input
  }
}





class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: null,
      weatherData: [],
      fireRedirect: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    let input = e.target.value;

    this.setState(function() {
      return {
        city: input
      }
    });
  }

  handleSubmit(e) {
    var self = this;
    e.preventDefault();
    city = this.state.city
    function getCurrentWeather(city) {
      return axios.get("http://api.openweathermap.org/data/2.5/weather?q="+ city + `&type=accurate&APPID=${config.apiKey}`)
        .then(function(response) {
          return(response.data)
        })
    }
    function getFiveDayForecast(city) {
      return axios.get("http://api.openweathermap.org/data/2.5/forecast?q=" + city + `,us&mode=XML&APPID=${config.apiKey}&cnt=5`)
        .then(function(response) {
          return(response.data)
        })
    }
    axios.all([getCurrentWeather(city), getFiveDayForecast(city)])
      .then(axios.spread(function(currentWeatherResponse, fiveDayResponse) {
        self.setState({ weatherData: [...self.state.weatherData, currentWeatherResponse] })
        self.setState({ weatherData: [...self.state.weatherData, fiveDayResponse]})
      }));
    this.setState( { fireRedirect: true })
    //this is where i format the form value to prepare it for the api get request?
    // call axios.all that wraps getCurrentWeather and getFiveDayForecast passing the formatted value as an argument, then get the data response, then map the data to home component state which will then be passed as a props to the Weather component.
  }


  render() {
    const { fireRedirect } = this.state.fireRedirect
    return(
      <Router>
        <div className="home">
          <Header />
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
              {fireRedirect && (
                <Redirect to={"/forecast" + this.state.weatherData} />
              )}
            </form>
          </div>
        </div>
      </Router>
    )
  }
}
//
// Home.propTypes = {
//   city: PropTypes.string.isRequired,
//   state: PropTypes.string.isRequired
// }

module.exports = Home
