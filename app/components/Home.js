var React = require('react');
var PropTypes = React.PropTypes;
var ZipCodeContainer = require('../containers/ZipCodeContainer');

function Home (props) {
  return (
    <div style={props.onMakeStyle()}>
      <ZipCodeContainer />
    </div>
  )
}

Home.propTypes = {
  onMakeStyle: PropTypes.func.isRequired
}

module.exports = Home;