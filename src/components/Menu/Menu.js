import React from 'react';
import {Link} from 'react-router-dom';
import './menu.css';
import logo from '../../../public/imgs/logo.png'
import FontAwesome from 'react-fontawesome';
class Menu extends React.Component{
    constructor() {
        super();
        this.state= {
            active:''
        }
    }
    addClasses(active){
    	return 'navigationMenu__item__link '+((active===this.state.active) ?'active':'');
    }
    setActive(active){
    	this.setState({active:active})
    }
	render(){
    	return(
    		<aside className = "sidebar">
    		<div className="menuWrapper">
    		<img src = {logo} className = "logo"></img>
    		<ul className = "navigationMenu">
    			<li className = "navigationMenu__item" onClick={this.setActive.bind(this,'')} ><Link className = {this.addClasses('')}  to="/">Home</Link></li>
    			<li className = "navigationMenu__item" onClick={this.setActive.bind(this,'albums')} ><Link className = {this.addClasses('albums')} to="/search/album">Albums</Link></li>
    			<li className = "navigationMenu__item" onClick={this.setActive.bind(this,'artists')}><Link className = {this.addClasses('artists')} to="/search/artist">Artists</Link></li>
    		</ul>
    		</div>
    		<img src = {logo} className = "logo mobile"></img>
    		<ul className = "navigationMenu mobile">
    			<li className = "navigationMenu__item" onClick={this.setActive.bind(this,'')} ><Link className = {this.addClasses('')}  to="/">Home</Link></li>
    			<li className = "navigationMenu__item" onClick={this.setActive.bind(this,'albums')} ><Link className = {this.addClasses('albums')} to="/search/album">Albums</Link></li>
    			<li className = "navigationMenu__item" onClick={this.setActive.bind(this,'artists')}><Link className = {this.addClasses('artists')} to="/search/artist">Artists</Link></li>
    		</ul>
    		<a className = "loggedIn"> <FontAwesome name = "user" /> Omar Essam</a>
    		</aside>
    	)
	}

}

export default Menu;
