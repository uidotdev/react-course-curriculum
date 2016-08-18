const React = require('react');
const styles = require('../styles/index');

const Main = React.createClass({
  render: function () {
    return (
      <div style={{height: '80px', backgroundColor: '#fc6c43'}}>
        <h1 className="col-md-9" style={{fontFamily: 'Courier new', color: 'white'}}>Weather</h1>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main;
