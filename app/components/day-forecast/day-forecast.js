import styles from './day-forecast.css';
import React from 'react';
import moment from 'moment';

function DayForecast(props) {
  const imageStyle = {
    backgroundImage: `url(/app/images/weather/${props.iconCode}.svg)`
  };
  
  const formattedDate = moment(props.date).format('dddd, MMM DD');
  
  return (
    <div className={styles.container}>
      <div style={imageStyle} className={styles.weatherStatus}></div>      
      <p className={styles.date}> {formattedDate} </p>
    </div>
  );
}

DayForecast.propTypes = {
  iconCode: React.PropTypes.string.isRequired,
  date: React.PropTypes.instanceOf(Date).isRequired
};

export default DayForecast;
