var React = require('react');
var Header = require('./Header');
var PropTypes = require('prop-types');
var api = require('../utils/api')

const styles = {
  fontSize: "32px",
  color: "white"
}

function parseInput(input) {
  if (input.includes(" ")) {
    let converted = input.split(" ")
    let inserted = converted[0] + "%20" + converted[1]
    return inserted
  } else {
    return input
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    api.getCurrentWeather(this.state.city)
      .then(function (data) {
        console.log(data)
      })
  }



  handleChange(e) {
    e.preventDefault();
    let input = e.target.value;

    //parseInput return string to use as query params in get request
    this.setState(function() {
      return {
        city: input
      }
    }, console.log(this.state))
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.props)
  }


  render() {
    return(
      <div className="home">
        <Header />
        <div className="main">
          <p style={styles}>Enter a City</p>
          <form className="column" onSubmit={this.handleSubmit}>
            <input
              id="location"
              placeholder="City"
              type="text"
              autoComplete="off"
              onChange={this.handleChange}/>
            <button
              className="button"
              type="submit"
              onSubmit={this.handleSubmit}
              >
              Get Weather
            </button>
          </form>
        </div>
      </div>
    )
  }
}
//
// Home.propTypes = {
//   city: PropTypes.string.isRequired,
//   state: PropTypes.string.isRequired
// }

module.exports = Home
