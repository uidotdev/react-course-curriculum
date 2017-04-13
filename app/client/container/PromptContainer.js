var React = require('react');
import ReactDOM from 'react-dom';
import transparentBg from '../styles/index.js'
import {Link} from 'react-router';
import Prompt from '../components/Prompt'

var PromptContainer = React.createClass({

//with context type we can access router with passing it down as props
contextTypes: {
	router: React.PropTypes.object.isRequired
},

getInitialState: function() {
	return {username: ''};
},
onUpdateUser: function (event) {
	this.setState({username:event.target.value})
	console.log('onUpdateUser',event.target.value)
	
},
handleSubmitUser:function (e) {
	e.preventDefault();
	var username = this.state.username;
	this.setState({
		username: ''
	})
	if (this.props.routeParams.playerOne) {

		this.context.router.push({
			pathname: '/battle',
			query: {
				playerOne:this.props.routeParams.playerOne,
				playerTwo: this.state.username
			}
		//ifit has a playerOne variable, we are on playerTwo route.
		// So we need go to battle screen on button click
		})
	}	
	else {
		console.log('context',this.context);
		//else we are playerOne so go to playerTwo screen
		//you can use push without an object like below if you are not passing in any queries etc.
		this.context.router.push('/playerTwo/' + this.state.username);	
	}
},

render: function () {
	console.log('this',this);

	 return (

		<Prompt
		onSubmitUser={this.handleSubmitUser}
		onUpdateUser={this.onUpdateUser}
		header={this.props.route.header}
		username={this.state.username}
		/>
	 )
}

})

export default PromptContainer;