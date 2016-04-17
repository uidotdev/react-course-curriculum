import React from 'react';
import ForecastDetails from './forecast-details';

export default class ForecastDetailsContainer extends React.Component {
  constructor(props) {
    super(props);
    const routerState = this.props.location.state;
    
    this.state = {
      cityName: routerState.cityName,
      dayForecastData: routerState.dayForecastData 
    };
  }
  
  render() {
    return (
      <ForecastDetails 
        cityName={this.state.cityName}
        date={this.state.dayForecastData.date}
        iconCode={this.state.dayForecastData.iconCode}
        description={this.state.dayForecastData.description}
        humidity={this.state.dayForecastData.humidity}
        temperature={this.state.dayForecastData.temperature}        
        />
    );
  }
}
