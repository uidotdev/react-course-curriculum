import React from 'react';
import styles from './forecast-details.css';
import DayForecast from '../day-forecast/day-forecast';

function ForecastDetails(props) {
  return (
    <div className={styles.container}>
      <h2 className={`${styles.cityName} h2`}>{props.cityName}</h2>
      <DayForecast 
        iconCode={props.iconCode}
        date={props.date}/>
      <section className={styles.details}>
        <p>{props.description}</p>
        <p>morning: {props.temperature.morning}°C</p>
        <p>day: {props.temperature.day}°C</p>
        <p>evening: {props.temperature.evening}°C</p>
        <p>night: {props.temperature.night}°C</p>
        <p>humidity: {props.humidity}%</p>
      </section>
    </div>
  );
} 

ForecastDetails.propTypes = {
  cityName: React.PropTypes.string.isRequired,
  date: React.PropTypes.instanceOf(Date).isRequired,
  iconCode: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  humidity: React.PropTypes.number.isRequired,
  temperature: React.PropTypes.shape({
    morning: React.PropTypes.number.isRequired,
    day: React.PropTypes.number.isRequired,
    evening: React.PropTypes.number.isRequired,
    night: React.PropTypes.number.isRequired
  }).isRequired
};

export default ForecastDetails;
