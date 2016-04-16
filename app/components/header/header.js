import styles from './header.css';
import React from 'react';
import CityContainer from '../city/city-container';

export default function Header() {
  return (
    <div className={styles.container}>
      <h2 className={`${styles.title} h2`}>Clever Title</h2>
      <CityContainer orientation="horizontal"/>
    </div>
  );
}
