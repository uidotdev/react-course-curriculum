'use strict';

var React = require('react');
var ReactDOM = require("react-dom");

var HelloWorld = React.createClass({
  render: function () {
    return (
      <div>Hello React World!</div>
    );
  }
});

ReactDOM.render(<HelloWorld/>, document.getElementById("app"));