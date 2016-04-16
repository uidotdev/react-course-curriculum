import React from 'react';
import CityForecast from './city-forecast';
import openWeatherService from '../../services/open-weather';
 
export default class CityForecastContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentDidMount() {
     const city = this.props.location.query.city;
     openWeatherService
      .getCurrentWeatherForCity(city)
      .then(resp => console.log('Weather', resp))
      .catch(err => console.warn(err));     
  }

  render() {
    return (
      <CityForecast />
    );
  }
  
}
