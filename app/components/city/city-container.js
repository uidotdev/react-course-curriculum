import React from 'react';
import City from './city'

export default class CityContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { city: '' };
    this.handleSubmitCity = this.handleSubmitCity.bind(this);
    this.handleUpdateCity = this.handleUpdateCity.bind(this);
  }
  
  handleSubmitCity(e) {
    e.preventDefault();
    if (this.state.city) {
      this.context.router.push(`/forecast/${this.state.city}`);  
    }    
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

CityContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}
