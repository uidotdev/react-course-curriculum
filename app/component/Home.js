var React = require('react')
var Header = require('./Header')


class Home extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <div className="main">
          <p>Enter a City & State</p>
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
