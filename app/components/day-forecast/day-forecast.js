import styles from './day-forecast.css';
import React from 'react';
import moment from 'moment';

function DayForecast(props) {
  const imagePath = `./app/images/weather/${props.iconCode}.svg`;
  
  const formattedDate = moment(props.date).format('dddd, MMM DD');
  
  return (
    <div className={styles.container}>
      <img className={styles.weatherStatus} src={imagePath} />      
      <h2 className={`${styles.date} h2`}> {formattedDate} </h2>
    </div>
  );
}

DayForecast.propTypes = {
  iconCode: React.PropTypes.string.isRequired,
  date: React.PropTypes.instanceOf(Date).isRequired
};

export default DayForecast;
