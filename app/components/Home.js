var React = require('react');
var PropTypes = React.PropTypes;
var ZipCodeContainer = require('../containers/ZipCodeContainer');

var styles = {
  container: {
    backgroundSize: 'cover',
    backgroundImage: "url('app/images/pattern.svg')",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  header: {
    fontSize: 45,
    color: '#fff',
    fontWeight: 100,
  },
}

function Home (props) {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Enter a Zip code</h1>
      <ZipCodeContainer />
    </div>
  )
}

module.exports = Home;