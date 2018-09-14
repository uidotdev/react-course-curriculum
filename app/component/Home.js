var React = require('react');
var Header = require('./Header');
var PropTypes = require('prop-types');


const styles = {
  fontSize: "32px",
  color: "white"
}


class Home extends React.Component {
  render() {
    return(
      <div className="home">
        <Header />
        <div className="main">
          <p style={styles}>Enter a City & State</p>
          <input
            id="location"
            placeholder="City & State"
            type="text"
            autoComplete="off"/>
          <button
            className="button"
            type="submit"
            >
            Get Weather
          </button>
        </div>
      </div>
    )
  }
}


module.exports = Home
