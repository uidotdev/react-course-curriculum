import styles from './day-forecast.css';
import React from 'react';
import moment from 'moment';

function DayForecast(props) {
  const imagePath = `./app/images/weather/${props.iconCode}.svg`;  
  const formattedDate = moment(new Date(props.date)).format('dddd, MMM DD');
  
  return (
    <div className={styles.container} onClick={props.onClick}>
      <img className={styles.weatherStatus} src={imagePath} />      
      <h2 className={`${styles.date} h2`}> {formattedDate} </h2>
    </div>
  );
}

DayForecast.propTypes = {
  iconCode: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func
};

export default DayForecast;
