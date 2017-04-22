import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css';
import MusicList from './components/MusicList'
import Menu from './components/Menu'
class App extends React.Component {
    constructor() {
        super();
    }


    render() {
        return ( 
            <div>
                <Router>
                    <div>
                    <Menu/>                      
                    <hr/>
                    <Route exact path="/" component={MusicList}/>
                    <Route path="/about" component={MusicList}/>
                    </div>
                </Router>               
			</div>
        )
    }
}


ReactDOM.render( <App> </App>, document.getElementById('root'));
