var React = require('react')
var Header = require('./Header')


class Home extends React.Component {
  render() {
    return(
      <div>
        <Header /> 
        Hi there!
      </div>
    )
  }
}


module.exports = Home
