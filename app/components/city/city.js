import styles from './city.css';
import React from 'react';

function renderCity() {
  return (
    <div className={styles.container}>
      <input className={`${styles.input} form-control`} type="text" placeholder="City, State" />
      <button className={`${styles.button} btn btn-success`} type="button">Get Weather</button>
    </div>
  );
}

export default renderCity;