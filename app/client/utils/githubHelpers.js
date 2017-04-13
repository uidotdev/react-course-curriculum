import axios from 'axios'


 function getUserInfo (username) {

	return axios.get('https://api.github.com/users/' + username)
}

var helpers = {

		//players is an array of our users - see confirmBattle
		//we are mapping over the players and calling getUserInfo on each item -
		//getUser info returns array of promises (username1 and 2) so when we use map and do return getUserInfo
		//we are getting a promise back
		//axios.get returns a promise - axios.all is when you give it an array of promises
		//after each one is finished resolving our .then function runs and give us our 
		//resolving a promise is when github gets the user info from the api - so after first
		//username and second username are resolved, the .then function will run.
	getPlayersInfo: function (players) {
		console.log('players promise', players)
		return axios.all(players.map(function(username){
			return getUserInfo(username);
			console.log('hellooo',getUserInfo(username))

		})).then(function(info){
			return info.map(function(user){
				return user.data;

			})
		}).catch(function(err){
			console.log('error in getPlayersInfo',err)
		})

		//***getPlayersInfo returns a promise at the end. So now we can use .then
		//in our confirmBattleContaine
	}


}
export default helpers








