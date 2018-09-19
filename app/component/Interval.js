var React = require('react')
var Helper = require('../utils/Helper')
var Header = require('./Header')

class Interval extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      weather: null
    }
  };

  componentWillMount(props) {
    this.setState({ weather: this.props.location.state.data})
  };


  render() {
    var date = this.state.weather.dt
    var formatted = Helper.parseDate(date)
    var kelvin = this.state.weather.main.temp
    var temp = Math.round(Helper.parseTemp(kelvin))
    console.log(this.state.weather)
    return(
      <div>
        <Header />
          <div className='main-details-container'>
            <h1>Additional Weather Details</h1>
              <div className="details-box">
                
              </div>
          </div>
      </div>
    )
  }
}






module.exports = Interval
