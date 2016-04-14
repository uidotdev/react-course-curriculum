import './home.css';
import React from 'react';
import CityContainer from '../city/city-container';

function renderHome() {
  return (
    <div className="Home-container">
      <h1 className="Home-header">Enter a City and State</h1>
      <CityContainer />
    </div> 
  );
}

export default renderHome;