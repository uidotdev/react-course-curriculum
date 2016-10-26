var React = require('react');
import ReactDOM from 'react-dom';
import transparentBg from '../styles/index.js'
import {Link} from 'react-router';

var PromptContainer = React.createClass({
getInitialState: function() {
	return {username: ''};
},
onChange: function (event) {
	this.setState({username:event.target.value})
	console.log('change',event.target.value)
},
render: function () {
	console.log('this',this);

	return (
	<div className='jumbotron col-sm-6 col-sm-offset-3 text-center' style={transparentBg}>
		<h1>{this.props.route.header}</h1>
	  <div className='col-sm-12'>
		<form onSubmit={this.onSubmitUser}>
			<div className='form-group'>

				<input 
					className='form-control'
					placeholder='Github username'
					type='text'
					onChange={this.onChange}
					value={this.state.typed}/>
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

export default PromptContainer;