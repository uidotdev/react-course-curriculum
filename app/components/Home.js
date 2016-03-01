var React = require('react');
var container = require('../styles').container;
var ZipCode = require('../components/ZipCode');

var styles = {
  wrapper: {
    backgroundSize: 'cover',
    backgroundImage: "url('app/images/pattern.svg')",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
}

var Home = React.createClass({
  makeContainerStyles: function () {
    return Object.keys(container).reduce(function (newStyle, val) {
      newStyle[val] = container[val]
      return newStyle
    }, styles.wrapper)
  },
  render: function () {
    return (
      <div style={this.makeContainerStyles()}>
        <ZipCode
          direction='column'
          onSubmitZipcode={function(){}}
          onUpdateZipcode={function(){}}
          zipcode={123} />
      </div>
    )
  }
});

module.exports = Home;