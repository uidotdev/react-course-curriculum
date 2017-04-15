var React = require('react');
var ZipCode = require('./ZipCode');

class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <div>
          <h1>Main Header</h1>
        </div>
        <div className='home-container' style={{backgroundImage: "url('app/images/pattern.svg')"}}>
          <h1 className='header'>Enter a City and State</h1>
          <ZipCode
            direction='column'
            onSubmitZipcode={function(){}}
            onUpdateZipcode={function(){}}
            zipcode={123} />
        </div>
      </div>
    )
  }
}

module.exports = App;