var React = require('react');
import ReactDOM from 'react-dom';
import transparentBg from '../styles/index.js'
import {Link} from 'react-router';
import Prompt from '../components/Prompt'
import ConfirmBattle from '../components/confirmBattle'
import githubHelpers from '../utils/githubHelpers'

var confirmBattleContainer = React.createClass({

contextTypes: {
	router: React.PropTypes.object.isRequired
},
getInitialState: function() {
	return {
			isLoading: true,
			playersInfo: []
			};
},

componentDidMount: function () {
	console.log('mounted')
//make call to github api and bring over player names
var query = this.props.location.query
console.log('QUERY',this.props.location.query)
//fetch info from github and update state
//fetch user info and get info and change isloading to false 
//and change player info to whatever we get back from github
//***getPlayersInfo returns a promise at the end. So now we can use .then below
githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
	.then(function(players){
		console.log('players',players)
		this.setState({
			isloading: false,
			getPlayersInfo: [players[0], players[1]]
		})
	}.bind(this))
},

render: function () {
			console.log('getPlayersInfo',this.state)
		console.log('this in confirmbattle',this)
	return (
		<ConfirmBattle
		isLoading={this.state.isloading}
		playersInfo={this.state.getPlayersInfo} />
	)
}

})

export default confirmBattleContainer;

