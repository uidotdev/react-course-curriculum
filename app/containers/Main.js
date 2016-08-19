const React = require('react');
const styles = require('../styles/index');

const Main = React.createClass({
  render: function () {
    return (
      <div style={{height: '80px', backgroundColor: '#004080'}}>
        <h1 className="col-md-9" style={{fontFamily: 'Courier new', color: 'white'}}>Weather</h1>
        <div>
          <form className="form-inline" style={{width: 285 + 'px', display: 'inline-block', marginTop: 20 + 'px', marginBottom: 20 + 'px', marginLeft: 50 + 'px'}}>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Seattle, WA"/>
            </div>
            <button type="submit" className="btn btn-success" style={{marginLeft: 5 + 'px'}}>Get Weather</button>
          </form>
        </div>

        {this.props.children}
      </div>
    )
  }
})

module.exports = Main;
