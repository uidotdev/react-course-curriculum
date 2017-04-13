var React = require('react');
var ReactDOM = require('react-dom')
import {Link} from 'react-router';


var Prompt = React.createClass({

	render: function () {
		return (
		
		<div className='jumbotron col-sm-6 col-sm-offset-3 text-center'>
		<h1>{this.props.header}</h1>
	  <div className='col-sm-12'>
		<form onSubmit={this.props.onSubmitUser}>
			<div className='form-group'>

				<input 
					className='form-control'
					placeholder='Github username'
					type='text'
					onChange={this.props.onUpdateUser}
					value={this.props.username}/>
			</div>
			<div className="form-group col-sm-4 col-sm-offset-4">
				
					<button
						className="btn btn-block btn-success"
						type="submit">
						Continue	
					</button>
				
			</div>
		</form>
	  </div>


	</div>



		)

	}



})

export default Prompt;