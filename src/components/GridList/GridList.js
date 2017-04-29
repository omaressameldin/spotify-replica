import React from 'react';
import axios from 'axios';
import './gridList.css';
import {Link} from 'react-router-dom';

class GridList    extends React.Component{
        constructor(props) {
        super(props);
        this.state= {
            list:[]
        }
    }
    componentDidMount(){
        axios.get(this.props.url).then((response) =>{
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
                    <div className = "grid">
                        
                        {this.state.list.map(function(item, i){
                            let hasImage = item.images;
                            return (
                                <Link to="/" className="grid__item" key={i}>
                                <div className="album" style={{backgroundImage: `url(${(hasImage)?item.images[0].url : ''})`}}></div>
                                <h5 className="songName">{item.name}</h5>                            
                                {/*<img src={(hasImage)?item.images[0].url : ''}/>*/}
                                </Link>
                                )
                        })}
                    </div>
		)
    }
}
export default GridList;