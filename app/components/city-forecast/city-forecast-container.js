import React from 'react';
import CityForecast from './city-forecast';
import openWeatherService from '../../services/open-weather';
import responseDataMapper from './response-data-mapper';
 
export default class CityForecastContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = { 
      isLoading: true,
      cityName: '',
      weatherData: {
        cityName: '',
        days: []
      } 
    };
  }
  
  componentDidMount() {
     const city = this.props.location.state.cityName;
     
     openWeatherService
      .getFiveDayForecast(city)
      .then(resp => responseDataMapper.mapForecastResponse(resp.data))
      .then(weatherData => this.setState({ 
        isLoading: false,
        cityName: city,
        weatherData: weatherData
      }));
  }
  
  handleDayClick(dayForecastData) {
    this.context.router.push({
      pathname: `/forecast/details/${this.state.cityName}`,
      state: {
        cityName: this.state.cityName,
        dayForecastData: dayForecastData
      }
    });
  }

  render() {
    return (
      <CityForecast
        isLoading={this.state.isLoading}
        weatherData={this.state.weatherData}
        onDayClick={this.handleDayClick} />
    );
  }  
}

CityForecastContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

