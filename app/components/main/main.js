require('./main.css');
import React from 'react';

var styles = {
  container: {
    width: '100%',
    height: '100%'
  }
}

export default class Main extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <h1>Main Header</h1>
        {this.props.children} 
      </div>
    );
  }
}
