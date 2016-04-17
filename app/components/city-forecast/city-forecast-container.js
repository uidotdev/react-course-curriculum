import React from 'react';
import CityForecast from './city-forecast';
import openWeatherService from '../../services/open-weather';
import responseDataMapper from './response-data-mapper';
 
export default class CityForecastContainer extends React.Component {
  constructor(props) {
    super(props);
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
     const city = this.props.location.pathname.split('/forecast/')[1];
     
     openWeatherService
      .getFiveDayForecast(city)
      .then(resp => responseDataMapper.mapForecastResponse(resp.data))
      .then(weatherData => this.setState({ 
        isLoading: false,
        weatherData: weatherData
      }));
  }

  render() {
    return (
      <CityForecast
        isLoading={this.state.isLoading}
        weatherData={this.state.weatherData} />
    );
  }
  
}
