import React from 'react';
import City from './city'

export default class CityContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <City orientation={this.props.orientation} />
    );
  } 
}
