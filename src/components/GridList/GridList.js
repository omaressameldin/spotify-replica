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
                        <Link to={`/${props.type}/${item.id}`} className="grid__item" key={i}>
                            <div className="grid__item__image" style={{backgroundImage: `url(${(hasImage)?item.images[0].url : defaultAlbum})`}}/>
                            <h5 className="grid__item__text">{item.name}</h5>
                        </Link>
                    )
                })}
            </div>
    	)
}
export default GridList;
