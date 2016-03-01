var React = require('react');
var PropTypes = React.PropTypes;

function Button (props) {
  return (
    <button type='button'
      style={{margin: 10}}
      className='btn btn-success'
      onClick={props.onSubmitZipcode}>
        {props.children}
    </button>
  )
}

function InputField (props) {
  return (
    <input
      className='form-control'
      onChange={props.onUpdateZipcode}
      placeholder='Zipcode'
      type='text'
      value={props.zipcode} />
  )
}

function getStyles (props) {
  return {
    display: 'flex',
    flexDirection: props.direction || 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 300,
    alignSelf: 'right'
  }
}

function ZipCode (props) {
  return (
    <div style={getStyles(props)}>
      <InputField
        onUpdateZipcode={props.onUpdateZipcode}
        zipcode={props.zipcode} />
      <Button
        onSubmitZipcode={props.onSubmitZipcode}>
          Get Weather
      </Button>
    </div>
  )
}

ZipCode.propTypes = {
  direction: PropTypes.string,
  onSubmitZipcode: PropTypes.func.isRequired,
  onUpdateZipcode: PropTypes.func.isRequired,
  zipecode: PropTypes.number
}

module.exports = ZipCode;