var React = require ('react')
var ReactDOM= require ('react-dom')
import Home from './components/Home'
require ('./index.css')

class App extends React.Component{
    render(){
        return(
            <div>
                <Home/>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)