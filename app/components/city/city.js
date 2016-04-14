import './city.css';
import React from 'react';

function renderCity() {
  return (
    <div className="City-container">
      <input className="form-control" type="text" placeholder="City, State" />
      <button className="btn btn-success City-button" type="button">Get Weather</button>
    </div>
  );  
}

export default renderCity;