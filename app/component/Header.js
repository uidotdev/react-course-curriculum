var React = require('react')


class Header extends React.Component {
  render() {
    return(
      <div className="header-style">
        <p className="header-content-style"> Weather React App! </p>
        <div className="search-header">
          <input
            className="header-input-form"
            id="location"
            placeholder="City & State"
            type="text"
            autoComplete="off"/>
          <button
            className="header-bar-button"
            type="submit"
            >
            Get Weather
          </button>
        </div>
      </div>
    )
  }
}


module.exports = Header
