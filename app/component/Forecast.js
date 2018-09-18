var React = require('react')
var Header = require('./Header')



class Forecast extends React.Component {
  render() {
    console.log(this.props.history.location.state.data);
    return(
      <div>
        <Header />
        "Yass"
      </div>
    )
  };






}


module.exports = Forecast;
