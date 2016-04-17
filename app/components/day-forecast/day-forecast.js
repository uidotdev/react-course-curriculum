import React from 'react';

function DayForecast(props) {
  return (
    <div>
      <p>{props.iconCode}</p>      
      <p>{props.date.toString()}</p>
    </div>
  );
}

DayForecast.propTypes = {
  iconCode: React.PropTypes.string.isRequired,
  date: React.PropTypes.instanceOf(Date).isRequired
};

export default DayForecast;
