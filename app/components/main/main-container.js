import React from 'react';
import Main from './main'; 

export default class MainContainer extends React.Component {
  render() {
    return (
      <Main children={this.props.children}/>
    );
  }
}
