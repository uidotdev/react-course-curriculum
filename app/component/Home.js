var React = require('react');
var Header = require('./Header');
var PropTypes = require('prop-types');


const styles = {
  fontSize: "32px",
  color: "white"
}


class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: null,
      state: null
    }

    this.handleChange = this.handleChange.bind(this);
  }



  handleChange(e) {
    e.preventDefault();
    let input = e.target.value.split('');

    this.setState(function() {
      return {
        city: input[0],
        state: input[1]
      }
    })

  }
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
            autoComplete="off"
            value="Enter City & State"
            onChange={this.handleChange}/>
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

Home.propTypes = {
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired
}

module.exports = Home
