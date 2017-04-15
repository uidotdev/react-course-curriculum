var React = require('react');
var PropTypes = require('prop-types');

class ZipCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: 90210
    };
  }
  handleSubmitZipcode () {

  }
  handleUpdateZipcode () {

  }
  render() {
    return (
      <div
        className='zipcode-container'
        style={{flexDirection: this.props.direction}}>
        <input
          className='form-control'
          onChange={this.handleUpdateZipcode}
          placeholder='St. George, Utah'
          type='text'
          value={this.state.zipcode} />
        <button
          type='button'
          style={{margin: 10}}
          className='btn btn-success'
          onClick={this.handleSubmitZipcodee}>
            Get Weather
        </button>
      </div>
    )
  }
}

ZipCode.defaultProps = {
  direction: 'column'
}

ZipCode.propTypes = {
  direction: PropTypes.string,
}

module.exports = ZipCode;