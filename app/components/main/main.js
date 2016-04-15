import styles from './main.css';
import React from 'react';
import HeaderContainer from '../header/header-container'; 

export default function renderMain(props) {
  return (
    <div className={styles.container}>
      <HeaderContainer />
      {props.children}
    </div>
  );
}
