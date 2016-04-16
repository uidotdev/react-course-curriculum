import styles from './loading.css';
import React from 'react';

function Loading() {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.label} h1`}> 
        Loading...
      </h1>
    </div>
  );
}

export default Loading;