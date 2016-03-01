var React = require('react');
var PropTypes = React.PropTypes;

function Button (props) {
  return (
    <button type='button'
      style={{margin: 10}}
      className='btn btn-success'
      onClick={props.onSubmitCity}>
        {props.children}
    </button>
  )
}

function InputField (props) {
  return (
    <input
      className='form-control'
      onChange={props.onUpdateCity}
      placeholder='St. George, Utah'
      type='text'
      value={props.city} />
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

function GetCity (props) {
  return (
    <div style={getStyles(props)}>
      <InputField
        onUpdateCity={props.onUpdateCity}
        city={props.city} />
      <Button
        onSubmitCity={props.onSubmitCity}>
          Get Weather
      </Button>
    </div>
  )
}

GetCity.propTypes = {
  direction: PropTypes.string,
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
}

module.exports = GetCity;