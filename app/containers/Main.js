var React = require('react');

var HelloWorld = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Main.js Header</h1>
        {this.props.children}
      </div>
    )
  }
})

module.exports = HelloWorld;