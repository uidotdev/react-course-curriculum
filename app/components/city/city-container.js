import React from 'react';
import City from './city'
import openWeatherService from '../../services/open-weather';

export default class CityContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { city: '' };
    this.handleSubmitCity = this.handleSubmitCity.bind(this);
    this.handleUpdateCity = this.handleUpdateCity.bind(this);
  }
  
  handleSubmitCity(e) {
    e.preventDefault();

    openWeatherService
      .getCurrentWeatherForCity(this.state.city)
      .then(resp => console.log(resp));

    openWeatherService
      .getFiveDayForecast(this.state.city)
      .then(resp => console.log(resp));
  }
  
  handleUpdateCity(e) {    
    this.setState({ city: e.target.value });
  }
  
  render() {
    return (
      <City 
        orientation={this.props.orientation}
        onSubmitCity={this.handleSubmitCity}
        onUpdateCity={this.handleUpdateCity} 
      />
    );
  } 
}
