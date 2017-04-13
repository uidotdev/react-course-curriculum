var React = require('react');
var ReactDOM = require('react-dom')
import {Link} from 'react-router';


var Home = React.createClass({

	render: function () {
		return (
	<div className='jumbotron col-sm-6 col-sm-offset-3 text-center'>
		<h1>{this.props.route.header}</h1>
	  <div className='col-sm-12'>
	  	<Link to="/playerOne">
	  		<button className='btn btn-success btn-block'>Continue</button>
	  	</Link>
	  </div>


	</div>



		)

	}



})

export default Home;
		// <form>
		// 	<div className='form-group'>

		// 		<input 
		// 			className='form-control'
		// 			placeholder='Github username'
		// 			type='text'/>
		// 	</div>
		// 	<div className="form-group col-sm-4 col-sm-offset-4">
		// 		<button
		// 			className="btn btn-block btn-success"
		// 			type="submit">
		// 			Continue
		// 		</button>
		// 	</div>
		// </form>