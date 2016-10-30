var React = require('react');
var ReactDOM = require('react-dom')
import {Link} from 'react-router';


function ConfirmBattle (props) {
	console.log('props UI ConfirmBattle',props)

	return props.isLoading === true ?
		<p>isLoading</p>
	: <div className='playersInfo'><p>ConfirmBattle</p>
	
	<div>{props.playersInfo[0]}</div>
	<div>{props.playersInfo[1]}</div>
	</div>


}

export default ConfirmBattle;