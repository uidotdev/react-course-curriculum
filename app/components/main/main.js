import styles from './main.css';
import React from 'react';
import HeaderContainer from '../header/header-container';

export default class Main extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <HeaderContainer />
        {this.props.children}
      </div>
    );
  }
}
