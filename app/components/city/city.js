import styles from './city.css';
import React from 'react';

function renderCity(props) {
  const containerClassName = props.orientation === 'vertical' 
    ? styles.containerVertical 
    : styles.containerHorizontal;
   
  return (
    <form className={containerClassName} onSubmit={props.onSubmitCity}>
      <input className={`${styles.input} form-control`} type="text" placeholder="City, State" onChange={props.onUpdateCity} />
      <button className={`${styles.button} btn btn-success`} type="submit">Get Weather</button>
    </form>
  );
}

renderCity.propTypes = {
  onSubmitCity: React.PropTypes.func.isRequired,    
  onUpdateCity: React.PropTypes.func.isRequired    
};

export default renderCity;
