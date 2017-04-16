var React = require('react');
var api = require('../utils/api');
var queryString = require('query-string');

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forecastData: [],
      loading: false
    }

    this.makeRequest = this.makeRequest.bind(this);
  }
  componentDidMount() {
    var city = queryString.parse(this.props.location.search).city;
    this.makeRequest(city);
  }
  componentWillReceiveProps(nextProps) {
    var city = queryString.parse(nextProps.location.search).city;
    this.makeRequest(city);
  }
  makeRequest(city) {
    this.setState(function () {
      return {
        loading: true
      }
    })

    api.getCurrentWeather(city)
      .then(function (res) {
        console.log(res)
        this.setState(function () {
          return {
            loading: false
          }
        })
      }.bind(this))
  }
  render() {
    return this.state.loading === true
      ? <div>Loading</div>
      : <div>Forecast Component</div>
  }
}

module.exports = Forecast;