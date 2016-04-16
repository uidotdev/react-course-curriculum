import React from 'react';

function CityForecast(props) {
  console.log('Weather data', props.weatherData);
  
  if (props.isLoading) {
    return (<p> Loading... </p>);
  }

  return (
    <div> 
      Your forecast in the console
    </div>
  );
}

CityForecast.propTypes = {
  isLoading: React.PropTypes.bool.isRequired,
  weatherData: React.PropTypes.object.isRequired
};

export default CityForecast;