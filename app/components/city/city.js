import styles from './city.css';
import React from 'react';

export default function renderCity(props) {
  const containerClassName = props.orientation === 'vertical' 
    ? styles.containerVertical 
    : styles.containerHorizontal;
   
  return (
    <div className={containerClassName}>
      <input className={`${styles.input} form-control`} type="text" placeholder="City, State" />
      <button className={`${styles.button} btn btn-success`} type="button">Get Weather</button>
    </div>
  );
}
