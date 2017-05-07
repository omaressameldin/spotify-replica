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
                        <Route exact path="/" component={Page} />
                        <Route exact path="/:type/:value" component={(match) => <Page params={match.match.params}/>}/>
                    </div>
                </Router>
            </div>
        )
    }
}


ReactDOM.render( <App> </App>, document.getElementById('root'));
