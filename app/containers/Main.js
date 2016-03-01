var React = require('react');
var container = require('../styles').container;

var HelloWorld = React.createClass({
  render: function () {
    return (
      <div style={container}>
        <h1>Main.js Header</h1>
        {this.props.children}
      </div>
    )
  }
})

module.exports = HelloWorld;