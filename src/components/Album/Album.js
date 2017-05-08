import React from 'react';
import axios from 'axios';
import './album.css';
import {Link} from 'react-router-dom';
import defaultImage from '../../../public/imgs/default2.png'

const Album = (props) => {
        let image = props.album.images.length > 0? props.album.images[0].url : defaultImage;
        return(
            <div className = 'album-container'>
                <div className="album">
                    <div className="album__image" style={{backgroundImage: `url(${image})`}}/>                    
                    <h1 className = "album__title">{props.album.name}</h1>
                    <h3 className = "album__artist">{props.album.artists[0].name}</h3>
                    <h3 className = "album__tracks">{props.album.tracks.items.length + " trakcs"}</h3>                    
                    <Link to={`/artists/${props.album.artists[0].id}`} className="btn btn-green">Artist Profile</Link>
                </div>
            </div>
        )
}
export default Album;
