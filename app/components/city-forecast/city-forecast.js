import React from 'react';
import LoadingContainer from '../loading/loading-container';

function CityForecast(props) {
  console.log('Data', props.weatherData);
  
  if (props.isLoading) {
    return (<LoadingContainer />);
  }

  return (
    <div> 
      Your forecast in the console
    </div>
  );
}

CityForecast.propTypes = {
  isLoading: React.PropTypes.bool.isRequired,
  weatherData: React.PropTypes.shape({
    cityName: React.PropTypes.string,
    days: React.PropTypes.arrayOf(React.PropTypes.object)
  }).isRequired
};

export default CityForecast;
