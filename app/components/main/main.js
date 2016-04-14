import './main.css';
import React from 'react';

export default class Main extends React.Component {
  render() {
    return (
      <div className="Main-container">
        <h1>Main Header</h1>
        {this.props.children} 
      </div>
    );
  }
}
