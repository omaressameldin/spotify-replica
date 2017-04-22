import React from 'react';

class Contacts extends React.Component{

	constructor(){
		super()
		this.state = {
			keyword: ""
		}

		// this.searchUsers = this.searchUsers.bind(this);
	}

	searchUsers(event){
		let keyword = event.target.value;
		this.setState({keyword: keyword});
	}

	render(){
		let keyword = this.state.keyword;


		let users = this.props.users.filter((user) => user.name.indexOf(keyword) > -1);

		console.log(users);
		return(
			<div>
				<input type="text" onChange={this.searchUsers.bind(this, event)} placeholder="Search..."/>
				<ul>
					{users.map((user, i) => <li key={i}>{user.name}</li> )}

				</ul>
			</div>
		)
	}
}


export default Contacts;
