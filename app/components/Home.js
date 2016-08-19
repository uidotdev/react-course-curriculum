const React = require('react');
const styles = require('../styles/index');

const Home = React.createClass({
  render: function() {
    return (
      <div style={styles.backgroundCoverImage}>
        <div className="col-sm-4 col-sm-offset-4 text-center">
          <h2 style={{marginTop: 25 + 'px', fontFamily: 'Courier new', color: '#fff'}}>Find Your Weather</h2>
          <form>
            <div className="form-group">
              <input className="form-control" type="text" placeholder="Seattle, WA"/>
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
              <button className="btn btn-success" type="submit">Get Weather</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
});

module.exports = Home;
