import React from 'react';
import CityForecast from './city-forecast';
import openWeatherService from '../../services/open-weather';
 
export default class CityForecastContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoading: true,
      weatherData: {} 
    };
  }
  
  componentDidMount() {
     const city = this.props.location.query.city;
     openWeatherService
      .getCurrentWeatherForCity(city)
      .then(resp => this.setState({ 
        isLoading: false,
        weatherData: resp.data  
      }));
  }

  render() {
    return (
      <CityForecast 
        isLoading={this.state.isLoading}
        weatherData={this.state.weatherData}
      />
    );
  }
  
}
