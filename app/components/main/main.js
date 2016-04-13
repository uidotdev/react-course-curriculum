require('./main.css');
import React from 'react';

export default class Main extends React.Component {
  render() {
    return (
      <div> 
        {this.props.children} 
      </div>
    );
  }
}
