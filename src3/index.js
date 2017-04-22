import React from 'react';
import ReactDOM from 'react-dom';

import Contacts from './components/Contacts';

import users, {users2} from './data';

class App extends React.Component{
	render(){
		return(
			<div>
				<Contacts users={users}></Contacts>
				<Contacts users={users}></Contacts>
			</div>
		)
	}
}

ReactDOM.render(<App></App>, document.getElementById('root'))