import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Page from './components/Page/Page'
import Menu from './components/Menu/Menu'
import './index.css';

class App extends React.Component {
    constructor() {
        super();
    }


    render() {
        return ( 
            <div >
                <Router>
                    <div className = "container">
                    <Menu/>                      
                    <Route exact path="/" component={()=><Page search = {false} url="https://api.spotify.com/v1/search?type=artist&q=ad" title="Top Artists" />}/>
                    <Route exact path="/albums" component={()=><Page search = {true} title="search for albums" />}/>
                    </div>
                </Router>               
			</div>
        )
    }
}


ReactDOM.render( <App> </App>, document.getElementById('root'));
