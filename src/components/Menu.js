import React from 'react';
import {Link} from 'react-router-dom';
function Menu(){
	return(
		<ul>
			<li><Link to="/">home</Link></li>
			<li><Link to="/about">About</Link></li>
		</ul>  
	)
}

export default Menu;