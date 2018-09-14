var React = require('react');
var Header = require('./Header');
var PropTypes = require('prop-types');


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

    this.handleChange = this.handleChange.bind(this);
  }



  handleChange(e) {
    e.preventDefault();
    let input = e.target.value;
    //parseInput return string to use as query params in get request
    console.log(parseInput(input));
    this.setState(function() {
      return {
        city: input
      }
    })

  }
  render() {
    return(
      <div className="home">
        <Header />
        <div className="main">
          <p style={styles}>Enter a City</p>
          <input
            id="location"
            placeholder="City"
            type="text"
            autoComplete="off"
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
//
// Home.propTypes = {
//   city: PropTypes.string.isRequired,
//   state: PropTypes.string.isRequired
// }

module.exports = Home
