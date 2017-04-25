import React from 'react';
import {Link} from 'react-router-dom';
import './menu.css';
function Menu(){
	return(
		<aside className = "sidebar">
		<div className="menuWrapper">
		<img src = "../../../public/imgs/logo.png" className = "logo"></img>
		<ul className = "navigationMenu">
			<li className = "navigationMenu__item"><Link class = "navigationMenu__item__link" to="/">home</Link></li>
			<li className = "navigationMenu__item"><Link to="/about">Albuns</Link></li>
			<li className = "navigationMenu__item"><Link to="/about">Artists</Link></li>
			
		</ul>
		</div>
		<a className = "loggedIn">Omar Essam</a>
		</aside>  
	)
}

export default Menu;