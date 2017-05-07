import React from 'react';
import axios from 'axios';
import './gridList.css';
import defaultAlbum from '../../../public/imgs/default2.png'
import {Link} from 'react-router-dom';

const GridList = (props) => {

    return (
                    <div className = "grid">
                        {props.list.map(function(item, i){
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
export default GridList;
