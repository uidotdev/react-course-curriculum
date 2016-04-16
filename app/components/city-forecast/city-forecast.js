import React from 'react';
import LoadingContainer from '../loading/loading-container';

function CityForecast(props) {
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
  weatherData: React.PropTypes.object.isRequired
};

export default CityForecast;
