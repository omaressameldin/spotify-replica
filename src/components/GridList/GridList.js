import React from 'react';
import axios from 'axios';
import './gridList.css';
import defaultAlbum from '../../../public/imgs/default2.png'
import {Link} from 'react-router-dom';

class GridList    extends React.Component{
        constructor(props) {
        super(props);
        this.state= {
            list:[]
        }
        
    }
    componentDidUpdate( previousProps, previousState){
           if(previousProps.url !== this.props.url) {
                this.getItems();
            }
    }
    componentDidMount(){
        this.getItems();
    }    
    getItems(){
        console.log("updated")
        if(this.props.url == "")
            return
        axios.get(this.props.url).then((response) =>{
            if(this.props.searchType == "artist")
                this.setState({list: response.data.artists.items});
            else
                this.setState({list: response.data.albums.items});
        },
        (error) => {
            console.log(error);
        }
        );        
    }
        render() {
        console.log("rendered2")
		return(
                    <div className = "grid">
                        
                        {this.state.list.map(function(item, i){
                            let hasImage = item.images.length;
                            return (
                                <Link to="/" className="grid__item" key={i}>
                                <div className="album" style={{backgroundImage: `url(${(hasImage)?item.images[0].url : defaultAlbum})`}}></div>
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