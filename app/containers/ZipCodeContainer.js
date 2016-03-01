var React = require('react');
var PropTypes = React.PropTypes;
var ZipCode = require('../components/ZipCode');

var ZipCodeContainer = React.createClass({
  getDefaultProps () {
    return {
      direction: 'column'
    }
  },
  propTypes: {
    direction: PropTypes.string
  },
  getInitialState () {
    return {
      zipcode: 90210
    }
  },
  handleSubmitZipcode: function () {

  },
  handleUpdateZipcode: function () {

  },
  render: function () {
    return (
      <ZipCode
        direction={this.props.direction}
        onSubmitZipcode={this.handleSubmitZipcode}
        onUpdateZipcode={this.handleUpdateZipcode}
        zipcode={this.state.zipcode} />
    )
  }
});

module.exports = ZipCodeContainer;