import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import GridList from './components/GridList/GridList'
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
                    <Route exact path="/" component={GridList}/>
                    <Route path="/about" component={GridList}/>
                    </div>
                </Router>               
			</div>
        )
    }
}


ReactDOM.render( <App> </App>, document.getElementById('root'));
