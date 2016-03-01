var React = require('react');
var container = require('../styles').container;
var Home = require('../components/Home');

var HomeContainer = React.createClass({
  handleMakeStyle: function () {
    var styles = {
      backgroundSize: 'cover',
      backgroundImage: "url('app/images/pattern.svg')",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }

    return Object.keys(container).reduce(function (newStyle, val) {
      newStyle[val] = container[val]
      return newStyle
    }, styles)
  },
  render: function () {
    return <Home onMakeStyle={this.handleMakeStyle} />
  }
});

module.exports = HomeContainer;