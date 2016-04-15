import styles from './home.css';
import React from 'react';
import CityContainer from '../city/city-container';

function renderHome() {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.header} h1`}>Enter a City and State</h1>
      <CityContainer />
    </div>
  );
}

export default renderHome;