import styles from './home.css';
import React from 'react';
import CityContainer from '../city/city-container';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.header} h1`}>Enter a City and State</h1>
      <CityContainer orientation="vertical"/>
    </div>
  );
}
