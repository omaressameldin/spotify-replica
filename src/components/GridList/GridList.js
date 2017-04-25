import React from 'react';
import axios from 'axios';
import './gridList.css';
class MusicList extends React.Component{
        constructor() {
        super();
        this.state= {
            list:[{name:"omar hassan"}]
        }
    }
    componentDidMount(){
        axios.get('https://api.spotify.com/v1/search?type=artist&q=ad').then((response) =>{
            console.log(response.data)
           this.setState({list: response.data.artists.items});
        },
        (error) => {
            console.log(error);
        }
        );
    }
        render() {
		return(
                <main className = "main">
				<ul className="grid">
					{this.state.list.map(function(item, i){
                        let hasImage = item.images;
						return (
                            <div key={i}>
                            <h5 >{item.name}</h5>
                            <img src={(hasImage)?item.images[0].url : ''}/>
                            </div>
                            )
					})}
				</ul>
                </main>
		)
    }
}
export default MusicList;