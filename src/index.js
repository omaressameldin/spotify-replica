import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Page from './components/Page/Page'
import Player from './components/Player/Player'
import Menu from './components/Menu/Menu'
import './index.css';
import '../public/font-awesome-4.7.0/css/font-awesome.min.css';
import axios from 'axios';
let querystring = require('querystring');
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            changeSong: null
        }
    }

   passChangeSong = (changeSong) =>{
        console.log(changeSong)
        this.setState({changeSong: changeSong})
    }
    renewAccessToken = (cb)=>{
        let config = {
                 headers: {'Content-Type': 'application/www-x-form-urlencoded', "Accept": "application/json"}
        };
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        axios.post("https://accounts.spotify.com/api/token", querystring.stringify({
         "grant_type":"refresh_token",
         "refresh_token": "AQCyKqlZKG49q04MlOFwzVBSwQ2lFxm9zClHc9s_u_KPb24Qs56jc8Rotdg646NDNcnxUgXmJu2qN0GU8wsucY3iRARyICX8oSctFIVcFqr9tuvNBETH0gAa1gV42bYNxPg",
         "client_id": "eec252e2a3344c7d9b414459fb7816c4",
         "client_secret": "aaf35d9192b94f028ef5a3e8ce39e0da"   
        })).then((response) => {
            console.log("omar essam eldin")
            console.log(response)
            cb(response.data.access_token)
        },
        (error) => {
            console.log("omar essam eldin2")
            console.log(error);
        });        
    }


    render() {
        
        return (
            <div>
                <Player   passChangeSong={this.passChangeSong}/>
                <Router>
                    <div className = "container">
                        <Menu/>
                        <Route exact path="/" component={(match) => <Page renewAccessToken = {this.renewAccessToken}/>}/>
                        <Route exact path="/:type/:value" component={(match) => <Page renewAccessToken = {this.renewAccessToken} changeSong = {this.state.changeSong} params={match.match.params}/>}/>
                    </div>
                </Router>  
			</div>

        )
    }
}


ReactDOM.render( <App> </App>, document.getElementById('root'));
